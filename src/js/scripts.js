// VAriables MENU ---------
let menu = document.getElementById("menu-btn");
let navBar = document.getElementById("mainMenu");


// Varialbles del SLIDER ---------
const slider = document.getElementById("slider");
let sliderSection = document.querySelectorAll(".header-section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");


// ------------- CAMBIO MENU ICONO Y REMOVER AL SCROLL ---------------------
// Cambia el icono al hacer click
menu.onclick = () => {
    menu.classList.toggle("fa-times");
    menu.classList.toggle("active");
    navBar.classList.toggle("active");
}

// Remueve el icono al hacer scroll
window.onscroll = () => {
    menu.classList.remove("fa-times");
    menu.classList.remove("active");
    navBar.classList.remove("active");
}




// ------------------------ SLIDER NEXT - PREV -------------------------
slider.insertAdjacentElement('afterbegin', sliderSectionLast);

// -- FUNCION MOVER DERECHA (next ->)
function moveNext() {
    let sliderSectionFirst = document.querySelectorAll(".header-section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}


// -- FUNCION MOVER IZQUIERDA (<- prev)
function movePrev() {
    let sliderSection = document.querySelectorAll(".header-section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}


nextBtn.addEventListener('click', function() {
    moveNext();
});

prevBtn.addEventListener('click', function() {
    movePrev();
});

// SLIDER Automático cada 6 segundos -------
setInterval(function() {
    moveNext();
}, 6000);
