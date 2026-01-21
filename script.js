// ==========================
// DATI DI BASE (PERSONALIZZA)
// ==========================

// Maghi base (core box) - esempio
const baseWizards = [
  "Johan",
  "Nero",
  "Tessa",
  "Rebecca",
  "Crono",
  "Marco",
  "Aaron",
  "Loki"
];

// Maghi da espansioni (esempi fittizi: rinominali con quelli reali)
const cronoWizards = [
  "Cronomante A",
  "Cronomante B"
];

const infernoWizards = [
  "Demone A",
  "Demone B"
];

const divinationWizards = [
  "Veggente A",
  "Veggente B"
];

// Scuole di magia base (nomi indicativi)
const baseSchools = [
  "Distruzione",
  "Conoscenza",
  "Illusione",
  "Necromanzia",
  "Trasmutazione",
  "Conspiracy"
];

const cronoSchools = ["Crono"];
const infernoSchools = ["Inferno"];
const divinationSchools = ["Divination"];

// Stanze della Loggia (esempi, usa i nomi reali che preferisci)
const baseRooms = [
  "Biblioteca",
  "Cimitero",
  "Laboratorio Alchemico",
  "Giardino delle Illusioni",
  "Sala dei Portali",
  "Camera delle Catene",
  "Sala del Trono",
  "Forgia Magica"
];

const infernoRooms = [
  "Sala delle Fiamme Eterne",
  "Abisso di Zaffiro"
];

const cronoRooms = [
  "Sala del Tempo Spezzato",
  "Osservatorio Temporale"
];

// Modalità / scenari (esempi generici)
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

// Estrae 'count' elementi casuali da 'array' (senza ripetizioni se possibile)
function getRandomSubset(array, count) {
  const shuffled = shuffle(array);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

// ==========================
// GENERAZIONE SETUP
// ==========================

function generateSetup() {
  const playersSelect = document.getElementById("players");
  const playersCount = parseInt(playersSelect.value, 10);

  const useCrono = document.getElementById("useCrono").checked;
  const useInferno = document.getElementById("useInferno").checked;
  const useDivination = document.getElementById("useDivination").checked;
  const noDuplicates = document.getElementById("noDuplicates").checked;

  // ----- Lista maghi disponibile -----
  let availableWizards = baseWizards.slice();
  if (useCrono) availableWizards = availableWizards.concat(cronoWizards);
  if (useInferno) availableWizards = availableWizards.concat(infernoWizards);
  if (useDivination) availableWizards = availableWizards.concat(divinationWizards);

  // Se non ci sono abbastanza maghi, fermati
  if (availableWizards.length < playersCount) {
    alert("Non ci sono abbastanza maghi rispetto al numero di giocatori selezionato.");
    return;
  }

  // Seleziona maghi random per i giocatori
  const selectedWizards = getRandomSubset(availableWizards, playersCount);

  // ----- Lista scuole disponibile -----
  let availableSchools = baseSchools.slice();
  if (useCrono) availableSchools = availableSchools.concat(cronoSchools);
  if (useInferno) availableSchools = availableSchools.concat(infernoSchools);
  if (useDivination) availableSchools = availableSchools.concat(divinationSchools);

  // In BRW di solito si usano 2 scuole a testa (più la scuola del Black Rose, etc.)
  const schoolsPerPlayer = 2;

  // Assegno scuole ai giocatori
  const schoolsByPlayer = {};
  let poolForNoDup = shuffle(availableSchools);

  for (let i = 0; i < playersCount; i++) {
    const playerName = `Giocatore ${i + 1} (${selectedWizards[i]})`;

    if (noDuplicates) {
      // con noDuplicates cerco di non ripetere scuole fra i giocatori
      if (poolForNoDup.length < schoolsPerPlayer) {
        // se il pool si esaurisce, rimescolo dalla lista completa
        poolForNoDup = poolForNoDup.concat(shuffle(availableSchools));
      }
      const chosen = poolForNoDup.slice(0, schoolsPerPlayer);
      poolForNoDup = poolForNoDup.slice(schoolsPerPlayer);
      schoolsByPlayer[playerName] = chosen;
    } else {
      // altrimenti estraggo ogni volta a caso dall'intera lista
      schoolsByPlayer[playerName] = getRandomSubset(availableSchools, schoolsPerPlayer);
    }
  }

  // ----- Stanze -----
  let availableRooms = baseRooms.slice();
  if (useInferno) availableRooms = availableRooms.concat(infernoRooms);
  if (useCrono) availableRooms = availableRooms.concat(cronoRooms);

  // esempio: numero di stanze casuali da usare (6–8)
  const roomsCount = 6 + Math.floor(Math.random() * 3); // 6,7,8
  const selectedRooms = getRandomSubset(availableRooms, roomsCount);

  // ----- Scenario -----
  const selectedScenario = getRandomElement(scenarios);

  // ----- Mostra a schermo -----
  renderResult(selectedWizards, schoolsByPlayer, selectedRooms, selectedScenario);
}

// ==========================
// RENDER RISULTATO
// ==========================

function renderResult(wizards, schoolsByPlayer, rooms, scenario) {
  const resultSection = document.getElementById("result");
  resultSection.classList.remove("hidden");

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
