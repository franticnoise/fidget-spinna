import * as THREE from "https://unpkg.com/three@0.163.0/build/three.module.js";

const canvas = document.getElementById("app");
const motionBtn = document.getElementById("motionBtn");
const statusEl = document.getElementById("status");
const isMobile = window.matchMedia("(pointer: coarse)").matches;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

const canVibrate = typeof navigator !== "undefined" && typeof navigator.vibrate === "function";
let hapticsAvailable = canVibrate;

const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 0, 7);

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: !isMobile,
  powerPreference: "high-performance",
  alpha: false,
});

function getRenderPixelRatio() {
  // Higher FPS on phones usually requires avoiding very high DPR rendering.
  if (isMobile) {
    return Math.min(window.devicePixelRatio, 1.1);
  }
  return Math.min(window.devicePixelRatio, 1.75);
}

renderer.setPixelRatio(getRenderPixelRatio());
renderer.setSize(window.innerWidth, window.innerHeight);

const lineMaterial = new THREE.LineBasicMaterial({
  color: 0x76ddff,
  transparent: true,
  opacity: 0.95,
});

const softLineMaterial = new THREE.LineBasicMaterial({
  color: 0x76ddff,
  transparent: true,
  opacity: 0.3,
});

function ring(radius, segments = 64, z = 0, material = lineMaterial) {
  const points = [];
  for (let i = 0; i <= segments; i += 1) {
    const t = (i / segments) * Math.PI * 2;
    points.push(new THREE.Vector3(Math.cos(t) * radius, Math.sin(t) * radius, z));
  }
  const geom = new THREE.BufferGeometry().setFromPoints(points);
  return new THREE.Line(geom, material);
}

function polygon(sides, radius, z = 0, rotation = 0, material = lineMaterial) {
  const points = [];
  for (let i = 0; i <= sides; i += 1) {
    const t = (i / sides) * Math.PI * 2 + rotation;
    points.push(new THREE.Vector3(Math.cos(t) * radius, Math.sin(t) * radius, z));
  }
  const geom = new THREE.BufferGeometry().setFromPoints(points);
  return new THREE.Line(geom, material);
}

function makeFidgetSpinner() {
  const spinner = new THREE.Group();

  spinner.add(ring(0.28, 64, 0.02));
  spinner.add(ring(0.14, 64, 0.03, softLineMaterial));

  const armRadius = 1.05;
  for (let i = 0; i < 3; i += 1) {
    const a = (i / 3) * Math.PI * 2;
    const armCenter = new THREE.Vector3(Math.cos(a) * armRadius, Math.sin(a) * armRadius, 0);

    const arm = polygon(6, 0.5, 0, Math.PI / 6);
    arm.position.copy(armCenter);

    const cap = ring(0.18, 48, 0.015);
    cap.position.copy(armCenter);

    spinner.add(arm);
    spinner.add(cap);

    const bridgePoints = [
      new THREE.Vector3(Math.cos(a) * 0.35, Math.sin(a) * 0.35, 0),
      new THREE.Vector3(Math.cos(a) * 0.65, Math.sin(a) * 0.65, 0),
    ];
    const bridgeGeom = new THREE.BufferGeometry().setFromPoints(bridgePoints);
    spinner.add(new THREE.Line(bridgeGeom, softLineMaterial));
  }

  spinner.add(polygon(3, 1.58, -0.01, Math.PI / 2, softLineMaterial));

  return spinner;
}

const stabilizer = new THREE.Group();
const spinner = makeFidgetSpinner();
stabilizer.add(spinner);
scene.add(stabilizer);

let spinAngle = 0;
let angularVelocity = 0;
const damping = 0.985;
const maxSpin = 50;

let lastPointerAngle = null;
let lastPointerTime = 0;

function pointerAngle(clientX, clientY) {
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight / 2;
  return Math.atan2(clientY - cy, clientX - cx);
}

