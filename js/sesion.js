import { app } from "./Firebase.js"
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"

const auth = getAuth(app);
const btnAbrirmodal = document.querySelector("#abrir-modal");
const btnCerrarmodal = document.querySelector("#btn-cerrar-modal");
const SesionC = document.querySelector(".Cerrar-se")
const btnCerrarSesion = document.querySelector("#Cerrar-se")
const modal = document.querySelector("#modal");

btnAbrirmodal.addEventListener("click", () => {
    modal.showModal();
});

btnCerrarmodal.addEventListener("click", () => {
    modal.close();
});

//------------------------ Sesion iniciada-------------------

onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      SesionC.style.display = 'flex';
      btnAbrirmodal.style.display = 'none';
      console.log(uid)
      // ...
    } else {
      // User is signed out
      // ...
      SesionC.style.display = 'none';
      btnAbrirmodal.style.display = 'inline';
    }
  });
  

//------------------------ Iniciar Sesion--------------------

const signinForm = document.querySelector("#login-form");

signinForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.querySelector("#loginemail").value;
    const password = document.querySelector("#loginpassword").value;

    
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("logeado");
            //limpiar formulario
            signinForm.reset();
            //cerrar modal
            modal.close();
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });
});

//-------------------- Cerrar Sesion--------------------------

btnCerrarSesion.addEventListener("click",(e)=>{
    e.preventDefault();

    signOut(auth).then(() => {
        // Sign-out successful.
        console.log("Salio con exito")
      }).catch((error) => {
        // An error happened.
        console.log("Error al salir")
      });
})
