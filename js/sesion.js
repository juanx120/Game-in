const btnAbrirmodal = document.querySelector("#abrir-modal");
const btnCerrarmodal = document.querySelector("#btn-cerrar-modal");
const modal = document.querySelector("#modal");

btnAbrirmodal.addEventListener("click",()=>{
    modal.showModal();
})

btnCerrarmodal.addEventListener("click",()=>{
    modal.close();
})

//------------------------ Iniciar Sesion--------------------
/*import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const signinForm = document.querySelector('#login-form')

signinForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.querySelector('#loginemail').value
    const password = document.querySelector('#loginpassword').value

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log('logeado')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });
})*/