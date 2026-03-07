import * as THREE from "https://unpkg.com/three@0.163.0/build/three.module.js";

const canvas = document.getElementById("app");
const motionBtn = document.getElementById("motionBtn");
const settingsBtn = document.getElementById("settingsBtn");
const settingsPanel = document.getElementById("settingsPanel");
const fxDock = document.getElementById("fxDock");
const statusEl = document.getElementById("status");
const soundSourceSelect = document.getElementById("soundSourceSelect");
const tempoInput = document.getElementById("tempoInput");
const minArpRateSelect = document.getElementById("minArpRateSelect");
const maxArpRateSelect = document.getElementById("maxArpRateSelect");
const transportToggleBtn = document.getElementById("transportToggleBtn");
const muteToggle = document.getElementById("muteToggle");
const hapticsToggle = document.getElementById("hapticsToggle");
const rootNoteSelect = document.getElementById("rootNoteSelect");
const scaleSelect = document.getElementById("scaleSelect");
const wingCountSlider = document.getElementById("wingCountSlider");
const wingCountValue = document.getElementById("wingCountValue");
const octaveRangeSlider = document.getElementById("octaveRangeSlider");
const octaveRangeValue = document.getElementById("octaveRangeValue");
const baseOctaveSlider = document.getElementById("baseOctaveSlider");
const baseOctaveValue = document.getElementById("baseOctaveValue");
const arpDirectionSelect = document.getElementById("arpDirectionSelect");
const reverbDecaySlider = document.getElementById("reverbDecaySlider");
const reverbDecayValue = document.getElementById("reverbDecayValue");
const envReleaseSlider = document.getElementById("envReleaseSlider");
const envReleaseValue = document.getElementById("envReleaseValue");
const delayTimeSlider = document.getElementById("delayTimeSlider");
const delayTimeValue = document.getElementById("delayTimeValue");
const delayAmountSlider = document.getElementById("delayAmountSlider");
const delayAmountValue = document.getElementById("delayAmountValue");
const stepsSlider = document.getElementById("stepsSlider");
const stepsValue = document.getElementById("stepsValue");
const pitchSemitoneSlider = document.getElementById("pitchSemitoneSlider");
const pitchSemitoneValue = document.getElementById("pitchSemitoneValue");
const isMobile = window.matchMedia("(pointer: coarse)").matches;

let settingsOpen = false;

function setSettingsOpen(open) {
  settingsOpen = open;
  settingsPanel.hidden = !open;
}

settingsBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  setSettingsOpen(!settingsOpen);
});

settingsPanel.addEventListener("pointerdown", (event) => {
  event.stopPropagation();
});

if (fxDock) {
  const blockSpinnerPropagation = (event) => {
    event.stopPropagation();
  };
  fxDock.addEventListener("pointerdown", blockSpinnerPropagation);
  fxDock.addEventListener("pointermove", blockSpinnerPropagation);
  fxDock.addEventListener("pointerup", blockSpinnerPropagation);
  fxDock.addEventListener("pointercancel", blockSpinnerPropagation);
}

window.addEventListener("pointerdown", (event) => {
  if (!settingsOpen) {
    return;
  }

  const target = event.target;
  if (!settingsPanel.contains(target) && target !== settingsBtn) {
    setSettingsOpen(false);
  }
});

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

const canVibrate = typeof navigator !== "undefined" && typeof navigator.vibrate === "function";
let hapticsAvailable = canVibrate;
const capacitorBridge = typeof window !== "undefined" ? window.Capacitor : undefined;
const isNativeCapacitor = !!(capacitorBridge && capacitorBridge.isNativePlatform && capacitorBridge.isNativePlatform());
const nativeHaptics = capacitorBridge && capacitorBridge.Plugins ? capacitorBridge.Plugins.Haptics : null;

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

let wingCount = THREE.MathUtils.clamp(Number(stepsSlider ? stepsSlider.value : wingCountSlider ? wingCountSlider.value : 6), 3, 9);

function getArmRadiusForSteps(stepCount, scaleFactor = 1) {
  const base = stepCount >= 8 ? 1.12 : stepCount >= 6 ? 1.08 : 1.05;
  return base * scaleFactor;
}

function makeFidgetSpinner(stepCount = wingCount, scaleFactor = 1) {
  const spinner = new THREE.Group();

  spinner.add(ring(0.28 * scaleFactor, 64, 0.02));
  spinner.add(ring(0.14 * scaleFactor, 64, 0.03, softLineMaterial));

  const armRadius = getArmRadiusForSteps(stepCount, scaleFactor);
  for (let i = 0; i < stepCount; i += 1) {
    const a = (i / stepCount) * Math.PI * 2;
    const armCenter = new THREE.Vector3(Math.cos(a) * armRadius, Math.sin(a) * armRadius, 0);

    const arm = polygon(6, 0.5 * scaleFactor, 0, Math.PI / 6);
    arm.position.copy(armCenter);

    const cap = ring(0.18 * scaleFactor, 48, 0.015);
    cap.position.copy(armCenter);

    spinner.add(arm);
    spinner.add(cap);

    const bridgePoints = [
      new THREE.Vector3(Math.cos(a) * 0.35 * scaleFactor, Math.sin(a) * 0.35 * scaleFactor, 0),
      new THREE.Vector3(Math.cos(a) * 0.65 * scaleFactor, Math.sin(a) * 0.65 * scaleFactor, 0),
    ];
    const bridgeGeom = new THREE.BufferGeometry().setFromPoints(bridgePoints);
    spinner.add(new THREE.Line(bridgeGeom, softLineMaterial));
  }

  spinner.add(polygon(stepCount, 1.58 * scaleFactor, -0.01, Math.PI / 2, softLineMaterial));

  return spinner;
}

const stabilizer = new THREE.Group();
const mainSpinnerX = 0;
const bassSpinnerX = 2.65;
const bassScaleFactor = 0.72;

function getBassStepCount() {
  // Map main steps to a smaller bass lane: 2..5 steps.
  if (wingCount <= 5) return 2;
  if (wingCount === 6) return 3;
  if (wingCount <= 8) return 4;
  return 5;
}

function makePulleyVisual() {
  const group = new THREE.Group();
  const mainR = getArmRadiusForSteps(wingCount, 1);
  const bassR = getArmRadiusForSteps(getBassStepCount(), bassScaleFactor);

  const mainRing = ring(mainR, 64, -0.02, softLineMaterial);
  mainRing.position.set(mainSpinnerX, 0, 0);
  const bassRing = ring(bassR, 64, -0.02, softLineMaterial);
  bassRing.position.set(bassSpinnerX, 0, 0);
  group.add(mainRing);
  group.add(bassRing);

  const topBelt = [
    new THREE.Vector3(mainSpinnerX, mainR, -0.02),
    new THREE.Vector3(bassSpinnerX, bassR, -0.02),
  ];
  const bottomBelt = [
    new THREE.Vector3(mainSpinnerX, -mainR, -0.02),
    new THREE.Vector3(bassSpinnerX, -bassR, -0.02),
  ];
  group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(topBelt), softLineMaterial));
  group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(bottomBelt), softLineMaterial));

  return group;
}

