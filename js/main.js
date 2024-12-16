// Comenzamos en la pantalla inciial
let currentScreen = 0; 
const firstScreen = document.getElementById("first_screen");
const second_screen = document.getElementById("second_screen");
//lista de screens
const screens = [first_screen,second_screen];
const arrowRight = document.getElementById("arrowRight");

// Función para mostrar la pantalla activa
function showScreen() {
    // Ocultar todas las pantallas
    screens.forEach(screen => {
        screen.style.display = "none";
    });
    // Mostrar la pantalla activa
    screens[currentScreen].style.display = "flex";
    //updateArrows();
}

// Función para mover a la siguiente pantalla
function slideToNextScreen() {
    if (currentScreen === 0) {
        second_screen.style.transform = "translateX(0)"; // Desliza desde verde a azul
    } else if (currentScreen === 1) {
        darkBlueScreen.style.transform = "translateY(0)"; // Desliza desde azul a azul oscuro
    }
    currentScreen++;
    showScreen();
}

arrowRight.addEventListener("click", () => {
    if (currentScreen < 2) {
        slideToNextScreen();
    }
});


let startTouchX = 0;

document.addEventListener('touchstart', function(event) {
    startTouchX = event.touches[0].clientX; // Captura la posición inicial del toque
});

document.addEventListener('touchend', function(event) {
    let endTouchX = event.changedTouches[0].clientX; // Captura la posición final del toque

    // Si el desplazamiento fue hacia la derecha
    if (endTouchX - startTouchX > 50) {
        slideToNextScreen();
    }
});


// Inicialización del estado de las pantallas y flechas
showScreen();