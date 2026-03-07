import * as THREE from "https://unpkg.com/three@0.163.0/build/three.module.js";

const canvas = document.getElementById("app");
const motionBtn = document.getElementById("motionBtn");
const settingsBtn = document.getElementById("settingsBtn");
const settingsPanel = document.getElementById("settingsPanel");
const arpBtn = document.getElementById("arpBtn");
const arpPanel = document.getElementById("arpPanel");
const bassBtn = document.getElementById("bassBtn");
const bassPanel = document.getElementById("bassPanel");
const modDock = document.getElementById("modDock");
const fxModBtn = document.getElementById("fxModBtn");
const modulationBtn = document.getElementById("modulationBtn");
const fxModal = document.getElementById("fxModal");
const modulationModal = document.getElementById("modulationModal");
const spinnerNoteLayer = document.getElementById("spinnerNoteLayer");
const statusEl = document.getElementById("status");
const soundSourceSelect = document.getElementById("soundSourceSelect");
const tempoInput = document.getElementById("tempoInput");
const minArpRateSelect = document.getElementById("minArpRateSelect");
const maxArpRateSelect = document.getElementById("maxArpRateSelect");
const transportToggleBtn = document.getElementById("transportToggleBtn");
const muteToggle = document.getElementById("muteToggle");
const hapticsToggle = document.getElementById("hapticsToggle");
const volumeSlider = document.getElementById("volumeSlider");
const volumeValue = document.getElementById("volumeValue");
const rootNoteSelect = document.getElementById("rootNoteSelect");
const scaleSelect = document.getElementById("scaleSelect");
const wingCountSlider = document.getElementById("wingCountSlider");
const wingCountValue = document.getElementById("wingCountValue");
const octaveRangeSlider = document.getElementById("octaveRangeSlider");
const octaveRangeValue = document.getElementById("octaveRangeValue");
const baseOctaveSlider = document.getElementById("baseOctaveSlider");
const baseOctaveValue = document.getElementById("baseOctaveValue");
const bassEngineToggle = document.getElementById("bassEngineToggle");
const bassInvertScaleToggle = document.getElementById("bassInvertScaleToggle");
const bassLockToneToggle = document.getElementById("bassLockToneToggle");
const bassLockStepsToggle = document.getElementById("bassLockStepsToggle");
const bassLockReleaseToggle = document.getElementById("bassLockReleaseToggle");
const bassStepsSlider = document.getElementById("bassStepsSlider");
const bassStepsValue = document.getElementById("bassStepsValue");
const bassPitchControl = document.getElementById("bassPitchControl");
const bassStepsControl = document.getElementById("bassStepsControl");
const bassReleaseControl = document.getElementById("bassReleaseControl");
const bassPitchSlider = document.getElementById("bassPitchSlider");
const bassPitchValue = document.getElementById("bassPitchValue");
const bassEnvReleaseSlider = document.getElementById("bassEnvReleaseSlider");
const bassEnvReleaseValue = document.getElementById("bassEnvReleaseValue");
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
const lfoShapeSelect = document.getElementById("lfoShapeSelect");
const lfoRateSelect = document.getElementById("lfoRateSelect");
const lfoRateValue = document.getElementById("lfoRateValue");
const lfoAmountSlider = document.getElementById("lfoAmountSlider");
const lfoAmountValue = document.getElementById("lfoAmountValue");
const lfoTargetSelect = document.getElementById("lfoTargetSelect");
const modFilterTypeSelect = document.getElementById("modFilterTypeSelect");
const modFilterTypeValue = document.getElementById("modFilterTypeValue");
const modFilterCutoffSlider = document.getElementById("modFilterCutoffSlider");
const modFilterCutoffValue = document.getElementById("modFilterCutoffValue");
const isMobile = window.matchMedia("(pointer: coarse)").matches;

let settingsOpen = false;
let arpOpen = false;
let bassOpen = false;

function syncDockButtonStates() {
  if (settingsBtn) {
    settingsBtn.classList.toggle("isOpen", settingsOpen);
    settingsBtn.setAttribute("aria-pressed", settingsOpen ? "true" : "false");
  }
  if (arpBtn) {
    arpBtn.classList.toggle("isOpen", arpOpen);
    arpBtn.setAttribute("aria-pressed", arpOpen ? "true" : "false");
  }
  if (bassBtn) {
    bassBtn.classList.toggle("isOpen", bassOpen);
    bassBtn.setAttribute("aria-pressed", bassOpen ? "true" : "false");
  }
  if (fxModBtn) {
    const open = !!(fxModal && !fxModal.hidden);
    fxModBtn.classList.toggle("isOpen", open);
    fxModBtn.setAttribute("aria-pressed", open ? "true" : "false");
  }
  if (modulationBtn) {
    const open = !!(modulationModal && !modulationModal.hidden);
    modulationBtn.classList.toggle("isOpen", open);
    modulationBtn.setAttribute("aria-pressed", open ? "true" : "false");
  }
}

function setSettingsOpen(open) {
  settingsOpen = open;
  settingsPanel.hidden = !open;
  syncDockButtonStates();
}

function setArpOpen(open) {
  arpOpen = open;
  if (arpPanel) {
    arpPanel.hidden = !open;
  }
  syncDockButtonStates();
}

function setBassOpen(open) {
  bassOpen = open;
  if (bassPanel) {
    bassPanel.hidden = !open;
  }
  syncDockButtonStates();
}

function targetInside(target, element) {
  return !!(target instanceof Node && element && element.contains(target));
}

if (settingsBtn) {
  settingsBtn.addEventListener("pointerdown", (event) => {
    event.stopPropagation();
    const willOpen = !settingsOpen;
    setSettingsOpen(willOpen);
    if (willOpen) {
      setArpOpen(false);
      setBassOpen(false);
      setFxModalOpen(false);
      setModulationModalOpen(false);
    }
  });
}

settingsPanel.addEventListener("pointerdown", (event) => {
  event.stopPropagation();
});

if (arpBtn) {
  arpBtn.addEventListener("pointerdown", (event) => {
    event.stopPropagation();
    const willOpen = !arpOpen;
    setArpOpen(willOpen);
    if (willOpen) {
      setSettingsOpen(false);
      setBassOpen(false);
      setFxModalOpen(false);
      setModulationModalOpen(false);
    }
  });
}

if (arpPanel) {
  arpPanel.addEventListener("pointerdown", (event) => {
    event.stopPropagation();
  });
}

if (bassBtn) {
  bassBtn.addEventListener("pointerdown", (event) => {
    event.stopPropagation();
    const willOpen = !bassOpen;
    setBassOpen(willOpen);
    if (willOpen) {
      setSettingsOpen(false);
      setArpOpen(false);
      setFxModalOpen(false);
      setModulationModalOpen(false);
    }
  });
}

