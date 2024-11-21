// Letra que debe ser presionada por el usuario
let currentLetter = "";
let score = 0;
let finger = "";

// Contenedor de la letra que debe ser escrita
const letterContainer = document.getElementById("letter-container");
const inputBox = document.getElementById("input-box");
const scoreDisplay = document.getElementById("score");
const startButton = document.getElementById("start-button");

// Columnas de letras según el dedo
const lettersByFinger = {
  "index": "rfvtgbyhnujm",  // Índice: F, G, H, J, K, L
  "middle": "rtyuedcujm",    // Medio: R, T, Y, U
  "ring": "wsxol.",      // Anular: V, B, N, M
  "little": "qazp;/",    // Meñique: Z, X, C, Vks
};

// Función para elegir una letra aleatoria
function getRandomLetter(finger) {
  const letters = lettersByFinger[finger];
  return letters[Math.floor(Math.random() * letters.length)];
}

// Función para iniciar el entrenamiento
function startTraining(finger) {
  score = 0;
  inputBox.disabled = false;
  inputBox.value = "";
  updateScore();
  inputBox.focus();
  letterContainer.textContent = "Presiona una tecla...";

  // Generar una letra aleatoria del dedo seleccionado
  currentLetter = getRandomLetter(finger);
  letterContainer.textContent = currentLetter;

  // Agregar evento al input
  inputBox.addEventListener("input", () => {
    if (inputBox.value.trim() === currentLetter) {
      score++;
      updateScore();
      currentLetter = getRandomLetter(finger);
      letterContainer.textContent = currentLetter;
      inputBox.value = "";
    }
  });
}

// Actualizar el puntaje
function updateScore() {
  scoreDisplay.textContent = score;
}

// Asignar eventos a los botones de los dedos
document.getElementById("index-finger").addEventListener("click", function() {
  finger = "index";
  startTraining(finger);
});

document.getElementById("middle-finger").addEventListener("click", function() {
  finger = "middle";
  startTraining(finger);
});

document.getElementById("ring-finger").addEventListener("click", function() {
  finger = "ring";
  startTraining(finger);
});

document.getElementById("little-finger").addEventListener("click", function() {
  finger = "little";
  startTraining(finger);
});

document.getElementById("thumb-finger").addEventListener("click", function() {
  finger = "thumb";
  startTraining(finger);
});

// Iniciar entrenamiento
startButton.addEventListener("click", function() {
  if (finger) {
    startTraining(finger);
  } else {
    alert("Por favor, selecciona un dedo para entrenar.");
  }
});
