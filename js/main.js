// Comenzamos en la pantalla inicial
let currentScreen = 0;

//obtenemos las pantllas
const firstScreen = document.getElementById("first_screen");
const secondScreen = document.getElementById("second_screen");

// Lista de pantallas
const screens = [firstScreen, secondScreen];

//obtenemos los botones flechas
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
function slideToNextScreen(pantalla) {
    if (pantalla === 'first') {
        currentScreen=0;
        secondScreen.style.transform = "translateX(0)";
    } else if (currentScreen === 1) {
        // Aquí puedes añadir más pantallas si es necesario
    }
    currentScreen++;
    showScreen();
}

// Evento para el botón de clic
arrowRight.addEventListener("click", () => {
    if (currentScreen < screens.length) {
        slideToNextScreen();
    }
});

document.addEventListener("touchstart", touchStart, false);
document.addEventListener("touchmove", touchMove, false);
document.addEventListener("touchend", touchEnd, false);

let touchStartPos = 0;
let touchEndPos = 0;

function touchStart(e) {
    touchStartPos = e.changedTouches[0].pageX || e.changedTouches[0].pageY;
}

function touchMove(e) {
    touchEndPos = e.changedTouches[0].pageX || e.changedTouches[0].pageY;
}

function touchEnd(e) {
    if (touchStartPos > touchEndPos) { // Deslizar a la derecha
        if (currentScreen === 0) {
            slideToNextScreen('first'); // Avanzar a la siguiente pantalla
        } 
        
    } else if (touchStartPos < touchEndPos) { // Deslizar a la izquierda
        
    }
}

// Inicializa la pantalla actual
showScreen();