if (bassPanel) {
  bassPanel.addEventListener("pointerdown", (event) => {
    event.stopPropagation();
  });
}

function setFxModalOpen(open) {
  if (!fxModal) return;
  fxModal.hidden = !open;
  syncDockButtonStates();
}

function setModulationModalOpen(open) {
  if (!modulationModal) return;
  modulationModal.hidden = !open;
  syncDockButtonStates();
}

if (fxModBtn) {
  fxModBtn.addEventListener("pointerdown", (event) => {
    event.stopPropagation();
    const willOpen = fxModal ? fxModal.hidden : false;
    setFxModalOpen(willOpen);
    if (willOpen) {
      setModulationModalOpen(false);
      setSettingsOpen(false);
      setArpOpen(false);
      setBassOpen(false);
    }
  });
}

if (modulationBtn) {
  modulationBtn.addEventListener("pointerdown", (event) => {
    event.stopPropagation();
    const willOpen = modulationModal ? modulationModal.hidden : false;
    setModulationModalOpen(willOpen);
    if (willOpen) {
      setFxModalOpen(false);
      setSettingsOpen(false);
      setArpOpen(false);
      setBassOpen(false);
    }
  });
}

if (modDock) {
  const blockSpinnerPropagation = (event) => {
    event.stopPropagation();
  };
  modDock.addEventListener("pointerdown", blockSpinnerPropagation);
  modDock.addEventListener("pointermove", blockSpinnerPropagation);
  modDock.addEventListener("pointerup", blockSpinnerPropagation);
  modDock.addEventListener("pointercancel", blockSpinnerPropagation);
}

if (fxModal) {
  fxModal.addEventListener("pointerdown", (event) => {
    event.stopPropagation();
  });
}

if (modulationModal) {
  modulationModal.addEventListener("pointerdown", (event) => {
    event.stopPropagation();
  });
}

window.addEventListener("pointerdown", (event) => {
  const target = event.target;
  if (settingsOpen && !targetInside(target, settingsPanel) && !targetInside(target, settingsBtn)) {
    setSettingsOpen(false);
  }

  if (arpOpen && !targetInside(target, arpPanel) && !targetInside(target, arpBtn)) {
    setArpOpen(false);
  }

  if (bassOpen && !targetInside(target, bassPanel) && !targetInside(target, bassBtn)) {
    setBassOpen(false);
  }

  if (fxModal && !fxModal.hidden && !targetInside(target, fxModal) && !targetInside(target, fxModBtn)) {
    setFxModalOpen(false);
  }

  if (modulationModal && !modulationModal.hidden && !targetInside(target, modulationModal) && !targetInside(target, modulationBtn)) {
    setModulationModalOpen(false);
  }
});

setSettingsOpen(false);
setArpOpen(false);
setBassOpen(false);
setFxModalOpen(false);
setModulationModalOpen(false);

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

function getWingPolygonScale(stepCount) {
  if (stepCount >= 9) {
    return 0.8;
  }
  if (stepCount === 8) {
    return 0.9;
  }
  return 1;
}

