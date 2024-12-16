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
    if (touchStartPos > touchEndPos) { // Deslizar a la izquierda
        if (currentScreen === 1 || currentScreen === 2) {
           // slideToPreviousScreen(); // Volver hacia atrás
        }
    } else if (touchStartPos < touchEndPos) { // Deslizar a la derecha
        if (currentScreen === 0) {
            slideToNextScreen(); // Avanzar a la siguiente pantalla
        } 
    }
}

// Inicializa la pantalla actual
showScreen();