let spinner = makeFidgetSpinner(wingCount, 1);
let bassSpinner = makeFidgetSpinner(getBassStepCount(), bassScaleFactor);
let pulleyVisual = makePulleyVisual();
spinner.position.x = mainSpinnerX;
bassSpinner.position.x = bassSpinnerX;
stabilizer.add(pulleyVisual);
stabilizer.add(spinner);
stabilizer.add(bassSpinner);
scene.add(stabilizer);

let spinAngle = 0;
let angularVelocity = 0;
let gestureAngularVelocity = 0;
let spinDirection = 1;
const damping = 0.992;
const maxSpin = 220;
const spinInputGain = 0.34;

let spinPointerId = null;
let shiftPointerId = null;
let lastSpinPointerAngle = null;
let lastSpinPointerTime = 0;
let isCenterHoldShift = false;
let shiftCarryY = 0;
let lastShiftY = 0;
let shiftScaleNotes = [];
let shiftScaleIndex = 0;
let shiftDragOffsetY = 0;
let rootOctaveOffset = 0;
let lastShiftPointerActivity = 0;
let lastSpinPointerActivity = 0;

const centerGrabRadiusPx = 72;
const shiftStepPx = 20;
const stalePointerMs = 900;
const spinnerScreenCenter = new THREE.Vector3();

function getSpinnerScreenCenter() {
  spinnerScreenCenter.set(0, spinner.position.y, 0);
  spinnerScreenCenter.project(camera);

  return {
    x: (spinnerScreenCenter.x * 0.5 + 0.5) * window.innerWidth,
    y: (-spinnerScreenCenter.y * 0.5 + 0.5) * window.innerHeight,
  };
}

function pointerAngle(clientX, clientY) {
  const center = getSpinnerScreenCenter();
  const cx = center.x;
  const cy = center.y;
  return Math.atan2(clientY - cy, clientX - cx);
}

function normalizeDeltaAngle(delta) {
  if (delta > Math.PI) return delta - Math.PI * 2;
  if (delta < -Math.PI) return delta + Math.PI * 2;
  return delta;
}

function beginCenterShift(event) {
  isCenterHoldShift = true;
  lastShiftPointerActivity = performance.now();
  shiftCarryY = 0;
  lastShiftY = event.clientY;
  shiftDragOffsetY = 0;
  shiftScaleNotes = buildScaleMidiPool(Math.max(2, octaveRange));
  shiftScaleIndex = findNearestMidiIndex(shiftScaleNotes, currentRootMidi);
  statusEl.textContent = "Center hold active: drag up/down to shift note and octave.";
}

function findNearestMidiIndex(pool, midi) {
  if (!pool.length) {
    return 0;
  }

  let bestIdx = 0;
  let bestDist = Math.abs(pool[0] - midi);
  for (let i = 1; i < pool.length; i += 1) {
    const d = Math.abs(pool[i] - midi);
    if (d < bestDist) {
      bestDist = d;
      bestIdx = i;
    }
  }
  return bestIdx;
}

function applyCenterShiftSteps(steps) {
  if (!shiftScaleNotes.length || steps === 0) {
    return;
  }

  shiftScaleIndex = THREE.MathUtils.clamp(shiftScaleIndex + steps, 0, shiftScaleNotes.length - 1);
  currentRootMidi = shiftScaleNotes[shiftScaleIndex];
  syncRootControlsFromMidi();
  baseOctaveShift = THREE.MathUtils.clamp(rootOctaveOffset, -4, 4);
  if (baseOctaveSlider) {
    baseOctaveSlider.value = String(baseOctaveShift);
  }
  if (baseOctaveValue) {
    baseOctaveValue.textContent = baseOctaveShift >= 0 ? `+${baseOctaveShift}` : `${baseOctaveShift}`;
  }
  resetArpSequence();
  refreshWingAssignments();
}

function updateShiftDragOffset(clientY) {
  const centerY = getSpinnerScreenCenter().y;
  const normalized = THREE.MathUtils.clamp((centerY - clientY) / 220, -1.2, 1.2);
  shiftDragOffsetY = normalized * 0.28;
}

function resetShiftPointer() {
  shiftPointerId = null;
  lastShiftPointerActivity = 0;
  if (isCenterHoldShift) {
    isCenterHoldShift = false;
    statusEl.textContent = `Shift set: ${rootNoteSelect.value} ${baseOctaveShift >= 0 ? `+${baseOctaveShift}` : baseOctaveShift}`;
  }
  shiftDragOffsetY = 0;
}

function resetSpinPointer() {
  spinPointerId = null;
  lastSpinPointerActivity = 0;
  lastSpinPointerAngle = null;
}

function forceReleasePointers() {
  shiftPointerId = null;
  spinPointerId = null;
  isCenterHoldShift = false;
  shiftCarryY = 0;
  shiftDragOffsetY = 0;
  lastSpinPointerAngle = null;
  lastShiftPointerActivity = 0;
  lastSpinPointerActivity = 0;
}

function recoverStalePointers() {
  const now = performance.now();

  if (shiftPointerId !== null && now - lastShiftPointerActivity > stalePointerMs) {
    forceReleasePointers();
    statusEl.textContent = "Recovered touch control. Continue dragging.";
    return;
  }

  if (spinPointerId !== null && now - lastSpinPointerActivity > stalePointerMs) {
    forceReleasePointers();
    statusEl.textContent = "Recovered touch control. Continue dragging.";
  }
}

window.addEventListener("pointerdown", (event) => {
  recoverStalePointers();

  if (fxDock && event.target instanceof Node && fxDock.contains(event.target)) {
    return;
  }

  const center = getSpinnerScreenCenter();
  const centerX = center.x;
  const centerY = center.y;
  const dist = Math.hypot(event.clientX - centerX, event.clientY - centerY);

  if (dist <= centerGrabRadiusPx && shiftPointerId === null) {
    shiftPointerId = event.pointerId;
    beginCenterShift(event);
    return;
  }

  if (dist > centerGrabRadiusPx && spinPointerId === null) {
    spinPointerId = event.pointerId;
    lastSpinPointerAngle = pointerAngle(event.clientX, event.clientY);
    lastSpinPointerTime = performance.now();
    lastSpinPointerActivity = lastSpinPointerTime;
  }
});