function makeFidgetSpinner(stepCount = wingCount, scaleFactor = 1) {
  const spinner = new THREE.Group();
  const wingScale = getWingPolygonScale(stepCount);

  spinner.add(ring(0.28 * scaleFactor, 64, 0.02));
  spinner.add(ring(0.14 * scaleFactor, 64, 0.03, softLineMaterial));

  const armRadius = getArmRadiusForSteps(stepCount, scaleFactor);
  for (let i = 0; i < stepCount; i += 1) {
    const a = (i / stepCount) * Math.PI * 2;
    const armCenter = new THREE.Vector3(Math.cos(a) * armRadius, Math.sin(a) * armRadius, 0);

    const arm = polygon(6, 0.5 * scaleFactor * wingScale, 0, Math.PI / 6);
    arm.position.copy(armCenter);

    const cap = ring(0.18 * scaleFactor * wingScale, 48, 0.015);
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
const mainSpinnerScale = 0.6;
const bassScaleBase = 0.6;
const mainSpinnerX = 0;
const bassSpinnerBaseX = 1.86;
const bassScaleFactor = bassScaleBase * mainSpinnerScale;
let bassEnabled = false;
let bassInvertScale = false;
let bassToneLocked = false;
let bassStepsLocked = true;
let bassReleaseLocked = true;
let bassEnvelopeReleaseSeconds = THREE.MathUtils.clamp(Number(bassEnvReleaseSlider ? bassEnvReleaseSlider.value : 0.31), 0.03, 1.2);
let bassManualStepCount = 3;
let bassDragOffsetX = 0;
let bassDragOffsetY = 0;
let bassDragPointerId = null;
let lastBassDragPointerActivity = 0;
let pulleyMainRing = null;
let pulleyBassRing = null;
let pulleyTopBelt = null;
let pulleyBottomBelt = null;
let pulleyMainRadius = 0;
let pulleyBassRadius = 0;

function getDefaultBassStepCount() {
  return THREE.MathUtils.clamp(Math.floor(wingCount / 2), 3, 9);
}

function getBassStepCount() {
  if (bassStepsLocked) {
    return getDefaultBassStepCount();
  }
  return THREE.MathUtils.clamp(Math.round(bassManualStepCount), 3, 9);
}

function getBassSpinnerX() {
  return bassSpinnerBaseX + bassDragOffsetX;
}

function makePulleyVisual() {
  const group = new THREE.Group();
  const bassX = getBassSpinnerX();
  pulleyMainRadius = getArmRadiusForSteps(wingCount, mainSpinnerScale);
  pulleyBassRadius = getArmRadiusForSteps(getBassStepCount(), bassScaleFactor);

  pulleyMainRing = ring(pulleyMainRadius, 64, -0.02, softLineMaterial);
  pulleyMainRing.position.set(mainSpinnerX, 0, 0);
  pulleyBassRing = ring(pulleyBassRadius, 64, -0.02, softLineMaterial);
  pulleyBassRing.position.set(bassX, 0, 0);
  group.add(pulleyMainRing);
  group.add(pulleyBassRing);

  const topBelt = [
    new THREE.Vector3(mainSpinnerX, pulleyMainRadius, -0.02),
    new THREE.Vector3(bassX, pulleyBassRadius, -0.02),
  ];
  const bottomBelt = [
    new THREE.Vector3(mainSpinnerX, -pulleyMainRadius, -0.02),
    new THREE.Vector3(bassX, -pulleyBassRadius, -0.02),
  ];
  pulleyTopBelt = new THREE.Line(new THREE.BufferGeometry().setFromPoints(topBelt), softLineMaterial);
  pulleyBottomBelt = new THREE.Line(new THREE.BufferGeometry().setFromPoints(bottomBelt), softLineMaterial);
  group.add(pulleyTopBelt);
  group.add(pulleyBottomBelt);

  return group;
}

function setPulleyLinePoints(line, ax, ay, bx, by) {
  if (!line || !line.geometry || !line.geometry.attributes.position) {
    return;
  }

  const arr = line.geometry.attributes.position.array;
  arr[0] = ax;
  arr[1] = ay;
  arr[2] = -0.02;
  arr[3] = bx;
  arr[4] = by;
  arr[5] = -0.02;
  line.geometry.attributes.position.needsUpdate = true;
}

function updatePulleyVisual(mainY, bassY) {
  if (!pulleyMainRing || !pulleyBassRing || !pulleyTopBelt || !pulleyBottomBelt) {
    return;
  }

  const bassX = getBassSpinnerX();

  pulleyMainRing.position.set(mainSpinnerX, mainY, 0);
  pulleyBassRing.position.set(bassX, bassY, 0);
  setPulleyLinePoints(pulleyTopBelt, mainSpinnerX, mainY + pulleyMainRadius, bassX, bassY + pulleyBassRadius);
  setPulleyLinePoints(pulleyBottomBelt, mainSpinnerX, mainY - pulleyMainRadius, bassX, bassY - pulleyBassRadius);
}

let spinner = makeFidgetSpinner(wingCount, mainSpinnerScale);
let bassSpinner = makeFidgetSpinner(getBassStepCount(), bassScaleFactor);
let pulleyVisual = makePulleyVisual();
spinner.position.x = mainSpinnerX;
bassSpinner.position.x = getBassSpinnerX();
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
const bassGrabRadiusPx = 76;
const shiftStepPx = 20;
const stalePointerMs = 900;
const spinnerScreenCenter = new THREE.Vector3();
const bassScreenCenter = new THREE.Vector3();

function getSpinnerScreenCenter() {
  spinnerScreenCenter.set(0, spinner.position.y, 0);
  spinnerScreenCenter.project(camera);

  return {
    x: (spinnerScreenCenter.x * 0.5 + 0.5) * window.innerWidth,
    y: (-spinnerScreenCenter.y * 0.5 + 0.5) * window.innerHeight,
  };
}

function getBassScreenCenter() {
  bassScreenCenter.set(getBassSpinnerX(), bassSpinner.position.y, 0);
  bassScreenCenter.project(camera);

  return {
    x: (bassScreenCenter.x * 0.5 + 0.5) * window.innerWidth,
    y: (-bassScreenCenter.y * 0.5 + 0.5) * window.innerHeight,
  };
}

function updateBassDragFromPointer(clientX, clientY) {
  const worldHeight = 2 * Math.tan((camera.fov * Math.PI / 180) * 0.5) * camera.position.z;
  const worldWidth = worldHeight * camera.aspect;
  const worldX = (clientX / window.innerWidth - 0.5) * worldWidth;
  const worldY = (0.5 - clientY / window.innerHeight) * worldHeight;

  const minBassX = mainSpinnerX + 1.0;
  const maxBassX = 3.3;
  const clampedX = THREE.MathUtils.clamp(worldX, minBassX, maxBassX);
  const clampedY = THREE.MathUtils.clamp(worldY, -1.7, 1.7);
  bassDragOffsetX = clampedX - bassSpinnerBaseX;
  bassDragOffsetY = clampedY;
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
  clampCurrentRootMidiToOctaveRange();
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
  bassDragPointerId = null;
  isCenterHoldShift = false;
  shiftCarryY = 0;
  shiftDragOffsetY = 0;
  lastSpinPointerAngle = null;
  lastShiftPointerActivity = 0;
  lastSpinPointerActivity = 0;
  lastBassDragPointerActivity = 0;
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
    return;
  }

  if (bassDragPointerId !== null && now - lastBassDragPointerActivity > stalePointerMs) {
    forceReleasePointers();
    statusEl.textContent = "Recovered touch control. Continue dragging.";
  }
}

window.addEventListener("pointerdown", (event) => {
  recoverStalePointers();

  if (modDock && event.target instanceof Node && modDock.contains(event.target)) {
    return;
  }

  if (fxModal && !fxModal.hidden && event.target instanceof Node && fxModal.contains(event.target)) {
    return;
  }

  if (modulationModal && !modulationModal.hidden && event.target instanceof Node && modulationModal.contains(event.target)) {
    return;
  }

  if (arpPanel && !arpPanel.hidden && event.target instanceof Node && arpPanel.contains(event.target)) {
    return;
  }

  if (bassPanel && !bassPanel.hidden && event.target instanceof Node && bassPanel.contains(event.target)) {
    return;
  }

  const bassCenter = getBassScreenCenter();
  const bassDist = Math.hypot(event.clientX - bassCenter.x, event.clientY - bassCenter.y);
  if (bassDist <= bassGrabRadiusPx && bassDragPointerId === null) {
    bassDragPointerId = event.pointerId;
    lastBassDragPointerActivity = performance.now();
    updateBassDragFromPointer(event.clientX, event.clientY);
    statusEl.textContent = "Dragging bass engine.";
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
  if (event.pointerId === bassDragPointerId) {
    lastBassDragPointerActivity = performance.now();
    updateBassDragFromPointer(event.clientX, event.clientY);
    return;
  }

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
  if (event.pointerId === bassDragPointerId) {
    bassDragPointerId = null;
    lastBassDragPointerActivity = 0;
  }

  if (event.pointerId === shiftPointerId) {
    resetShiftPointer();
  }

  if (event.pointerId === spinPointerId) {
    resetSpinPointer();
  }
});

window.addEventListener("pointercancel", (event) => {
  if (event.pointerId === bassDragPointerId) {
    bassDragPointerId = null;
    lastBassDragPointerActivity = 0;
  }

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

  const targetDelayTime = THREE.MathUtils.mapLinear(motionFxGammaNorm, -1, 1, delayTimeMinSeconds, delayTimeMaxSeconds);
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

function updateMotionButtonUi() {
  if (!motionBtn) {
    return;
  }
  motionBtn.textContent = motionEnabled ? "Disable Motion" : "Enable Motion";
}

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
    updateMotionButtonUi();
    statusEl.textContent = "Motion enabled: tilt controls delay time, delay amount, and release.";
  } catch (err) {
    statusEl.textContent = "Motion unavailable on this device/browser.";
    console.error(err);
  }
}

function disableMotion() {
  if (!motionEnabled) {
    return;
  }

  window.removeEventListener("deviceorientation", handleOrientation, true);
  motionEnabled = false;
  deviceQuat.identity();
  neutralQuat.identity();
  targetQuat.identity();
  correctedEuler.set(0, 0, 0);
  updateMotionButtonUi();
  statusEl.textContent = "Motion disabled: manual spin control restored.";
}

async function toggleMotion() {
  if (motionEnabled) {
    disableMotion();
    return;
  }
  await enableMotion();
}

updateMotionButtonUi();

let audioCtx = null;
let audioReady = false;
let soundSourceMode = soundSourceSelect ? soundSourceSelect.value : "arp";
let muted = false;
let noHaptics = false;
let masterVolume = THREE.MathUtils.clamp(Number(volumeSlider ? volumeSlider.value : 100) / 100, 0, 1);
let reverbDecaySeconds = THREE.MathUtils.clamp(Number(reverbDecaySlider ? reverbDecaySlider.value : 3.1), 0.2, 10);
let envelopeReleaseSeconds = THREE.MathUtils.clamp(Number(envReleaseSlider ? envReleaseSlider.value : 0.31), 0.03, 1.2);
const delayTimeMinSeconds = 0;
const delayTimeMaxSeconds = 0.2;
let delayTimeSeconds = THREE.MathUtils.clamp(Number(delayTimeSlider ? delayTimeSlider.value : 0.06), delayTimeMinSeconds, delayTimeMaxSeconds);
let delayAmount = THREE.MathUtils.clamp(Number(delayAmountSlider ? delayAmountSlider.value : 0.62), 0, 0.9);
let arpStep = 0;
let arpDirectionSign = 1;
let arpDirectionMode = arpDirectionSelect ? arpDirectionSelect.value : "upOnly";
let masterDryGain = null;
let masterOutGain = null;
let reverbSendGain = null;
let reverbConvolver = null;
let reverbWetGain = null;
let delaySendGain = null;
let delayNode = null;
let delayFeedbackGain = null;
let delayWetGain = null;
let lfoShape = lfoShapeSelect ? lfoShapeSelect.value : "square";
let lfoRateDivision = THREE.MathUtils.clamp(Number(lfoRateSelect ? lfoRateSelect.value : 16), 0.5, 128);
let lfoAmount = THREE.MathUtils.clamp(Number(lfoAmountSlider ? lfoAmountSlider.value : 0) / 100, 0, 1);
let lfoTarget = lfoTargetSelect ? lfoTargetSelect.value : "amplitude";
const lfoReleaseAddMaxSeconds = 2.4;
let modFilterType = modFilterTypeSelect ? modFilterTypeSelect.value : "lowpass";
let modFilterCutoffHz = THREE.MathUtils.clamp(Number(modFilterCutoffSlider ? modFilterCutoffSlider.value : 12000), 120, 12000);
let lfoSyncStartTime = 0;
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
let octaveRange = THREE.MathUtils.clamp(Number(octaveRangeSlider ? octaveRangeSlider.value : 2), 0, 10);
let baseOctaveShift = THREE.MathUtils.clamp(Number(baseOctaveSlider ? baseOctaveSlider.value : 0), -4, 4);
let currentRootMidi = BASE_OCTAVE_MIDI + ROOT_NOTE_TO_SEMITONE[rootNoteSelect.value] + baseOctaveShift * 12;
let wingAssignedMidis = [];
let wingAssignedLabels = [];
let bassAssignedMidis = [];
let bassStepIndex = 0;
let bassRootMidi = 0;
let rootNoteLabelEl = null;
let wingNoteLabelEls = [];
let bassRootNoteLabelEl = null;
let bassWingNoteLabelEls = [];
let pitchSemitoneOffset = THREE.MathUtils.clamp(Number(pitchSemitoneSlider ? pitchSemitoneSlider.value : 0), -24, 24);
let bassPitchOffset = THREE.MathUtils.clamp(Number(bassPitchSlider ? bassPitchSlider.value : -12), -24, 24);
const tmpWorld = new THREE.Vector3();
const tmpScreen = new THREE.Vector3();

function getDisplayedRootMidi() {
  return currentRootMidi + pitchSemitoneOffset;
}

function midiToFreq(midi) {
  return 440 * Math.pow(2, (midi - 69) / 12);
}

function getLfoRateHz() {
  const quarterNotesPerSecond = tempoBpm / 60;
  const noteLengthInQuarterNotes = 4 / Math.max(0.5, lfoRateDivision);
  return quarterNotesPerSecond / noteLengthInQuarterNotes;
}

function formatRateDivision(rateDivision) {
  if (Math.abs(rateDivision - 0.5) < 0.001) {
    return "2/1";
  }

  if (Math.abs(rateDivision - 1) < 0.001) {
    return "1/1";
  }

  if (Math.abs(rateDivision - 2) < 0.001) {
    return "1/2";
  }

  const rounded = Math.round(rateDivision * 1000) / 1000;
  return `1/${rounded}`;
}

function getLfoPhaseAtTime(timeSec) {
  const rateHz = Math.max(0.001, getLfoRateHz());
  const phase = ((timeSec - lfoSyncStartTime) * rateHz) % 1;
  return phase < 0 ? phase + 1 : phase;
}

function getSampleHoldValueForCycle(cycle) {
  const v = Math.sin((cycle + 1) * 12.9898 + 78.233) * 43758.5453;
  return (v - Math.floor(v)) * 2 - 1;
}

function getLfoValueAtTime(timeSec) {
  const phase = getLfoPhaseAtTime(timeSec);

  if (lfoShape === "sine") {
    return Math.sin(phase * Math.PI * 2);
  }

  if (lfoShape === "triangle") {
    return 1 - 4 * Math.abs(phase - 0.5);
  }

  if (lfoShape === "rampUp") {
    return phase * 2 - 1;
  }

  if (lfoShape === "rampDown") {
    return 1 - phase * 2;
  }

  if (lfoShape === "randomSH") {
    const rateHz = Math.max(0.001, getLfoRateHz());
    const cycle = Math.floor((timeSec - lfoSyncStartTime) * rateHz);
    return getSampleHoldValueForCycle(cycle);
  }

  return phase < 0.5 ? 1 : -1;
}

function buildLfoCurve(startTime, duration, sampleCount = 96) {
  const safeDuration = Math.max(duration, 0.01);
  const size = Math.max(2, sampleCount);
  const curve = new Float32Array(size);
  for (let i = 0; i < size; i += 1) {
    const frac = i / (size - 1);
    const t = startTime + frac * safeDuration;
    curve[i] = getLfoValueAtTime(t);
  }
  return curve;
}

function getReleaseWithLfo(baseRelease, timeSec, minRelease = 0.02, maxRelease = 2.2) {
  let release = THREE.MathUtils.clamp(baseRelease, minRelease, maxRelease);

  if (lfoTarget !== "ampRelease" || lfoAmount <= 0) {
    return release;
  }

  // Amp Release LFO adds milliseconds on top of the FX MOD release control.
  const lfoValue = getLfoValueAtTime(timeSec);
  const normalized = THREE.MathUtils.clamp((lfoValue + 1) * 0.5, 0, 1);
  const releaseAddSeconds = normalized * lfoAmount * lfoReleaseAddMaxSeconds;
  release += releaseAddSeconds;
  return THREE.MathUtils.clamp(release, minRelease, maxRelease + lfoReleaseAddMaxSeconds);
}

function createVoiceModFilter(timeSec) {
  const filter = audioCtx.createBiquadFilter();
  filter.type = modFilterType;
  filter.frequency.setValueAtTime(modFilterCutoffHz, timeSec);
  filter.Q.setValueAtTime(modFilterType === "bandpass" ? 1.2 : 0.8, timeSec);
  return filter;
}

function applyPitchLfo(detuneParams, startTime, duration) {
  if (lfoTarget !== "pitch" || lfoAmount <= 0) {
    return;
  }

  const baseCurve = buildLfoCurve(startTime, duration);
  const depthCents = lfoAmount * 1200;
  const curve = new Float32Array(baseCurve.length);
  for (let i = 0; i < baseCurve.length; i += 1) {
    curve[i] = baseCurve[i] * depthCents;
  }

  for (let i = 0; i < detuneParams.length; i += 1) {
    const param = detuneParams[i];
    if (!param) {
      continue;
    }
    param.cancelScheduledValues(startTime);
    param.setValueAtTime(0, startTime);
    param.setValueCurveAtTime(curve, startTime, Math.max(duration, 0.01));
  }
}

function applyAmplitudeLfo(gainParam, startTime, duration) {
  if (lfoTarget !== "amplitude" || lfoAmount <= 0 || !gainParam) {
    return;
  }

  const baseCurve = buildLfoCurve(startTime, duration);
  const depth = lfoAmount * 0.95;
  const curve = new Float32Array(baseCurve.length);
  for (let i = 0; i < baseCurve.length; i += 1) {
    curve[i] = THREE.MathUtils.clamp(1 + baseCurve[i] * depth, 0.05, 2);
  }

  gainParam.cancelScheduledValues(startTime);
  gainParam.setValueAtTime(1, startTime);
  gainParam.setValueCurveAtTime(curve, startTime, Math.max(duration, 0.01));
}

function applyFilterLfo(filterNode, startTime, duration) {
  if (lfoTarget !== "filterCutoff" || lfoAmount <= 0 || !filterNode) {
    return;
  }

  const baseCurve = buildLfoCurve(startTime, duration);
  const depthHz = modFilterCutoffHz * lfoAmount * 0.95;
  const curve = new Float32Array(baseCurve.length);
  for (let i = 0; i < baseCurve.length; i += 1) {
    curve[i] = THREE.MathUtils.clamp(modFilterCutoffHz + baseCurve[i] * depthHz, 120, 12000);
  }

  filterNode.frequency.cancelScheduledValues(startTime);
  filterNode.frequency.setValueAtTime(modFilterCutoffHz, startTime);
  filterNode.frequency.setValueCurveAtTime(curve, startTime, Math.max(duration, 0.01));
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

function makeNoteLabel(text, isCenter = false) {
  if (!spinnerNoteLayer) {
    return null;
  }

  const el = document.createElement("div");
  el.className = isCenter ? "noteLabel noteLabelCenter" : "noteLabel noteLabelWing";
  el.textContent = text;
  spinnerNoteLayer.appendChild(el);
  return el;
}

function clearNoteSprites() {
  if (rootNoteLabelEl) {
    rootNoteLabelEl.remove();
    rootNoteLabelEl = null;
  }

  for (let i = 0; i < wingNoteLabelEls.length; i += 1) {
    const label = wingNoteLabelEls[i];
    label.remove();
  }
  wingNoteLabelEls = [];

  if (bassRootNoteLabelEl) {
    bassRootNoteLabelEl.remove();
    bassRootNoteLabelEl = null;
  }

  for (let i = 0; i < bassWingNoteLabelEls.length; i += 1) {
    const label = bassWingNoteLabelEls[i];
    label.remove();
  }
  bassWingNoteLabelEls = [];
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
  const orderedScale = bassInvertScale ? [...scale].reverse() : scale;
  const bassStepCount = getBassStepCount();
  const notes = [];
  const displayedRootMidi = getDisplayedRootMidi();
  const targetBassMidi = bassToneLocked ? displayedRootMidi - 24 : displayedRootMidi + bassPitchOffset;

  let bestBass = displayedRootMidi - 24;
  let bestDist = Number.POSITIVE_INFINITY;
  for (let octave = -6; octave <= 2; octave += 1) {
    const octaveOffset = octave * 12;
    for (let i = 0; i < orderedScale.length; i += 1) {
      const cand = displayedRootMidi + orderedScale[i] + octaveOffset;
      const dist = Math.abs(cand - targetBassMidi);
      if (dist < bestDist) {
        bestDist = dist;
        bestBass = cand;
      }
    }
  }
  bassRootMidi = bestBass;

  for (let i = 0; i < bassStepCount; i += 1) {
    const idx = i % orderedScale.length;
    const octaveLift = Math.floor(i / orderedScale.length) * 12;
    notes.push(bassRootMidi + orderedScale[idx] + octaveLift);
  }

  return notes;
}

function rebuildNoteSprites() {
  clearNoteSprites();

  rootNoteLabelEl = makeNoteLabel(midiToNoteNameWithOctave(getDisplayedRootMidi()), true);
  if (rootNoteLabelEl) {
    rootNoteLabelEl.style.display = "block";
  }

  for (let i = 0; i < wingCount; i += 1) {
    const label = makeNoteLabel(wingAssignedLabels[i] || "-");
    if (!label) {
      continue;
    }
    label.style.display = "block";
    wingNoteLabelEls.push(label);
  }

  bassRootNoteLabelEl = makeNoteLabel(midiToNoteNameWithOctave(bassRootMidi), true);
  if (bassRootNoteLabelEl) {
    bassRootNoteLabelEl.style.display = "block";
  }

  const bassSteps = getBassStepCount();
  for (let i = 0; i < bassSteps; i += 1) {
    const label = makeNoteLabel(midiToNoteNameWithOctave(bassAssignedMidis[i] ?? bassRootMidi));
    if (!label) {
      continue;
    }
    label.style.display = "block";
    bassWingNoteLabelEls.push(label);
  }
}

function setLabelScreenPosition(labelEl, worldPosition) {
  if (!labelEl) {
    return;
  }

  tmpScreen.copy(worldPosition).project(camera);
  const visible = tmpScreen.z >= -1 && tmpScreen.z <= 1;
  if (!visible) {
    labelEl.style.display = "none";
    return;
  }

  const screenX = (tmpScreen.x * 0.5 + 0.5) * window.innerWidth;
  const screenY = (-tmpScreen.y * 0.5 + 0.5) * window.innerHeight;
  labelEl.style.display = "block";
  labelEl.style.left = `${screenX}px`;
  labelEl.style.top = `${screenY}px`;
}

function updateNoteLabelPositions() {
  if (!spinnerNoteLayer) {
    return;
  }

  stabilizer.updateMatrixWorld(true);

  if (rootNoteLabelEl) {
    tmpWorld.set(mainSpinnerX, spinner.position.y, 0.08).applyMatrix4(stabilizer.matrixWorld);
    setLabelScreenPosition(rootNoteLabelEl, tmpWorld);
  }

  const armRadius = getArmRadiusForSteps(wingCount, mainSpinnerScale);
  for (let i = 0; i < wingNoteLabelEls.length; i += 1) {
    const label = wingNoteLabelEls[i];
    const angle = (i / wingCount) * Math.PI * 2;
    tmpWorld.set(Math.cos(angle) * armRadius, Math.sin(angle) * armRadius, 0.08).applyMatrix4(spinner.matrixWorld);
    setLabelScreenPosition(label, tmpWorld);
  }

  if (bassRootNoteLabelEl) {
    tmpWorld.set(getBassSpinnerX(), bassSpinner.position.y, 0.08).applyMatrix4(stabilizer.matrixWorld);
    setLabelScreenPosition(bassRootNoteLabelEl, tmpWorld);
  }

  const bassSteps = getBassStepCount();
  const bassArmRadius = getArmRadiusForSteps(bassSteps, bassScaleFactor);
  for (let i = 0; i < bassWingNoteLabelEls.length; i += 1) {
    const label = bassWingNoteLabelEls[i];
    const angle = (i / Math.max(1, bassSteps)) * Math.PI * 2;
    tmpWorld.set(Math.cos(angle) * bassArmRadius, Math.sin(angle) * bassArmRadius, 0.08).applyMatrix4(bassSpinner.matrixWorld);
    setLabelScreenPosition(label, tmpWorld);
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
  const yMain = spinner.position.y;
  const yBass = bassSpinner.position.y;
  clearNoteSprites();
  stabilizer.remove(pulleyVisual);
  stabilizer.remove(spinner);
  stabilizer.remove(bassSpinner);

  spinner = makeFidgetSpinner(wingCount, mainSpinnerScale);
  bassSpinner = makeFidgetSpinner(getBassStepCount(), bassScaleFactor);
  pulleyVisual = makePulleyVisual();

  spinner.position.x = mainSpinnerX;
  spinner.position.y = yMain;
  bassSpinner.position.x = getBassSpinnerX();
  bassSpinner.position.y = yBass;

  stabilizer.add(pulleyVisual);
  stabilizer.add(spinner);
  stabilizer.add(bassSpinner);
  updatePulleyVisual(spinner.position.y, bassSpinner.position.y);
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

function clampCurrentRootMidiToOctaveRange() {
  const noteName = semitoneToNoteName(currentRootMidi);
  const baseMidiForNote = BASE_OCTAVE_MIDI + ROOT_NOTE_TO_SEMITONE[noteName];
  const limitedOffset = THREE.MathUtils.clamp(Math.round((currentRootMidi - baseMidiForNote) / 12), -octaveRange, octaveRange);
  currentRootMidi = baseMidiForNote + limitedOffset * 12;
  syncRootControlsFromMidi();
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

function syncBassStepControls() {
  const defaultSteps = getDefaultBassStepCount();
  if (bassStepsLocked) {
    bassManualStepCount = defaultSteps;
  }

  if (bassStepsSlider) {
    bassStepsSlider.min = "3";
    bassStepsSlider.max = "9";
    bassStepsSlider.value = String(getBassStepCount());
    bassStepsSlider.disabled = bassStepsLocked;
  }

  if (bassStepsValue) {
    bassStepsValue.textContent = String(getBassStepCount());
  }

  if (bassStepsControl) {
    bassStepsControl.classList.toggle("isDisabled", bassStepsLocked);
  }
}

function syncBassToneLockUi() {
  if (bassPitchSlider) {
    bassPitchSlider.disabled = bassToneLocked;
  }

  if (bassPitchControl) {
    bassPitchControl.classList.toggle("isDisabled", bassToneLocked);
  }
}

function updateBassReleaseValueLabel(seconds) {
  if (bassEnvReleaseValue) {
    bassEnvReleaseValue.textContent = `${Math.round(seconds * 1000)}ms`;
  }
}

function syncBassReleaseLockUi() {
  if (bassEnvReleaseSlider) {
    bassEnvReleaseSlider.disabled = bassReleaseLocked;
    if (bassReleaseLocked) {
      bassEnvelopeReleaseSeconds = envelopeReleaseSeconds;
      bassEnvReleaseSlider.value = envelopeReleaseSeconds.toFixed(2);
    }
  }

  if (bassReleaseControl) {
    bassReleaseControl.classList.toggle("isDisabled", bassReleaseLocked);
  }

  updateBassReleaseValueLabel(bassReleaseLocked ? envelopeReleaseSeconds : bassEnvelopeReleaseSeconds);
}

if (bassEngineToggle) {
  bassEnabled = bassEngineToggle.checked;
  bassEngineToggle.addEventListener("change", () => {
    bassEnabled = bassEngineToggle.checked;
    statusEl.textContent = bassEnabled ? "Bass engine on." : "Bass engine off.";
  });
}

if (bassInvertScaleToggle) {
  bassInvertScale = bassInvertScaleToggle.checked;
  bassInvertScaleToggle.addEventListener("change", () => {
    bassInvertScale = bassInvertScaleToggle.checked;
    refreshWingAssignments();
    statusEl.textContent = bassInvertScale ? "Bass scale inverted." : "Bass scale normal order.";
  });
}

if (bassLockToneToggle) {
  bassToneLocked = bassLockToneToggle.checked;
  bassLockToneToggle.addEventListener("change", () => {
    bassToneLocked = bassLockToneToggle.checked;
    syncBassToneLockUi();
    refreshWingAssignments();
  });
}

if (bassLockStepsToggle) {
  bassStepsLocked = bassLockStepsToggle.checked;
  bassLockStepsToggle.addEventListener("change", () => {
    bassStepsLocked = bassLockStepsToggle.checked;
    syncBassStepControls();
    rebuildSpinnerGeometry();
    refreshWingAssignments();
  });
}

if (bassStepsSlider) {
  bassManualStepCount = THREE.MathUtils.clamp(Number(bassStepsSlider.value || getDefaultBassStepCount()), 3, 9);
  bassStepsSlider.addEventListener("input", () => {
    if (bassStepsLocked) {
      return;
    }
    bassManualStepCount = THREE.MathUtils.clamp(Number(bassStepsSlider.value), 3, 9);
    syncBassStepControls();
    rebuildSpinnerGeometry();
    refreshWingAssignments();
  });
}

if (bassLockReleaseToggle) {
  bassReleaseLocked = bassLockReleaseToggle.checked;
  bassLockReleaseToggle.addEventListener("change", () => {
    bassReleaseLocked = bassLockReleaseToggle.checked;
    syncBassReleaseLockUi();
  });
}

if (bassEnvReleaseSlider) {
  bassEnvelopeReleaseSeconds = THREE.MathUtils.clamp(Number(bassEnvReleaseSlider.value || 0.31), 0.03, 1.2);
  bassEnvReleaseSlider.addEventListener("input", () => {
    if (bassReleaseLocked) {
      return;
    }
    bassEnvelopeReleaseSeconds = THREE.MathUtils.clamp(Number(bassEnvReleaseSlider.value), 0.03, 1.2);
    updateBassReleaseValueLabel(bassEnvelopeReleaseSeconds);
  });
}

syncBassToneLockUi();
syncBassStepControls();
syncBassReleaseLockUi();

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
    syncBassStepControls();
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
    syncBassStepControls();
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

if (volumeSlider && volumeValue) {
  const updateVolumeUi = () => {
    const pct = THREE.MathUtils.clamp(Number(volumeSlider.value), 0, 100);
    masterVolume = pct / 100;
    volumeValue.textContent = `${pct}%`;
    if (masterOutGain && audioCtx) {
      masterOutGain.gain.setTargetAtTime(masterVolume, audioCtx.currentTime, 0.02);
    }
  };

  volumeSlider.addEventListener("input", updateVolumeUi);
  updateVolumeUi();
}

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
    octaveRange = THREE.MathUtils.clamp(Number(octaveRangeSlider.value), 0, 10);
    clampCurrentRootMidiToOctaveRange();
    octaveRangeValue.textContent = `+/-${octaveRange}`;
    resetArpSequence();
    refreshWingAssignments();
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

if (bassPitchSlider && bassPitchValue) {
  const updateBassPitchUi = () => {
    if (bassToneLocked) {
      return;
    }
    bassPitchOffset = THREE.MathUtils.clamp(Number(bassPitchSlider.value), -24, 24);
    bassPitchValue.textContent = `${bassPitchOffset >= 0 ? "+" : ""}${bassPitchOffset} st`;
    refreshWingAssignments();
  };

  bassPitchSlider.addEventListener("input", updateBassPitchUi);
  updateBassPitchUi();
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
  transportToggleBtn.textContent = transportPlaying ? "\u25A0" : "\u25B6";
  transportToggleBtn.setAttribute("aria-label", transportPlaying ? "Stop" : "Play");
}

if (transportToggleBtn) {
  transportToggleBtn.addEventListener("click", () => {
    transportPlaying = !transportPlaying;
    if (!transportPlaying) {
      arpClockAccumulator = 0;
      bassTickCounter = 0;
      statusEl.textContent = "Transport stopped.";
    } else {
      if (audioCtx) {
        lfoSyncStartTime = audioCtx.currentTime;
      }
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
  if (lfoRateValue) {
    lfoRateValue.textContent = formatRateDivision(lfoRateDivision);
  }
  if (lfoAmountValue) {
    lfoAmountValue.textContent = `${Math.round(lfoAmount * 100)}%`;
  }
  if (modFilterTypeValue) {
    if (modFilterType === "highpass") {
      modFilterTypeValue.textContent = "HP";
    } else if (modFilterType === "bandpass") {
      modFilterTypeValue.textContent = "BP";
    } else {
      modFilterTypeValue.textContent = "LP";
    }
  }
  if (modFilterCutoffValue) {
    modFilterCutoffValue.textContent = `${Math.round(modFilterCutoffHz)}Hz`;
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
  if (sliderEl.disabled) {
    return;
  }

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
    if (sliderEl.disabled) {
      return;
    }

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
  const fxControls = document.querySelectorAll(".modModal .fxControl");
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
  masterOutGain = audioCtx.createGain();
  reverbSendGain = audioCtx.createGain();
  reverbConvolver = audioCtx.createConvolver();
  reverbWetGain = audioCtx.createGain();
  delaySendGain = audioCtx.createGain();
  delayNode = audioCtx.createDelay(0.25);
  delayFeedbackGain = audioCtx.createGain();
  delayWetGain = audioCtx.createGain();

  masterDryGain.gain.value = 0.92;
  masterOutGain.gain.value = masterVolume;
  reverbSendGain.gain.value = 0.34;
  reverbWetGain.gain.value = 0.45;
  delaySendGain.gain.value = 0.28;
  delayNode.delayTime.value = delayTimeSeconds;
  delayFeedbackGain.gain.value = delayAmount;
  delayWetGain.gain.value = 0.6;

  masterDryGain.connect(masterOutGain);
  reverbSendGain.connect(reverbConvolver);
  reverbConvolver.connect(reverbWetGain);
  reverbWetGain.connect(masterOutGain);

  delaySendGain.connect(delayNode);
  delayNode.connect(delayFeedbackGain);
  delayFeedbackGain.connect(delayNode);
  delayNode.connect(delayWetGain);
  delayWetGain.connect(masterOutGain);
  masterOutGain.connect(audioCtx.destination);

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
  if (audioReady && lfoSyncStartTime === 0) {
    lfoSyncStartTime = audioCtx.currentTime;
  }
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

  const release = getReleaseWithLfo(envelopeReleaseSeconds, t, 0.02, 1.2);
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
    const ampMod = audioCtx.createGain();
    const gain = audioCtx.createGain();
    const voiceFilter = createVoiceModFilter(t);
    const brightness = THREE.MathUtils.clamp(speed / maxSpin, 0, 1);
    const baseFreq = midiToFreq(getDisplayedRootMidi() + 12);
    const release = getReleaseWithLfo(envelopeReleaseSeconds, t, 0.02, 1.2);
    const lfoDuration = release + 0.02;

    osc.type = "sine";
    osc.frequency.setValueAtTime(baseFreq, t);

    ampMod.gain.setValueAtTime(1, t);
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(0.01 + brightness * 0.01, t + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + release);

    applyPitchLfo([osc.detune], t, lfoDuration);
    applyAmplitudeLfo(ampMod.gain, t, lfoDuration);
    applyFilterLfo(voiceFilter, t, lfoDuration);

    osc.connect(voiceFilter);
    voiceFilter.connect(ampMod);
    ampMod.connect(gain);
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
    const ampMod = audioCtx.createGain();
    const gain = audioCtx.createGain();
    const voiceFilter = createVoiceModFilter(t);
    const brightness = THREE.MathUtils.clamp(speed / maxSpin, 0, 1);
    const noteFreq = getSoftToneFreq(speed);
    const baseRelease = THREE.MathUtils.clamp(envelopeReleaseSeconds * 1.35, 0.05, 0.7);
    const release = getReleaseWithLfo(baseRelease, t, 0.05, 0.7);
    const lfoDuration = release + 0.02;

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

    ampMod.gain.setValueAtTime(1, t);
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(0.01 + brightness * 0.01, t + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + release);

    applyPitchLfo([pitchOsc.detune, breathOsc.detune], t, lfoDuration);
    applyAmplitudeLfo(ampMod.gain, t, lfoDuration);
    applyFilterLfo(voiceFilter, t, lfoDuration);

    pitchOsc.connect(formant);
    breathOsc.connect(formant);
    formant.connect(body);
    body.connect(voiceFilter);
    voiceFilter.connect(ampMod);
    ampMod.connect(gain);
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
    const ampMod = audioCtx.createGain();
    const gain = audioCtx.createGain();
    const voiceFilter = createVoiceModFilter(t);
    const brightness = THREE.MathUtils.clamp(speed / maxSpin, 0, 1);
    const baseFreq = getSoftToneFreq(speed, angularVelocity < 0);
    const release = getReleaseWithLfo(envelopeReleaseSeconds, t, 0.02, 1.2);
    const lfoDuration = release + 0.02;

    osc.type = "triangle";
    sub.type = "sine";
    osc.frequency.setValueAtTime(baseFreq, t);
    sub.frequency.setValueAtTime(baseFreq * 0.5, t);

    ampMod.gain.setValueAtTime(1, t);
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(0.013 + brightness * 0.01, t + 0.006);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + release);

    applyPitchLfo([osc.detune, sub.detune], t, lfoDuration);
    applyAmplitudeLfo(ampMod.gain, t, lfoDuration);
    applyFilterLfo(voiceFilter, t, lfoDuration);

    osc.connect(voiceFilter);
    sub.connect(voiceFilter);
    voiceFilter.connect(ampMod);
    ampMod.connect(gain);
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
    const ampMod = audioCtx.createGain();
    const gain = audioCtx.createGain();
    const voiceFilter = createVoiceModFilter(t);
    const brightness = THREE.MathUtils.clamp(speed / maxSpin, 0, 1);
    const pool = bassAssignedMidis.length ? bassAssignedMidis : [getDisplayedRootMidi() - 24, getDisplayedRootMidi() - 17];
    const baseIdx = ((bassStepIndex % pool.length) + pool.length) % pool.length;
    const idx = angularVelocity < 0 ? pool.length - 1 - baseIdx : baseIdx;
    const bassMidi = pool[idx];
    bassStepIndex = (bassStepIndex + 1) % pool.length;
    const bassFreq = midiToFreq(bassMidi);
    const baseRelease = bassReleaseLocked ? envelopeReleaseSeconds : bassEnvelopeReleaseSeconds;
    const release = getReleaseWithLfo(baseRelease, t, 0.03, 1.2);
    const lfoDuration = release + 0.05;

    osc.type = "triangle";
    sub.type = "sine";
    osc.frequency.setValueAtTime(bassFreq, t);
    sub.frequency.setValueAtTime(bassFreq * 0.5, t);

    body.type = "lowpass";
    body.frequency.setValueAtTime(220 + brightness * 120, t);
    body.Q.setValueAtTime(0.9, t);

    ampMod.gain.setValueAtTime(1, t);
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(0.024 + brightness * 0.02, t + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + release);

    applyPitchLfo([osc.detune, sub.detune], t, lfoDuration);
    applyAmplitudeLfo(ampMod.gain, t, lfoDuration);
    applyFilterLfo(voiceFilter, t, lfoDuration);

    osc.connect(body);
    sub.connect(body);
    body.connect(voiceFilter);
    voiceFilter.connect(ampMod);
    ampMod.connect(gain);
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
      if (bassEnabled && bassTickCounter % 2 === 0 && now - lastBassNoteTime >= minBassTickMs) {
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
  bassSpinner.position.x = THREE.MathUtils.lerp(bassSpinner.position.x, getBassSpinnerX(), 0.2);
  updateNoteLabelPositions();

  const octaveVisualOffset = THREE.MathUtils.clamp(rootOctaveOffset, -octaveRange, octaveRange) * 0.42;
  const targetSpinnerY = octaveVisualOffset + shiftDragOffsetY;
  spinner.position.y = THREE.MathUtils.lerp(spinner.position.y, targetSpinnerY, 0.18);
  const bassRelativeOctave = THREE.MathUtils.clamp((bassRootMidi - getDisplayedRootMidi()) / 12, -4, 4);
  const targetBassY = bassRelativeOctave * 0.34 + bassDragOffsetY;
  bassSpinner.position.y = THREE.MathUtils.lerp(bassSpinner.position.y, targetBassY, 0.14);
  updatePulleyVisual(spinner.position.y, bassSpinner.position.y);

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

if (motionBtn) {
  motionBtn.addEventListener("pointerdown", (event) => {
    event.stopPropagation();
    unlockAudio().catch(() => {
      statusEl.textContent = "Audio blocked by browser. Keep interacting to enable sound.";
    });

    toggleMotion().catch(() => {
      statusEl.textContent = "Motion unavailable on this device/browser.";
    });
  });
}

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
    if (bassReleaseLocked) {
      syncBassReleaseLockUi();
    }
    updateFxLabels();
  });
}

if (delayTimeSlider) {
  delayTimeSlider.addEventListener("input", () => {
    delayTimeSeconds = THREE.MathUtils.clamp(Number(delayTimeSlider.value), delayTimeMinSeconds, delayTimeMaxSeconds);
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

if (lfoShapeSelect) {
  lfoShapeSelect.addEventListener("change", () => {
    lfoShape = lfoShapeSelect.value;
  });
}

if (lfoRateSelect) {
  lfoRateSelect.addEventListener("change", () => {
    lfoRateDivision = THREE.MathUtils.clamp(Number(lfoRateSelect.value), 0.5, 128);
    updateFxLabels();
  });
}

if (lfoAmountSlider) {
  lfoAmountSlider.addEventListener("input", () => {
    lfoAmount = THREE.MathUtils.clamp(Number(lfoAmountSlider.value) / 100, 0, 1);
    updateFxLabels();
  });
}

if (lfoTargetSelect) {
  lfoTargetSelect.addEventListener("change", () => {
    lfoTarget = lfoTargetSelect.value;
  });
}

if (modFilterTypeSelect) {
  modFilterTypeSelect.addEventListener("change", () => {
    modFilterType = modFilterTypeSelect.value;
    updateFxLabels();
  });
}

if (modFilterCutoffSlider) {
  modFilterCutoffSlider.addEventListener("input", () => {
    modFilterCutoffHz = THREE.MathUtils.clamp(Number(modFilterCutoffSlider.value), 120, 12000);
    updateFxLabels();
  });
}

updateFxLabels();
setupFxContainerSwipes();
