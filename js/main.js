// Comenzamos en la pantalla inicial
let currentScreen = 0;
const firstScreen = document.getElementById("first_screen");
const secondScreen = document.getElementById("second_screen");
// Lista de screens
const screens = [firstScreen, secondScreen];
const arrowRight = document.getElementById("arrowRight");

// Función para mostrar la pantalla activa
function showScreen() {
    // Ocultar todas las pantallas
    screens.forEach(screen => {
        screen.style.display = "none";
    });
    // Mostrar la pantalla activa
    screens[currentScreen].style.display = "flex";
}

// Función para mover a la siguiente pantalla
function slideToNextScreen() {
    if (currentScreen === 0) {
        secondScreen.style.transform = "translateX(0)"; // Desliza desde verde a azul
    } else if (currentScreen === 1) {
        // Aquí puedes añadir más pantallas si es necesario
    }
    currentScreen++;
    showScreen();
}

// Variables para el deslizamiento
let touchStartX = 0;
let touchEndX = 0;

function handleSwipe() {
    // Detecta si el desplazamiento fue hacia la derecha
    if (touchEndX - touchStartX > 100) { // Umbral de desplazamiento para considerar el swipe
        if (currentScreen < screens.length) {
            slideToNextScreen(); // Mueve a la siguiente pantalla
        }
    }
}

// Detectar toque en pantalla para móviles
document.addEventListener("touchstart", function(event) {
    touchStartX = event.touches[0].clientX; // Posición de inicio
}, false);

document.addEventListener("touchend", function(event) {
    touchEndX = event.changedTouches[0].clientX; // Posición final
    handleSwipe(); // Verifica si se realizó un desplazamiento hacia la derecha
}, false);

// Evento para el botón de clic
arrowRight.addEventListener("click", () => {
    if (currentScreen < screens.length) {
        slideToNextScreen();
    }
});

// Inicializa la pantalla actual
showScreen();
