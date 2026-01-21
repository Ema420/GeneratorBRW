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
      "Sala delle Fiamme Eterne",
      "Abisso di Zaffiro"
    ]
  },

  divination: {
    id: "divination",
    name: "Divination",
    wizards: [
      "Veggente A",
      "Veggente B"
    ],
    schools: [
      "Divination"
    ],
    rooms: [
      "Sala degli Oracoli",
      "Specchio del Fato"
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

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function shuffle(array) {
  const result = array.slice();
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// Estrae 'count' elementi casuali da 'array' (senza ripetizioni)
function getRandomSubset(array, count) {
  const shuffled = shuffle(array);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

// ==========================
// RECUPERO ESPANSIONI SCELTE
// ==========================

function getSelectedExpansionIds() {
  const checkboxes = document.querySelectorAll(".expansion-checkbox");
  const selectedIds = [];

  checkboxes.forEach(cb => {
    if (cb.checked) {
      const id = cb.getAttribute("data-expansion-id");
      if (id) selectedIds.push(id);
    }
  });

  return selectedIds;
}

function getSelectedExpansions() {
  const ids = getSelectedExpansionIds();
  return ids.map(id => EXPANSIONS[id]).filter(Boolean);
}

// ==========================
// GENERAZIONE SETUP
// ==========================

function generateSetup() {
  const playersSelect = document.getElementById("players");
  const playersCount = parseInt(playersSelect.value, 10);
  const noDuplicates = document.getElementById("noDuplicates").checked;

  const selectedExpansions = getSelectedExpansions();

  if (selectedExpansions.length === 0) {
    alert("Seleziona almeno una espansione prima di generare il setup.");
    return;
  }

  // ----- Costruzione dei pool dagli expansion scelti -----
  let allWizards = [];
  let allSchools = [];
  let allRooms = [];

  selectedExpansions.forEach(exp => {
    allWizards = allWizards.concat(exp.wizards || []);
    allSchools = allSchools.concat(exp.schools || []);
    allRooms = allRooms.concat(exp.rooms || []);
  });

  // Controlli minimi
  if (allWizards.length < playersCount) {
    alert("Non ci sono abbastanza maghi nelle espansioni selezionate per il numero di giocatori.");
    return;
  }

  if (allSchools.length === 0) {
    alert("Nessuna scuola di magia trovata nelle espansioni selezionate.");
    return;
  }

  if (allRooms.length === 0) {
    alert("Nessuna stanza/tessera loggia trovata nelle espansioni selezionate.");
    return;
  }

  // ----- Selezione maghi -----
  const selectedWizards = getRandomSubset(allWizards, playersCount);

  // ----- Assegnazione scuole -----
  // Di base 2 scuole per giocatore (puoi cambiare)
  const schoolsPerPlayer = 2;

  const schoolsByPlayer = {};
  let poolForNoDup = shuffle(allSchools);

  for (let i = 0; i < playersCount; i++) {
    const playerName = `Giocatore ${i + 1} (${selectedWizards[i]})`;

    if (noDuplicates) {
      if (poolForNoDup.length < schoolsPerPlayer) {
        // se il pool si esaurisce, si ricostruisce (con possibili ripetizioni)
        poolForNoDup = poolForNoDup.concat(shuffle(allSchools));
      }
      const chosen = poolForNoDup.slice(0, schoolsPerPlayer);
      poolForNoDup = poolForNoDup.slice(schoolsPerPlayer);
      schoolsByPlayer[playerName] = chosen;
    } else {
      schoolsByPlayer[playerName] = getRandomSubset(allSchools, schoolsPerPlayer);
    }
  }

  // ----- Selezione stanze -----
  // Esempio: 6–8 stanze
  const roomsCount = 6 + Math.floor(Math.random() * 3); // 6,7,8
  const selectedRooms = getRandomSubset(allRooms, roomsCount);

  // ----- Scenario -----
  const selectedScenario = getRandomElement(scenarios);

  // ----- Render -----
  renderResult(selectedExpansions, selectedWizards, schoolsByPlayer, selectedRooms, selectedScenario);
}

// ==========================
// RENDER RISULTATO
// ==========================

function renderResult(expansions, wizards, schoolsByPlayer, rooms, scenario) {
  const resultSection = document.getElementById("result");
  resultSection.classList.remove("hidden");

  // Espansioni usate
  const usedExpansionsEl = document.getElementById("used-expansions");
  usedExpansionsEl.textContent = expansions.map(e => e.name).join(", ");

  // Maghi
  const wizardsList = document.getElementById("wizards-list");
  wizardsList.innerHTML = "";
  wizards.forEach((wiz, index) => {
    const li = document.createElement("li");
    li.textContent = `Giocatore ${index + 1}: ${wiz}`;
    wizardsList.appendChild(li);
  });

  // Scuole per giocatore
  const schoolsContainer = document.getElementById("schools-by-player");
  schoolsContainer.innerHTML = "";
  Object.keys(schoolsByPlayer).forEach(playerName => {
    const div = document.createElement("div");
    const schools = schoolsByPlayer[playerName];
    div.innerHTML = `<strong>${playerName}</strong>: ${schools.join(", ")}`;
    schoolsContainer.appendChild(div);
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
  const scenarioEl = document.getElementById("scenario");
  scenarioEl.textContent = scenario;
}

// ==========================
// EVENT LISTENERS
// ==========================

document.addEventListener("DOMContentLoaded", () => {
  const generateBtn = document.getElementById("generate-btn");
  const regenerateBtn = document.getElementById("regenerate-btn");

  generateBtn.addEventListener("click", generateSetup);
  regenerateBtn.addEventListener("click", generateSetup);
});