function normalizeDeltaAngle(delta) {
  if (delta > Math.PI) return delta - Math.PI * 2;
  if (delta < -Math.PI) return delta + Math.PI * 2;
  return delta;
}

window.addEventListener("pointerdown", (event) => {
  lastPointerAngle = pointerAngle(event.clientX, event.clientY);
  lastPointerTime = performance.now();
});

window.addEventListener("pointermove", (event) => {
  if (lastPointerAngle === null) {
    return;
  }

  const now = performance.now();
  const angle = pointerAngle(event.clientX, event.clientY);
  const delta = normalizeDeltaAngle(angle - lastPointerAngle);
  const dt = Math.max((now - lastPointerTime) / 1000, 1 / 120);

  angularVelocity += (delta / dt) * 0.18;
  angularVelocity = THREE.MathUtils.clamp(angularVelocity, -maxSpin, maxSpin);

  lastPointerAngle = angle;
  lastPointerTime = now;
});

window.addEventListener("pointerup", () => {
  lastPointerAngle = null;
});
window.addEventListener("pointercancel", () => {
  lastPointerAngle = null;
});

const zee = new THREE.Vector3(0, 0, 1);
const euler = new THREE.Euler();
const q0 = new THREE.Quaternion();
const q1 = new THREE.Quaternion(-Math.sqrt(0.5), 0, 0, Math.sqrt(0.5));
const deviceQuat = new THREE.Quaternion();
const neutralQuat = new THREE.Quaternion();
const targetQuat = new THREE.Quaternion();
const correctedEuler = new THREE.Euler();
let screenOrientation = 0;

function setObjectQuaternion(outQuat, alpha, beta, gamma, orient) {
  euler.set(beta, alpha, -gamma, "YXZ");
  outQuat.setFromEuler(euler);
  outQuat.multiply(q1);
  outQuat.multiply(q0.setFromAxisAngle(zee, -orient));
}

function handleOrientation(event) {
  const alpha = THREE.MathUtils.degToRad(event.alpha ?? 0);
  const beta = THREE.MathUtils.degToRad(event.beta ?? 0);
  const gamma = THREE.MathUtils.degToRad(event.gamma ?? 0);

  setObjectQuaternion(deviceQuat, alpha, beta, gamma, screenOrientation);
}

function updateScreenOrientation() {
  const angle = window.screen.orientation ? window.screen.orientation.angle : window.orientation || 0;
  screenOrientation = THREE.MathUtils.degToRad(angle);
}

updateScreenOrientation();
window.addEventListener("orientationchange", updateScreenOrientation);

let motionEnabled = false;

async function enableMotion() {
  if (motionEnabled) {
    return;
  }

  if (!window.isSecureContext) {
    statusEl.textContent = "Motion needs HTTPS on iPhone. Use an HTTPS tunnel (ngrok/Cloudflare).";
    return;
  }

  if (typeof DeviceOrientationEvent === "undefined") {
    statusEl.textContent = "Device motion is not supported on this browser.";
    return;
  }

  try {
    if (
      typeof DeviceOrientationEvent.requestPermission === "function"
    ) {
      const perm = await DeviceOrientationEvent.requestPermission();
      if (perm !== "granted") {
        statusEl.textContent = "Motion denied. Check Safari Settings > Motion & Orientation Access.";
        return;
      }
    }

    window.addEventListener("deviceorientation", handleOrientation, true);
    motionEnabled = true;
    neutralQuat.copy(deviceQuat);
    motionBtn.hidden = true;
    statusEl.textContent = "Motion enabled. Swipe around center to spin.";
  } catch (err) {
    statusEl.textContent = "Motion unavailable on this device/browser.";
    console.error(err);
  }
}

motionBtn.addEventListener("click", enableMotion);

let audioCtx = null;
let audioReady = false;
let lastTickTime = 0;

function initAudio() {
  if (audioCtx) {
    return;
  }
  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx) {
    return;
  }
  audioCtx = new Ctx();
}