window.addEventListener("pointermove", (event) => {
  if (event.pointerId === shiftPointerId && isCenterHoldShift) {
    lastShiftPointerActivity = performance.now();
    const dy = event.clientY - lastShiftY;
    lastShiftY = event.clientY;
    shiftCarryY += dy;
    updateShiftDragOffset(event.clientY);

    while (shiftCarryY <= -shiftStepPx) {
      applyCenterShiftSteps(1);
      shiftCarryY += shiftStepPx;
    }

    while (shiftCarryY >= shiftStepPx) {
      applyCenterShiftSteps(-1);
      shiftCarryY -= shiftStepPx;
    }
  }

  if (event.pointerId !== spinPointerId || lastSpinPointerAngle === null) {
    return;
  }

  const now = performance.now();
  lastSpinPointerActivity = now;
  const angle = pointerAngle(event.clientX, event.clientY);
  const delta = normalizeDeltaAngle(angle - lastSpinPointerAngle);
  const dt = Math.max((now - lastSpinPointerTime) / 1000, 1 / 120);

  // Apply softer input response to preserve low/mid-speed control.
  const speedNorm = THREE.MathUtils.clamp(Math.abs(gestureAngularVelocity) / maxSpin, 0, 1);
  const responseScale = 1 - speedNorm * 0.52;
  gestureAngularVelocity += (delta / dt) * spinInputGain * responseScale;
  gestureAngularVelocity = THREE.MathUtils.clamp(gestureAngularVelocity, -maxSpin, maxSpin);
  if (Math.abs(gestureAngularVelocity) > 0.05) {
    spinDirection = gestureAngularVelocity < 0 ? -1 : 1;
  }

  lastSpinPointerAngle = angle;
  lastSpinPointerTime = now;
});

window.addEventListener("pointerup", (event) => {
  if (event.pointerId === shiftPointerId) {
    resetShiftPointer();
  }

  if (event.pointerId === spinPointerId) {
    resetSpinPointer();
  }
});

window.addEventListener("pointercancel", (event) => {
  if (event.pointerId === shiftPointerId) {
    resetShiftPointer();
  }

  if (event.pointerId === spinPointerId) {
    resetSpinPointer();
  }
});

window.addEventListener("blur", forceReleasePointers);
window.addEventListener("pagehide", forceReleasePointers);
window.addEventListener("touchcancel", forceReleasePointers, { passive: true });
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState !== "visible") {
    forceReleasePointers();
  }
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
let motionFxBetaNorm = 0;
let motionFxGammaNorm = 0;

function applyMotionFxMapping() {
  if (!motionEnabled) {
    return;
  }

  const targetDelayTime = THREE.MathUtils.mapLinear(motionFxGammaNorm, -1, 1, 0.008, 0.06);
  const targetDelayAmount = THREE.MathUtils.mapLinear(motionFxBetaNorm, -1, 1, 0, 0.9);
  const tiltMagnitude = Math.hypot(motionFxBetaNorm, motionFxGammaNorm);
  const targetRelease = THREE.MathUtils.mapLinear(
    THREE.MathUtils.clamp(tiltMagnitude, 0, 1.2),
    0,
    1.2,
    0.03,
    1.2,
  );

  // Smooth orientation-to-audio modulation to avoid jitter.
  delayTimeSeconds = THREE.MathUtils.lerp(delayTimeSeconds, targetDelayTime, 0.2);
  delayAmount = THREE.MathUtils.lerp(delayAmount, targetDelayAmount, 0.2);
  envelopeReleaseSeconds = THREE.MathUtils.lerp(envelopeReleaseSeconds, targetRelease, 0.2);

  if (delayTimeSlider) {
    delayTimeSlider.value = delayTimeSeconds.toFixed(3);
  }
  if (delayAmountSlider) {
    delayAmountSlider.value = delayAmount.toFixed(2);
  }
  if (envReleaseSlider) {
    envReleaseSlider.value = envelopeReleaseSeconds.toFixed(2);
  }

  if (delayNode && audioCtx) {
    delayNode.delayTime.setTargetAtTime(delayTimeSeconds, audioCtx.currentTime, 0.02);
  }
  if (delayFeedbackGain && delaySendGain && audioCtx) {
    delayFeedbackGain.gain.setTargetAtTime(delayAmount, audioCtx.currentTime, 0.02);
    delaySendGain.gain.setTargetAtTime(0.1 + delayAmount * 0.55, audioCtx.currentTime, 0.02);
  }

  updateFxLabels();
}

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

  const betaDeg = THREE.MathUtils.clamp(event.beta ?? 0, -90, 90);
  const gammaDeg = THREE.MathUtils.clamp(event.gamma ?? 0, -90, 90);
  motionFxBetaNorm = betaDeg / 90;
  motionFxGammaNorm = gammaDeg / 90;

  setObjectQuaternion(deviceQuat, alpha, beta, gamma, screenOrientation);
  applyMotionFxMapping();
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
    statusEl.textContent = "Motion enabled: tilt controls delay time, delay amount, and release.";
  } catch (err) {
    statusEl.textContent = "Motion unavailable on this device/browser.";
    console.error(err);
  }
}

motionBtn.addEventListener("click", enableMotion);

let audioCtx = null;
let audioReady = false;
let soundSourceMode = soundSourceSelect ? soundSourceSelect.value : "arp";
let muted = false;
let noHaptics = false;
let reverbDecaySeconds = THREE.MathUtils.clamp(Number(reverbDecaySlider ? reverbDecaySlider.value : 3.1), 0.2, 10);
let envelopeReleaseSeconds = THREE.MathUtils.clamp(Number(envReleaseSlider ? envReleaseSlider.value : 0.31), 0.03, 1.2);
let delayTimeSeconds = THREE.MathUtils.clamp(Number(delayTimeSlider ? delayTimeSlider.value : 0.06), 0.008, 0.06);
let delayAmount = THREE.MathUtils.clamp(Number(delayAmountSlider ? delayAmountSlider.value : 0.62), 0, 0.9);
let arpStep = 0;
let arpDirectionSign = 1;
let arpDirectionMode = arpDirectionSelect ? arpDirectionSelect.value : "upOnly";
let masterDryGain = null;
let reverbSendGain = null;
let reverbConvolver = null;
let reverbWetGain = null;
let delaySendGain = null;
let delayNode = null;
let delayFeedbackGain = null;
let delayWetGain = null;
let tempoBpm = THREE.MathUtils.clamp(Number(tempoInput ? tempoInput.value : 120), 30, 280);
let minArpRate = THREE.MathUtils.clamp(Number(minArpRateSelect ? minArpRateSelect.value : 8), 1, 256);
let maxArpRate = THREE.MathUtils.clamp(Number(maxArpRateSelect ? maxArpRateSelect.value : 128), 1, 256);
let transportPlaying = true;
let currentArpRateExp = Math.log2(Math.max(1, Math.min(minArpRate, maxArpRate)));
let arpClockAccumulator = 0;
let bassTickCounter = 0;

const ROOT_NOTE_TO_SEMITONE = {
  C: 0,
  "C#": 1,
  D: 2,
  "D#": 3,
  E: 4,
  F: 5,
  "F#": 6,
  G: 7,
  "G#": 8,
  A: 9,
  "A#": 10,
  B: 11,
};

const NOTE_NAMES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

