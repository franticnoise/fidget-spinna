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
const filterBtn = document.getElementById("filterBtn");
const mod1Btn = document.getElementById("mod1Btn");
const mod2Btn = document.getElementById("mod2Btn");
const fxModal = document.getElementById("fxModal");
const filterModal = document.getElementById("filterModal");
const mod1Modal = document.getElementById("mod1Modal");
const mod2Modal = document.getElementById("mod2Modal");
const spinnerNoteLayer = document.getElementById("spinnerNoteLayer");
const statusEl = document.getElementById("status");
const soundSourceSelect = document.getElementById("soundSourceSelect");
const tempoInput = document.getElementById("tempoInput");
const minArpRateSelect = document.getElementById("minArpRateSelect");
const maxArpRateSelect = document.getElementById("maxArpRateSelect");
const minArpRateValue = document.getElementById("minArpRateValue");
const maxArpRateValue = document.getElementById("maxArpRateValue");
const transportToggleBtn = document.getElementById("transportToggleBtn");
const muteToggle = document.getElementById("muteToggle");
const hapticsToggle = document.getElementById("hapticsToggle");
const volumeSlider = document.getElementById("volumeSlider");
const volumeValue = document.getElementById("volumeValue");
const presetSelect = document.getElementById("presetSelect");
const savePresetBtn = document.getElementById("savePresetBtn");
const renamePresetBtn = document.getElementById("renamePresetBtn");
const deletePresetBtn = document.getElementById("deletePresetBtn");
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
const bassRandomizeScaleToggle = document.getElementById("bassRandomizeScaleToggle");
const bassLockToneToggle = document.getElementById("bassLockToneToggle");
const bassLockStepsToggle = document.getElementById("bassLockStepsToggle");
const bassLockReleaseToggle = document.getElementById("bassLockReleaseToggle");
const bassLockRateToggle = document.getElementById("bassLockRateToggle");
const bassStepsSlider = document.getElementById("bassStepsSlider");
const bassStepsValue = document.getElementById("bassStepsValue");
const bassPitchControl = document.getElementById("bassPitchControl");
const bassStepsControl = document.getElementById("bassStepsControl");
const bassReleaseControl = document.getElementById("bassReleaseControl");
const bassRateControl = document.getElementById("bassRateControl");
const bassPitchSlider = document.getElementById("bassPitchSlider");
const bassPitchValue = document.getElementById("bassPitchValue");
const bassRateSlider = document.getElementById("bassRateSlider");
const bassRateValue = document.getElementById("bassRateValue");
const bassEnvReleaseSlider = document.getElementById("bassEnvReleaseSlider");
const bassEnvReleaseValue = document.getElementById("bassEnvReleaseValue");
const bassWaveformSelect = document.getElementById("bassWaveformSelect");
const bassWaveformValue = document.getElementById("bassWaveformValue");
const bassFilterTypeSelect = document.getElementById("bassFilterTypeSelect");
const bassFilterTypeValue = document.getElementById("bassFilterTypeValue");
const bassFilterFreqSlider = document.getElementById("bassFilterFreqSlider");
const bassFilterFreqValue = document.getElementById("bassFilterFreqValue");
const bassFilterResSlider = document.getElementById("bassFilterResSlider");
const bassFilterResValue = document.getElementById("bassFilterResValue");
const arpDirectionSelect = document.getElementById("arpDirectionSelect");
const arpDistanceSlider = document.getElementById("arpDistanceSlider");
const arpDistanceValue = document.getElementById("arpDistanceValue");
const arpGateSlider = document.getElementById("arpGateSlider");
const arpGateValue = document.getElementById("arpGateValue");
const reverbDecaySlider = document.getElementById("reverbDecaySlider");
const reverbDecayValue = document.getElementById("reverbDecayValue");
const envReleaseSlider = document.getElementById("envReleaseSlider");
const envReleaseValue = document.getElementById("envReleaseValue");
const delayTimeSlider = document.getElementById("delayTimeSlider");
const delayTimeValue = document.getElementById("delayTimeValue");
const delayAmountSlider = document.getElementById("delayAmountSlider");
const delayAmountValue = document.getElementById("delayAmountValue");
const beatRepeaterToggle = document.getElementById("beatRepeaterToggle");
const beatRepeaterIntervalSelect = document.getElementById("beatRepeaterIntervalSelect");
const beatRepeaterGridSelect = document.getElementById("beatRepeaterGridSelect");
const beatRepHoldBtn = document.getElementById("beatRepHoldBtn");
const stepsSlider = document.getElementById("stepsSlider");
const stepsValue = document.getElementById("stepsValue");
const pitchSemitoneSlider = document.getElementById("pitchSemitoneSlider");
const pitchSemitoneValue = document.getElementById("pitchSemitoneValue");
const lfoShapeSelect = document.getElementById("lfoShapeSelect");
const lfoRateSelect = document.getElementById("lfoRateSelect");
const lfoRateValue = document.getElementById("lfoRateValue");
const lfoTrace1 = document.getElementById("lfoTrace1");
const lfoTrace2 = document.getElementById("lfoTrace2");
const lfoTraceTitle1 = document.getElementById("lfoTraceTitle1");
const lfoTraceTitle2 = document.getElementById("lfoTraceTitle2");
const lfoTraceLine1 = document.getElementById("lfoTraceLine1");
const lfoTraceLine2 = document.getElementById("lfoTraceLine2");
const lfoAmountSlider = document.getElementById("lfoAmountSlider");
const lfoAmountValue = document.getElementById("lfoAmountValue");
const lfoTargetSelect = document.getElementById("lfoTargetSelect");
const lfoShapePreview1 = document.getElementById("lfoShapePreview1");
const lfoShapeSelect2 = document.getElementById("lfoShapeSelect2");
const lfoRateSelect2 = document.getElementById("lfoRateSelect2");
const lfoRateValue2 = document.getElementById("lfoRateValue2");
const lfoAmountSlider2 = document.getElementById("lfoAmountSlider2");
const lfoAmountValue2 = document.getElementById("lfoAmountValue2");
const lfoTargetSelect2 = document.getElementById("lfoTargetSelect2");
const lfoShapePreview2 = document.getElementById("lfoShapePreview2");
const filter1FreqSlider = document.getElementById("filter1FreqSlider");
const filter1FreqValue = document.getElementById("filter1FreqValue");
const filter1ResSlider = document.getElementById("filter1ResSlider");
const filter1ResValue = document.getElementById("filter1ResValue");
const filter1TypeSelect = document.getElementById("filter1TypeSelect");
const filter1TypeValue = document.getElementById("filter1TypeValue");
const filter1DepthSelect = document.getElementById("filter1DepthSelect");
const filter1DepthValue = document.getElementById("filter1DepthValue");
const filter2FreqSlider = document.getElementById("filter2FreqSlider");
const filter2FreqValue = document.getElementById("filter2FreqValue");
const filter2ResSlider = document.getElementById("filter2ResSlider");
const filter2ResValue = document.getElementById("filter2ResValue");
const filter2TypeSelect = document.getElementById("filter2TypeSelect");
const filter2TypeValue = document.getElementById("filter2TypeValue");
const filter2DepthSelect = document.getElementById("filter2DepthSelect");
const filter2DepthValue = document.getElementById("filter2DepthValue");
const isMobile = window.matchMedia("(pointer: coarse)").matches;
const ARP_RATE_DIVISIONS = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512];
const ARP_RATE_MAX_INDEX = ARP_RATE_DIVISIONS.length - 1;
const LFO_RATE_DIVISIONS = [0.5, 1, 2, 4, 8, 16, 32, 64, 128];
const LFO_RATE_MAX_INDEX = LFO_RATE_DIVISIONS.length - 1;

function snapArpRateDivision(value, fallback = 8) {
  const raw = Number.isFinite(value) ? value : fallback;
  let best = ARP_RATE_DIVISIONS[0];
  let bestDistance = Infinity;

  for (const division of ARP_RATE_DIVISIONS) {
    const distance = Math.abs(Math.log2(Math.max(raw, 1) / division));
    if (distance < bestDistance) {
      bestDistance = distance;
      best = division;
    }
  }

  return best;
}

function getArpRateIndexFromDivision(value, fallback = 8) {
  const division = snapArpRateDivision(value, fallback);
  const index = ARP_RATE_DIVISIONS.indexOf(division);
  return index >= 0 ? index : ARP_RATE_DIVISIONS.indexOf(snapArpRateDivision(fallback, 8));
}

function getArpRateDivisionFromControl(controlEl, fallback = 8) {
  if (!controlEl) {
    return fallback;
  }
  const rawIndex = THREE.MathUtils.clamp(Math.round(Number(controlEl.value)), 0, ARP_RATE_MAX_INDEX);
  return ARP_RATE_DIVISIONS[rawIndex];
}

function getLfoRateIndexFromDivision(value, fallback = 16) {
  const raw = Number.isFinite(value) ? value : fallback;
  let bestIndex = 0;
  let bestDistance = Infinity;

  for (let i = 0; i < LFO_RATE_DIVISIONS.length; i += 1) {
    const distance = Math.abs(Math.log2(Math.max(raw, 0.25) / LFO_RATE_DIVISIONS[i]));
    if (distance < bestDistance) {
      bestDistance = distance;
      bestIndex = i;
    }
  }

  return bestIndex;
}

function getLfoRateDivisionFromControl(controlEl, fallback = 16) {
  if (!controlEl) {
    return fallback;
  }
  const rawIndex = THREE.MathUtils.clamp(Math.round(Number(controlEl.value)), 0, LFO_RATE_MAX_INDEX);
  return LFO_RATE_DIVISIONS[rawIndex];
}

function readArpRateControlValue(controlEl, fallback = 8) {
  return getArpRateDivisionFromControl(controlEl, fallback);
}

let settingsOpen = false;
let arpOpen = false;
let bassOpen = false;
let toastHideTimer = null;
let toastClearTimer = null;
const PRESET_STORAGE_KEY = "fidget-spinna.presets.v1";
const PRESET_BUNDLE_URL = "./presets.bundle.json";
let savedPresets = [];

const PRESET_CONTROL_DEFS = [
  { key: "soundSourceMode", element: soundSourceSelect, eventName: "change", kind: "value" },
  { key: "muted", element: muteToggle, eventName: "change", kind: "checked" },
  { key: "noHaptics", element: hapticsToggle, eventName: "change", kind: "checked" },
  { key: "masterVolume", element: volumeSlider, eventName: "input", kind: "value" },
  { key: "tempoBpm", element: tempoInput, eventName: "input", kind: "value" },
  { key: "minArpRate", element: minArpRateSelect, eventName: "input", kind: "value" },
  { key: "maxArpRate", element: maxArpRateSelect, eventName: "input", kind: "value" },
  { key: "rootNote", element: rootNoteSelect, eventName: "change", kind: "value" },
  { key: "scale", element: scaleSelect, eventName: "change", kind: "value" },
  { key: "wingCount", element: wingCountSlider, eventName: "input", kind: "value" },
  { key: "octaveRange", element: octaveRangeSlider, eventName: "input", kind: "value" },
  { key: "baseOctave", element: baseOctaveSlider, eventName: "input", kind: "value" },
  { key: "arpDirection", element: arpDirectionSelect, eventName: "change", kind: "value" },
  { key: "arpDistance", element: arpDistanceSlider, eventName: "input", kind: "value" },
  { key: "arpGate", element: arpGateSlider, eventName: "input", kind: "value" },
  { key: "bassEnabled", element: bassEngineToggle, eventName: "change", kind: "checked" },
  { key: "bassInvertScale", element: bassInvertScaleToggle, eventName: "change", kind: "checked" },
  { key: "bassRandomizeScale", element: bassRandomizeScaleToggle, eventName: "change", kind: "checked" },
  { key: "bassToneLocked", element: bassLockToneToggle, eventName: "change", kind: "checked" },
  { key: "bassStepsLocked", element: bassLockStepsToggle, eventName: "change", kind: "checked" },
  { key: "bassReleaseLocked", element: bassLockReleaseToggle, eventName: "change", kind: "checked" },
  { key: "bassRateLocked", element: bassLockRateToggle, eventName: "change", kind: "checked" },
  { key: "bassSteps", element: bassStepsSlider, eventName: "input", kind: "value" },
  { key: "bassPitch", element: bassPitchSlider, eventName: "input", kind: "value" },
  { key: "bassRate", element: bassRateSlider, eventName: "input", kind: "value" },
  { key: "bassRelease", element: bassEnvReleaseSlider, eventName: "input", kind: "value" },
  { key: "bassWaveform", element: bassWaveformSelect, eventName: "change", kind: "value" },
  { key: "bassFilterType", element: bassFilterTypeSelect, eventName: "change", kind: "value" },
  { key: "bassFilterFreq", element: bassFilterFreqSlider, eventName: "input", kind: "value" },
  { key: "bassFilterRes", element: bassFilterResSlider, eventName: "input", kind: "value" },
  { key: "reverbDecay", element: reverbDecaySlider, eventName: "input", kind: "value" },
  { key: "envRelease", element: envReleaseSlider, eventName: "input", kind: "value" },
  { key: "delayTime", element: delayTimeSlider, eventName: "input", kind: "value" },
  { key: "delayAmount", element: delayAmountSlider, eventName: "input", kind: "value" },
  { key: "pitchSemitone", element: pitchSemitoneSlider, eventName: "input", kind: "value" },
  { key: "beatRepeaterEnabled", element: beatRepeaterToggle, eventName: "change", kind: "checked" },
  { key: "beatRepeaterInterval", element: beatRepeaterIntervalSelect, eventName: "change", kind: "value" },
  { key: "beatRepeaterGrid", element: beatRepeaterGridSelect, eventName: "change", kind: "value" },
  { key: "lfoShape1", element: lfoShapeSelect, eventName: "change", kind: "value" },
  { key: "lfoRate1", element: lfoRateSelect, eventName: "input", kind: "value" },
  { key: "lfoAmount1", element: lfoAmountSlider, eventName: "input", kind: "value" },
  { key: "lfoTarget1", element: lfoTargetSelect, eventName: "change", kind: "value" },
  { key: "lfoShape2", element: lfoShapeSelect2, eventName: "change", kind: "value" },
  { key: "lfoRate2", element: lfoRateSelect2, eventName: "input", kind: "value" },
  { key: "lfoAmount2", element: lfoAmountSlider2, eventName: "input", kind: "value" },
  { key: "lfoTarget2", element: lfoTargetSelect2, eventName: "change", kind: "value" },
  { key: "filter1Type", element: filter1TypeSelect, eventName: "change", kind: "value" },
  { key: "filter1Depth", element: filter1DepthSelect, eventName: "change", kind: "value" },
  { key: "filter1Freq", element: filter1FreqSlider, eventName: "input", kind: "value" },
  { key: "filter1Res", element: filter1ResSlider, eventName: "input", kind: "value" },
  { key: "filter2Type", element: filter2TypeSelect, eventName: "change", kind: "value" },
  { key: "filter2Depth", element: filter2DepthSelect, eventName: "change", kind: "value" },
  { key: "filter2Freq", element: filter2FreqSlider, eventName: "input", kind: "value" },
  { key: "filter2Res", element: filter2ResSlider, eventName: "input", kind: "value" },
];

function capturePresetValues() {
  const values = {};

  for (const def of PRESET_CONTROL_DEFS) {
    if (!def.element) {
      continue;
    }
    if (def.key === "minArpRate") {
      values[def.key] = String(minArpRate);
      continue;
    }
    if (def.key === "maxArpRate") {
      values[def.key] = String(maxArpRate);
      continue;
    }
    if (def.key === "lfoRate1") {
      values[def.key] = String(lfoRateDivision);
      continue;
    }
    if (def.key === "lfoRate2") {
      values[def.key] = String(lfoRateDivision2);
      continue;
    }
    values[def.key] = def.kind === "checked" ? !!def.element.checked : String(def.element.value);
  }

  return values;
}

