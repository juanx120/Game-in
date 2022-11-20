import { app } from "./Firebase.js"
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { doc, setDoc, getFirestore, Timestamp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"

export const auth = getAuth(app);
const db = getFirestore(app);
const btnAbrirmodal = document.querySelector("#abrir-modal");
const btnCerrarmodal = document.querySelector("#btn-cerrar-modal");
const btnAbrirR = document.querySelector("#btn-registro")
const btnCerrarR = document.querySelector("#btn-cerrar-modalR")
const SesionC = document.querySelector(".Cerrar-se")
const btnCerrarSesion = document.querySelector("#Cerrar-se")
const modal = document.querySelector("#modal");
const modalR = document.querySelector("#modalr")

btnAbrirmodal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarmodal.addEventListener("click", () => {
  modal.close();
});

btnAbrirR.addEventListener("click", () => {
  modal.close();
  modalR.showModal();
});

btnCerrarR.addEventListener("click", () => {
  modalR.close();
});

//------------------------ Sesion iniciada-------------------

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log(user)
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


//--------------------------- Registro ----------------------

const registerForm = document.querySelector("#register-form");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailr = document.querySelector("#registeremail").value;
  const passwordr = document.querySelector("#registerpassword").value;
  const Nombre = document.querySelector("#namer").value
  const Nickname = document.querySelector("#nicknamer").value
  const Fnacimiento = document.querySelector("#Fnacir").value

  createUserWithEmailAndPassword(auth, emailr, passwordr)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      const Fna = new Date(Fnacimiento).getTime()
      registardatos(user, Nombre, Nickname,Fna);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
})

async function registardatos(user, Nombre,Nickname,Fnacimiento){
  await setDoc(doc(db, "Datos usuarios", user.uid), {
    Nombre: Nombre,
    Nickname: Nickname,
    Fnacimiento: Timestamp.fromDate(new Date(Fnacimiento))
  });
}

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

btnCerrarSesion.addEventListener("click", (e) => {
  e.preventDefault();

  signOut(auth).then(() => {
    // Sign-out successful.
    console.log("Salio con exito")
    window.location.href = "index.html"
  }).catch((error) => {
    // An error happened.
    console.log("Error al salir")
  });
})