const SCALE_INTERVALS = {
  minor: [0, 2, 3, 5, 7, 8, 10],
  major: [0, 2, 4, 5, 7, 9, 11],
  harmonicMinor: [0, 2, 3, 5, 7, 8, 11],
  dorian: [0, 2, 3, 5, 7, 9, 10],
  minorPentatonic: [0, 3, 5, 7, 10],
};

const BASE_OCTAVE_MIDI = 48; // C3 base, root note transposed from this.
let octaveRange = THREE.MathUtils.clamp(Number(octaveRangeSlider ? octaveRangeSlider.value : 2), 0, 4);
let baseOctaveShift = THREE.MathUtils.clamp(Number(baseOctaveSlider ? baseOctaveSlider.value : 0), -4, 4);
let currentRootMidi = BASE_OCTAVE_MIDI + ROOT_NOTE_TO_SEMITONE[rootNoteSelect.value] + baseOctaveShift * 12;
let wingAssignedMidis = [];
let wingAssignedLabels = [];
let bassAssignedMidis = [];
let bassStepIndex = 0;
let rootNoteSprite = null;
let wingNoteSprites = [];
let pitchSemitoneOffset = THREE.MathUtils.clamp(Number(pitchSemitoneSlider ? pitchSemitoneSlider.value : 0), -24, 24);

function getDisplayedRootMidi() {
  return currentRootMidi + pitchSemitoneOffset;
}

function midiToFreq(midi) {
  return 440 * Math.pow(2, (midi - 69) / 12);
}

function semitoneToNoteName(semitone) {
  const normalized = ((semitone % 12) + 12) % 12;
  return NOTE_NAMES[normalized];
}

function midiToNoteNameWithOctave(midi) {
  const noteName = semitoneToNoteName(midi);
  const octave = Math.floor(midi / 12) - 1;
  return `${noteName}${octave}`;
}

function makeNoteSprite(text, isCenter = false) {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 128;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return null;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = isCenter ? "700 56px Avenir Next" : "700 42px Avenir Next";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.lineWidth = isCenter ? 10 : 8;
  ctx.strokeStyle = "rgba(0,0,0,0.72)";
  ctx.fillStyle = "#bff3ff";
  ctx.strokeText(text, canvas.width / 2, canvas.height / 2);
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  const material = new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false });
  const sprite = new THREE.Sprite(material);
  const scaleX = isCenter ? 0.52 : 0.42;
  const scaleY = isCenter ? 0.26 : 0.2;
  sprite.scale.set(scaleX, scaleY, 1);
  sprite.renderOrder = 50;
  return sprite;
}

function clearNoteSprites() {
  if (rootNoteSprite) {
    stabilizer.remove(rootNoteSprite);
    rootNoteSprite.material.map.dispose();
    rootNoteSprite.material.dispose();
    rootNoteSprite = null;
  }

  for (let i = 0; i < wingNoteSprites.length; i += 1) {
    const sprite = wingNoteSprites[i];
    spinner.remove(sprite);
    sprite.material.map.dispose();
    sprite.material.dispose();
  }
  wingNoteSprites = [];
}

function buildWingNotesFromScale() {
  const scale = SCALE_INTERVALS[scaleSelect.value] || SCALE_INTERVALS.minor;
  const notes = [];
  const displayedRootMidi = getDisplayedRootMidi();

  for (let i = 0; i < wingCount; i += 1) {
    const idx = i % scale.length;
    const octaveLift = Math.floor(i / scale.length) * 12;
    notes.push(displayedRootMidi + scale[idx] + octaveLift);
  }

  return notes;
}

function buildBassNotesFromScale() {
  const scale = SCALE_INTERVALS[scaleSelect.value] || SCALE_INTERVALS.minor;
  const bassStepCount = getBassStepCount();
  const notes = [];
  const displayedRootMidi = getDisplayedRootMidi();

  for (let i = 0; i < bassStepCount; i += 1) {
    const idx = i % scale.length;
    const octaveLift = Math.floor(i / scale.length) * 12;
    notes.push(displayedRootMidi - 24 + scale[idx] + octaveLift);
  }

  return notes;
}

function rebuildNoteSprites() {
  clearNoteSprites();

  rootNoteSprite = makeNoteSprite(midiToNoteNameWithOctave(getDisplayedRootMidi()), true);
  if (rootNoteSprite) {
    rootNoteSprite.position.set(mainSpinnerX, spinner.position.y, 0.08);
    stabilizer.add(rootNoteSprite);
  }

  const armRadius = getArmRadiusForSteps(wingCount, 1);
  for (let i = 0; i < wingCount; i += 1) {
    const angle = (i / wingCount) * Math.PI * 2;
    const sprite = makeNoteSprite(wingAssignedLabels[i] || "-");
    if (!sprite) {
      continue;
    }
    sprite.position.set(mainSpinnerX + Math.cos(angle) * armRadius, Math.sin(angle) * armRadius, 0.08);
    wingNoteSprites.push(sprite);
    spinner.add(sprite);
  }
}

function refreshWingAssignments() {
  wingAssignedMidis = buildWingNotesFromScale();
  wingAssignedLabels = wingAssignedMidis.map((midi) => midiToNoteNameWithOctave(midi));
  bassAssignedMidis = buildBassNotesFromScale();
  bassStepIndex = 0;
  rebuildNoteSprites();
}

function rebuildSpinnerGeometry() {
  const y = spinner.position.y;
  clearNoteSprites();
  stabilizer.remove(pulleyVisual);
  stabilizer.remove(spinner);
  stabilizer.remove(bassSpinner);

  spinner = makeFidgetSpinner(wingCount, 1);
  bassSpinner = makeFidgetSpinner(getBassStepCount(), bassScaleFactor);
  pulleyVisual = makePulleyVisual();

  spinner.position.x = mainSpinnerX;
  spinner.position.y = y;
  bassSpinner.position.x = bassSpinnerX;
  bassSpinner.position.y = y;

  stabilizer.add(pulleyVisual);
  stabilizer.add(spinner);
  stabilizer.add(bassSpinner);
  rebuildNoteSprites();
}

function getScalePitchClasses(rootNote, scaleName) {
  const tonic = ROOT_NOTE_TO_SEMITONE[rootNote];
  const scale = SCALE_INTERVALS[scaleName] || SCALE_INTERVALS.minor;
  return scale.map((interval) => (tonic + interval) % 12);
}

function syncRootControlsFromMidi() {
  const noteName = semitoneToNoteName(currentRootMidi);
  rootNoteSelect.value = noteName;
  const baseMidiForNote = BASE_OCTAVE_MIDI + ROOT_NOTE_TO_SEMITONE[noteName];
  rootOctaveOffset = Math.round((currentRootMidi - baseMidiForNote) / 12);
}

function buildScaleMidiPool(range) {
  const scale = SCALE_INTERVALS[scaleSelect.value] || SCALE_INTERVALS.minor;
  const notes = [];

  for (let octave = -range; octave <= range; octave += 1) {
    const octaveOffset = octave * 12;
    for (let i = 0; i < scale.length; i += 1) {
      notes.push(currentRootMidi + scale[i] + octaveOffset);
    }
  }

  notes.sort((a, b) => a - b);
  return notes;
}

