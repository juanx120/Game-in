const btnAbriwizard = document.querySelector("#Help-button")
const btnCerrawizard1 = document.querySelectorAll("#Cerrar-wizard1")
const btnSiguientewizard1 = document.querySelector("#Sigiente-wizard1")
const Wizard1 = document.querySelector("#F-Wizard1");
const Wizard2 = document.querySelector("#F-Wizard2");

btnAbriwizard.addEventListener("click", () => {
    Wizard1.hidden=false;
    location.href = "index.html#banner"
});

btnCerrawizard1.forEach(btn => {
    btn.addEventListener("click", ()=>{
    Wizard1.hidden=true;
    Wizard2.hidden=true;
    })
});

btnSiguientewizard1.addEventListener("click", () => {
    Wizard1.hidden=true;
    Wizard2.hidden=false;
})