async function unlockAudio() {
  initAudio();
  if (!audioCtx) {
    return;
  }

  if (audioCtx.state === "suspended") {
    await audioCtx.resume();
  }

  audioReady = audioCtx.state === "running";
}

function playTick(speed) {
  if (!audioReady || !audioCtx) {
    return;
  }

  const t = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  const brightness = THREE.MathUtils.clamp(speed / maxSpin, 0, 1);

  osc.type = "square";
  osc.frequency.setValueAtTime(660 + brightness * 420, t);

  gain.gain.setValueAtTime(0.0001, t);
  gain.gain.exponentialRampToValueAtTime(0.018 + brightness * 0.018, t + 0.002);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.03);

  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start(t);
  osc.stop(t + 0.035);
}

let lastHapticTime = 0;
let prevVelocity = 0;
let lastTickHapticTime = 0;

function pulseHaptic(pattern) {
  if (!hapticsAvailable) {
    return false;
  }
  const result = navigator.vibrate(pattern);
  if (result === false) {
    hapticsAvailable = false;
  }
  return result !== false;
}

function updateHaptics(now) {
  const speed = Math.abs(angularVelocity);
  const accel = angularVelocity - prevVelocity;
  prevVelocity = angularVelocity;

  if (speed < 0.75) {
    return;
  }

  if (accel > 0.08 && now - lastHapticTime > 120) {
    pulseHaptic(10);
    lastHapticTime = now;
    return;
  }

  if (accel < -0.08 && now - lastHapticTime > 120) {
    pulseHaptic([8, 16, 8]);
    lastHapticTime = now;
  }
}

function updateTick(now) {
  const speed = Math.abs(angularVelocity);
  if (speed < 0.8) {
    return;
  }

  const tickInterval = THREE.MathUtils.clamp(220 - speed * 9, 38, 210);
  if (now - lastTickTime > tickInterval) {
    playTick(speed);
    const hapticTickInterval = Math.max(70, tickInterval * 0.9);
    if (now - lastTickHapticTime > hapticTickInterval) {
      pulseHaptic(6);
      lastTickHapticTime = now;
    }
    lastTickTime = now;
  }
}

const clock = new THREE.Clock();
function animate() {
  const dt = Math.min(clock.getDelta(), 1 / 20);
  const now = performance.now();

  spinAngle += angularVelocity * dt;
  angularVelocity *= Math.pow(damping, dt * 60);
  if (Math.abs(angularVelocity) < 0.003) {
    angularVelocity = 0;
  }

  spinner.rotation.z = spinAngle;

  targetQuat.copy(deviceQuat).invert();
  targetQuat.premultiply(neutralQuat);

  correctedEuler.setFromQuaternion(targetQuat, "YXZ");
  correctedEuler.x *= -1;
  targetQuat.setFromEuler(correctedEuler);
  stabilizer.quaternion.slerp(targetQuat, motionEnabled ? 0.12 : 0.03);

  const wobble = THREE.MathUtils.clamp(Math.abs(angularVelocity) / 65, 0, 0.07);
  spinner.rotation.x = Math.sin(now * 0.003) * wobble;
  spinner.rotation.y = Math.cos(now * 0.0026) * wobble;

  updateHaptics(now);
  updateTick(now);

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setPixelRatio(getRenderPixelRatio());
  renderer.setSize(window.innerWidth, window.innerHeight);
});

window.addEventListener("pointerdown", () => {
  unlockAudio().catch(() => {
    statusEl.textContent = "Audio blocked by browser. Keep interacting to enable sound.";
  });

  if (hapticsAvailable) {
    pulseHaptic(12);
  } else if (!canVibrate) {
    statusEl.textContent = "Vibration not available in this browser/device.";
  }
});

motionBtn.addEventListener("click", () => {
  unlockAudio().catch(() => {
    statusEl.textContent = "Audio blocked by browser. Keep interacting to enable sound.";
  });
});