function resetArpSequence() {
  arpStep = 0;
  arpDirectionSign = arpDirectionMode === "downUp" || arpDirectionMode === "downOnly" ? -1 : 1;
  bassStepIndex = 0;
}

function getQuarterNoteSeconds() {
  return 60 / Math.max(30, tempoBpm);
}

function getIntervalSecondsFromRate(rateDivisor) {
  return getQuarterNoteSeconds() * (4 / Math.max(1, rateDivisor));
}

function getCurrentArpIntervalSeconds(speedNorm, dt) {
  const minRate = Math.max(1, Math.min(minArpRate, maxArpRate));
  const maxRate = Math.max(1, Math.max(minArpRate, maxArpRate));
  const minExp = Math.log2(minRate);
  const maxExp = Math.log2(maxRate);
  const targetExp = THREE.MathUtils.mapLinear(speedNorm, 0, 1, minExp, maxExp);
  const smooth = 1 - Math.exp(-dt * 5.5);
  currentArpRateExp = THREE.MathUtils.lerp(currentArpRateExp, targetExp, smooth);
  const rate = Math.pow(2, currentArpRateExp);
  return getIntervalSecondsFromRate(rate);
}

function getZoneBucket(offset, range) {
  if (range <= 0) {
    return 2;
  }

  const normalized = (THREE.MathUtils.clamp(offset, -range, range) + range) / (range * 2);
  return THREE.MathUtils.clamp(Math.round(normalized * 4), 0, 4);
}

function buildZoneArpNotes() {
  const scale = SCALE_INTERVALS[scaleSelect.value] || SCALE_INTERVALS.minor;
  if (!scale.length) {
    return [currentRootMidi];
  }

  const zoneBucket = getZoneBucket(rootOctaveOffset, octaveRange);
  const inversionByBucket = [0, 1, 2, 1, 0];
  const inversion = inversionByBucket[zoneBucket] % scale.length;
  const notes = [];

  for (let i = 0; i < scale.length; i += 1) {
    const wrappedIdx = (i + inversion) % scale.length;
    const wrappedOctave = i + inversion >= scale.length ? 12 : 0;
    notes.push(currentRootMidi + scale[wrappedIdx] + wrappedOctave);
  }

  notes.push(notes[0] + 12);
  return notes;
}

function getSoftToneFreq(speed, invertOrder = false) {
  const speedNorm = THREE.MathUtils.clamp(speed / maxSpin, 0, 1);
  const pool = wingAssignedMidis;
  if (!pool.length) {
    return midiToFreq(currentRootMidi);
  }

  let idx = 0;
  const stepSize = speedNorm > 0.9 ? 2 : 1;

  if (arpDirectionMode === "random") {
    idx = Math.floor(Math.random() * pool.length);
  } else {
    idx = ((arpStep % pool.length) + pool.length) % pool.length;
    arpStep += arpDirectionSign * stepSize;

    if (arpDirectionMode === "upDown" || arpDirectionMode === "downUp") {
      if (arpStep >= pool.length) {
        arpStep = pool.length > 1 ? pool.length - 2 : 0;
        arpDirectionSign = -1;
      } else if (arpStep < 0) {
        arpStep = pool.length > 1 ? 1 : 0;
        arpDirectionSign = 1;
      }
    } else {
      arpStep = ((arpStep % pool.length) + pool.length) % pool.length;
    }
  }

  const finalIdx = invertOrder ? pool.length - 1 - idx : idx;
  const noteMidi = pool[finalIdx];
  return midiToFreq(noteMidi);
}

if (soundSourceSelect) {
  soundSourceSelect.addEventListener("change", () => {
    soundSourceMode = soundSourceSelect.value;
    const label = soundSourceSelect.options[soundSourceSelect.selectedIndex].text;
    statusEl.textContent = `Sound source: ${label}.`;
  });
}

if (wingCountSlider && wingCountValue) {
  const updateWingCountUi = () => {
    wingCount = THREE.MathUtils.clamp(Number(wingCountSlider.value), 3, 9);
    wingCountValue.textContent = String(wingCount);
    if (stepsSlider) {
      stepsSlider.value = String(wingCount);
    }
    if (stepsValue) {
      stepsValue.textContent = String(wingCount);
    }
    resetArpSequence();
    rebuildSpinnerGeometry();
    refreshWingAssignments();
  };

  wingCountSlider.addEventListener("input", updateWingCountUi);
  updateWingCountUi();
} else {
  refreshWingAssignments();
}

if (stepsSlider && stepsValue) {
  const updateStepsUi = () => {
    wingCount = THREE.MathUtils.clamp(Number(stepsSlider.value), 3, 9);
    stepsValue.textContent = String(wingCount);
    if (wingCountSlider) {
      wingCountSlider.value = String(wingCount);
    }
    if (wingCountValue) {
      wingCountValue.textContent = String(wingCount);
    }
    resetArpSequence();
    rebuildSpinnerGeometry();
    refreshWingAssignments();
  };

  stepsSlider.addEventListener("input", updateStepsUi);
  updateStepsUi();
}

if (pitchSemitoneSlider && pitchSemitoneValue) {
  const updatePitchSemitoneUi = () => {
    pitchSemitoneOffset = THREE.MathUtils.clamp(Number(pitchSemitoneSlider.value), -24, 24);
    pitchSemitoneValue.textContent = `${pitchSemitoneOffset >= 0 ? "+" : ""}${pitchSemitoneOffset} st`;
    resetArpSequence();
    refreshWingAssignments();
  };

  pitchSemitoneSlider.addEventListener("input", updatePitchSemitoneUi);
  updatePitchSemitoneUi();
}

muteToggle.addEventListener("change", () => {
  muted = muteToggle.checked;
  statusEl.textContent = muted ? "Sound muted." : "Sound on.";
});

hapticsToggle.addEventListener("change", () => {
  noHaptics = hapticsToggle.checked;
  statusEl.textContent = noHaptics ? "Haptics off." : "Haptics on.";
});

rootNoteSelect.addEventListener("change", () => {
  const semitone = ROOT_NOTE_TO_SEMITONE[rootNoteSelect.value];
  currentRootMidi = BASE_OCTAVE_MIDI + semitone + baseOctaveShift * 12;
  syncRootControlsFromMidi();
  resetArpSequence();
  refreshWingAssignments();
  statusEl.textContent = `Root note set to ${rootNoteSelect.value}.`;
});

scaleSelect.addEventListener("change", () => {
  resetArpSequence();
  refreshWingAssignments();
  statusEl.textContent = `Scale set to ${scaleSelect.options[scaleSelect.selectedIndex].text}.`;
});

if (octaveRangeSlider && octaveRangeValue) {
  const updateOctaveRangeUi = () => {
    octaveRange = THREE.MathUtils.clamp(Number(octaveRangeSlider.value), 0, 4);
    octaveRangeValue.textContent = `+/-${octaveRange}`;
    resetArpSequence();
  };

  octaveRangeSlider.addEventListener("input", updateOctaveRangeUi);
  updateOctaveRangeUi();
}

