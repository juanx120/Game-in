import { auth } from "./sesion.js"
import { app } from "./Firebase.js"
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"

const db = getFirestore(app);
const Nname = document.querySelector("#nombre");
const Dperfil = document.querySelector("#infoUsuario");




onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        llenardatos(user);
        // ...
    } else {
        // User is signed out
        // ...

    }
});

async function llenardatos(user){

    const docRef = doc(db, "Datos usuarios", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const datos = docSnap.data();
        console.log("Document data:", docSnap.data());
        const fecha = new Date(datos.Fnacimiento.seconds * 1000)
        var fechaFormateada = `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`;
        Nname.innerHTML = `
            <p>${datos.Nickname}</p>
            `;
        Dperfil.innerHTML = `
        <h3>Nombre</h3>
        <p>${datos.Nombre}</p>
        <h3>Correo</h3>
        <p>${user.email}</p>
        <h3>Fecha de Nacimiento</h3>
        <p>${fechaFormateada}</p>
        <a href="/" class="textY">Cambiar contraseña</a>
            `;
        console.log(user);
        console.log(user.uid);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }

}


