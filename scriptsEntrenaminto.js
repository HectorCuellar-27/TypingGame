const rows = {
  top: "qwertyuiop",
  middle: "asdfghjkl",
  bottom: "zxcvbnm",
};

let trainingScore = 0;
let trainingTimer;
let currentRow = "";

const rowSelect = document.getElementById("row-select");
const trainingString = document.getElementById("training-string");
const trainingStartButton = document.getElementById("training-start-button");

function startTraining() {
  const selectedRow = rowSelect.value;
  currentRow = rows[selectedRow]; // Filtrar por fila seleccionada
  trainingScore = 0;
  updateTrainingScore();
  trainingString.textContent = getRandomCharacterFromRow();
  trainingStartButton.disabled = true;

  trainingTimer = setInterval(() => {
    if (trainingScore === 30) {
      clearInterval(trainingTimer);
      endTraining();
    }
  }, 1000);
}

function getRandomCharacterFromRow() {
  const randomIndex = Math.floor(Math.random() * currentRow.length);
  return currentRow[randomIndex]; // Generar solo caracteres de la fila seleccionada
}

function updateTrainingScore() {
  document.getElementById("training-score").textContent = trainingScore;
}

function endTraining() {
  alert(`¡Entrenamiento terminado! Tu puntaje final es: ${trainingScore}`);
  trainingStartButton.disabled = false;
}

document.addEventListener("keypress", (event) => {
  if (event.key === trainingString.textContent) {
    trainingScore++;
    trainingString.textContent = getRandomCharacterFromRow();
    updateTrainingScore();
  }
});

trainingStartButton.addEventListener("click", startTraining);