if (baseOctaveSlider && baseOctaveValue) {
  const updateBaseOctaveUi = () => {
    baseOctaveShift = THREE.MathUtils.clamp(Number(baseOctaveSlider.value), -4, 4);
    baseOctaveValue.textContent = baseOctaveShift >= 0 ? `+${baseOctaveShift}` : `${baseOctaveShift}`;
    const semitone = ROOT_NOTE_TO_SEMITONE[rootNoteSelect.value];
    currentRootMidi = BASE_OCTAVE_MIDI + semitone + baseOctaveShift * 12;
    syncRootControlsFromMidi();
    resetArpSequence();
    refreshWingAssignments();
  };

  baseOctaveSlider.addEventListener("input", updateBaseOctaveUi);
  updateBaseOctaveUi();
}

if (arpDirectionSelect) {
  arpDirectionSelect.addEventListener("change", () => {
    arpDirectionMode = arpDirectionSelect.value;
    resetArpSequence();
    const label = arpDirectionSelect.options[arpDirectionSelect.selectedIndex].text;
    statusEl.textContent = `Arp direction: ${label}.`;
  });
}

if (tempoInput) {
  tempoInput.addEventListener("input", () => {
    tempoBpm = THREE.MathUtils.clamp(Number(tempoInput.value || 120), 30, 280);
    tempoInput.value = String(Math.round(tempoBpm));
  });
}

function normalizeArpRateBounds() {
  minArpRate = THREE.MathUtils.clamp(Number(minArpRateSelect ? minArpRateSelect.value : minArpRate), 1, 256);
  maxArpRate = THREE.MathUtils.clamp(Number(maxArpRateSelect ? maxArpRateSelect.value : maxArpRate), 1, 256);

  if (minArpRate > maxArpRate) {
    const tmp = minArpRate;
    minArpRate = maxArpRate;
    maxArpRate = tmp;
    if (minArpRateSelect) minArpRateSelect.value = String(minArpRate);
    if (maxArpRateSelect) maxArpRateSelect.value = String(maxArpRate);
  }
}

if (minArpRateSelect) {
  minArpRateSelect.addEventListener("change", () => {
    normalizeArpRateBounds();
  });
}

if (maxArpRateSelect) {
  maxArpRateSelect.addEventListener("change", () => {
    normalizeArpRateBounds();
  });
}

function updateTransportToggleUi() {
  if (!transportToggleBtn) {
    return;
  }
  transportToggleBtn.textContent = transportPlaying ? "Stop" : "Play";
}

if (transportToggleBtn) {
  transportToggleBtn.addEventListener("click", () => {
    transportPlaying = !transportPlaying;
    if (!transportPlaying) {
      arpClockAccumulator = 0;
      bassTickCounter = 0;
      statusEl.textContent = "Transport stopped.";
    } else {
      statusEl.textContent = `Transport playing at ${Math.round(tempoBpm)} BPM.`;
    }
    updateTransportToggleUi();
  });
}

normalizeArpRateBounds();
updateTransportToggleUi();

function updateFxLabels() {
  if (reverbDecayValue) {
    reverbDecayValue.textContent = `${reverbDecaySeconds.toFixed(1)}s`;
  }
  if (envReleaseValue) {
    envReleaseValue.textContent = `${Math.round(envelopeReleaseSeconds * 1000)}ms`;
  }
  if (delayTimeValue) {
    delayTimeValue.textContent = `${Math.round(delayTimeSeconds * 1000)}ms`;
  }
  if (delayAmountValue) {
    delayAmountValue.textContent = `${Math.round(delayAmount * 100)}%`;
  }
}

function roundToSliderStep(value, min, max, step) {
  const clamped = THREE.MathUtils.clamp(value, min, max);
  if (!Number.isFinite(step) || step <= 0) {
    return clamped;
  }

  const snapped = Math.round((clamped - min) / step) * step + min;
  const stepText = String(step);
  const precision = stepText.includes(".") ? stepText.split(".")[1].length : 0;
  return Number(THREE.MathUtils.clamp(snapped, min, max).toFixed(precision));
}

function setSliderFromContainerX(containerEl, sliderEl, clientX) {
  const rect = containerEl.getBoundingClientRect();
  const width = Math.max(1, rect.width);
  const min = Number(sliderEl.min || 0);
  const max = Number(sliderEl.max || 1);
  const step = Number(sliderEl.step || 0);
  const normalized = THREE.MathUtils.clamp((clientX - rect.left) / width, 0, 1);
  const raw = min + normalized * (max - min);
  const nextValue = roundToSliderStep(raw, min, max, step);

  sliderEl.value = String(nextValue);
  sliderEl.dispatchEvent(new Event("input", { bubbles: true }));
}

function enableFxContainerSwipe(containerEl, sliderEl) {
  let activePointerId = null;
  let lastTapTime = 0;
  const defaultValue = sliderEl.value;

  const resetToDefault = () => {
    sliderEl.value = defaultValue;
    sliderEl.dispatchEvent(new Event("input", { bubbles: true }));
  };

  containerEl.addEventListener("pointerdown", (event) => {
    const now = performance.now();
    if (now - lastTapTime < 280) {
      resetToDefault();
      lastTapTime = 0;
      event.preventDefault();
      return;
    }
    lastTapTime = now;

    activePointerId = event.pointerId;
    if (containerEl.setPointerCapture) {
      containerEl.setPointerCapture(event.pointerId);
    }
    setSliderFromContainerX(containerEl, sliderEl, event.clientX);
    event.preventDefault();
  });

  containerEl.addEventListener("pointermove", (event) => {
    if (event.pointerId !== activePointerId) {
      return;
    }
    setSliderFromContainerX(containerEl, sliderEl, event.clientX);
    event.preventDefault();
  });

  const finish = (event) => {
    if (event.pointerId !== activePointerId) {
      return;
    }
    if (containerEl.releasePointerCapture && containerEl.hasPointerCapture && containerEl.hasPointerCapture(event.pointerId)) {
      containerEl.releasePointerCapture(event.pointerId);
    }
    activePointerId = null;
  };

  containerEl.addEventListener("pointerup", finish);
  containerEl.addEventListener("pointercancel", finish);
  containerEl.addEventListener("dblclick", (event) => {
    resetToDefault();
    event.preventDefault();
  });
  containerEl.addEventListener("lostpointercapture", () => {
    activePointerId = null;
  });
}

function setupFxContainerSwipes() {
  const fxControls = document.querySelectorAll("#fxDock .fxControl");
  fxControls.forEach((containerEl) => {
    const sliderEl = containerEl.querySelector('input[type="range"]');
    if (!sliderEl) {
      return;
    }
    enableFxContainerSwipe(containerEl, sliderEl);
  });
}

