// =====================================
// DEFINIZIONE ESPANSIONI (PERSONALIZZA)
// =====================================
const EXPANSIONS = {
  core: {
    id: "core",
    name: "Core Box",
    wizards: ["Nero", "Tessa", "Rebecca", "Jafar"],
    schools: ["Distruzione", "Divinazione", "Illusione", "Necromanzia", "Trasmutazione", "Conspirazione"],
    rooms: [
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
      { name: "Altare Sacrificale (BRW)", color: "gray" } // Corretta virgola mancante qui
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
    rooms: [{ name: "Stanza della Rosa Nera (Apocalisse)", color: "black" }]
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
    rooms: [{ name: "Stanza della Rinascita", color: "gray" }]
  },
  antiquities: {
    id: "antiquities",
    name: "Antiquities",
    wizards: ["Cassandra"],
    schools: ["Oracolo"],
    rooms: [{ name: "Arena Ludus", color: "red" }]
  },
  lastDinasty: {
    id: "lastDinasty",
    name: "Last Dinasty",
    wizards: ["Saba", "Imhotep"],
    schools: ["Heka"],
    rooms: [{ name: "Santuario di Anubis", color: "yellow" }]
  },
  madness: {
    id: "madness",
    name: "Madness",
    wizards: ["Landolfo II"],
    schools: ["Caos"],
    rooms: [{ name: "Altare Sacrificale della Follia", color: "gray" }]
  },
  northWinds: {
    id: "northWinds",
    name: "North Winds",
    wizards: ["Kormac"],
    schools: ["Druidica"],
    rooms: [{ name: "Abisso di Hel", color: "blue" }]
  },
  onceUponATime: {
    id: "onceUponATime",
    name: "Once Upon A Time",
    wizards: ["Maelice", "Hogwartz", "Venticello", "Bella"],
    rooms: [{ name: "Sala del Trono di Teschi", color: "purple" }]
  },
  silkRoad: {
    id: "silkRoad",
    name: "Silk Road",
    wizards: ["Alisha", "Dai Jin", "Pyotr"],
    rooms: [{ name: "Giardino Zen", color: "green" }]
  },

  duelLex: {
    id: "duelLex",
    name: "Duel Lex",
    wizards: ["Ulrich", "Bartholomaus"],
    schools: ["Lex"],
    rooms: [
      { name: "Stanza della Rosa Nera Occulta", color: "black" },
      { name: "Cripta del Santo", color: "gray" },
      { name: "Sala degli Evocatori Crociati", color: "red" },
      { name: "Biblioteca dell'Ordine", color: "yellow" },
      { name: "Sala del Tesoro Templare", color: "green" },
      { name: "Sala dell'Oracolo Blasfemo", color: "blue" },
      { name: "Armeria Templare", color: "purple" }
    ]
  },

  duelVoid: {
    id: "duelVoid",
    name: "Duel Void",
    wizards: ["Alice", "Alhazred"],
    schools: ["Void"],
    rooms: [
      { name: "Sala della Rosa Nera Profonda", color: "black" },
      { name: "Cimitero delle Balene", color: "gray" },
      { name: "Laboratorio Alchemico Perduto", color: "red" },
      { name: "Osservatorio Abissale", color: "yellow" },
      { name: "Forgia del Vuoto", color: "green" },
      { name: "Abisso della Fede", color: "blue" },
      { name: "Camera dei Piaceri Antica", color: "purple" }
    ]
  },

  duelKami: {
    id: "duelKami",
    name: "Duel Kami",
    wizards: ["Abe No Seimei",
             "En No Gyoja"],
    schools: ["Shugendo"],
    rooms: [
      { name: "Rosa Smeraldo", color: "black" },
      { name: "Indoor Forest", color: "green" },
      { name: "Thorny Clearing", color: "green" },
      { name: "Life Fountain", color: "green" }
    ]
  }
};

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

function getRandomSubset(array, count) {
  if (!array || array.length === 0) return [];
  const shuffled = shuffle(array);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

/**
 * LOGICA SPECIFICA ESTRAZIONE STANZE
 */
function estraiStanzeSecondoSchema(poolRooms) {
    let finalSelection = [];
    const schema = [
        { color: "black", count: 1 },
        { color: "purple", count: 3 }, // Gestito con Sala del Trono
        { color: "yellow", count: 3 },
        { color: "red", count: 3 },
        { color: "green", count: 3 },
        { color: "gray", count: 3 },
        { color: "blue", count: 3 }
    ];

    for (const item of schema) {
        let filtrate = poolRooms.filter(r => r.color === item.color);
        
        // Gestione speciale Purple (Sala del Trono)
        if (item.color === "purple") {
            let throneIndex = filtrate.findIndex(r => r.name.toLowerCase().includes("sala del trono"));
            
            if (throneIndex === -1) {
                alert("L'espansione non contiene la stanza 'Sala del Trono'");
                return null;
            }
            if (filtrate.length < item.count) {
                alert(`L'espansione non contiene abbastanza stanze di colore ${item.color.toUpperCase()}`);
                return null;
            }

            // Estrai il trono e poi altre 2 casuali
            let trono = filtrate.splice(throneIndex, 1)[0];
            let altrePurple = getRandomSubset(filtrate, item.count - 1);
            finalSelection.push(trono, ...altrePurple);
        } 
        else {
            // Gestione colori standard
            if (filtrate.length < item.count) {
                alert(`L'espansione non contiene abbastanza stanze di colore ${item.color.toUpperCase()}`);
                return null;
            }
            finalSelection.push(...getRandomSubset(filtrate, item.count));
        }
    }
    return finalSelection;
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

  let poolWizards = [];
  let poolSchools = [];
  let poolRooms = [];

  selectedExpansions.forEach(exp => {
    if (exp.wizards) poolWizards = [...new Set([...poolWizards, ...exp.wizards])];
    if (exp.schools) poolSchools = [...new Set([...poolSchools, ...exp.schools])];
    if (exp.rooms) poolRooms = [...poolRooms, ...exp.rooms]; // Manteniamo duplicati se servono per il sorteggio
  });

  const finalWizards = getRandomSubset(poolWizards, 6);
  const finalSchools = getRandomSubset(poolSchools, 6);
  
  // Applichiamo la nuova logica delle stanze
  const finalRooms = estraiStanzeSecondoSchema(poolRooms);
  
  // Se finalRooms è null, la funzione è stata interrotta da un errore di disponibilità
  if (!finalRooms) return;

  //const finalScenario = scenarios[Math.floor(Math.random() * scenarios.length)];
  //renderResult(selectedExpansions, finalWizards, finalSchools, finalRooms, finalScenario);
  renderResult(selectedExpansions, finalWizards, finalSchools, finalRooms);
}

// ==========================
// RENDER RISULTATO
// ==========================
//function renderResult(expansions, wizards, schools, rooms, scenario) {
function renderResult(expansions, wizards, schools, rooms) {
  const resultSection = document.getElementById("result");
  resultSection.classList.remove("hidden");

  document.getElementById("used-expansions").textContent = expansions.map(e => e.name).join(", ");

  const wizardsList = document.getElementById("wizards-list");
  wizardsList.innerHTML = wizards.length > 0 
    ? wizards.map(wiz => `<li><strong>${wiz}</strong></li>`).join('')
    : "<li><em>Nessun mago disponibile</em></li>";

  const schoolsContainer = document.getElementById("schools-by-player");
  schoolsContainer.innerHTML = schools.length > 0 
    ? "<ul>" + schools.map(s => `<li>${s}</li>`).join('') + "</ul>"
    : "<p><em>Nessuna scuola disponibile</em></p>";

  const roomsList = document.getElementById("rooms-list");
  roomsList.innerHTML = rooms.map(r => `<li><span class="dot ${r.color}"></span> ${r.name}</li>`).join('');

  //document.getElementById("scenario").textContent = scenario;
  resultSection.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", () => {
  buildExpansionsUI();
  document.getElementById("generate-btn").addEventListener("click", generateSetup);
  document.getElementById("regenerate-btn").addEventListener("click", generateSetup);
});
