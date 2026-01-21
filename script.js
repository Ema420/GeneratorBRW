// =====================================
// DEFINIZIONE ESPANSIONI (PERSONALIZZA)
// =====================================

const EXPANSIONS = {
  core: {
    id: "core",
    name: "Core Box",
    wizards: [
      // Maghi base (sostituisci con elenco reale)
      "Nero",
      "Tessa",
      "Rebecca",
      "Jafar"
    ],
    schools: [
      // Scuole di magia base
      "Distruzione",
      "Divinazione",
      "Illusione",
      "Necromanzia",
      "Trasmutazione",
      "Conspirazione"
    ],
    rooms: [
      // Stanze base (nome come sulle tessere)
      { name: "Stanza della Rosa Nera (BRW)", color: "black" },
      { name: "Stanza degli Specchi (BRW)", color: "blue" },
      { name: "Stanza dell'Oracolo (BRW)", color: "blue" },
      { name: "L'Abisso (BRW)", color: "blue" },
      { name: "Biblioteca (BRW)", color: "yellow" },
      { name: "Osservatorio (BRW)", color: "yellow" },
      { name: "Santuario (BRW)", color: "yellow" },
      { name: "Forgia (BRW)",  color: "green" },
      { name: "Giardino (BRW)", color: "green" },
      { name: "Sala del Tesoro (BRW)", color: "green" },
      { name: "Laboratorio Alchemico (BRW)", color: "red" },
      { name: "Arena (BRW)", color: "red" },
      { name: "Sala degli Evocatori (BRW)", color: "red" },
      { name: "Armeria (BRW)", color: "purple" },
      { name: "Stanza dei Piaceri (BRW)", color: "purple" },
      { name: "Sala del Trono (BRW)", color: "purple" },
      { name: "Cimiterio (BRW)", color: "gray" },
      { name: "Cripta (BRW)", color: "gray" },
      { name: "Altare Sacrificale (BRW)" color: "gray" }
    ]
  },

    sator: {
    id: "sator",
    name: "Sator Box",
    wizards: ["Old Jukas", "Circe", "Telmia", "Corax", "Tlahuicole", "Vivian", "Skultor", "Bella (Sator)", "Eliumbra", "Howard", "Bronte", "D.Schiavon", "Dukas", "Arthur Vox", "Arianna (Sator)", "Baba Yaga", "Tora"],
    schools: ["Vuoto", "Sangue", "Mente", "Cronomanzia", "Incantamento", "Cartomanzia", "Omnia", "Bardica", "Demonologia", "Elementale", "Trickery"],
    rooms: [
      { name: "Cursed Temple", color: "gray" },
      { name: "Alehouse", color: "yellow" },
      { name: "Eerie Machinery", color: "yellow" },
      { name: "Cyclop's Forge", color: "yellow" },
      { name: "Assassin's Brotherhood", color: "red" },
      { name: "Garden of Ice and Fire", color: "red" },
      { name: "Cyclop's Room", color: "red" },
      { name: "Card's Room", color: "purple" },
      { name: "Pigmen's Room", color: "purple" },
      { name: "Horologium", color: "blue" },
      { name: "Theater", color: "blue" },
      { name: "Clinging Swamn", color: "green" },
      { name: "Tana dei Troll", color: "green" }
    ]
  },
  rebirth: {
    id: "rebirth",
    name: "BRW Rebirth",
    wizards: ["Arianna (Rebirth)", "Baron Doria", "Gramigna", "Angela", "Sefu", "Rikkart"],
    schools: ["Tecnomanzia", "Sciamanica", "Alchimia", "Malocchio", "Incubo", "Agonia"],
    rooms: [
      { name: "Stanza della Rosa Nera", color: "black" },
      { name: "Stanza degli Specchi", color: "blue" },
      { name: "Stanza dell'Oracolo", color: "blue" },
      { name: "L'Abisso", color: "blue" },
      { name: "Biblioteca", color: "yellow" },
      { name: "Osservatorio", color: "yellow" },
      { name: "Santuario", color: "yellow" },
      { name: "Forgia", color: "green" },
      { name: "Giardino", color: "green" },
      { name: "Sala del Tesoro", color: "green" },
      { name: "Laboratorio Alchemico", color: "red" },
      { name: "Arena", color: "red" },
      { name: "Sala degli Evocatori", color: "red" },
      { name: "Armeria", color: "purple" },
      { name: "Stanza dei Piaceri", color: "purple" },
      { name: "Sala del Trono", color: "purple" },
      { name: "Cimiterio", color: "gray" },
      { name: "Cripta", color: "gray" },
      { name: "Altare Sacrificale", color: "gray" }
    ]
  },
  apocalypse: {
    id: "apocalypse",
    name: "Apocalisse",
    wizards: ["Mors", "Fames", "Pestilentia", "Bellum"],
    schools: ["Guerra", "Carestia", "Morte", "Pestilenza"],
    rooms: [
      { name: "Stanza della Rosa Nera (Apocalisse)", color: "black" }
    ]
  },
  dreadForge: {
    id: "dreadForge",
    name: "Dread Forge",
    wizards: ["Etna"],
    schools: ["Forgia"],
    rooms: [] // Nessuna stanza specifica elencata
  },
  gaeaReborn: {
    id: "gaeaReborn",
    name: "Gaea Reborn",
    wizards: ["Talia"],
    schools: ["Geomanzia"],
    rooms: [
      { name: "Rosa Smeraldo", color: "black" },
      { name: "Indoor Forest", color: "green" },
      { name: "Thorny Clearing", color: "green" },
      { name: "Life Fountain", color: "green" }
    ]
  },
  sealOfFire: {
    id: "sealOfFire",
    name: "Seal Of Fire",
    wizards: ["Prospero"],
    rooms: [
      { name: "Stanza della Rinascita", color: "gray" }
    ]
  },
  antiquities: {
    id: "antiquities",
    name: "Antiquities",
    wizards: ["Cassandra"],
    schools: ["Oracolo"],
    rooms: [
      { name: "Arena Ludus", color: "red" }
    ]
  },
  lastDinasty: {
    id: "lastDinasty",
    name: "Last Dinasty",
    wizards: ["Saba", "Imhotep"],
    schools: ["Heka"],
    rooms: [
      { name: "Santuario di Anubis", color: "yellow" }
    ]
  },
  madness: {
    id: "madness",
    name: "Madness",
    wizards: ["Landolfo II"],
    schools: ["Caos"],
    rooms: [
      { name: "Altare Sacrificale della Follia", color: "gray" }
    ]
  },
  northWinds: {
    id: "northWinds",
    name: "North Winds",
    wizards: ["Kormac"],
    schools: ["Druidica"],
    rooms: [
      { name: "Abisso di Hel", color: "blue" }
    ]
  },
  onceUponATime: {
    id: "onceUponATime",
    name: "Once Upon A Time",
    wizards: ["Maelice", "Hogwartz", "Venticello", "Bella"],
    rooms: [
      { name: "Sala del Trono di Teschi", color: "purple" }
    ]
  },
  silkRoad: {
    id: "silkRoad",
    name: "Silk Road",
    wizards: ["Alisha", "Dai Jin", "Pyotr"],
    rooms: [
      { name: "Giardino Zen", color: "green" }
    ]
  }
};
// Modalità / scenari (puoi ampliare o modificare)
const scenarios = [
  "Partita standard: uccisioni + missioni + danni alla Loggia.",
  "Duello ad alta intensità: primo a 35 punti vince.",
  "Partita lunga: gioca fino alla distruzione totale della Loggia.",
  "Modalità a squadre: 2 vs 2, sommate i punti dei membri del team.",
  "Battaglia rapida: riduci il numero di round del Black Rose Track."
];