function createReverbImpulse(context, decaySeconds) {
  const sampleRate = context.sampleRate;
  const length = Math.max(1, Math.floor(sampleRate * decaySeconds));
  const impulse = context.createBuffer(2, length, sampleRate);

  for (let channel = 0; channel < impulse.numberOfChannels; channel += 1) {
    const channelData = impulse.getChannelData(channel);
    for (let i = 0; i < length; i += 1) {
      const t = i / length;
      channelData[i] = (Math.random() * 2 - 1) * Math.pow(1 - t, decaySeconds);
    }
  }

  return impulse;
}

function refreshReverbBuffer() {
  if (!audioCtx || !reverbConvolver) {
    return;
  }
  reverbConvolver.buffer = createReverbImpulse(audioCtx, reverbDecaySeconds);
}

function initAudio() {
  if (audioCtx) {
    return;
  }
  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx) {
    return;
  }
  audioCtx = new Ctx();

  masterDryGain = audioCtx.createGain();
  reverbSendGain = audioCtx.createGain();
  reverbConvolver = audioCtx.createConvolver();
  reverbWetGain = audioCtx.createGain();
  delaySendGain = audioCtx.createGain();
  delayNode = audioCtx.createDelay(0.25);
  delayFeedbackGain = audioCtx.createGain();
  delayWetGain = audioCtx.createGain();

  masterDryGain.gain.value = 0.92;
  reverbSendGain.gain.value = 0.34;
  reverbWetGain.gain.value = 0.45;
  delaySendGain.gain.value = 0.28;
  delayNode.delayTime.value = delayTimeSeconds;
  delayFeedbackGain.gain.value = delayAmount;
  delayWetGain.gain.value = 0.6;

  masterDryGain.connect(audioCtx.destination);
  reverbSendGain.connect(reverbConvolver);
  reverbConvolver.connect(reverbWetGain);
  reverbWetGain.connect(audioCtx.destination);

  delaySendGain.connect(delayNode);
  delayNode.connect(delayFeedbackGain);
  delayFeedbackGain.connect(delayNode);
  delayNode.connect(delayWetGain);
  delayWetGain.connect(audioCtx.destination);

  refreshReverbBuffer();
}

function routeVoiceToMix(gainNode) {
  if (masterDryGain && reverbSendGain && delaySendGain) {
    gainNode.connect(masterDryGain);
    gainNode.connect(reverbSendGain);
    gainNode.connect(delaySendGain);
    return;
  }
  gainNode.connect(audioCtx.destination);
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

function playClassicTick(speed) {
  if (!audioReady || !audioCtx) {
    return;
  }

  const t = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  const brightness = THREE.MathUtils.clamp(speed / maxSpin, 0, 1);

  osc.type = "square";
  osc.frequency.setValueAtTime(660 + brightness * 420, t);

  const release = envelopeReleaseSeconds;
  gain.gain.setValueAtTime(0.0001, t);
  gain.gain.exponentialRampToValueAtTime(0.018 + brightness * 0.018, t + 0.002);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + release);

  osc.connect(gain);
  routeVoiceToMix(gain);
  osc.start(t);
  osc.stop(t + release + 0.01);
}

function playMonotoneTick(speed) {
  if (!audioReady || !audioCtx) {
    return;
  }

  try {
    const t = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    const brightness = THREE.MathUtils.clamp(speed / maxSpin, 0, 1);
    const baseFreq = midiToFreq(getDisplayedRootMidi() + 12);

    osc.type = "sine";
    osc.frequency.setValueAtTime(baseFreq, t);

    const release = envelopeReleaseSeconds;
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(0.010 + brightness * 0.010, t + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + release);

    osc.connect(gain);
    routeVoiceToMix(gain);
    osc.start(t);
    osc.stop(t + release + 0.01);
  } catch (err) {
    // If monotone hits an audio edge case, fallback to arp.
    soundSourceMode = "arp";
    if (soundSourceSelect) {
      soundSourceSelect.value = "arp";
    }
    statusEl.textContent = "Monotone fallback to arpeggiator.";
    console.error(err);
  }
}

function playOcarinaTick(speed) {
  if (!audioReady || !audioCtx) {
    return;
  }

  try {
    const t = audioCtx.currentTime;
    const pitchOsc = audioCtx.createOscillator();
    const breathOsc = audioCtx.createOscillator();
    const formant = audioCtx.createBiquadFilter();
    const body = audioCtx.createBiquadFilter();
    const gain = audioCtx.createGain();
    const brightness = THREE.MathUtils.clamp(speed / maxSpin, 0, 1);
    const noteFreq = getSoftToneFreq(speed);
    const release = THREE.MathUtils.clamp(envelopeReleaseSeconds * 1.35, 0.05, 0.7);

    pitchOsc.type = "sine";
    breathOsc.type = "triangle";
    pitchOsc.frequency.setValueAtTime(noteFreq, t);
    breathOsc.frequency.setValueAtTime(noteFreq * 1.01, t);

    formant.type = "bandpass";
    formant.frequency.setValueAtTime(noteFreq * 2.4, t);
    formant.Q.setValueAtTime(7.5, t);

    body.type = "lowpass";
    body.frequency.setValueAtTime(3000 + brightness * 1200, t);
    body.Q.setValueAtTime(0.8, t);

    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(0.010 + brightness * 0.01, t + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + release);

    pitchOsc.connect(formant);
    breathOsc.connect(formant);
    formant.connect(body);
    body.connect(gain);
    routeVoiceToMix(gain);

    pitchOsc.start(t);
    breathOsc.start(t);
    pitchOsc.stop(t + release + 0.01);
    breathOsc.stop(t + release + 0.01);
  } catch (err) {
    console.error(err);
  }
}

function playArpTick(speed) {
  if (!audioReady || !audioCtx) {
    return;
  }

  try {
    const t = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const sub = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    const brightness = THREE.MathUtils.clamp(speed / maxSpin, 0, 1);
    const baseFreq = getSoftToneFreq(speed, angularVelocity < 0);

    osc.type = "triangle";
    sub.type = "sine";
    osc.frequency.setValueAtTime(baseFreq, t);
    sub.frequency.setValueAtTime(baseFreq * 0.5, t);

    const release = envelopeReleaseSeconds;
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(0.013 + brightness * 0.01, t + 0.006);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + release);

    osc.connect(gain);
    sub.connect(gain);
    routeVoiceToMix(gain);
    osc.start(t);
    sub.start(t);
    osc.stop(t + release + 0.01);
    sub.stop(t + release + 0.01);
  } catch (err) {
    // Keep interaction responsive even if WebAudio glitches.
    console.error(err);
  }
}

function playTick(speed) {
  if (muted) {
    return;
  }

  if (soundSourceMode === "monotone") {
    playMonotoneTick(speed);
  } else if (soundSourceMode === "ocarina") {
    playOcarinaTick(speed);
  } else {
    playArpTick(speed);
  }
}

