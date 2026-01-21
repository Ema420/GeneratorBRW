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
      "Stanza della Rosa Nera (BRW)",
      "Stanza degli Specchi (BRW)",
      "Stanza dell'Oracolo (BRW)",
      "L'Abisso (BRW)",
      "Biblioteca (BRW)",
      "Osservatorio (BRW)",
      "Santuario (BRW)",
      "Forgia (BRW)",
      "Giardino (BRW)",
      "Sala del Tesoro (BRW)",
      "Laboratorio Alchemico (BRW)",
      "Arena (BRW)",
      "Sala degli Evocatori (BRW)",
      "Armeria (BRW)",
      "Stanza dei Piaceri (BRW)",
      "Sala del Trono (BRW)",
      "Cimiterio (BRW)",
      "Cripta (BRW)",
      "Altare Sacrificale (BRW)"
    ]
  },

  sator: {
    id: "sator",
    name: "Sator Box",
    wizards: [
      // Esempio: rinomina con i maghi reali dell'espansione
      "Old Jukas",
      "Circe",
      "Telmia",
      "Corax",
      "Tlahuicole",
      "Vivian",
      "Skultor",
      "Bella (Sator)",
      "Eliumbra",
      "Howard",
      "Bronte",
      "D.Schiavon",
      "Dukas",
      "Arthur Vox",
      "Arianna (Sator)",
      "Baba Yaga",
      "Tora"
    ],
    schools: [
      // Scuola specifica dell'espansione
      "Vuoto",
      "Sangue",
      "Mente",
      "Cronomanzia",
      "Incantamento",
      "Cartomanzia",
      "Omnia",
      "Bardica",
      "Demonologia",
      "Elementale",
      "Trickery"
    ],
    rooms: [
      "Cursed Temple",
      "Alehouse",
      "Eerie Machinery",
      "Cyclop's Forge",
      "Assassin's Brotherhood",
      "Garden of Ice and Fire",
      "Cyclop's Room",
      "Card's Room",
      "Pigmen's Room",
      "Horologium",
      "Theater",
      "Clinging Swamn",
      "Tana dei Troll"
    ]
  },

  rebirth: {
    id: "rebirth",
    name: "BRW Rebirth",
    wizards: [
      "Arianna (Rebirth)",
      "Baron Doria",
      "Gramigna",
      "Angela",
      "Sefu",
      "Rikkart"
    ],
    schools: [
      "Tecnomanzia",
      "Sciamanica",
      "Alchimia",
      "Malocchio",
      "Incubo",
      "Agonia"
    ],
    rooms: [
      "Stanza della Rosa Nera",
      "Stanza degli Specchi",
      "Stanza dell'Oracolo",
      "L'Abisso",
      "Biblioteca",
      "Osservatorio",
      "Santuario",
      "Forgia",
      "Giardino",
      "Sala del Tesoro",
      "Laboratorio Alchemico",
      "Arena",
      "Sala degli Evocatori",
      "Armeria",
      "Stanza dei Piaceri",
      "Sala del Trono",
      "Cimiterio",
      "Cripta",
      "Altare Sacrificale"
    ]
  },

  apocalypse: {
    id: "apocalypse",
    name: "Apocalisse",
    wizards: [
      "Mors",
      "Fames",
      "Pestilentia",
      "Bellum"
    ],
    schools: [
      "Guerra",
      "Carestia",
      "Morte",
      "Pestilenza"
    ],
    rooms: [
      "Stanza della Rosa Nera (Apocalisse)"
    ]
  },

  dreadForge: {
    id: "dreadForge",
    name: "Dread Forge",
    wizards: [
      "Etna"
    ],
    schools: [
      "Forgia"
    ]
  },

  gaeaReborn: {
    id: "gaeaReborn",
    name: "Gaea Reborn",
    wizards: [
      "Talia"
    ],
    schools: [
      "Geomanzia"
    ],
    rooms: [
      "Rosa Smeraldo",
      "Indoor Forest",
      "Thorny Clearing",
      "Life Fountain"
    ]
  },

  sealOfFire: {
    id: "sealOfFire",
    name: "Seal Of Fire",
    wizards: [
      "Prospero"
    ],
    rooms: [
      "Stanza della Rinascita"
    ]
  },

   antiquities: {
    id: "antiquities",
    name: "Antiquities",
    wizards: [
      "Cassandra"
    ],
    schools: [
      "Oracolo"
    ],
    rooms: [
      "Arena Ludus"
    ]
  },

  lastDinasty: {
    id: "lastDinasty",
    name: "Last Dinasty",
    wizards: [
      "Saba",
      "Imhotep"
    ],
    schools: [
      "Heka"
    ],
    rooms: [
      "Santuario di Anubis"
    ]
  },

  madness: {
    id: "madness",
    name: "Madness",
    wizards: [
      "Landolfo II"
    ],
    schools: [
      "Caos"
    ],
    rooms: [
      "Altare Sacrificale della Follia"
    ]
  },

  northWinds: {
    id: "northWinds",
    name: "North Winds",
    wizards: [
      "Kormac"
    ],
    schools: [
      "Druidica"
    ],
    rooms: [
      "Abisso di Hel"
    ]
  },

  onceUponATime: {
    id: "onceUponATime",
    name: "Once Upon A Time",
    wizards: [
      "Maelice",
      "Hogwartz",
      "Venticello",
      "Bella"
    ],
    rooms: [
      "Sala del Trono di Teschi"
    ]
  },

  silkRoad: {
    id: "silkRoad",
    name: "Silk Road",
    wizards: [
      "Alisha",
      "Dai Jin",
      "Pyotr"
    ],
    rooms: [
      "Giardino Zen"
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
  const result = array.slice();
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
function getRandomSubset(array, count) {
  const shuffled = shuffle(array);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}
// ==========================
// COSTRUZIONE DINAMICA UI
// ==========================
function buildExpansionsUI() {
  const container = document.getElementById("expansions-container");
  if (!container) return;
  // Pulizia e ordinamento
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
  // Creazione Pool Totale
  let poolWizards = [];
  let poolSchools = [];
  let poolRooms = [];
  selectedExpansions.forEach(exp => {
    poolWizards = [...new Set([...poolWizards, ...exp.wizards])];
    poolSchools = [...new Set([...poolSchools, ...exp.schools])];
    poolRooms = [...new Set([...poolRooms, ...exp.rooms])];
  });
  // Estrazione di 6 Maghi e 6 Scuole (indipendente dai giocatori)
  const finalWizards = getRandomSubset(poolWizards, 6);
  const finalSchools = getRandomSubset(poolSchools, 6);
  
  // Estrazione Stanze (6-9 tessere)
  const finalRooms = getRandomSubset(poolRooms, 7);
  // Scenario
  const finalScenario = scenarios[Math.floor(Math.random() * scenarios.length)];
  renderResult(selectedExpansions, finalWizards, finalSchools, finalRooms, finalScenario);
}
// ==========================
// RENDER RISULTATO
// ==========================
function renderResult(expansions, wizards, schools, rooms, scenario) {
  const resultSection = document.getElementById("result");
  resultSection.classList.remove("hidden");
  // Espansioni
  document.getElementById("used-expansions").textContent = expansions.map(e => e.name).join(", ");
  // Maghi (Pool di 6)
  const wizardsList = document.getElementById("wizards-list");
  wizardsList.innerHTML = "";
  wizards.forEach(wiz => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${wiz}</strong>`;
    wizardsList.appendChild(li);
  });
  // Scuole di Magia (Pool di 6)
  // Usiamo il div esistente schools-by-player ma lo formattiamo come lista semplice
  const schoolsContainer = document.getElementById("schools-by-player");
  schoolsContainer.innerHTML = "<ul id='final-schools-list'></ul>";
  const schoolsList = document.getElementById("final-schools-list");
  schools.forEach(school => {
    const li = document.createElement("li");
    li.textContent = school;
    schoolsList.appendChild(li);
  });
  // Stanze
  const roomsList = document.getElementById("rooms-list");
  roomsList.innerHTML = "";
  rooms.forEach(room => {
    const li = document.createElement("li");
    li.textContent = room;
    roomsList.appendChild(li);
  });
  // Scenario
  document.getElementById("scenario").textContent = scenario;
  
  // Scroll automatico al risultato
  resultSection.scrollIntoView({ behavior: 'smooth' });
}
document.addEventListener("DOMContentLoaded", () => {
  buildExpansionsUI();
  document.getElementById("generate-btn").addEventListener("click", generateSetup);
  document.getElementById("regenerate-btn").addEventListener("click", generateSetup);
});