function applyPresetValues(values) {
  if (!values || typeof values !== "object") {
    return false;
  }

  for (const def of PRESET_CONTROL_DEFS) {
    if (!def.element || !(def.key in values)) {
      continue;
    }

    const nextValue = values[def.key];
    if (def.kind === "checked") {
      const checked = !!nextValue;
      if (def.element.checked === checked) {
        continue;
      }
      def.element.checked = checked;
    } else {
      let stringValue = String(nextValue);
      if (def.key === "minArpRate" || def.key === "maxArpRate") {
        stringValue = String(getArpRateIndexFromDivision(Number(nextValue), def.key === "minArpRate" ? 8 : 128));
      }
      if (def.key === "lfoRate1" || def.key === "lfoRate2") {
        stringValue = String(getLfoRateIndexFromDivision(Number(nextValue), def.key === "lfoRate1" ? 16 : 16));
      }
      if (def.key === "bassFilterType") {
        stringValue = normalizeBassFilterMode(nextValue);
      }
      if (def.element.value === stringValue) {
        continue;
      }
      def.element.value = stringValue;
    }

    def.element.dispatchEvent(new Event(def.eventName, { bubbles: true }));
  }

  return true;
}

function normalizePresetList(candidatePresets) {
  if (!Array.isArray(candidatePresets)) {
    return [];
  }

  return candidatePresets
    .filter((preset) => {
      return preset && typeof preset.name === "string" && preset.name.trim() && preset.values && typeof preset.values === "object";
    })
    .map((preset) => ({
      name: preset.name.trim(),
      values: preset.values,
      updatedAt: Number.isFinite(Number(preset.updatedAt)) ? Number(preset.updatedAt) : Date.now(),
    }));
}

function loadPresetList() {
  try {
    const raw = globalThis.localStorage ? globalThis.localStorage.getItem(PRESET_STORAGE_KEY) : null;
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw);
    return normalizePresetList(parsed);
  } catch (error) {
    console.warn("Could not load presets", error);
    return [];
  }
}

async function loadBundledPresetList() {
  try {
    const response = await fetch(PRESET_BUNDLE_URL, { cache: "no-store" });
    if (!response.ok) {
      return [];
    }
    const parsed = await response.json();
    return normalizePresetList(parsed);
  } catch (error) {
    return [];
  }
}

function mergePresetLists(bundledPresets, localPresets) {
  const mergedByKey = new Map();
  for (const preset of bundledPresets) {
    mergedByKey.set(preset.name.toLowerCase(), preset);
  }
  for (const preset of localPresets) {
    mergedByKey.set(preset.name.toLowerCase(), preset);
  }
  return Array.from(mergedByKey.values());
}

function savePresetList() {
  try {
    if (!globalThis.localStorage) {
      return;
    }
    globalThis.localStorage.setItem(PRESET_STORAGE_KEY, JSON.stringify(savedPresets));
  } catch (error) {
    console.warn("Could not save presets", error);
  }
}

function renderPresetSelect(selectedName = "") {
  if (!presetSelect) {
    return;
  }

  presetSelect.innerHTML = "";

  if (!savedPresets.length) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "No presets yet";
    option.disabled = true;
    option.selected = true;
    presetSelect.appendChild(option);
    presetSelect.disabled = true;
    return;
  }

  presetSelect.disabled = false;
  for (const preset of savedPresets) {
    const option = document.createElement("option");
    option.value = preset.name;
    option.textContent = preset.name;
    presetSelect.appendChild(option);
  }

  const requestedName = selectedName || savedPresets[0].name;
  const hasRequested = savedPresets.some((preset) => preset.name === requestedName);
  presetSelect.value = hasRequested ? requestedName : savedPresets[0].name;
}

function syncPresetActionButtons() {
  const hasPresets = savedPresets.length > 0;
  if (renamePresetBtn) {
    renamePresetBtn.disabled = !hasPresets;
  }
  if (deletePresetBtn) {
    deletePresetBtn.disabled = !hasPresets;
  }
}

function findPresetByName(name) {
  if (!name) {
    return null;
  }
  return savedPresets.find((entry) => entry.name === name) || null;
}

async function setupPresetSystem() {
  if (!presetSelect || !savePresetBtn) {
    return;
  }

  const localPresets = loadPresetList();
  const bundledPresets = await loadBundledPresetList();
  savedPresets = mergePresetLists(bundledPresets, localPresets).sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));
  if (savedPresets.length !== localPresets.length) {
    savePresetList();
  }
  renderPresetSelect();
  syncPresetActionButtons();

  savePresetBtn.addEventListener("click", () => {
    const seedName = presetSelect.disabled ? "" : presetSelect.value;
    const rawName = globalThis.prompt("Preset name", seedName || "");
    if (rawName == null) {
      return;
    }

    const presetName = rawName.trim();
    if (!presetName) {
      showToast("Preset name is required.");
      return;
    }

    const index = savedPresets.findIndex((preset) => preset.name.toLowerCase() === presetName.toLowerCase());
    if (index >= 0) {
      const confirmed = globalThis.confirm(`Overwrite preset "${savedPresets[index].name}"?`);
      if (!confirmed) {
        return;
      }
      savedPresets[index] = { name: presetName, values: capturePresetValues(), updatedAt: Date.now() };
    } else {
      savedPresets.push({ name: presetName, values: capturePresetValues(), updatedAt: Date.now() });
    }

    savedPresets.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));
    savePresetList();
    renderPresetSelect(presetName);
    syncPresetActionButtons();
    showToast(`Preset saved: ${presetName}.`);
  });

  if (renamePresetBtn) {
    renamePresetBtn.addEventListener("click", () => {
      const selectedName = presetSelect.value;
      const preset = findPresetByName(selectedName);
      if (!preset) {
        showToast("No preset selected.");
        return;
      }

      const rawName = globalThis.prompt("Rename preset", preset.name);
      if (rawName == null) {
        return;
      }

      const nextName = rawName.trim();
      if (!nextName) {
        showToast("Preset name is required.");
        return;
      }

      const nameTaken = savedPresets.some((entry) => {
        return entry !== preset && entry.name.toLowerCase() === nextName.toLowerCase();
      });

      if (nameTaken) {
        showToast(`Preset name already exists: ${nextName}.`);
        return;
      }

      preset.name = nextName;
      preset.updatedAt = Date.now();
      savedPresets.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));
      savePresetList();
      renderPresetSelect(nextName);
      syncPresetActionButtons();
      showToast(`Preset renamed: ${nextName}.`);
    });
  }

  if (deletePresetBtn) {
    deletePresetBtn.addEventListener("click", () => {
      const selectedName = presetSelect.value;
      const preset = findPresetByName(selectedName);
      if (!preset) {
        showToast("No preset selected.");
        return;
      }

      const confirmed = globalThis.confirm(`Delete preset "${preset.name}"?`);
      if (!confirmed) {
        return;
      }

      savedPresets = savedPresets.filter((entry) => entry !== preset);
      savePresetList();
      renderPresetSelect();
      syncPresetActionButtons();
      showToast(`Preset deleted: ${preset.name}.`);
    });
  }

  presetSelect.addEventListener("change", () => {
    const presetName = presetSelect.value;
    const preset = findPresetByName(presetName);
    if (!preset) {
      return;
    }
    applyPresetValues(preset.values);
    showToast(`Preset loaded: ${preset.name}.`);
  });
}

function showToast(message, visibleMs = 1800) {
  if (!statusEl) {
    return;
  }

  const text = message == null ? "" : String(message).trim();

  if (!text) {
    if (toastHideTimer) {
      clearTimeout(toastHideTimer);
      toastHideTimer = null;
    }
    if (toastClearTimer) {
      clearTimeout(toastClearTimer);
      toastClearTimer = null;
    }
    statusEl.classList.remove("toastVisible", "toastHiding");
    statusEl.innerText = "";
    statusEl.hidden = true;
    return;
  }

  statusEl.hidden = false;
  statusEl.innerText = text;
  statusEl.classList.remove("toastVisible", "toastHiding");
  void statusEl.offsetWidth;
  statusEl.classList.add("toastVisible");

  if (toastHideTimer) {
    clearTimeout(toastHideTimer);
  }
  if (toastClearTimer) {
    clearTimeout(toastClearTimer);
  }

  toastHideTimer = setTimeout(() => {
    toastHideTimer = null;
    statusEl.classList.remove("toastVisible");
    statusEl.classList.add("toastHiding");
    toastClearTimer = setTimeout(() => {
      toastClearTimer = null;
      statusEl.classList.remove("toastHiding");
      statusEl.innerText = "";
      statusEl.hidden = true;
    }, 360);
  }, Math.max(500, visibleMs));
}

showToast("Tap and drag around center to spin.", 2200);

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
    const open = !!(fxModal && fxModal.classList.contains("isPanelOpen"));
    fxModBtn.classList.toggle("isOpen", open);
    fxModBtn.setAttribute("aria-pressed", open ? "true" : "false");
  }
  if (filterBtn) {
    const open = !!(filterModal && filterModal.classList.contains("isPanelOpen"));
    filterBtn.classList.toggle("isOpen", open);
    filterBtn.setAttribute("aria-pressed", open ? "true" : "false");
  }
  if (mod1Btn) {
    const open = !!(mod1Modal && mod1Modal.classList.contains("isPanelOpen"));
    mod1Btn.classList.toggle("isOpen", open);
    mod1Btn.setAttribute("aria-pressed", open ? "true" : "false");
  }
  if (mod2Btn) {
    const open = !!(mod2Modal && mod2Modal.classList.contains("isPanelOpen"));
    mod2Btn.classList.toggle("isOpen", open);
    mod2Btn.setAttribute("aria-pressed", open ? "true" : "false");
  }
}

const PANEL_FADE_MS = 180;
const panelFadeTimers = new WeakMap();

function setPanelOpen(panelEl, open, forceFlex = false) {
  if (!panelEl) {
    return;
  }

  const pendingTimer = panelFadeTimers.get(panelEl);
  if (pendingTimer) {
    clearTimeout(pendingTimer);
    panelFadeTimers.delete(panelEl);
  }

  if (open) {
    panelEl.hidden = false;
    if (forceFlex) {
      panelEl.style.display = "flex";
    }
    panelEl.classList.remove("isPanelClosing");
    requestAnimationFrame(() => {
      panelEl.classList.add("isPanelOpen");
    });
    return;
  }

  panelEl.classList.remove("isPanelOpen");
  panelEl.classList.add("isPanelClosing");
  const timer = setTimeout(() => {
    panelEl.hidden = true;
    panelEl.classList.remove("isPanelClosing");
    if (forceFlex) {
      panelEl.style.removeProperty("display");
    }
    panelFadeTimers.delete(panelEl);
  }, PANEL_FADE_MS);
  panelFadeTimers.set(panelEl, timer);
}

function setSettingsOpen(open) {
  settingsOpen = open;
  setPanelOpen(settingsPanel, open, false);
  syncDockButtonStates();
}

function setArpOpen(open) {
  arpOpen = open;
  setPanelOpen(arpPanel, open, false);
  syncDockButtonStates();
}

function setBassOpen(open) {
  bassOpen = open;
  setPanelOpen(bassPanel, open, false);
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
      setFilterModalOpen(false);
      setMod1ModalOpen(false);
      setMod2ModalOpen(false);
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
      setFilterModalOpen(false);
      setMod1ModalOpen(false);
      setMod2ModalOpen(false);
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
      setFilterModalOpen(false);
      setMod1ModalOpen(false);
      setMod2ModalOpen(false);
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
  setPanelOpen(fxModal, open, true);
  syncDockButtonStates();
}

function setFilterModalOpen(open) {
  if (!filterModal) return;
  setPanelOpen(filterModal, open, true);
  syncDockButtonStates();
}

function setMod1ModalOpen(open) {
  if (!mod1Modal) return;
  setPanelOpen(mod1Modal, open, true);
  syncDockButtonStates();
}

function setMod2ModalOpen(open) {
  if (!mod2Modal) return;
  setPanelOpen(mod2Modal, open, true);
  syncDockButtonStates();
}

let lastModToggleAt = 0;

function canToggleModNow() {
  const now = performance.now();
  if (now - lastModToggleAt < 180) {
    return false;
  }
  lastModToggleAt = now;
  return true;
}

if (fxModBtn) {
  fxModBtn.addEventListener("pointerdown", (event) => {
    event.stopPropagation();
    const willOpen = fxModal ? !fxModal.classList.contains("isPanelOpen") : false;
    setFxModalOpen(willOpen);
    if (willOpen) {
      setFilterModalOpen(false);
      setMod1ModalOpen(false);
      setMod2ModalOpen(false);
      setSettingsOpen(false);
      setArpOpen(false);
      setBassOpen(false);
    }
  });
}

if (filterBtn) {
  filterBtn.addEventListener("pointerdown", (event) => {
    event.stopPropagation();
    const willOpen = filterModal ? !filterModal.classList.contains("isPanelOpen") : false;
    setFilterModalOpen(willOpen);
    if (willOpen) {
      setFxModalOpen(false);
      setMod1ModalOpen(false);
      setMod2ModalOpen(false);
      setSettingsOpen(false);
      setArpOpen(false);
      setBassOpen(false);
    }
  });
}

if (mod1Btn) {
  const toggleMod1 = (event) => {
    if (!canToggleModNow()) {
      return;
    }
    event.stopPropagation();
    const willOpen = mod1Modal ? !mod1Modal.classList.contains("isPanelOpen") : false;
    setMod1ModalOpen(willOpen);
    if (willOpen) {
      setFilterModalOpen(false);
      setMod2ModalOpen(false);
      setFxModalOpen(false);
      setSettingsOpen(false);
      setArpOpen(false);
      setBassOpen(false);
    }
  };

  mod1Btn.addEventListener("pointerup", toggleMod1);
  mod1Btn.addEventListener("click", toggleMod1);
}