let lastHapticTime = 0;
let prevVelocity = 0;
let lastTickHapticTime = 0;
let lastAudioTickTime = 0;
let lastBassNoteTime = 0;
const minArpTickMs = 24;
const minMonotoneTickMs = 54;
const minOcarinaTickMs = 62;
const minBassTickMs = 180;

function pulseHaptic(pattern) {
  if (noHaptics) {
    return false;
  }

  if (isNativeCapacitor && nativeHaptics) {
    const style = typeof pattern === "number" && pattern >= 10 ? "Heavy" : "Light";
    nativeHaptics.impact({ style }).catch(() => {
      // Native haptics may not be ready during startup; keep fallback behavior.
    });
    return true;
  }

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

function triggerSpinBeat(now, speed) {
  let minGap = minArpTickMs;
  if (soundSourceMode === "monotone") {
    minGap = minMonotoneTickMs;
  } else if (soundSourceMode === "ocarina") {
    minGap = minOcarinaTickMs;
  }

  if (now - lastAudioTickTime >= minGap) {
    playTick(speed);
    lastAudioTickTime = now;
  }

  if (now - lastTickHapticTime > 55) {
    pulseHaptic(6);
    lastTickHapticTime = now;
  }
}

function playBassTick(speed) {
  if (!audioReady || !audioCtx || muted) {
    return;
  }

  try {
    const t = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const sub = audioCtx.createOscillator();
    const body = audioCtx.createBiquadFilter();
    const gain = audioCtx.createGain();
    const brightness = THREE.MathUtils.clamp(speed / maxSpin, 0, 1);
    const pool = bassAssignedMidis.length ? bassAssignedMidis : [getDisplayedRootMidi() - 24, getDisplayedRootMidi() - 17];
    const baseIdx = ((bassStepIndex % pool.length) + pool.length) % pool.length;
    const idx = angularVelocity < 0 ? pool.length - 1 - baseIdx : baseIdx;
    const bassMidi = pool[idx];
    bassStepIndex = (bassStepIndex + 1) % pool.length;
    const bassFreq = midiToFreq(bassMidi);
    const release = THREE.MathUtils.clamp(Math.max(envelopeReleaseSeconds * 1.8, 0.38), 0.38, 2.2);

    osc.type = "triangle";
    sub.type = "sine";
    osc.frequency.setValueAtTime(bassFreq, t);
    sub.frequency.setValueAtTime(bassFreq * 0.5, t);

    body.type = "lowpass";
    body.frequency.setValueAtTime(220 + brightness * 120, t);
    body.Q.setValueAtTime(0.9, t);

    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(0.024 + brightness * 0.02, t + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + release);

    osc.connect(body);
    sub.connect(body);
    body.connect(gain);
    routeVoiceToMix(gain);
    osc.start(t);
    sub.start(t);
    osc.stop(t + release + 0.05);
    sub.stop(t + release + 0.05);
  } catch (err) {
    console.error(err);
  }
}

const clock = new THREE.Clock();
function animate() {
  const dt = Math.min(clock.getDelta(), 1 / 20);
  const now = performance.now();

  const userSpinSpeed = Math.abs(gestureAngularVelocity);
  const speedNorm = THREE.MathUtils.clamp(userSpinSpeed / maxSpin, 0, 1);
  const arpInterval = getCurrentArpIntervalSeconds(speedNorm, dt);
  const transportAngularVelocity = transportPlaying
    ? ((Math.PI * 2) / Math.max(1, wingCount)) / Math.max(arpInterval, 1 / 512) * spinDirection
    : 0;

  // Wheel stays in clocked motion at transport speed, while gesture spin adds expressive push.
  angularVelocity = transportAngularVelocity + gestureAngularVelocity;
  spinAngle += angularVelocity * dt;
  const spinSpeed = Math.abs(angularVelocity);

  if (transportPlaying) {
    arpClockAccumulator += dt;
    let tickCount = 0;
    while (arpClockAccumulator >= arpInterval && tickCount < 32) {
      arpClockAccumulator -= arpInterval;
      triggerSpinBeat(now, spinSpeed);
      bassTickCounter += 1;
      if (bassTickCounter % 2 === 0 && now - lastBassNoteTime >= minBassTickMs) {
        playBassTick(spinSpeed);
        lastBassNoteTime = now;
      }
      tickCount += 1;
    }
  }

  gestureAngularVelocity *= Math.pow(damping, dt * 60);
  if (Math.abs(gestureAngularVelocity) < 0.003) {
    gestureAngularVelocity = 0;
  }

  spinner.rotation.z = spinAngle;
  bassSpinner.rotation.z = -spinAngle * 0.5;
  if (rootNoteSprite) {
    rootNoteSprite.position.x = mainSpinnerX;
    rootNoteSprite.position.y = spinner.position.y;
  }
  for (let i = 0; i < wingNoteSprites.length; i += 1) {
    const sprite = wingNoteSprites[i];
    if (sprite.material) {
      sprite.material.rotation = -spinAngle;
    }
  }

  const octaveVisualOffset = THREE.MathUtils.clamp(rootOctaveOffset, -4, 4) * 0.42;
  const targetSpinnerY = octaveVisualOffset + shiftDragOffsetY;
  spinner.position.y = THREE.MathUtils.lerp(spinner.position.y, targetSpinnerY, 0.18);
  bassSpinner.position.y = spinner.position.y;

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

  if (isNativeCapacitor && nativeHaptics) {
    nativeHaptics.selectionStart().catch(() => {});
    pulseHaptic(12);
  } else if (hapticsAvailable) {
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

if (reverbDecaySlider) {
  reverbDecaySlider.addEventListener("input", () => {
    reverbDecaySeconds = THREE.MathUtils.clamp(Number(reverbDecaySlider.value), 0.2, 10);
    updateFxLabels();
    refreshReverbBuffer();
  });
}

if (envReleaseSlider) {
  envReleaseSlider.addEventListener("input", () => {
    envelopeReleaseSeconds = THREE.MathUtils.clamp(Number(envReleaseSlider.value), 0.03, 1.2);
    updateFxLabels();
  });
}

if (delayTimeSlider) {
  delayTimeSlider.addEventListener("input", () => {
    delayTimeSeconds = THREE.MathUtils.clamp(Number(delayTimeSlider.value), 0.008, 0.06);
    if (delayNode && audioCtx) {
      delayNode.delayTime.setTargetAtTime(delayTimeSeconds, audioCtx.currentTime, 0.01);
    }
    updateFxLabels();
  });
}

if (delayAmountSlider) {
  delayAmountSlider.addEventListener("input", () => {
    delayAmount = THREE.MathUtils.clamp(Number(delayAmountSlider.value), 0, 0.9);
    if (delayFeedbackGain && delaySendGain && audioCtx) {
      delayFeedbackGain.gain.setTargetAtTime(delayAmount, audioCtx.currentTime, 0.02);
      delaySendGain.gain.setTargetAtTime(0.1 + delayAmount * 0.55, audioCtx.currentTime, 0.02);
    }
    updateFxLabels();
  });
}

updateFxLabels();
setupFxContainerSwipes();