// ==========================
// FUNZIONI DI UTILITÀ
// ==========================
function shuffle(array) {
  if (!array) return [];
  const result = array.slice();
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
/**
 * Estrae un subset. Se il numero richiesto è superiore alla disponibilità,
 * restituisce tutti gli elementi disponibili.
 */
function getRandomSubset(array, count) {
  if (!array || array.length === 0) return [];
  const shuffled = shuffle(array);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}
// ==========================
// COSTRUZIONE DINAMICA UI
// ==========================
function buildExpansionsUI() {
  const container = document.getElementById("expansions-container");
  if (!container) return;
  const expansionsArray = Object.values(EXPANSIONS).sort((a, b) => a.name.localeCompare(b.name));
  expansionsArray.forEach(exp => {
    const label = document.createElement("label");
    label.className = "expansion-label";
    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "expansion-checkbox";
    checkbox.setAttribute("data-expansion-id", exp.id);
    if (exp.id === "core") checkbox.checked = true;
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(" " + exp.name));
    if (exp.hint) {
      const hint = document.createElement("span");
      hint.className = "expansion-hint";
      hint.textContent = exp.hint;
      label.appendChild(hint);
    }
    container.appendChild(label);
  });
}
// ==========================
// LOGICA DI GENERAZIONE
// ==========================
function generateSetup() {
  const checkboxes = document.querySelectorAll(".expansion-checkbox:checked");
  const selectedIds = Array.from(checkboxes).map(cb => cb.getAttribute("data-expansion-id"));
  const selectedExpansions = selectedIds.map(id => EXPANSIONS[id]);
  if (selectedExpansions.length === 0) {
    alert("Seleziona almeno una espansione!");
    return;
  }
  // Pool Temporanei
  let poolWizards = [];
  let poolSchools = [];
  let poolRooms = [];
  // Popolamento sicuro dei pool (controlla se la proprietà esiste)
  selectedExpansions.forEach(exp => {
    if (exp.wizards && Array.isArray(exp.wizards)) {
      poolWizards = [...new Set([...poolWizards, ...exp.wizards])];
    }
    if (exp.schools && Array.isArray(exp.schools)) {
      poolSchools = [...new Set([...poolSchools, ...exp.schools])];
    }
    if (exp.rooms && Array.isArray(exp.rooms)) {
      poolRooms = [...new Set([...poolRooms, ...exp.rooms])];
    }
  });
  // Estrazione componenti (fino a 6, o meno se non disponibili)
  const finalWizards = getRandomSubset(poolWizards, 6);
  const finalSchools = getRandomSubset(poolSchools, 6);
  
  // Per le stanze ne estraiamo solitamente tra 7 e 9 per il setup della Loggia
  const finalRooms = getRandomSubset(poolRooms, 8);
  const finalScenario = scenarios[Math.floor(Math.random() * scenarios.length)];
  renderResult(selectedExpansions, finalWizards, finalSchools, finalRooms, finalScenario);
}
// ==========================
// RENDER RISULTATO
// ==========================
function renderResult(expansions, wizards, schools, rooms, scenario) {
  const resultSection = document.getElementById("result");
  resultSection.classList.remove("hidden");
  // Visualizzazione Espansioni Usate
  document.getElementById("used-expansions").textContent = expansions.map(e => e.name).join(", ");
  // Render Maghi
  const wizardsList = document.getElementById("wizards-list");
  wizardsList.innerHTML = wizards.length > 0 
    ? wizards.map(wiz => `<li><strong>${wiz}</strong></li>`).join('')
    : "<li><em>Nessun mago disponibile nelle espansioni scelte</em></li>";
  // Render Scuole
  const schoolsContainer = document.getElementById("schools-by-player");
  if (schools.length > 0) {
    schoolsContainer.innerHTML = "<ul>" + schools.map(s => `<li>${s}</li>`).join('') + "</ul>";
  } else {
    schoolsContainer.innerHTML = "<p><em>Nessuna scuola di magia disponibile</em></p>";
  }
  // Render Stanze
  const roomsList = document.getElementById("rooms-list");
  roomsList.innerHTML = rooms.length > 0 
    ? rooms.map(r => `<li>${r}</li>`).join('')
    : "<li><em>Nessuna stanza disponibile</em></li>";
  // Scenario
  document.getElementById("scenario").textContent = scenario;
  
  resultSection.scrollIntoView({ behavior: 'smooth' });
}
document.addEventListener("DOMContentLoaded", () => {
  buildExpansionsUI();
  document.getElementById("generate-btn").addEventListener("click", generateSetup);
  document.getElementById("regenerate-btn").addEventListener("click", generateSetup);
});
