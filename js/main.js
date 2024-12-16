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

// Implementación de gestos táctiles para móviles
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
                    slideToPreviousScreen(); // Volver hacia atrás
                }
            } else if (touchStartPos < touchEndPos) { // Deslizar a la derecha
                if (currentScreen === 0) {
                    slideToNextScreen(); // Avanzar a la siguiente pantalla
                } else if (currentScreen === 1) {
                    slideToNextScreen(); // Avanzar a la siguiente pantalla desde "Entrada"
                }
            }
        }
// Inicialización del estado de las pantallas y flechas
showScreen();