if (mod2Btn) {
  const toggleMod2 = (event) => {
    if (!canToggleModNow()) {
      return;
    }
    event.stopPropagation();
    const willOpen = mod2Modal ? !mod2Modal.classList.contains("isPanelOpen") : false;
    setMod2ModalOpen(willOpen);
    if (willOpen) {
      setFilterModalOpen(false);
      setMod1ModalOpen(false);
      setFxModalOpen(false);
      setSettingsOpen(false);
      setArpOpen(false);
      setBassOpen(false);
    }
  };

  mod2Btn.addEventListener("pointerup", toggleMod2);
  mod2Btn.addEventListener("click", toggleMod2);
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

if (filterModal) {
  filterModal.addEventListener("pointerdown", (event) => {
    event.stopPropagation();
  });
}

if (mod1Modal) {
  mod1Modal.addEventListener("pointerdown", (event) => {
    event.stopPropagation();
  });
}

if (mod2Modal) {
  mod2Modal.addEventListener("pointerdown", (event) => {
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

  if (filterModal && !filterModal.hidden && !targetInside(target, filterModal) && !targetInside(target, filterBtn)) {
    setFilterModalOpen(false);
  }

  if (mod1Modal && !mod1Modal.hidden && !targetInside(target, mod1Modal) && !targetInside(target, mod1Btn)) {
    setMod1ModalOpen(false);
  }

  if (mod2Modal && !mod2Modal.hidden && !targetInside(target, mod2Modal) && !targetInside(target, mod2Btn)) {
    setMod2ModalOpen(false);
  }
});

setSettingsOpen(false);
setArpOpen(false);
setBassOpen(false);
setFxModalOpen(false);
setFilterModalOpen(false);
setMod1ModalOpen(false);
setMod2ModalOpen(false);

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

let wingCount = THREE.MathUtils.clamp(Number(stepsSlider ? stepsSlider.value : wingCountSlider ? wingCountSlider.value : 6), 3, 12);
let octaveRange = THREE.MathUtils.clamp(Number(octaveRangeSlider ? octaveRangeSlider.value : 0), 0, 10);
const maxWingLabels = 12;
let currentMainNoteMidi = null;

function getRequestedVisualWingCount() {
  return wingCount;
}

function getVisualWingCount() {
  return wingCount;
}

function shouldHideMainWingLabels() {
  return getVisualWingCount() > maxWingLabels;
}

function getWingLabelMidiAt(slotIndex) {
  const pool = wingAssignedMidis;
  if (!pool.length) {
    return getDisplayedRootMidi();
  }
  const base = ((arpStep % pool.length) + pool.length) % pool.length;
  const idx = (base + slotIndex) % pool.length;
  return pool[idx];
}

function refreshMainWingLabelTexts() {
  for (let i = 0; i < wingNoteLabelEls.length; i += 1) {
    wingNoteLabelEls[i].textContent = midiToNoteNameWithOctave(getWingLabelMidiAt(i));
  }
}

function createNearPolygonClipPath(pointCount = 7) {
  const points = [];
  for (let i = 0; i < pointCount; i += 1) {
    const angle = (i / pointCount) * Math.PI * 2;
    const jitter = (Math.random() * 0.06) - 0.03;
    const xRadius = 0.42 + jitter * 0.55;
    const yRadius = (0.46 + jitter) * 1.5;
    const x = 50 + Math.cos(angle) * xRadius * 50;
    const y = 50 + Math.sin(angle) * yRadius * 50;
    points.push(`${x.toFixed(1)}% ${y.toFixed(1)}%`);
  }
  return `polygon(${points.join(", ")})`;
}

function updateCenterNoteLabelVisual() {
  if (!rootNoteLabelEl) {
    return;
  }

  const nextLabel = midiToNoteNameWithOctave(currentMainNoteMidi ?? getDisplayedRootMidi());
  rootNoteLabelEl.classList.add("mainCenterLabel");
  rootNoteLabelEl.style.clipPath = createNearPolygonClipPath(Math.random() > 0.5 ? 7 : 6);
  rootNoteLabelEl.classList.remove("noteLabelPulse", "centerNoteSwap", "centerNoteBlackout");
  if (centerNoteSwapTimer) {
    clearTimeout(centerNoteSwapTimer);
    centerNoteSwapTimer = null;
  }
  if (centerNoteSwapTimerLate) {
    clearTimeout(centerNoteSwapTimerLate);
    centerNoteSwapTimerLate = null;
  }

  // Flash tech-blue, then ultra-brief blackout before showing the next note.
  rootNoteLabelEl.classList.add("centerNoteSwap");
  centerNoteSwapTimer = setTimeout(() => {
    if (!rootNoteLabelEl) {
      return;
    }
    rootNoteLabelEl.classList.remove("centerNoteSwap");
    rootNoteLabelEl.classList.add("centerNoteBlackout");
    centerNoteSwapTimerLate = setTimeout(() => {
      if (!rootNoteLabelEl) {
        return;
      }
      rootNoteLabelEl.textContent = nextLabel;
      rootNoteLabelEl.classList.remove("centerNoteBlackout");
      rootNoteLabelEl.classList.add("noteLabelPulse");
    }, 5);
  }, 70);
}

function updateBassCenterNoteLabelVisual() {
  if (!bassRootNoteLabelEl) {
    return;
  }

  bassRootNoteLabelEl.textContent = midiToNoteNameWithOctave(currentBassNoteMidi ?? bassRootMidi);
  bassRootNoteLabelEl.classList.remove("noteLabelPulse");
  void bassRootNoteLabelEl.offsetWidth;
  bassRootNoteLabelEl.classList.add("noteLabelPulse");
}

function getArmRadiusForSteps(stepCount, scaleFactor = 1) {
  const base = stepCount >= 24
    ? 1.24
    : stepCount >= 18
      ? 1.19
      : stepCount >= 12
        ? 1.15
        : stepCount >= 8
          ? 1.12
          : stepCount >= 6
            ? 1.08
            : 1.05;
  return base * scaleFactor;
}

function getWingPolygonScale(stepCount) {
  if (stepCount >= 24) {
    return 0.38;
  }
  if (stepCount >= 18) {
    return 0.48;
  }
  if (stepCount >= 15) {
    return 0.58;
  }
  if (stepCount >= 12) {
    return 0.68;
  }
  if (stepCount >= 9) {
    return 0.8;
  }
  if (stepCount === 8) {
    return 0.9;
  }
  return 1;
}

function makeFidgetSpinner(stepCount = getVisualWingCount(), scaleFactor = 1) {
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
const bassScaleBase = 0.52;
const mainSpinnerX = 0;
const bassSpinnerBaseX = 1.66;
const bassScaleFactor = bassScaleBase * mainSpinnerScale;
let bassEnabled = false;
let bassInvertScale = false;
let bassRandomizeScale = false;
let bassToneLocked = false;
let bassStepsLocked = true;
let bassReleaseLocked = true;
let bassRateLocked = true;
let bassEnvelopeReleaseSeconds = THREE.MathUtils.clamp(Number(bassEnvReleaseSlider ? bassEnvReleaseSlider.value : 0.31), 0.03, 3);
let bassManualStepCount = 3;
const BASS_RATE_DIVISIONS = [1, 2, 4, 8];
let bassRateDivision = BASS_RATE_DIVISIONS[1];
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
let lfoTurboVisual = null;
let lfoTurboLeftFan = null;
let lfoTurboRightFan = null;
let lfoTurboLeftTopBelt = null;
let lfoTurboLeftBottomBelt = null;
let lfoTurboRightTopBelt = null;
let lfoTurboRightBottomBelt = null;
const lfoTurboRadius = 0.27;
const lfoTurboOffsetX = 1.4;
const lfoTurboOffsetY = 1.28;
const bassVisualBaseYOffset = -0.14;
const lfoTurboLeftCenter = new THREE.Vector3();
const lfoTurboRightCenter = new THREE.Vector3();
const lfoTurboOverlayScreen = new THREE.Vector3();

function getDefaultBassStepCount() {
  return THREE.MathUtils.clamp(Math.floor(wingCount / 2), 3, 12);
}

function getBassStepCount() {
  if (bassStepsLocked) {
    return getDefaultBassStepCount();
  }
  return THREE.MathUtils.clamp(Math.round(bassManualStepCount), 3, 12);
}

function getBassSpinnerX() {
  return bassSpinnerBaseX + bassDragOffsetX;
}

function makePulleyVisual() {
  const group = new THREE.Group();
  const bassX = getBassSpinnerX();
  pulleyMainRadius = getArmRadiusForSteps(getVisualWingCount(), mainSpinnerScale);
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

function makeTurboHousing(side = 1) {
  const group = new THREE.Group();
  const fan = new THREE.Group();

  group.add(ring(lfoTurboRadius, 48, -0.01, lineMaterial));
  group.add(ring(lfoTurboRadius * 0.77, 48, -0.012, softLineMaterial));
  group.add(polygon(8, lfoTurboRadius * 1.16, -0.015, Math.PI / 8, softLineMaterial));

  const intakePoints = [
    new THREE.Vector3(side * (lfoTurboRadius * 0.35), lfoTurboRadius * 0.9, -0.012),
    new THREE.Vector3(side * (lfoTurboRadius * 1.1), lfoTurboRadius * 1.55, -0.012),
  ];
  group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(intakePoints), softLineMaterial));

  const bladeLength = lfoTurboRadius * 0.62;
  for (let i = 0; i < 3; i += 1) {
    const a = (i / 3) * Math.PI * 2;
    const bladePoints = [
      new THREE.Vector3(0, 0, 0.01),
      new THREE.Vector3(Math.cos(a) * bladeLength, Math.sin(a) * bladeLength, 0.01),
    ];
    fan.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(bladePoints), lineMaterial));
  }
  fan.add(ring(lfoTurboRadius * 0.16, 24, 0.012, lineMaterial));
  group.add(fan);

  return { group, fan };
}

function makeLfoTurboVisual() {
  const group = new THREE.Group();
  const leftTurbo = makeTurboHousing(-1);
  const rightTurbo = makeTurboHousing(1);
  lfoTurboLeftFan = leftTurbo.fan;
  lfoTurboRightFan = rightTurbo.fan;
  group.add(leftTurbo.group);
  group.add(rightTurbo.group);

  const leftTop = [new THREE.Vector3(), new THREE.Vector3()];
  const leftBottom = [new THREE.Vector3(), new THREE.Vector3()];
  const rightTop = [new THREE.Vector3(), new THREE.Vector3()];
  const rightBottom = [new THREE.Vector3(), new THREE.Vector3()];

  lfoTurboLeftTopBelt = new THREE.Line(new THREE.BufferGeometry().setFromPoints(leftTop), softLineMaterial);
  lfoTurboLeftBottomBelt = new THREE.Line(new THREE.BufferGeometry().setFromPoints(leftBottom), softLineMaterial);
  lfoTurboRightTopBelt = new THREE.Line(new THREE.BufferGeometry().setFromPoints(rightTop), softLineMaterial);
  lfoTurboRightBottomBelt = new THREE.Line(new THREE.BufferGeometry().setFromPoints(rightBottom), softLineMaterial);

  group.add(lfoTurboLeftTopBelt);
  group.add(lfoTurboLeftBottomBelt);
  group.add(lfoTurboRightTopBelt);
  group.add(lfoTurboRightBottomBelt);
  return group;
}

function updateLfoTurboVisual(mainY) {
  if (!lfoTurboVisual || !lfoTurboLeftTopBelt || !lfoTurboRightTopBelt) {
    return;
  }

  const turboY = lfoTurboOffsetY;
  const leftX = mainSpinnerX - lfoTurboOffsetX;
  const rightX = mainSpinnerX + lfoTurboOffsetX;

  lfoTurboLeftCenter.set(leftX, turboY, 0.02);
  lfoTurboRightCenter.set(rightX, turboY, 0.02);

  if (lfoTurboVisual.children[0]) {
    lfoTurboVisual.children[0].position.set(leftX, turboY, 0);
  }
  if (lfoTurboVisual.children[1]) {
    lfoTurboVisual.children[1].position.set(rightX, turboY, 0);
  }

  const mainRadius = getArmRadiusForSteps(getVisualWingCount(), mainSpinnerScale);
  const leftMainAx = mainSpinnerX - mainRadius * 0.84;
  const rightMainAx = mainSpinnerX + mainRadius * 0.84;
  const topMainY = mainY + mainRadius * 0.72;
  const lowMainY = mainY + mainRadius * 0.2;

  setPulleyLinePoints(
    lfoTurboLeftTopBelt,
    leftMainAx,
    topMainY,
    leftX + lfoTurboRadius * 0.45,
    turboY - lfoTurboRadius * 0.7,
  );
  setPulleyLinePoints(
    lfoTurboLeftBottomBelt,
    leftMainAx * 0.95,
    lowMainY,
    leftX + lfoTurboRadius * 0.62,
    turboY - lfoTurboRadius * 0.92,
  );
  setPulleyLinePoints(
    lfoTurboRightTopBelt,
    rightMainAx,
    topMainY,
    rightX - lfoTurboRadius * 0.45,
    turboY - lfoTurboRadius * 0.7,
  );
  setPulleyLinePoints(
    lfoTurboRightBottomBelt,
    rightMainAx * 0.95,
    lowMainY,
    rightX - lfoTurboRadius * 0.62,
    turboY - lfoTurboRadius * 0.92,
  );
}

function ensureGroupOwnLineMaterials(group) {
  if (!group) {
    return;
  }

  group.traverse((node) => {
    if (!node || !node.isLine || !node.material || !node.material.isLineBasicMaterial) {
      return;
    }

    if (!node.userData.__bassVisualMaterialOwned) {
      node.material = node.material.clone();
      node.userData.__bassVisualMaterialOwned = true;
      node.userData.__bassBaseColor = node.material.color.getHex();
      node.userData.__bassBaseOpacity = node.material.opacity;
    }
  });
}

function setGroupGreyState(group, greyed) {
  if (!group) {
    return;
  }

  group.traverse((node) => {
    if (!node || !node.isLine || !node.material || !node.material.isLineBasicMaterial) {
      return;
    }

    const baseColor = Number.isFinite(node.userData.__bassBaseColor) ? node.userData.__bassBaseColor : 0x76ddff;
    const baseOpacity = Number.isFinite(node.userData.__bassBaseOpacity) ? node.userData.__bassBaseOpacity : node.material.opacity;

    if (greyed) {
      node.material.color.setHex(0x9fa6ad);
      node.material.opacity = Math.max(0.16, baseOpacity * 0.65);
    } else {
      node.material.color.setHex(baseColor);
      node.material.opacity = baseOpacity;
    }
  });
}

function syncBassEngineVisualState() {
  ensureGroupOwnLineMaterials(bassSpinner);
  ensureGroupOwnLineMaterials(pulleyVisual);
  setGroupGreyState(bassSpinner, !bassEnabled);
  setGroupGreyState(pulleyVisual, !bassEnabled);
}

let spinner = makeFidgetSpinner(getVisualWingCount(), mainSpinnerScale);
let bassSpinner = makeFidgetSpinner(getBassStepCount(), bassScaleFactor);
let pulleyVisual = makePulleyVisual();
lfoTurboVisual = makeLfoTurboVisual();
spinner.position.x = mainSpinnerX;
bassSpinner.position.x = getBassSpinnerX();
stabilizer.add(pulleyVisual);
stabilizer.add(spinner);
stabilizer.add(bassSpinner);
stabilizer.add(lfoTurboVisual);
updateLfoTurboVisual(spinner.position.y);
syncBassEngineVisualState();
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
let bladeBrakePointerId = null;
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
let bladeBrakeStartX = 0;
let bladeBrakeStartY = 0;
let bladeBrakeActive = false;

const centerGrabRadiusPx = 72;
const bassGrabRadiusPx = 76;
const shiftStepPx = 20;
const stalePointerMs = 900;
const bladeBrakeCancelMovePx = 16;
const spinnerScreenCenter = new THREE.Vector3();
const bassScreenCenter = new THREE.Vector3();
const spinnerBladeWorldPoint = new THREE.Vector3();
const spinnerBladeScreenPoint = new THREE.Vector3();

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

function getSpinnerBladeTouchBandPx() {
  const center = getSpinnerScreenCenter();
  stabilizer.updateMatrixWorld(true);

  const armRadius = getArmRadiusForSteps(getVisualWingCount(), mainSpinnerScale);
  spinnerBladeWorldPoint.set(armRadius, 0, 0).applyMatrix4(spinner.matrixWorld);
  spinnerBladeScreenPoint.copy(spinnerBladeWorldPoint).project(camera);

  const bladeX = (spinnerBladeScreenPoint.x * 0.5 + 0.5) * window.innerWidth;
  const bladeY = (-spinnerBladeScreenPoint.y * 0.5 + 0.5) * window.innerHeight;
  const bladeRadiusPx = Math.hypot(bladeX - center.x, bladeY - center.y);

  return {
    inner: Math.max(centerGrabRadiusPx + 8, bladeRadiusPx - 64),
    outer: bladeRadiusPx + 64,
  };
}

function engageBladeBrake(pointerId, clientX, clientY) {
  bladeBrakePointerId = pointerId;
  bladeBrakeStartX = clientX;
  bladeBrakeStartY = clientY;
  bladeBrakeActive = true;
  gestureAngularVelocity = 0;
  lastSpinPointerActivity = performance.now();
}

