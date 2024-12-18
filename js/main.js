// Comenzamos en la pantalla inicial
let currentScreen = 0;

//obtenemos las pantllas
const firstScreen = document.getElementById("first_screen");
const secondScreen = document.getElementById("second_screen");
const thirdScreen = document.getElementById("third_screen");
const fourScreen = document.getElementById("four_screen");

// Lista de pantallas
const screens = [firstScreen, secondScreen, thirdScreen,fourScreen];

//obtenemos los botones flechas
const arrowRight = document.getElementById("arrowRight");
const arrowRight2 = document.getElementById("arrowRight_2");
const arrowRight3 = document.getElementById("arrowRight_3");

const arrowLeft = document.getElementById("arrowLeft");
const arrowLeft2 = document.getElementById("arrowLeft2");


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
arrowRight3.addEventListener("click", () => {
    screens.forEach(screen => {
        screen.style.display = "none";
    });
    fourScreen.style.display = "flex";
    currentScreen++;
});

//Movieminto web
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
            screens.forEach(screen => {
                screen.style.display = "none";
            });
            secondScreen.style.display = "flex";
            currentScreen++;
        }else if(currentScreen === 1){
            screens.forEach(screen => {
                screen.style.display = "none";
            });
            thirdScreen.style.display = "flex";
            currentScreen++;
        }else if(currentScreen===2){
            screens.forEach(screen => {
                screen.style.display = "none";
            });
            fourScreen.style.display = "flex";
            currentScreen++;
        }

    } else if (touchStartPos < touchEndPos) { // Deslizar a la izquierda

        if (currentScreen === 1) {
            screens.forEach(screen => {
                screen.style.display = "none";
            });
            firstScreen.style.display = "flex";
            currentScreen--;
        }else if(currentScreen === 2){
            screens.forEach(screen => {
                screen.style.display = "none";
            });
            secondScreen.style.display = "flex";
            currentScreen--;
        }
    }
}

// Inicializa la pantalla actual
showScreen();