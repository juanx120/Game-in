const btnAbriwizard = document.querySelector("#Help-button")
const menuprincipal = document.querySelector("#menu-principal")
const Novedades1 = document.querySelector("#ofertas")
const btnCerrawizard1 = document.querySelectorAll("#Cerrar-wizard1")
const btnSiguientewizard1 = document.querySelector("#Sigiente-wizard1")
const btnSiguientewizard2 = document.querySelector("#Sigiente-wizard2")
const btnSiguientewizard3 = document.querySelector("#Sigiente-wizard3")
const btnSiguientewizard4 = document.querySelector("#Sigiente-wizard4")
const btnSiguientewizard5 = document.querySelector("#Sigiente-wizard5")
const Wizard1 = document.querySelector("#F-Wizard1");
const Wizard2 = document.querySelector("#F-Wizard2");
const Wizard3 = document.querySelector("#F-Wizard3");
const Wizard4 = document.querySelector("#F-Wizard4");
const Wizard5 = document.querySelector("#F-Wizard5");
const Wizard6 = document.querySelector("#F-Wizard6");
const GameD = document.querySelector("#GamD")


btnAbriwizard.addEventListener("click", () => {
    Wizard1.hidden=false;
    location.href = "index.html#banner"
    menuprincipal.style.zIndex = "1";
});

btnCerrawizard1.forEach(btn => {
    btn.addEventListener("click", ()=>{
    Wizard1.hidden=true;
    Wizard2.hidden=true;
    Wizard3.hidden=true;
    Wizard4.hidden=true;
    Wizard5.hidden=true;
    Wizard6.hidden=true;
    menuprincipal.style.zIndex = "0";
    Novedades1.style.zIndex= "0";
    })
});

btnSiguientewizard1.addEventListener("click", () => {
    Wizard1.hidden=true;
    Wizard2.hidden=false;
    location.href = "index.html#banner"
})

btnSiguientewizard2.addEventListener
("click", () => {
    Wizard2.hidden=true;
    Wizard3.hidden=false;
    location.href = "index.html#banner"
})

btnSiguientewizard3.addEventListener
("click", () => {
    Wizard3.hidden=true;
    Wizard4.hidden=false;
    menuprincipal.style.zIndex = "0";
    Novedades1.style.zIndex = "1";
    location.href = "index.html#Nombre_de_la_pagina"
})

btnSiguientewizard4.addEventListener
("click", () => {
    Wizard4.hidden=true;
    Wizard5.hidden=false;
    location.href = "index.html#btnslide_right"
})

btnSiguientewizard5.addEventListener
("click", () => {
    Wizard5.hidden=true;
    Wizard6.hidden=false;
    location.href = "index.html#Notepier"
})

GameD.addEventListener("click", () => {
    location.href = "game-details.html"
})
