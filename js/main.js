// Comenzamos en la pantalla inicial
let currentScreen = 14;

//obtenemos las pantllas
const firstScreen = document.getElementById("first_screen");
const secondScreen = document.getElementById("second_screen");
const thirdScreen = document.getElementById("third_screen");
const fourScreen = document.getElementById("four_screen");
const fiveScreen = document.getElementById("five_screen");
const sixScreen = document.getElementById("six_screen");
const sevenScreen = document.getElementById("seven_screen");
const eigthScreen = document.getElementById("eigth_screen");
const nineScreen = document.getElementById("nine_screen");
const tenScreen = document.getElementById("ten_screen");
const elevenScreen = document.getElementById("eleven_screen");
const twelveScreen = document.getElementById("twelve_screen");
const thirteenScreen = document.getElementById("thirteen_screen");
const fourteenScreen = document.getElementById("fourteen_screen");
const fifteenScreen = document.getElementById("fifteen_screen");

// Lista de pantallas
const screens = [firstScreen, secondScreen, thirdScreen,fourScreen,fiveScreen,sixScreen,sevenScreen,eigthScreen,
    nineScreen,tenScreen,elevenScreen,twelveScreen,thirteenScreen,fourteenScreen,fifteenScreen
];

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
    // Calculamos la diferencia entre el inicio y el fin del deslizamiento
    const threshold = 50; // Umbral para detectar el deslizamiento
    if (Math.abs(touchStartPos - touchEndPos) < threshold) return; // No hacer nada si el deslizamiento es pequeño

    // Deslizar a la derecha (cambiar a la pantalla siguiente)
    if (touchStartPos > touchEndPos && currentScreen < screens.length - 1) { 
        changeScreen(currentScreen + 1);
    }
    // Deslizar a la izquierda (volver a la pantalla anterior)
    else if (touchStartPos < touchEndPos && currentScreen > 0) { 
        changeScreen(currentScreen - 1);
    }
}

function changeScreen(newScreen) {
    // Ocultar todas las pantallas
    screens.forEach(screen => screen.style.display = "none");

    // Mostrar la pantalla actual
    screens[newScreen].style.display = "flex";
    currentScreen = newScreen;
}
// Inicializa la pantalla actual
showScreen();