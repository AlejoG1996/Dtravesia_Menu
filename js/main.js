// Comenzamos en la pantalla inicial
let currentScreen = 0;

//obtenemos las pantllas
const firstScreen = document.getElementById("first_screen");
const secondScreen = document.getElementById("second_screen");
const thirdScreen = document.getElementById("third_screen");
// Lista de pantallas
const screens = [firstScreen, secondScreen, thirdScreen];

//obtenemos los botones flechas
const arrowRight = document.getElementById("arrowRight");
const arrowLeft = document.getElementById("arrowLeft");
const arrowLeft2 = document.getElementById("arrowLeft2");
const arrowRight2 = document.getElementById("arrowRight_2");

// Función para mostrar la pantalla activa
function showScreen() {
    console.log(currentScreen)
    // Ocultar todas las pantallas
    screens.forEach(screen => {
        screen.style.display = "none";
    });
    // Mostrar la pantalla activa
    screens[currentScreen].style.display = "flex";
}

// Función para mover a la siguiente pantalla
function slideToNextScreen() {
    // Solo si no es la última pantalla
    if (currentScreen < screens.length - 1) {
        currentScreen++; // Incrementamos el índice
        showScreen(); // Actualizamos la pantalla visible
    }
}

// Función para mover a la pantalla anterior
function slideToPreviousScreen() {
    if (currentScreen === 1) {
        secondScreen.style.transform = "translateX(100%)"; // Desliza hacia la derecha desde azul

    }
    currentScreen--;
    showScreen();
}

// Evento para el botón de clic
arrowLeft.addEventListener("click", () => {
    screens.forEach(screen => {
        screen.style.display = "none";
    });
    firstScreen.style.display = "flex";
    currentScreen--;
});

arrowLeft2.addEventListener("click", () => {
    screens.forEach(screen => {
        screen.style.display = "none";
    });
    secondScreen.style.display = "flex";
    currentScreen--;
});

arrowRight.addEventListener("click", () => {

    screens.forEach(screen => {
        screen.style.display = "none";
    });
    secondScreen.style.display = "flex";
    currentScreen++;
    
});
arrowRight2.addEventListener("click", () => {
    screens.forEach(screen => {
        screen.style.display = "none";
    });
    thirdScreen.style.display = "flex";
    currentScreen++;
});

document.addEventListener("touchstart", touchStart, false);
document.addEventListener("touchmove", touchMove, false);
document.addEventListener("touchend", touchEnd, false);

let touchStartPosX = 0;
let touchStartPosY = 0;
let touchEndPosX = 0;
let touchEndPosY = 0;

function touchStart(e) {
    touchStartPosX = e.changedTouches[0].pageX;
    touchStartPosY = e.changedTouches[0].pageY;
}

function touchMove(e) {
    touchEndPosX = e.changedTouches[0].pageX;
    touchEndPosY = e.changedTouches[0].pageY;
}

function touchEnd(e) {
    // Calculamos las diferencias en ambos ejes
    let diffX = touchEndPosX - touchStartPosX;
    let diffY = touchEndPosY - touchStartPosY;

    // Si el movimiento horizontal (diffX) es mayor que el movimiento vertical (diffY), ejecutamos el cambio de pantalla
    if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX > 0) { // Deslizar a la derecha (cuando la diferencia horizontal es positiva)
            if (currentScreen === 0) {
                screens.forEach(screen => {
                    screen.style.display = "none";
                });
                secondScreen.style.display = "flex";
                currentScreen++;
            } else if (currentScreen === 1) {
                screens.forEach(screen => {
                    screen.style.display = "none";
                });
                thirdScreen.style.display = "flex";
                currentScreen++;
            }
        } else if (diffX < 0) { // Deslizar a la izquierda (cuando la diferencia horizontal es negativa)
            if (currentScreen === 1) {
                screens.forEach(screen => {
                    screen.style.display = "none";
                });
                firstScreen.style.display = "flex";
                currentScreen--;
            } else if (currentScreen === 2) {
                screens.forEach(screen => {
                    screen.style.display = "none";
                });
                secondScreen.style.display = "flex";
                currentScreen--;
            }
        }
    }
}



// Inicializa la pantalla actual
showScreen();