function releaseBladeBrake() {
  bladeBrakePointerId = null;
  bladeBrakeActive = false;
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
  showToast("Center hold active: drag up/down to shift note and octave.");
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
    showToast(`Shift set: ${rootNoteSelect.value} ${baseOctaveShift >= 0 ? `+${baseOctaveShift}` : baseOctaveShift}`);
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
  releaseBladeBrake();
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
    showToast("Recovered touch control. Continue dragging.");
    return;
  }

  if (spinPointerId !== null && now - lastSpinPointerActivity > stalePointerMs) {
    forceReleasePointers();
    showToast("Recovered touch control. Continue dragging.");
    return;
  }

  if (bladeBrakePointerId !== null && now - lastSpinPointerActivity > stalePointerMs) {
    forceReleasePointers();
    showToast("Recovered touch control. Continue dragging.");
    return;
  }

  if (bassDragPointerId !== null && now - lastBassDragPointerActivity > stalePointerMs) {
    forceReleasePointers();
    showToast("Recovered touch control. Continue dragging.");
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

  if (filterModal && !filterModal.hidden && event.target instanceof Node && filterModal.contains(event.target)) {
    return;
  }

  if (mod1Modal && !mod1Modal.hidden && event.target instanceof Node && mod1Modal.contains(event.target)) {
    return;
  }

  if (mod2Modal && !mod2Modal.hidden && event.target instanceof Node && mod2Modal.contains(event.target)) {
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
    showToast("Dragging bass engine.");
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

  const bladeBand = getSpinnerBladeTouchBandPx();
  const isBladeTouch = dist >= bladeBand.inner && dist <= bladeBand.outer;

  if (isBladeTouch && bladeBrakePointerId === null && spinPointerId === null) {
    engageBladeBrake(event.pointerId, event.clientX, event.clientY);
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

  if (event.pointerId === bladeBrakePointerId) {
    lastSpinPointerActivity = performance.now();
    const moved = Math.hypot(event.clientX - bladeBrakeStartX, event.clientY - bladeBrakeStartY);
    if (moved > bladeBrakeCancelMovePx && spinPointerId === null) {
      releaseBladeBrake();
      spinPointerId = event.pointerId;
      lastSpinPointerAngle = pointerAngle(event.clientX, event.clientY);
      lastSpinPointerTime = performance.now();
      lastSpinPointerActivity = lastSpinPointerTime;
    }
    return;
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

  if (event.pointerId === bladeBrakePointerId) {
    releaseBladeBrake();
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

  if (event.pointerId === bladeBrakePointerId) {
    releaseBladeBrake();
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
    showToast("Motion needs HTTPS on iPhone. Use an HTTPS tunnel (ngrok/Cloudflare).");
    return;
  }

  if (typeof DeviceOrientationEvent === "undefined") {
    showToast("Device motion is not supported on this browser.");
    return;
  }

  try {
    if (
      typeof DeviceOrientationEvent.requestPermission === "function"
    ) {
      const perm = await DeviceOrientationEvent.requestPermission();
      if (perm !== "granted") {
        showToast("Motion denied. Check Safari Settings > Motion & Orientation Access.");
        return;
      }
    }

    window.addEventListener("deviceorientation", handleOrientation, true);
    motionEnabled = true;
    neutralQuat.copy(deviceQuat);
    updateMotionButtonUi();
    showToast("Motion enabled: tilt controls delay time, delay amount, and release.");
  } catch (err) {
    showToast("Motion unavailable on this device/browser.");
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
  showToast("Motion disabled: manual spin control restored.");
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
const delayTimeMaxSeconds = 0.333;
let delayTimeSeconds = THREE.MathUtils.clamp(Number(delayTimeSlider ? delayTimeSlider.value : 0.06), delayTimeMinSeconds, delayTimeMaxSeconds);
let delayAmount = THREE.MathUtils.clamp(Number(delayAmountSlider ? delayAmountSlider.value : 0.62), 0, 0.9);
let arpStep = 0;
let arpDirectionSign = 1;
let arpDirectionMode = arpDirectionSelect ? arpDirectionSelect.value : "upOnly";
let arpDistanceSemitones = THREE.MathUtils.clamp(Number(arpDistanceSlider ? arpDistanceSlider.value : 6), 0, 24);
let arpGatePercent = THREE.MathUtils.clamp(Number(arpGateSlider ? arpGateSlider.value : 100), 5, 100);
let currentArpIntervalSeconds = 0.25;
let masterDryGain = null;
let masterOutGain = null;
let finalLimiter = null;
let reverbSendGain = null;
let reverbConvolver = null;
let reverbWetGain = null;
let delaySendGain = null;
let delayNode = null;
let delayFeedbackGain = null;
let delayWetGain = null;
let beatRepeaterInputGain = null;
let beatRepeaterDryGate = null;
let beatRepeaterInputGate = null;
let beatRepeaterLoopInputGain = null;
let beatRepeaterDelayNode = null;
let beatRepeaterFeedbackGain = null;
let beatRepeaterOutputGain = null;
let lfoShape = lfoShapeSelect ? lfoShapeSelect.value : "sine";
let lfoRateDivision = getLfoRateDivisionFromControl(lfoRateSelect, 16);
let lfoAmount = THREE.MathUtils.clamp(Number(lfoAmountSlider ? lfoAmountSlider.value : 0) / 100, 0, 1);
let lfoTarget = lfoTargetSelect ? lfoTargetSelect.value : "amplitude";
let lfoShape2 = lfoShapeSelect2 ? lfoShapeSelect2.value : "sine";
let lfoRateDivision2 = getLfoRateDivisionFromControl(lfoRateSelect2, 16);
let lfoAmount2 = THREE.MathUtils.clamp(Number(lfoAmountSlider2 ? lfoAmountSlider2.value : 0) / 100, 0, 1);
let lfoTarget2 = lfoTargetSelect2 ? lfoTargetSelect2.value : "amplitude";
if (lfoTarget === "filterCutoff") {
  lfoTarget = "filter1Cutoff";
}
if (lfoTarget2 === "filterCutoff") {
  lfoTarget2 = "filter1Cutoff";
}
const lfoReleaseAddMaxSeconds = 2.4;
const lfoDelayTimeAddMaxSeconds = 0.12;
const filterFreqMinHz = 40;
const filterFreqMaxHz = 16000;
const filterResMin = 0.1;
const filterResMax = 20;
let filter1Type = filter1TypeSelect ? filter1TypeSelect.value : "lowpass";
let filter1CutoffHz = THREE.MathUtils.clamp(Number(filter1FreqSlider ? filter1FreqSlider.value : 12000), filterFreqMinHz, filterFreqMaxHz);
let filter1Resonance = THREE.MathUtils.clamp(Number(filter1ResSlider ? filter1ResSlider.value : 0.8), filterResMin, filterResMax);
let filter1DepthDb = filter1DepthSelect ? THREE.MathUtils.clamp(Number(filter1DepthSelect.value), 16, 48) : 16;
let filter2Type = filter2TypeSelect ? filter2TypeSelect.value : "lowpass";
let filter2CutoffHz = THREE.MathUtils.clamp(Number(filter2FreqSlider ? filter2FreqSlider.value : 12000), filterFreqMinHz, filterFreqMaxHz);
let filter2Resonance = THREE.MathUtils.clamp(Number(filter2ResSlider ? filter2ResSlider.value : 0.8), filterResMin, filterResMax);
let filter2DepthDb = filter2DepthSelect ? THREE.MathUtils.clamp(Number(filter2DepthSelect.value), 16, 48) : 16;
let bassWaveform = bassWaveformSelect ? bassWaveformSelect.value : "triangle";
let bassFilterType = bassFilterTypeSelect ? bassFilterTypeSelect.value : "lp24";
let bassFilterCutoffHz = THREE.MathUtils.clamp(Number(bassFilterFreqSlider ? bassFilterFreqSlider.value : 220), filterFreqMinHz, filterFreqMaxHz);
let bassFilterResonance = THREE.MathUtils.clamp(Number(bassFilterResSlider ? bassFilterResSlider.value : 0.9), filterResMin, filterResMax);
let lfoSyncStartTime = 0;
let tempoBpm = THREE.MathUtils.clamp(Number(tempoInput ? tempoInput.value : 120), 30, 280);
let minArpRate = readArpRateControlValue(minArpRateSelect, 8);
let maxArpRate = readArpRateControlValue(maxArpRateSelect, 128);
let transportPlaying = false;
let transportDriveAngularVelocity = 0;
const transportSpinDownDamping = 0.955;
let lfoRotorAngle1 = 0;
let lfoRotorAngle2 = 0;
let currentArpRateExp = Math.log2(Math.max(1, Math.min(minArpRate, maxArpRate)));
let arpClockAccumulator = 0;
let bassTickCounter = 0;
let beatRepeaterEnabled = false;
let beatRepeaterHoldActive = false;
let beatRepeaterIntervalDivision = THREE.MathUtils.clamp(Number(beatRepeaterIntervalSelect ? beatRepeaterIntervalSelect.value : 4), 2, 16);
let beatRepeaterGridDivision = THREE.MathUtils.clamp(Number(beatRepeaterGridSelect ? beatRepeaterGridSelect.value : 16), 16, 64);
let beatRepeaterCycleElapsed = 0;
let beatRepeaterStartAtTime = null;
let beatRepeaterMode = "bypass";
let pulsePeriodicWave = null;
let noiseBuffer = null;
const masterLimiterThresholdDb = -36;

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
  melodicMinor: [0, 2, 3, 5, 7, 9, 11],
  dorian: [0, 2, 3, 5, 7, 9, 10],
  phrygian: [0, 1, 3, 5, 7, 8, 10],
  lydian: [0, 2, 4, 6, 7, 9, 11],
  mixolydian: [0, 2, 4, 5, 7, 9, 10],
  locrian: [0, 1, 3, 5, 6, 8, 10],
  minorPentatonic: [0, 3, 5, 7, 10],
  majorPentatonic: [0, 2, 4, 7, 9],
  blues: [0, 3, 5, 6, 7, 10],
  wholeTone: [0, 2, 4, 6, 8, 10],
  diminished: [0, 2, 3, 5, 6, 8, 9, 11],
  chromatic: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
};

const BASE_OCTAVE_MIDI = 48; // C3 base, root note transposed from this.
octaveRange = THREE.MathUtils.clamp(Number(octaveRangeSlider ? octaveRangeSlider.value : 0), 0, 10);
let baseOctaveShift = THREE.MathUtils.clamp(Number(baseOctaveSlider ? baseOctaveSlider.value : 0), -4, 4);
let currentRootMidi = BASE_OCTAVE_MIDI + ROOT_NOTE_TO_SEMITONE[rootNoteSelect.value] + baseOctaveShift * 12;
let wingAssignedMidis = [];
let wingAssignedLabels = [];
let bassAssignedMidis = [];
let bassStepIndex = 0;
let bassRootMidi = 0;
let currentBassNoteMidi = null;
let rootNoteLabelEl = null;
let wingNoteLabelEls = [];
let bassRootNoteLabelEl = null;
let bassWingNoteLabelEls = [];
let centerNoteSwapTimer = null;
let centerNoteSwapTimerLate = null;
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

function getLfoRateHz(rateDivision) {
  const quarterNotesPerSecond = tempoBpm / 60;
  const noteLengthInQuarterNotes = 4 / Math.max(0.5, rateDivision);
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

function getLfoPhaseAtTime(rateDivision, timeSec) {
  const rateHz = Math.max(0.001, getLfoRateHz(rateDivision));
  const phase = ((timeSec - lfoSyncStartTime) * rateHz) % 1;
  return phase < 0 ? phase + 1 : phase;
}

function getSampleHoldValueForCycle(cycle) {
  const v = Math.sin((cycle + 1) * 12.9898 + 78.233) * 43758.5453;
  return (v - Math.floor(v)) * 2 - 1;
}

function getHashedNoiseValue(index) {
  const v = Math.sin((index + 17) * 91.3457 + 11.135) * 12734.874;
  return (v - Math.floor(v)) * 2 - 1;
}

function getLfoValueAtTime(shape, rateDivision, timeSec) {
  const phase = getLfoPhaseAtTime(rateDivision, timeSec);

  if (shape === "sine") {
    return Math.sin(phase * Math.PI * 2);
  }

  if (shape === "triangle") {
    return 1 - 4 * Math.abs(phase - 0.5);
  }

  if (shape === "rampUp") {
    return phase * 2 - 1;
  }

  if (shape === "rampDown") {
    return (1 - phase) * 2 - 1;
  }

  if (shape === "randomSH") {
    const rateHz = Math.max(0.001, getLfoRateHz(rateDivision));
    const cycle = Math.floor((timeSec - lfoSyncStartTime) * rateHz);
    return getSampleHoldValueForCycle(cycle);
  }

  if (shape === "pulse25") {
    return phase < 0.25 ? 1 : -1;
  }

  if (shape === "pulse10") {
    return phase < 0.1 ? 1 : -1;
  }

  if (shape === "expUp") {
    return Math.pow(phase, 2.4) * 2 - 1;
  }

  if (shape === "expDown") {
    return (1 - Math.pow(phase, 2.4)) * 2 - 1;
  }

  if (shape === "doubleSine") {
    return Math.sin(phase * Math.PI * 4);
  }

  if (shape === "bounce") {
    return Math.abs(Math.sin(phase * Math.PI * 2)) * 2 - 1;
  }

  if (shape === "stairs4") {
    const step = Math.floor(phase * 4);
    return (step / 3) * 2 - 1;
  }

  if (shape === "stairs8") {
    const step = Math.floor(phase * 8);
    return (step / 7) * 2 - 1;
  }

  if (shape === "smoothSquare") {
    return Math.tanh(Math.sin(phase * Math.PI * 2) * 3.2);
  }

  if (shape === "randomLinear") {
    const rateHz = Math.max(0.001, getLfoRateHz(rateDivision));
    const cyclePos = (timeSec - lfoSyncStartTime) * rateHz;
    const cycle = Math.floor(cyclePos);
    const frac = cyclePos - cycle;
    const a = getHashedNoiseValue(cycle);
    const b = getHashedNoiseValue(cycle + 1);
    return THREE.MathUtils.lerp(a, b, frac);
  }

  return phase < 0.5 ? 1 : -1;
}

function buildLfoCurve(startTime, duration, sampleCount = 96) {
  return buildTargetCurve("amplitude", startTime, duration, sampleCount);
}

function buildLfoCurveFor(shape, rateDivision, startTime, duration, sampleCount = 96) {
  const safeDuration = Math.max(duration, 0.01);
  const size = Math.max(2, sampleCount);
  const curve = new Float32Array(size);
  for (let i = 0; i < size; i += 1) {
    const frac = i / (size - 1);
    const t = startTime + frac * safeDuration;
    curve[i] = getLfoValueAtTime(shape, rateDivision, t);
  }
  return curve;
}

function renderLfoShapePreview(svgEl, shape) {
  if (!svgEl) {
    return;
  }

  const width = 64;
  const height = 18;
  const sampleCount = 33;
  const points = [];

  for (let i = 0; i < sampleCount; i += 1) {
    const frac = i / (sampleCount - 1);
    const value = getLfoValueAtTime(shape, 16, frac);
    const x = Math.round(frac * width * 100) / 100;
    const y = Math.round((height * 0.5 - value * (height * 0.4)) * 100) / 100;
    points.push(`${x},${y}`);
  }

  svgEl.innerHTML = `<polyline points="${points.join(" ")}" fill="none" stroke="rgba(160, 238, 255, 0.95)" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />`;
}

function hasTargetMod(targetName) {
  return (lfoTarget === targetName && lfoAmount > 0) || (lfoTarget2 === targetName && lfoAmount2 > 0);
}

function getCombinedTargetValueAtTime(targetName, timeSec) {
  let value = 0;
  if (lfoTarget === targetName && lfoAmount > 0) {
    value += getLfoValueAtTime(lfoShape, lfoRateDivision, timeSec) * lfoAmount;
  }
  if (lfoTarget2 === targetName && lfoAmount2 > 0) {
    value += getLfoValueAtTime(lfoShape2, lfoRateDivision2, timeSec) * lfoAmount2;
  }
  return THREE.MathUtils.clamp(value, -1, 1);
}

function buildTargetCurve(targetName, startTime, duration, sampleCount = 96) {
  const safeDuration = Math.max(duration, 0.01);
  const size = Math.max(2, sampleCount);
  const curve = new Float32Array(size);
  for (let i = 0; i < size; i += 1) {
    const frac = i / (size - 1);
    const t = startTime + frac * safeDuration;
    curve[i] = getCombinedTargetValueAtTime(targetName, t);
  }
  return curve;
}

function getReleaseWithLfo(baseRelease, timeSec, minRelease = 0.02, maxRelease = 2.2) {
  let release = THREE.MathUtils.clamp(baseRelease, minRelease, maxRelease);

  if (!hasTargetMod("ampRelease")) {
    return release;
  }

  const releaseAddSeconds = getCombinedTargetValueAtTime("ampRelease", timeSec) * lfoReleaseAddMaxSeconds;
  release += releaseAddSeconds;
  return THREE.MathUtils.clamp(release, minRelease, maxRelease + lfoReleaseAddMaxSeconds);
}

function getArpGateSeconds() {
  const gateNorm = THREE.MathUtils.clamp(arpGatePercent / 100, 0.05, 1);
  return Math.max(0.012, currentArpIntervalSeconds * gateNorm);
}

function getArpVoiceRelease(baseRelease, timeSec, minRelease = 0.02, maxRelease = 2.2) {
  const release = getReleaseWithLfo(baseRelease, timeSec, minRelease, maxRelease);
  if (arpGatePercent >= 100) {
    return release;
  }
  return Math.min(release, getArpGateSeconds());
}

function getModulatedDelayTimeSeconds(timeSec) {
  if (!hasTargetMod("delayTimeMs")) {
    return delayTimeSeconds;
  }
  const add = getCombinedTargetValueAtTime("delayTimeMs", timeSec) * lfoDelayTimeAddMaxSeconds;
  return THREE.MathUtils.clamp(delayTimeSeconds + add, delayTimeMinSeconds, delayTimeMaxSeconds);
}

const voiceFilterMeta = new WeakMap();

function cutoffHzToCombDelaySeconds(cutoffHz) {
  const hz = THREE.MathUtils.clamp(cutoffHz, filterFreqMinHz, filterFreqMaxHz);
  return THREE.MathUtils.clamp(1 / hz, 0.0008, 0.03);
}

function formatFilterTypeShort(type) {
  const map = {
    lowpass: "LP",
    highpass: "HP",
    bandpass: "BP",
    notch: "Notch",
    allpass: "All",
    peaking: "Peak",
    lowshelf: "LowSh",
    highshelf: "HighSh",
    combPlus: "Comb+",
    combMinus: "Comb-",
  };
  return map[type] || "LP";
}

function getFilterDepthStageCount(depthDb) {
  if (depthDb >= 48) {
    return 4;
  }
  if (depthDb >= 24) {
    return 2;
  }
  return 1;
}

function buildVoiceFilterStage(timeSec, filterType, cutoffHz, resonance, depthDb) {
  const stageCount = getFilterDepthStageCount(depthDb);

  if (filterType === "combPlus" || filterType === "combMinus") {
    let firstInput = null;
    let previousOutput = null;
    const cutoffTargets = [];
    const resNorm = THREE.MathUtils.clamp((resonance - filterResMin) / (filterResMax - filterResMin), 0, 1);
    const depthNorm = THREE.MathUtils.clamp((depthDb - 16) / 32, 0, 1);

    for (let i = 0; i < stageCount; i += 1) {
      const input = audioCtx.createGain();
      const output = audioCtx.createGain();
      const delay = audioCtx.createDelay(0.03);
      const feedback = audioCtx.createGain();
      const dry = audioCtx.createGain();
      const wet = audioCtx.createGain();
      const fbMag = THREE.MathUtils.clamp(0.08 + resNorm * (0.68 + depthNorm * 0.2), 0, 0.985);
      const dryAmt = THREE.MathUtils.clamp(0.72 - depthNorm * 0.28, 0.28, 0.75);
      const wetAmt = THREE.MathUtils.clamp(0.72 + depthNorm * 0.24, 0.72, 0.96);

      delay.delayTime.setValueAtTime(cutoffHzToCombDelaySeconds(cutoffHz), timeSec);
      feedback.gain.setValueAtTime(filterType === "combMinus" ? -fbMag : fbMag, timeSec);
      dry.gain.setValueAtTime(dryAmt, timeSec);
      wet.gain.setValueAtTime(wetAmt, timeSec);

      input.connect(dry);
      dry.connect(output);
      input.connect(delay);
      delay.connect(wet);
      wet.connect(output);
      delay.connect(feedback);
      feedback.connect(delay);

      cutoffTargets.push({
        param: delay.delayTime,
        mode: "comb-delay",
      });

      if (!firstInput) {
        firstInput = input;
      }

      if (previousOutput) {
        previousOutput.connect(input);
      }
      previousOutput = output;
    }

    return {
      input: firstInput,
      output: previousOutput,
      cutoffTargets,
      cutoffBaseHz: cutoffHz,
    };
  }

  let firstNode = null;
  let previousNode = null;
  const cutoffTargets = [];

  for (let i = 0; i < stageCount; i += 1) {
    const biquad = audioCtx.createBiquadFilter();
    biquad.type = filterType;
    biquad.frequency.setValueAtTime(cutoffHz, timeSec);
    biquad.Q.setValueAtTime(resonance, timeSec);

    if (!firstNode) {
      firstNode = biquad;
    }

    if (previousNode) {
      previousNode.connect(biquad);
    }
    previousNode = biquad;
    cutoffTargets.push({
      param: biquad.frequency,
      mode: "frequency",
    });
  }

  return {
    input: firstNode,
    output: previousNode,
    cutoffTargets,
    cutoffBaseHz: cutoffHz,
  };
}

function createVoiceModFilter(timeSec) {
  const stage1 = buildVoiceFilterStage(timeSec, filter1Type, filter1CutoffHz, filter1Resonance, filter1DepthDb);
  const stage2 = buildVoiceFilterStage(timeSec, filter2Type, filter2CutoffHz, filter2Resonance, filter2DepthDb);
  stage1.output.connect(stage2.input);
  const graph = {
    input: stage1.input,
    output: stage2.output,
  };
  voiceFilterMeta.set(graph, { stage1, stage2 });
  return graph;
}

function createBassVoiceFilter(timeSec) {
  const bassFilterCfg = getBassFilterConfig(bassFilterType);
  const stage = buildVoiceFilterStage(timeSec, bassFilterCfg.type, bassFilterCutoffHz, bassFilterResonance, bassFilterCfg.depthDb);
  const graph = {
    input: stage.input,
    output: stage.output,
  };
  voiceFilterMeta.set(graph, { stage1: stage, stage2: null });
  return graph;
}

function formatBassWaveformShort(type) {
  const map = {
    sine: "Sine",
    triangle: "Triangle",
    sawtooth: "Saw",
    square: "Square",
    pulse: "Pulse",
  };
  return map[type] || "Triangle";
}

function normalizeBassFilterMode(mode) {
  const raw = String(mode || "").toLowerCase();
  const map = {
    lp12: "lp12",
    lp24: "lp24",
    bp12: "bp12",
    bp24: "bp24",
    hp12: "hp12",
    hp24: "hp24",
    lowpass: "lp24",
    bandpass: "bp24",
    highpass: "hp24",
  };
  return map[raw] || "lp24";
}

function getBassFilterConfig(mode) {
  const normalized = normalizeBassFilterMode(mode);
  if (normalized === "lp12") {
    return { mode: normalized, type: "lowpass", depthDb: 16, shortLabel: "LP12" };
  }
  if (normalized === "bp12") {
    return { mode: normalized, type: "bandpass", depthDb: 16, shortLabel: "BP12" };
  }
  if (normalized === "hp12") {
    return { mode: normalized, type: "highpass", depthDb: 16, shortLabel: "HP12" };
  }
  if (normalized === "bp24") {
    return { mode: normalized, type: "bandpass", depthDb: 24, shortLabel: "BP24" };
  }
  if (normalized === "hp24") {
    return { mode: normalized, type: "highpass", depthDb: 24, shortLabel: "HP24" };
  }
  return { mode: "lp24", type: "lowpass", depthDb: 24, shortLabel: "LP24" };
}

function applyPitchLfo(detuneParams, startTime, duration) {
  if (!hasTargetMod("pitch")) {
    return;
  }

  const baseCurve = buildTargetCurve("pitch", startTime, duration);
  const depthCents = 1200;
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
  if (!hasTargetMod("amplitude") || !gainParam) {
    return;
  }

  const baseCurve = buildTargetCurve("amplitude", startTime, duration);
  const depth = 0.95;
  const curve = new Float32Array(baseCurve.length);
  for (let i = 0; i < baseCurve.length; i += 1) {
    curve[i] = THREE.MathUtils.clamp(1 + baseCurve[i] * depth, 0.05, 2);
  }

  gainParam.cancelScheduledValues(startTime);
  gainParam.setValueAtTime(1, startTime);
  gainParam.setValueCurveAtTime(curve, startTime, Math.max(duration, 0.01));
}

function applyFilterLfo(filterGraph, startTime, duration) {
  if (!filterGraph) {
    return;
  }

  const meta = voiceFilterMeta.get(filterGraph);
  if (!meta) {
    return;
  }

  const applyStageLfo = (stage, targetName, baseCutoffHz) => {
    if (!stage || !stage.cutoffTargets || !stage.cutoffTargets.length || !hasTargetMod(targetName)) {
      return;
    }

    const baseCurve = buildTargetCurve(targetName, startTime, duration);
    const depthHz = baseCutoffHz * 0.95;
    const curve = new Float32Array(baseCurve.length);
    for (let i = 0; i < baseCurve.length; i += 1) {
      const cutoffHz = THREE.MathUtils.clamp(baseCutoffHz + baseCurve[i] * depthHz, filterFreqMinHz, filterFreqMaxHz);
      const cutoffMode = stage.cutoffTargets[0].mode;
      curve[i] = cutoffMode === "comb-delay" ? cutoffHzToCombDelaySeconds(cutoffHz) : cutoffHz;
    }

    for (let i = 0; i < stage.cutoffTargets.length; i += 1) {
      const target = stage.cutoffTargets[i];
      if (!target || !target.param) {
        continue;
      }
      const baseValue = target.mode === "comb-delay" ? cutoffHzToCombDelaySeconds(baseCutoffHz) : baseCutoffHz;
      target.param.cancelScheduledValues(startTime);
      target.param.setValueAtTime(baseValue, startTime);
      target.param.setValueCurveAtTime(curve, startTime, Math.max(duration, 0.01));
    }
  };

  applyStageLfo(meta.stage1, "filter1Cutoff", filter1CutoffHz);
  applyStageLfo(meta.stage2, "filter2Cutoff", filter2CutoffHz);
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

function getQuantizeScaleIntervals() {
  if (!scaleSelect || scaleSelect.value === "none") {
    return null;
  }
  return SCALE_INTERVALS[scaleSelect.value] || SCALE_INTERVALS.minor;
}

function quantizeMidiToScaleNearest(midi, tonicMidi, scaleIntervals) {
  if (!scaleIntervals || !scaleIntervals.length) {
    return midi;
  }

  const tonicPc = ((tonicMidi % 12) + 12) % 12;
  const allowedPitchClasses = scaleIntervals.map((interval) => (tonicPc + interval) % 12);
  const notePc = ((midi % 12) + 12) % 12;
  if (allowedPitchClasses.includes(notePc)) {
    return midi;
  }

  for (let offset = 1; offset <= 11; offset += 1) {
    const downPc = (((midi - offset) % 12) + 12) % 12;
    const upPc = (((midi + offset) % 12) + 12) % 12;
    const canDown = allowedPitchClasses.includes(downPc);
    const canUp = allowedPitchClasses.includes(upPc);

    if (canDown && canUp) {
      return midi - offset;
    }
    if (canDown) {
      return midi - offset;
    }
    if (canUp) {
      return midi + offset;
    }
  }

  return midi;
}

function buildWingNotesFromScale() {
  const quantizeScale = getQuantizeScaleIntervals();
  const baseNotes = [];
  const notes = [];
  const displayedRootMidi = getDisplayedRootMidi();

  for (let i = 0; i < wingCount; i += 1) {
    const rawMidi = displayedRootMidi + arpDistanceSemitones * (i + 1);
    const quantizedMidi = quantizeMidiToScaleNearest(rawMidi, displayedRootMidi, quantizeScale);
    baseNotes.push(quantizedMidi);
  }

  for (let octave = 0; octave <= octaveRange; octave += 1) {
    const octaveOffset = octave * 12;
    for (let i = 0; i < baseNotes.length; i += 1) {
      notes.push(baseNotes[i] + octaveOffset);
    }
  }

  return notes;
}

function buildBassNotesFromScale() {
  const quantizeScale = getQuantizeScaleIntervals();
  const bassStepCount = getBassStepCount();
  const notes = [];
  const displayedRootMidi = getDisplayedRootMidi();
  const targetBassMidi = bassToneLocked ? displayedRootMidi - 24 : displayedRootMidi + bassPitchOffset;

  bassRootMidi = quantizeMidiToScaleNearest(targetBassMidi, displayedRootMidi, quantizeScale);
  currentBassNoteMidi = bassRootMidi;
  const directionSign = bassInvertScale ? -1 : 1;
  const stepDistance = Math.max(1, Math.abs(arpDistanceSemitones));

  for (let i = 0; i < bassStepCount; i += 1) {
    const rawMidi = bassRootMidi + directionSign * stepDistance * i;
    notes.push(quantizeMidiToScaleNearest(rawMidi, displayedRootMidi, quantizeScale));
  }

  if (bassRandomizeScale && notes.length > 1) {
    for (let i = notes.length - 1; i > 0; i -= 1) {
      const swapIndex = Math.floor(Math.random() * (i + 1));
      const temp = notes[i];
      notes[i] = notes[swapIndex];
      notes[swapIndex] = temp;
    }
  }

  return notes;
}

function rebuildNoteSprites() {
  clearNoteSprites();

  rootNoteLabelEl = makeNoteLabel(midiToNoteNameWithOctave(currentMainNoteMidi ?? getDisplayedRootMidi()), true);
  if (rootNoteLabelEl) {
    rootNoteLabelEl.classList.add("mainCenterLabel");
    rootNoteLabelEl.style.display = "block";
  }

  if (!shouldHideMainWingLabels()) {
    for (let i = 0; i < wingCount; i += 1) {
      const label = makeNoteLabel(midiToNoteNameWithOctave(getWingLabelMidiAt(i)));
      if (!label) {
        continue;
      }
      label.style.display = "block";
      wingNoteLabelEls.push(label);
    }
  }

  bassRootNoteLabelEl = makeNoteLabel(midiToNoteNameWithOctave(currentBassNoteMidi ?? bassRootMidi), true);
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

  const visualWingCount = getVisualWingCount();
  const armRadius = getArmRadiusForSteps(visualWingCount, mainSpinnerScale);
  for (let i = 0; i < wingNoteLabelEls.length; i += 1) {
    const label = wingNoteLabelEls[i];
    const angle = (i / Math.max(1, visualWingCount)) * Math.PI * 2;
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

function setLfoTraceScreenPosition(traceEl, worldPos) {
  if (!traceEl) {
    return;
  }

  lfoTurboOverlayScreen.copy(worldPos).applyMatrix4(stabilizer.matrixWorld).project(camera);
  const screenX = (lfoTurboOverlayScreen.x * 0.5 + 0.5) * window.innerWidth;
  const screenY = (-lfoTurboOverlayScreen.y * 0.5 + 0.5) * window.innerHeight;
  traceEl.style.display = "block";
  traceEl.style.left = `${screenX}px`;
  traceEl.style.top = `${screenY + 60}px`;
}

function updateLfoTraceOverlayPositions() {
  if (!lfoTrace1 && !lfoTrace2) {
    return;
  }
  stabilizer.updateMatrixWorld(true);
  setLfoTraceScreenPosition(lfoTrace1, lfoTurboLeftCenter);
  setLfoTraceScreenPosition(lfoTrace2, lfoTurboRightCenter);
}

function refreshWingAssignments() {
  wingAssignedMidis = buildWingNotesFromScale();
  wingAssignedLabels = wingAssignedMidis.map((midi) => midiToNoteNameWithOctave(midi));
  currentMainNoteMidi = wingAssignedMidis.length ? wingAssignedMidis[0] : getDisplayedRootMidi();
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

  spinner = makeFidgetSpinner(getVisualWingCount(), mainSpinnerScale);
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
  updateLfoTurboVisual(spinner.position.y);
  syncBassEngineVisualState();
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

function setBeatRepeaterMode(mode) {
  if (!audioCtx || !beatRepeaterDryGate || !beatRepeaterInputGate || !beatRepeaterFeedbackGain) {
    return;
  }

  if (beatRepeaterMode === mode) {
    return;
  }

  beatRepeaterMode = mode;
  const t = audioCtx.currentTime;

  if (mode === "capture") {
    beatRepeaterDryGate.gain.setTargetAtTime(1, t, 0.005);
    beatRepeaterInputGate.gain.setTargetAtTime(1, t, 0.005);
    beatRepeaterFeedbackGain.gain.setTargetAtTime(0, t, 0.005);
    return;
  }

  if (mode === "repeat") {
    beatRepeaterDryGate.gain.setTargetAtTime(0, t, 0.005);
    beatRepeaterInputGate.gain.setTargetAtTime(0, t, 0.005);
    beatRepeaterFeedbackGain.gain.setTargetAtTime(0.985, t, 0.005);
    return;
  }

  beatRepeaterDryGate.gain.setTargetAtTime(1, t, 0.005);
  beatRepeaterInputGate.gain.setTargetAtTime(0, t, 0.005);
  beatRepeaterFeedbackGain.gain.setTargetAtTime(0, t, 0.005);
}

function scheduleBeatRepeaterQuantizedStart() {
  beatRepeaterCycleElapsed = 0;
  if (!audioCtx) {
    beatRepeaterStartAtTime = null;
    return;
  }
  const intervalSec = getIntervalSecondsFromRate(beatRepeaterIntervalDivision);
  const now = audioCtx.currentTime;
  const phase = ((now % intervalSec) + intervalSec) % intervalSec;
  const timeToNextBoundary = phase < 0.002 ? 0 : intervalSec - phase;
  beatRepeaterStartAtTime = now + timeToNextBoundary;
}

function updateBeatRepeater(dt) {
  if (!audioCtx || !beatRepeaterDelayNode) {
    return;
  }

  if ((!beatRepeaterEnabled && !beatRepeaterHoldActive) || !transportPlaying) {
    beatRepeaterStartAtTime = null;
    beatRepeaterCycleElapsed = 0;
    setBeatRepeaterMode("bypass");
    return;
  }

  const intervalSec = getIntervalSecondsFromRate(beatRepeaterIntervalDivision);
  const gridSec = getIntervalSecondsFromRate(beatRepeaterGridDivision);
  const captureSec = Math.min(gridSec, intervalSec);

  beatRepeaterDelayNode.delayTime.setTargetAtTime(captureSec, audioCtx.currentTime, 0.01);

  if (beatRepeaterStartAtTime !== null) {
    if (audioCtx.currentTime < beatRepeaterStartAtTime) {
      setBeatRepeaterMode("bypass");
      return;
    }
    beatRepeaterCycleElapsed = audioCtx.currentTime - beatRepeaterStartAtTime;
    beatRepeaterStartAtTime = null;
  }

  beatRepeaterCycleElapsed += dt;
  while (beatRepeaterCycleElapsed >= intervalSec) {
    beatRepeaterCycleElapsed -= intervalSec;
  }

  setBeatRepeaterMode(beatRepeaterCycleElapsed < captureSec ? "capture" : "repeat");
}

function setBeatRepHoldState(active) {
  beatRepeaterHoldActive = active;
  if (beatRepHoldBtn) {
    beatRepHoldBtn.classList.toggle("isHeld", active);
  }

  if (active) {
    scheduleBeatRepeaterQuantizedStart();
    setBeatRepeaterMode("bypass");
    return;
  }

  if (!beatRepeaterEnabled) {
    beatRepeaterStartAtTime = null;
    beatRepeaterCycleElapsed = 0;
    setBeatRepeaterMode("bypass");
  }
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
  currentMainNoteMidi = noteMidi;
  return midiToFreq(noteMidi);
}

function syncBassStepControls() {
  const defaultSteps = getDefaultBassStepCount();
  if (bassStepsLocked) {
    bassManualStepCount = defaultSteps;
  }

  if (bassStepsSlider) {
    bassStepsSlider.min = "3";
    bassStepsSlider.max = "12";
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
    bassEnvReleaseValue.textContent = formatMsWithRhythmHint(seconds * 1000);
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

function getBassRateDivisionFromControl(controlEl, fallback = 2) {
  if (!controlEl) {
    return fallback;
  }
  const idx = THREE.MathUtils.clamp(Math.round(Number(controlEl.value)), 0, BASS_RATE_DIVISIONS.length - 1);
  return BASS_RATE_DIVISIONS[idx] || fallback;
}

function formatBassRateDivision(division) {
  return `1/${Math.max(1, Math.round(division || 2))}`;
}

function syncBassRateLockUi() {
  if (bassRateSlider) {
    bassRateSlider.disabled = bassRateLocked;
    if (bassRateLocked) {
      bassRateDivision = 2;
      bassRateSlider.value = String(BASS_RATE_DIVISIONS.indexOf(2));
    }
  }

  if (bassRateControl) {
    bassRateControl.classList.toggle("isDisabled", bassRateLocked);
  }

  if (bassRateValue) {
    bassRateValue.textContent = formatBassRateDivision(bassRateDivision);
  }
}

if (bassEngineToggle) {
  bassEnabled = bassEngineToggle.checked;
  syncBassEngineVisualState();
  bassEngineToggle.addEventListener("change", () => {
    bassEnabled = bassEngineToggle.checked;
    syncBassEngineVisualState();
    showToast(bassEnabled ? "Bass engine on." : "Bass engine off.");
  });
}

if (bassInvertScaleToggle) {
  bassInvertScale = bassInvertScaleToggle.checked;
  bassInvertScaleToggle.addEventListener("change", () => {
    bassInvertScale = bassInvertScaleToggle.checked;
    refreshWingAssignments();
    showToast(bassInvertScale ? "Bass scale inverted." : "Bass scale normal order.");
  });
}

if (bassRandomizeScaleToggle) {
  bassRandomizeScale = bassRandomizeScaleToggle.checked;
  bassRandomizeScaleToggle.addEventListener("change", () => {
    bassRandomizeScale = bassRandomizeScaleToggle.checked;
    refreshWingAssignments();
    showToast(bassRandomizeScale ? "Bass scale randomized." : "Bass scale order fixed.");
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
  bassManualStepCount = THREE.MathUtils.clamp(Number(bassStepsSlider.value || getDefaultBassStepCount()), 3, 12);
  bassStepsSlider.addEventListener("input", () => {
    if (bassStepsLocked) {
      return;
    }
    bassManualStepCount = THREE.MathUtils.clamp(Number(bassStepsSlider.value), 3, 12);
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

if (bassLockRateToggle) {
  bassRateLocked = bassLockRateToggle.checked;
  bassLockRateToggle.addEventListener("change", () => {
    bassRateLocked = bassLockRateToggle.checked;
    bassTickCounter = 0;
    syncBassRateLockUi();
  });
}

if (bassRateSlider) {
  bassRateDivision = getBassRateDivisionFromControl(bassRateSlider, 2);
  bassRateSlider.addEventListener("input", () => {
    if (bassRateLocked) {
      return;
    }
    bassRateDivision = getBassRateDivisionFromControl(bassRateSlider, 2);
    bassTickCounter = 0;
    syncBassRateLockUi();
  });
}

if (bassEnvReleaseSlider) {
  bassEnvelopeReleaseSeconds = THREE.MathUtils.clamp(Number(bassEnvReleaseSlider.value || 0.31), 0.03, 3);
  bassEnvReleaseSlider.addEventListener("input", () => {
    if (bassReleaseLocked) {
      return;
    }
    bassEnvelopeReleaseSeconds = THREE.MathUtils.clamp(Number(bassEnvReleaseSlider.value), 0.03, 3);
    updateBassReleaseValueLabel(bassEnvelopeReleaseSeconds);
  });
}

if (bassWaveformSelect) {
  bassWaveform = bassWaveformSelect.value;
  bassWaveformSelect.addEventListener("change", () => {
    bassWaveform = bassWaveformSelect.value;
    updateFxLabels();
  });
}

if (bassFilterTypeSelect) {
  bassFilterType = normalizeBassFilterMode(bassFilterType);
  bassFilterTypeSelect.addEventListener("change", () => {
    bassFilterType = normalizeBassFilterMode(bassFilterTypeSelect.value);
    updateFxLabels();
  });
}

if (bassFilterFreqSlider) {
  bassFilterFreqSlider.addEventListener("input", () => {
    bassFilterCutoffHz = THREE.MathUtils.clamp(Number(bassFilterFreqSlider.value), filterFreqMinHz, filterFreqMaxHz);
    updateFxLabels();
  });
}

if (bassFilterResSlider) {
  bassFilterResSlider.addEventListener("input", () => {
    bassFilterResonance = THREE.MathUtils.clamp(Number(bassFilterResSlider.value), filterResMin, filterResMax);
    updateFxLabels();
  });
}

syncBassToneLockUi();
syncBassStepControls();
syncBassReleaseLockUi();
syncBassRateLockUi();

if (soundSourceSelect) {
  soundSourceSelect.addEventListener("change", () => {
    soundSourceMode = soundSourceSelect.value;
    const label = soundSourceSelect.options[soundSourceSelect.selectedIndex].text;
    showToast(`Sound source: ${label}.`);
  });
}

if (wingCountSlider && wingCountValue) {
  const updateWingCountUi = () => {
    wingCount = THREE.MathUtils.clamp(Number(wingCountSlider.value), 3, 12);
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
    wingCount = THREE.MathUtils.clamp(Number(stepsSlider.value), 3, 12);
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
  showToast(muted ? "Sound muted." : "Sound on.");
});

hapticsToggle.addEventListener("change", () => {
  noHaptics = hapticsToggle.checked;
  showToast(noHaptics ? "Haptics off." : "Haptics on.");
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
  showToast(`Root note set to ${rootNoteSelect.value}.`);
});

scaleSelect.addEventListener("change", () => {
  resetArpSequence();
  refreshWingAssignments();
  showToast(`Scale set to ${scaleSelect.options[scaleSelect.selectedIndex].text}.`);
});

if (octaveRangeSlider && octaveRangeValue) {
  const updateOctaveRangeUi = () => {
    octaveRange = THREE.MathUtils.clamp(Number(octaveRangeSlider.value), 0, 10);
    clampCurrentRootMidiToOctaveRange();
    octaveRangeValue.textContent = `+${octaveRange}`;
    resetArpSequence();
    rebuildSpinnerGeometry();
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
    showToast(`Arp direction: ${label}.`);
  });
}

if (arpDistanceSlider && arpDistanceValue) {
  const updateArpDistanceUi = () => {
    arpDistanceSemitones = THREE.MathUtils.clamp(Number(arpDistanceSlider.value), 0, 24);
    arpDistanceValue.textContent = `${arpDistanceSemitones >= 0 ? "+" : ""}${arpDistanceSemitones} st`;
    resetArpSequence();
    refreshWingAssignments();
  };

  arpDistanceSlider.addEventListener("input", updateArpDistanceUi);
  updateArpDistanceUi();
}

if (arpGateSlider && arpGateValue) {
  const updateArpGateUi = () => {
    arpGatePercent = THREE.MathUtils.clamp(Number(arpGateSlider.value), 5, 100);
    arpGateValue.textContent = `${Math.round(arpGatePercent)}%`;
  };

  arpGateSlider.addEventListener("input", updateArpGateUi);
  updateArpGateUi();
}

if (tempoInput) {
  tempoInput.addEventListener("input", () => {
    tempoBpm = THREE.MathUtils.clamp(Number(tempoInput.value || 120), 30, 280);
    tempoInput.value = String(Math.round(tempoBpm));
    updateFxLabels();
    updateBassReleaseValueLabel(bassReleaseLocked ? envelopeReleaseSeconds : bassEnvelopeReleaseSeconds);
  });
}

function normalizeArpRateBounds() {
  minArpRate = readArpRateControlValue(minArpRateSelect, minArpRate);
  maxArpRate = readArpRateControlValue(maxArpRateSelect, maxArpRate);

  if (minArpRate > maxArpRate) {
    const tmp = minArpRate;
    minArpRate = maxArpRate;
    maxArpRate = tmp;
  }

  if (minArpRateSelect) minArpRateSelect.value = String(getArpRateIndexFromDivision(minArpRate, 8));
  if (maxArpRateSelect) maxArpRateSelect.value = String(getArpRateIndexFromDivision(maxArpRate, 128));
  if (minArpRateValue) minArpRateValue.textContent = formatRateDivision(minArpRate);
  if (maxArpRateValue) maxArpRateValue.textContent = formatRateDivision(maxArpRate);
}

if (minArpRateSelect) {
  minArpRateSelect.addEventListener("input", () => {
    normalizeArpRateBounds();
  });
}

if (maxArpRateSelect) {
  maxArpRateSelect.addEventListener("input", () => {
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
      showToast("Transport stopped.");
    } else {
      if (audioCtx) {
        lfoSyncStartTime = audioCtx.currentTime;
      }
      showToast(`Transport playing at ${Math.round(tempoBpm)} BPM.`);
    }
    updateTransportToggleUi();
  });
}

normalizeArpRateBounds();
updateTransportToggleUi();

function getRhythmHintDivisions() {
  return [1, 2, 4, 8, 16, 32, 64];
}

function formatMsWithRhythmHint(milliseconds) {
  const rhythmDivisions = getRhythmHintDivisions();
  const ms = Math.max(0, Math.round(milliseconds));
  const quarterMs = 60000 / Math.max(30, tempoBpm);
  let nearestDivision = rhythmDivisions[0];
  let nearestMs = quarterMs * (4 / nearestDivision);
  let minDiff = Math.abs(ms - nearestMs);

  for (let i = 1; i < rhythmDivisions.length; i += 1) {
    const division = rhythmDivisions[i];
    const divisionMs = quarterMs * (4 / division);
    const diff = Math.abs(ms - divisionMs);
    if (diff < minDiff) {
      minDiff = diff;
      nearestDivision = division;
      nearestMs = divisionMs;
    }
  }

  const ratioError = nearestMs > 0 ? minDiff / nearestMs : 1;
  const divisionText = `1/${nearestDivision}`;

  if (ratioError <= 0.035) {
    return `${ms}ms (${divisionText}th)`;
  }

  if (ratioError <= 0.16) {
    return `${ms}ms (${divisionText}ish)`;
  }

  return `${ms}ms`;
}

function getLfoRotorHz(rateDivision) {
  const beatsPerSecond = tempoBpm / 60;
  return THREE.MathUtils.clamp((beatsPerSecond * Math.max(0.25, rateDivision)) / 4, 0.12, 14);
}

function getCombinedLfoVisualValueAtTime(timeSec) {
  const amount1 = Math.max(0, lfoAmount);
  const amount2 = Math.max(0, lfoAmount2);
  const v1 = getLfoValueAtTime(lfoShape, lfoRateDivision, timeSec) * amount1;
  const v2 = getLfoValueAtTime(lfoShape2, lfoRateDivision2, timeSec) * amount2;
  const total = v1 + v2;
  if (Math.abs(total) > 0.0001) {
    return THREE.MathUtils.clamp(total, -1, 1);
  }
  return getLfoValueAtTime(lfoShape, lfoRateDivision, timeSec) * 0.8;
}

function buildLfoTracePoints(shape, rateDivision, timeSec, width = 56, height = 28, sampleCount = 28) {
  const points = [];
  const duration = Math.max(0.08, (60 / Math.max(30, tempoBpm)) * 1.25);
  const start = timeSec - duration;

  for (let i = 0; i < sampleCount; i += 1) {
    const frac = i / (sampleCount - 1);
    const t = start + frac * duration;
    const value = getLfoValueAtTime(shape, rateDivision, t);
    const x = Math.round(frac * width * 100) / 100;
    const y = Math.round((height * 0.5 - value * (height * 0.36)) * 100) / 100;
    points.push(`${x},${y}`);
  }

  return points.join(" ");
}

function updateLfoFloatTraces(timeSec) {
  if (!lfoTraceLine1 || !lfoTraceLine2) {
    return;
  }

  lfoTraceLine1.setAttribute("points", buildLfoTracePoints(lfoShape, lfoRateDivision, timeSec));
  lfoTraceLine2.setAttribute("points", buildLfoTracePoints(lfoShape2, lfoRateDivision2, timeSec));
}

function updateFxLabels() {
  if (reverbDecayValue) {
    reverbDecayValue.textContent = `${reverbDecaySeconds.toFixed(1)}s`;
  }
  if (envReleaseValue) {
    envReleaseValue.textContent = formatMsWithRhythmHint(envelopeReleaseSeconds * 1000);
  }
  if (delayTimeValue) {
    delayTimeValue.textContent = formatMsWithRhythmHint(delayTimeSeconds * 1000);
  }
  if (delayAmountValue) {
    delayAmountValue.textContent = `${Math.round(delayAmount * 100)}%`;
  }
  if (lfoRateValue) {
    lfoRateValue.textContent = formatRateDivision(lfoRateDivision);
  }
  if (lfoRateValue2) {
    lfoRateValue2.textContent = formatRateDivision(lfoRateDivision2);
  }
  if (lfoTraceTitle1) {
    lfoTraceTitle1.textContent = `LFO1 ${formatRateDivision(lfoRateDivision)}`;
  }
  if (lfoTraceTitle2) {
    lfoTraceTitle2.textContent = `LFO2 ${formatRateDivision(lfoRateDivision2)}`;
  }
  if (lfoRateSelect) {
    lfoRateSelect.value = String(getLfoRateIndexFromDivision(lfoRateDivision, 16));
  }
  if (lfoRateSelect2) {
    lfoRateSelect2.value = String(getLfoRateIndexFromDivision(lfoRateDivision2, 16));
  }
  if (lfoAmountValue) {
    lfoAmountValue.textContent = `${Math.round(lfoAmount * 100)}%`;
  }
  if (lfoAmountValue2) {
    lfoAmountValue2.textContent = `${Math.round(lfoAmount2 * 100)}%`;
  }
  if (filter1TypeValue) {
    filter1TypeValue.textContent = formatFilterTypeShort(filter1Type);
  }
  if (filter2TypeValue) {
    filter2TypeValue.textContent = formatFilterTypeShort(filter2Type);
  }
  if (filter1DepthValue) {
    filter1DepthValue.textContent = `${Math.round(filter1DepthDb)}dB`;
  }
  if (filter2DepthValue) {
    filter2DepthValue.textContent = `${Math.round(filter2DepthDb)}dB`;
  }
  if (filter1FreqValue) {
    filter1FreqValue.textContent = `${Math.round(filter1CutoffHz)}Hz`;
  }
  if (filter2FreqValue) {
    filter2FreqValue.textContent = `${Math.round(filter2CutoffHz)}Hz`;
  }
  if (filter1ResValue) {
    filter1ResValue.textContent = filter1Resonance.toFixed(2);
  }
  if (filter2ResValue) {
    filter2ResValue.textContent = filter2Resonance.toFixed(2);
  }
  if (bassWaveformValue) {
    bassWaveformValue.textContent = formatBassWaveformShort(bassWaveform);
  }
  if (bassFilterTypeValue) {
    bassFilterTypeValue.textContent = getBassFilterConfig(bassFilterType).shortLabel;
  }
  if (bassFilterFreqValue) {
    bassFilterFreqValue.textContent = `${Math.round(bassFilterCutoffHz)}Hz`;
  }
  if (bassFilterResValue) {
    bassFilterResValue.textContent = bassFilterResonance.toFixed(2);
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
    const sliderEl = containerEl.querySelector(':scope > input[type="range"]');
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
  finalLimiter = audioCtx.createDynamicsCompressor();
  reverbSendGain = audioCtx.createGain();
  reverbConvolver = audioCtx.createConvolver();
  reverbWetGain = audioCtx.createGain();
  delaySendGain = audioCtx.createGain();
  delayNode = audioCtx.createDelay(0.5);
  delayFeedbackGain = audioCtx.createGain();
  delayWetGain = audioCtx.createGain();
  beatRepeaterInputGain = audioCtx.createGain();
  beatRepeaterDryGate = audioCtx.createGain();
  beatRepeaterInputGate = audioCtx.createGain();
  beatRepeaterLoopInputGain = audioCtx.createGain();
  beatRepeaterDelayNode = audioCtx.createDelay(0.5);
  beatRepeaterFeedbackGain = audioCtx.createGain();
  beatRepeaterOutputGain = audioCtx.createGain();

  masterDryGain.gain.value = 0.92;
  masterOutGain.gain.value = masterVolume;
  reverbSendGain.gain.value = 0.34;
  reverbWetGain.gain.value = 0.45;
  delaySendGain.gain.value = 0.28;
  delayNode.delayTime.value = delayTimeSeconds;
  delayFeedbackGain.gain.value = delayAmount;
  delayWetGain.gain.value = 0.6;
  beatRepeaterInputGain.gain.value = 1;
  beatRepeaterDryGate.gain.value = 1;
  beatRepeaterInputGate.gain.value = 0;
  beatRepeaterFeedbackGain.gain.value = 0;
  beatRepeaterOutputGain.gain.value = 1;
  beatRepeaterDelayNode.delayTime.value = getIntervalSecondsFromRate(beatRepeaterGridDivision);
  // Master safety limiter: transparent at normal levels, clamps fast only above the ceiling.
  finalLimiter.threshold.value = masterLimiterThresholdDb;
  finalLimiter.knee.value = 0;
  finalLimiter.ratio.value = 20;
  finalLimiter.attack.value = 0.003;
  finalLimiter.release.value = 0.06;
  pulsePeriodicWave = audioCtx.createPeriodicWave(
    new Float32Array([0, 1, 0.8, 0.62, 0.48, 0.35, 0.25, 0.18]),
    new Float32Array([0, 0, 0.2, 0, 0.16, 0, 0.12, 0])
  );

  const noiseLength = Math.max(1, Math.floor(audioCtx.sampleRate * 1.4));
  noiseBuffer = audioCtx.createBuffer(1, noiseLength, audioCtx.sampleRate);
  const noiseData = noiseBuffer.getChannelData(0);
  for (let i = 0; i < noiseLength; i += 1) {
    noiseData[i] = Math.random() * 2 - 1;
  }

  masterDryGain.connect(masterOutGain);
  reverbSendGain.connect(reverbConvolver);
  reverbConvolver.connect(reverbWetGain);
  reverbWetGain.connect(masterOutGain);

  delaySendGain.connect(delayNode);
  delayNode.connect(delayFeedbackGain);
  delayFeedbackGain.connect(delayNode);
  delayNode.connect(delayWetGain);
  delayWetGain.connect(masterOutGain);
  masterOutGain.connect(finalLimiter);
  finalLimiter.connect(audioCtx.destination);

  beatRepeaterInputGain.connect(beatRepeaterDryGate);
  beatRepeaterDryGate.connect(beatRepeaterOutputGain);
  beatRepeaterInputGain.connect(beatRepeaterInputGate);
  beatRepeaterInputGate.connect(beatRepeaterLoopInputGain);
  beatRepeaterFeedbackGain.connect(beatRepeaterLoopInputGain);
  beatRepeaterLoopInputGain.connect(beatRepeaterDelayNode);
  beatRepeaterDelayNode.connect(beatRepeaterFeedbackGain);
  beatRepeaterDelayNode.connect(beatRepeaterOutputGain);
  beatRepeaterOutputGain.connect(masterDryGain);
  beatRepeaterOutputGain.connect(reverbSendGain);
  beatRepeaterOutputGain.connect(delaySendGain);

  setBeatRepeaterMode("bypass");
  refreshReverbBuffer();
}

function routeToMixBuses(node) {
  if (masterDryGain && reverbSendGain && delaySendGain) {
    node.connect(masterDryGain);
    node.connect(reverbSendGain);
    node.connect(delaySendGain);
    return;
  }
  node.connect(audioCtx.destination);
}

function routeVoiceToMix(gainNode, isMainSpinner = true) {
  if (isMainSpinner && beatRepeaterInputGain) {
    gainNode.connect(beatRepeaterInputGain);
    return;
  }

  routeToMixBuses(gainNode);
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

  const release = getArpVoiceRelease(envelopeReleaseSeconds, t, 0.02, 1.2);
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
    const release = getArpVoiceRelease(envelopeReleaseSeconds, t, 0.02, 1.2);
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

    osc.connect(voiceFilter.input);
    voiceFilter.output.connect(ampMod);
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
    showToast("Monotone fallback to arpeggiator.");
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
    const release = getArpVoiceRelease(baseRelease, t, 0.05, 0.7);
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
    body.connect(voiceFilter.input);
    voiceFilter.output.connect(ampMod);
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
    const release = getArpVoiceRelease(envelopeReleaseSeconds, t, 0.02, 1.2);
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

    osc.connect(voiceFilter.input);
    sub.connect(voiceFilter.input);
    voiceFilter.output.connect(ampMod);
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

function playWaveformTick(speed, oscType, sourceMode) {
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
    const release = getArpVoiceRelease(envelopeReleaseSeconds, t, 0.02, 1.2);
    const lfoDuration = release + 0.03;

    osc.type = oscType;
    sub.type = "sine";
    osc.frequency.setValueAtTime(baseFreq, t);
    sub.frequency.setValueAtTime(baseFreq * 0.5, t);
    if (sourceMode === "waveSaw") {
      osc.detune.setValueAtTime(3, t);
      sub.detune.setValueAtTime(-3, t);
    }

    ampMod.gain.setValueAtTime(1, t);
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(0.012 + brightness * 0.011, t + 0.006);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + release);

    applyPitchLfo([osc.detune, sub.detune], t, lfoDuration);
    applyAmplitudeLfo(ampMod.gain, t, lfoDuration);
    applyFilterLfo(voiceFilter, t, lfoDuration);

    osc.connect(voiceFilter.input);
    sub.connect(voiceFilter.input);
    voiceFilter.output.connect(ampMod);
    ampMod.connect(gain);
    routeVoiceToMix(gain);
    osc.start(t);
    sub.start(t);
    osc.stop(t + release + 0.02);
    sub.stop(t + release + 0.02);
  } catch (err) {
    console.error(err);
  }
}

function playPulseTick(speed) {
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
    const release = getArpVoiceRelease(envelopeReleaseSeconds * 0.9, t, 0.02, 1);
    const lfoDuration = release + 0.03;

    if (pulsePeriodicWave) {
      osc.setPeriodicWave(pulsePeriodicWave);
    } else {
      osc.type = "square";
    }
    sub.type = "sine";
    osc.frequency.setValueAtTime(baseFreq, t);
    sub.frequency.setValueAtTime(baseFreq * 0.5, t);

    ampMod.gain.setValueAtTime(1, t);
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(0.011 + brightness * 0.01, t + 0.004);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + release);

    applyPitchLfo([osc.detune, sub.detune], t, lfoDuration);
    applyAmplitudeLfo(ampMod.gain, t, lfoDuration);
    applyFilterLfo(voiceFilter, t, lfoDuration);

    osc.connect(voiceFilter.input);
    sub.connect(voiceFilter.input);
    voiceFilter.output.connect(ampMod);
    ampMod.connect(gain);
    routeVoiceToMix(gain);
    osc.start(t);
    sub.start(t);
    osc.stop(t + release + 0.02);
    sub.stop(t + release + 0.02);
  } catch (err) {
    console.error(err);
  }
}

function playSupersawTick(speed) {
  if (!audioReady || !audioCtx) {
    return;
  }

  try {
    const t = audioCtx.currentTime;
    const detunes = [-14, -7, 0, 7, 14];
    const oscs = [];
    const ampMod = audioCtx.createGain();
    const gain = audioCtx.createGain();
    const voiceFilter = createVoiceModFilter(t);
    const brightness = THREE.MathUtils.clamp(speed / maxSpin, 0, 1);
    const baseFreq = getSoftToneFreq(speed, angularVelocity < 0);
    const release = getArpVoiceRelease(envelopeReleaseSeconds * 1.1, t, 0.03, 1.4);
    const lfoDuration = release + 0.03;
    const detuneParams = [];

    for (let i = 0; i < detunes.length; i += 1) {
      const osc = audioCtx.createOscillator();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(baseFreq, t);
      osc.detune.setValueAtTime(detunes[i], t);
      osc.connect(voiceFilter.input);
      oscs.push(osc);
      detuneParams.push(osc.detune);
    }

    ampMod.gain.setValueAtTime(1, t);
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(0.009 + brightness * 0.008, t + 0.007);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + release);

    applyPitchLfo(detuneParams, t, lfoDuration);
    applyAmplitudeLfo(ampMod.gain, t, lfoDuration);
    applyFilterLfo(voiceFilter, t, lfoDuration);

    voiceFilter.output.connect(ampMod);
    ampMod.connect(gain);
    routeVoiceToMix(gain);
    for (let i = 0; i < oscs.length; i += 1) {
      oscs[i].start(t);
      oscs[i].stop(t + release + 0.03);
    }
  } catch (err) {
    console.error(err);
  }
}

function playFmBellTick(speed) {
  if (!audioReady || !audioCtx) {
    return;
  }

  try {
    const t = audioCtx.currentTime;
    const carrier = audioCtx.createOscillator();
    const mod = audioCtx.createOscillator();
    const modGain = audioCtx.createGain();
    const ampMod = audioCtx.createGain();
    const gain = audioCtx.createGain();
    const voiceFilter = createVoiceModFilter(t);
    const brightness = THREE.MathUtils.clamp(speed / maxSpin, 0, 1);
    const baseFreq = getSoftToneFreq(speed, angularVelocity < 0);
    const release = getArpVoiceRelease(envelopeReleaseSeconds * 1.25, t, 0.04, 1.8);
    const lfoDuration = release + 0.04;

    carrier.type = "sine";
    mod.type = "sine";
    carrier.frequency.setValueAtTime(baseFreq, t);
    mod.frequency.setValueAtTime(baseFreq * 2.8, t);
    modGain.gain.setValueAtTime(baseFreq * (2.2 + brightness * 1.8), t);
    modGain.gain.exponentialRampToValueAtTime(Math.max(1, baseFreq * 0.12), t + release);

    ampMod.gain.setValueAtTime(1, t);
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(0.015 + brightness * 0.012, t + 0.005);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + release);

    applyPitchLfo([carrier.detune, mod.detune], t, lfoDuration);
    applyAmplitudeLfo(ampMod.gain, t, lfoDuration);
    applyFilterLfo(voiceFilter, t, lfoDuration);

    mod.connect(modGain);
    modGain.connect(carrier.frequency);
    carrier.connect(voiceFilter.input);
    voiceFilter.output.connect(ampMod);
    ampMod.connect(gain);
    routeVoiceToMix(gain);
    carrier.start(t);
    mod.start(t);
    carrier.stop(t + release + 0.04);
    mod.stop(t + release + 0.04);
  } catch (err) {
    console.error(err);
  }
}

function playPluckTick(speed) {
  if (!audioReady || !audioCtx) {
    return;
  }

  try {
    const t = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const body = audioCtx.createBiquadFilter();
    const ampMod = audioCtx.createGain();
    const gain = audioCtx.createGain();
    const voiceFilter = createVoiceModFilter(t);
    const brightness = THREE.MathUtils.clamp(speed / maxSpin, 0, 1);
    const baseFreq = getSoftToneFreq(speed, angularVelocity < 0);
    const release = getArpVoiceRelease(envelopeReleaseSeconds * 0.55, t, 0.02, 0.5);
    const lfoDuration = release + 0.02;

    osc.type = "triangle";
    osc.frequency.setValueAtTime(baseFreq, t);
    body.type = "bandpass";
    body.frequency.setValueAtTime(Math.min(12000, baseFreq * (3.5 + brightness * 1.8)), t);
    body.Q.setValueAtTime(1.8 + brightness * 2.4, t);

    ampMod.gain.setValueAtTime(1, t);
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(0.017 + brightness * 0.01, t + 0.002);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + release);

    applyPitchLfo([osc.detune], t, lfoDuration);
    applyAmplitudeLfo(ampMod.gain, t, lfoDuration);
    applyFilterLfo(voiceFilter, t, lfoDuration);

    osc.connect(body);
    body.connect(voiceFilter.input);
    voiceFilter.output.connect(ampMod);
    ampMod.connect(gain);
    routeVoiceToMix(gain);
    osc.start(t);
    osc.stop(t + release + 0.02);
  } catch (err) {
    console.error(err);
  }
}

function playNoiseTick(speed) {
  if (!audioReady || !audioCtx || !noiseBuffer) {
    return;
  }

  try {
    const t = audioCtx.currentTime;
    const src = audioCtx.createBufferSource();
    const body = audioCtx.createBiquadFilter();
    const ampMod = audioCtx.createGain();
    const gain = audioCtx.createGain();
    const voiceFilter = createVoiceModFilter(t);
    const brightness = THREE.MathUtils.clamp(speed / maxSpin, 0, 1);
    const release = getArpVoiceRelease(envelopeReleaseSeconds * 0.4, t, 0.02, 0.38);
    const lfoDuration = release + 0.02;

    src.buffer = noiseBuffer;
    src.loop = false;
    body.type = "bandpass";
    body.frequency.setValueAtTime(600 + brightness * 2600, t);
    body.Q.setValueAtTime(1.4 + brightness * 2.2, t);

    ampMod.gain.setValueAtTime(1, t);
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(0.02 + brightness * 0.016, t + 0.002);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + release);

    applyAmplitudeLfo(ampMod.gain, t, lfoDuration);
    applyFilterLfo(voiceFilter, t, lfoDuration);

    src.connect(body);
    body.connect(voiceFilter.input);
    voiceFilter.output.connect(ampMod);
    ampMod.connect(gain);
    routeVoiceToMix(gain);
    src.start(t);
    src.stop(t + release + 0.03);
  } catch (err) {
    console.error(err);
  }
}

function playTick(speed) {
  if (muted) {
    return;
  }

  if (soundSourceMode === "monotone") {
    playMonotoneTick(speed);
    return;
  }

  if (soundSourceMode === "ocarina") {
    playOcarinaTick(speed);
    return;
  }

  if (soundSourceMode === "waveSine") {
    playWaveformTick(speed, "sine", soundSourceMode);
    return;
  }

  if (soundSourceMode === "waveTriangle") {
    playWaveformTick(speed, "triangle", soundSourceMode);
    return;
  }

  if (soundSourceMode === "waveSaw") {
    playWaveformTick(speed, "sawtooth", soundSourceMode);
    return;
  }

  if (soundSourceMode === "waveSquare") {
    playWaveformTick(speed, "square", soundSourceMode);
    return;
  }

  if (soundSourceMode === "wavePulse") {
    playPulseTick(speed);
    return;
  }

  if (soundSourceMode === "waveSupersaw") {
    playSupersawTick(speed);
    return;
  }

  if (soundSourceMode === "waveFmBell") {
    playFmBellTick(speed);
    return;
  }

  if (soundSourceMode === "wavePluck") {
    playPluckTick(speed);
    return;
  }

  if (soundSourceMode === "waveNoise") {
    playNoiseTick(speed);
    return;
  }

  playArpTick(speed);
}

let lastHapticTime = 0;
let prevVelocity = 0;
let lastTickHapticTime = 0;
let lastAudioTickTime = 0;
let lastBassNoteTime = 0;
const minArpTickMs = 24;
const minMonotoneTickMs = 54;
const minOcarinaTickMs = 62;
const minSupersawTickMs = 40;
const minFmTickMs = 46;
const minNoiseTickMs = 32;
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
  } else if (soundSourceMode === "waveSupersaw") {
    minGap = minSupersawTickMs;
  } else if (soundSourceMode === "waveFmBell") {
    minGap = minFmTickMs;
  } else if (soundSourceMode === "waveNoise") {
    minGap = minNoiseTickMs;
  }

  if (now - lastAudioTickTime >= minGap) {
    playTick(speed);
    refreshMainWingLabelTexts();
    updateCenterNoteLabelVisual();
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
    const ampMod = audioCtx.createGain();
    const gain = audioCtx.createGain();
    const bassFilter = createBassVoiceFilter(t);
    const brightness = THREE.MathUtils.clamp(speed / maxSpin, 0, 1);
    const pool = bassAssignedMidis.length ? bassAssignedMidis : [getDisplayedRootMidi() - 24, getDisplayedRootMidi() - 17];
    const baseIdx = ((bassStepIndex % pool.length) + pool.length) % pool.length;
    const idx = angularVelocity < 0 ? pool.length - 1 - baseIdx : baseIdx;
    const bassMidi = pool[idx];
    currentBassNoteMidi = bassMidi;
    updateBassCenterNoteLabelVisual();
    bassStepIndex = (bassStepIndex + 1) % pool.length;
    const bassFreq = midiToFreq(bassMidi);
    const baseRelease = bassReleaseLocked ? envelopeReleaseSeconds : bassEnvelopeReleaseSeconds;
    const release = getReleaseWithLfo(baseRelease, t, 0.03, 3);
    const lfoDuration = release + 0.05;

    if (bassWaveform === "pulse" && pulsePeriodicWave) {
      osc.setPeriodicWave(pulsePeriodicWave);
    } else if (bassWaveform === "pulse") {
      osc.type = "square";
    } else {
      osc.type = bassWaveform;
    }
    sub.type = "sine";
    osc.frequency.setValueAtTime(bassFreq, t);
    sub.frequency.setValueAtTime(bassFreq * 0.5, t);

    ampMod.gain.setValueAtTime(1, t);
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(0.024 + brightness * 0.02, t + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + release);

    applyPitchLfo([osc.detune, sub.detune], t, lfoDuration);
    applyAmplitudeLfo(ampMod.gain, t, lfoDuration);
    applyFilterLfo(bassFilter, t, lfoDuration);

    osc.connect(bassFilter.input);
    sub.connect(bassFilter.input);
    bassFilter.output.connect(ampMod);
    ampMod.connect(gain);
    routeVoiceToMix(gain, false);
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

  updateBeatRepeater(dt);

  if (delayNode && audioCtx) {
    const modulatedDelay = getModulatedDelayTimeSeconds(audioCtx.currentTime);
    delayNode.delayTime.setTargetAtTime(modulatedDelay, audioCtx.currentTime, 0.01);
  }

  const userSpinSpeed = Math.abs(gestureAngularVelocity);
  const speedNorm = THREE.MathUtils.clamp(userSpinSpeed / maxSpin, 0, 1);
  const arpInterval = getCurrentArpIntervalSeconds(speedNorm, dt);
  currentArpIntervalSeconds = arpInterval;
  const targetTransportAngularVelocity = transportPlaying
    ? ((Math.PI * 2) / Math.max(1, wingCount)) / Math.max(arpInterval, 1 / 512) * spinDirection
    : 0;

  if (transportPlaying) {
    transportDriveAngularVelocity = targetTransportAngularVelocity;
  } else {
    transportDriveAngularVelocity *= Math.pow(transportSpinDownDamping, dt * 60);
    if (Math.abs(transportDriveAngularVelocity) < 0.003) {
      transportDriveAngularVelocity = 0;
    }
  }

  // Wheel stays in clocked motion at transport speed, while gesture spin adds expressive push.
  angularVelocity = bladeBrakeActive ? 0 : transportDriveAngularVelocity + gestureAngularVelocity;
  spinAngle += angularVelocity * dt;
  const spinSpeed = Math.abs(angularVelocity);
  const rotorDirection = Math.abs(angularVelocity) > 0.01 ? (angularVelocity < 0 ? -1 : 1) : spinDirection;
  const machineEnergy = THREE.MathUtils.clamp(spinSpeed / maxSpin, 0, 1);

  lfoRotorAngle1 += rotorDirection * getLfoRotorHz(lfoRateDivision) * dt * Math.PI * 2 * (0.55 + machineEnergy * 0.6);
  lfoRotorAngle2 += rotorDirection * getLfoRotorHz(lfoRateDivision2) * dt * Math.PI * 2 * (0.55 + machineEnergy * 0.6);
  if (lfoTurboLeftFan) {
    lfoTurboLeftFan.rotation.z = lfoRotorAngle1;
  }
  if (lfoTurboRightFan) {
    lfoTurboRightFan.rotation.z = -lfoRotorAngle2;
  }

  const lfoScopeTime = audioCtx ? audioCtx.currentTime : performance.now() / 1000;
  updateLfoFloatTraces(lfoScopeTime);

  const clockActive = (transportPlaying || Math.abs(transportDriveAngularVelocity) > 0.02) && !bladeBrakeActive;
  if (clockActive) {
    arpClockAccumulator += dt;
    let tickCount = 0;
    while (arpClockAccumulator >= arpInterval && tickCount < 32) {
      arpClockAccumulator -= arpInterval;
      triggerSpinBeat(now, spinSpeed);
      bassTickCounter += 1;
      const bassTickDivision = bassRateLocked ? 2 : bassRateDivision;
      if (bassEnabled && bassTickCounter % bassTickDivision === 0 && now - lastBassNoteTime >= minBassTickMs) {
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
  const targetBassY = bassRelativeOctave * 0.34 + bassDragOffsetY + bassVisualBaseYOffset;
  bassSpinner.position.y = THREE.MathUtils.lerp(bassSpinner.position.y, targetBassY, 0.14);
  updatePulleyVisual(spinner.position.y, bassSpinner.position.y);
  updateLfoTurboVisual(spinner.position.y);
  updateLfoTraceOverlayPositions();

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
    showToast("Audio blocked by browser. Keep interacting to enable sound.");
  });

  if (isNativeCapacitor && nativeHaptics) {
    nativeHaptics.selectionStart().catch(() => {});
    pulseHaptic(12);
  } else if (hapticsAvailable) {
    pulseHaptic(12);
  } else if (!canVibrate) {
    showToast("Vibration not available in this browser/device.");
  }
});

if (motionBtn) {
  motionBtn.addEventListener("pointerdown", (event) => {
    event.stopPropagation();
    unlockAudio().catch(() => {
      showToast("Audio blocked by browser. Keep interacting to enable sound.");
    });

    toggleMotion().catch(() => {
      showToast("Motion unavailable on this device/browser.");
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
    renderLfoShapePreview(lfoShapePreview1, lfoShape);
  });
  renderLfoShapePreview(lfoShapePreview1, lfoShape);
}

if (lfoShapeSelect2) {
  lfoShapeSelect2.addEventListener("change", () => {
    lfoShape2 = lfoShapeSelect2.value;
    renderLfoShapePreview(lfoShapePreview2, lfoShape2);
  });
  renderLfoShapePreview(lfoShapePreview2, lfoShape2);
}

if (lfoRateSelect) {
  lfoRateSelect.addEventListener("input", () => {
    lfoRateDivision = getLfoRateDivisionFromControl(lfoRateSelect, 16);
    updateFxLabels();
  });
}

if (lfoRateSelect2) {
  lfoRateSelect2.addEventListener("input", () => {
    lfoRateDivision2 = getLfoRateDivisionFromControl(lfoRateSelect2, 16);
    updateFxLabels();
  });
}

if (lfoAmountSlider) {
  lfoAmountSlider.addEventListener("input", () => {
    lfoAmount = THREE.MathUtils.clamp(Number(lfoAmountSlider.value) / 100, 0, 1);
    updateFxLabels();
  });
}

if (lfoAmountSlider2) {
  lfoAmountSlider2.addEventListener("input", () => {
    lfoAmount2 = THREE.MathUtils.clamp(Number(lfoAmountSlider2.value) / 100, 0, 1);
    updateFxLabels();
  });
}

if (lfoTargetSelect) {
  lfoTargetSelect.addEventListener("change", () => {
    lfoTarget = lfoTargetSelect.value;
  });
}

if (lfoTargetSelect2) {
  lfoTargetSelect2.addEventListener("change", () => {
    lfoTarget2 = lfoTargetSelect2.value;
  });
}

if (beatRepeaterToggle) {
  beatRepeaterEnabled = beatRepeaterToggle.checked;
  beatRepeaterToggle.addEventListener("change", () => {
    beatRepeaterEnabled = beatRepeaterToggle.checked;
    if (beatRepeaterEnabled) {
      scheduleBeatRepeaterQuantizedStart();
      setBeatRepeaterMode("bypass");
    } else {
      beatRepeaterStartAtTime = null;
      beatRepeaterCycleElapsed = 0;
      setBeatRepeaterMode("bypass");
    }
    showToast(beatRepeaterEnabled ? "Beat Repeater on (main spinner only)." : "Beat Repeater off.");
  });
}

if (beatRepeaterIntervalSelect) {
  beatRepeaterIntervalDivision = THREE.MathUtils.clamp(Number(beatRepeaterIntervalSelect.value), 2, 16);
  beatRepeaterIntervalSelect.addEventListener("change", () => {
    beatRepeaterIntervalDivision = THREE.MathUtils.clamp(Number(beatRepeaterIntervalSelect.value), 2, 16);
    if (beatRepeaterEnabled || beatRepeaterHoldActive) {
      scheduleBeatRepeaterQuantizedStart();
      setBeatRepeaterMode("bypass");
    } else {
      beatRepeaterCycleElapsed = 0;
    }
  });
}

if (beatRepeaterGridSelect) {
  beatRepeaterGridDivision = THREE.MathUtils.clamp(Number(beatRepeaterGridSelect.value), 16, 64);
  beatRepeaterGridSelect.addEventListener("change", () => {
    beatRepeaterGridDivision = THREE.MathUtils.clamp(Number(beatRepeaterGridSelect.value), 16, 64);
    if (beatRepeaterEnabled || beatRepeaterHoldActive) {
      scheduleBeatRepeaterQuantizedStart();
      setBeatRepeaterMode("bypass");
    } else {
      beatRepeaterCycleElapsed = 0;
    }
  });
}

if (beatRepHoldBtn) {
  const holdStart = (event) => {
    event.preventDefault();
    if (!audioCtx) {
      initAudio();
    }
    if (beatRepHoldBtn.setPointerCapture && event.pointerId != null) {
      beatRepHoldBtn.setPointerCapture(event.pointerId);
    }
    setBeatRepHoldState(true);
  };

  const holdEnd = (event) => {
    if (event && beatRepHoldBtn.releasePointerCapture && event.pointerId != null) {
      try {
        if (beatRepHoldBtn.hasPointerCapture && beatRepHoldBtn.hasPointerCapture(event.pointerId)) {
          beatRepHoldBtn.releasePointerCapture(event.pointerId);
        }
      } catch (err) {
        // Ignore stale capture release errors.
      }
    }
    setBeatRepHoldState(false);
  };

  beatRepHoldBtn.addEventListener("pointerdown", holdStart);
  beatRepHoldBtn.addEventListener("pointerup", holdEnd);
  beatRepHoldBtn.addEventListener("pointercancel", holdEnd);
  beatRepHoldBtn.addEventListener("lostpointercapture", holdEnd);
}

if (filter1TypeSelect) {
  filter1TypeSelect.addEventListener("change", () => {
    filter1Type = filter1TypeSelect.value;
    updateFxLabels();
  });
}

if (filter1DepthSelect) {
  filter1DepthSelect.addEventListener("change", () => {
    filter1DepthDb = THREE.MathUtils.clamp(Number(filter1DepthSelect.value), 16, 48);
    updateFxLabels();
  });
}

if (filter1FreqSlider) {
  filter1FreqSlider.addEventListener("input", () => {
    filter1CutoffHz = THREE.MathUtils.clamp(Number(filter1FreqSlider.value), filterFreqMinHz, filterFreqMaxHz);
    updateFxLabels();
  });
}

if (filter1ResSlider) {
  filter1ResSlider.addEventListener("input", () => {
    filter1Resonance = THREE.MathUtils.clamp(Number(filter1ResSlider.value), filterResMin, filterResMax);
    updateFxLabels();
  });
}

if (filter2TypeSelect) {
  filter2TypeSelect.addEventListener("change", () => {
    filter2Type = filter2TypeSelect.value;
    updateFxLabels();
  });
}

if (filter2DepthSelect) {
  filter2DepthSelect.addEventListener("change", () => {
    filter2DepthDb = THREE.MathUtils.clamp(Number(filter2DepthSelect.value), 16, 48);
    updateFxLabels();
  });
}

if (filter2FreqSlider) {
  filter2FreqSlider.addEventListener("input", () => {
    filter2CutoffHz = THREE.MathUtils.clamp(Number(filter2FreqSlider.value), filterFreqMinHz, filterFreqMaxHz);
    updateFxLabels();
  });
}

if (filter2ResSlider) {
  filter2ResSlider.addEventListener("input", () => {
    filter2Resonance = THREE.MathUtils.clamp(Number(filter2ResSlider.value), filterResMin, filterResMax);
    updateFxLabels();
  });
}

updateFxLabels();
setupFxContainerSwipes();
setupPresetSystem().catch(() => {
  showToast("Preset bundle load failed.");
});
