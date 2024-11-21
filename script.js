const words = [
  "gato", "perro", "arbol", "cielo", "fuego", "agua", "casa", "jugar",
  "rapido", "teclado", "pantalla", "amigo", "flor", "mesa", "silla", "luz", 
  "hoja", "sol", "lago", "roca", "nube", "libro", "noche", "dia", "verde",
  "carta", "papel", "torre", "puerta", "zapato", "camisa", "planta", "taza",
  "manzana", "limon", "dado", "jardin", "coche", "caballo", "tierra", "parque",
  "rio", "barco", "playa", "arena", "montana", "piedra", "cable", "raton", 
  "ventana", "espejo", "puente", "brazo", "pierna", "leon", "tigre", "oso",
  "mono", "conejo", "foco", "bomba", "estrella", "nieve", "trueno", "lluvia",
  "naranja", "camino", "carro", "bolsa", "camino", "gafas", "mango", "caja",
  "pelota", "lapiz", "banco", "reloj", "percha", "sopa", "grano", "oro",
  "plata", "duende", "hada", "faro", "luna", "sol", "flota", "rojo", "negro",
  "azul", "rosa", "verde", "blanco", "gris", "lila", "traje", "calle", "pared",
  "brazo", "dibujo", "piano", "banda", "rueda", "toro", "pez", "ave", "patio",
  "huerto", "hielo", "vino", "hilo", "pluma", "clavo", "salto", "lanza",
  "corazon", "nube", "arena", "viento", "vuelo", "vela", "trama"
];


let currentWord = "";
let score = 0;
let time = 30;
let timer;

const wordContainer = document.getElementById("word-container");
const inputBox = document.getElementById("input-box");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const startButton = document.getElementById("start-button");

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function startGame() {
  score = 0;
  time = 30;
  inputBox.value = "";
  inputBox.disabled = false;
  updateWord();
  updateScore();
  updateTime();
  startButton.disabled = true;
  inputBox.focus();

  timer = setInterval(() => {
    time--;
    updateTime();
    if (time <= 0) {
      clearInterval(timer);
      endGame();
    }
  }, 1000);
}

function updateWord() {
  currentWord = getRandomWord();
  wordContainer.textContent = currentWord;
}

function updateScore() {
  scoreDisplay.textContent = score;
}

function updateTime() {
  timeDisplay.textContent = time;
}

function endGame() {
  inputBox.disabled = true;
  startButton.disabled = false;
  wordContainer.textContent = "¡Juego terminado!";
  alert(`¡Juego terminado! Tu puntaje final es: ${score}`);
}

inputBox.addEventListener("input", () => {
  if (inputBox.value.trim() === currentWord) {
    score++;
    updateScore();
    updateWord();
    inputBox.value = "";
  }
});

startButton.addEventListener("click", startGame);
