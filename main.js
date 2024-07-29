const input = document.getElementById("input");
const btnEncriptar = document.getElementById("botonEncriptar");
const btnDesencriptar =document.getElementById("botonDesencriptar");
const parrafo = document.getElementById("textoEncriptado");
const plantilla = document.getElementById("text--mjs");
const copy = document.getElementById("copy");
const muñeco = document.getElementById("muñeco");
const btnRefresh = document.getElementById("botonActualizar");

btnEncriptar.addEventListener("click", encriptar);
btnDesencriptar.addEventListener("click", desencriptar);
copy.addEventListener("click", copiar);
btnRefresh.addEventListener("click", refresh =>{
    location.reload();
});

let textoIngresado = "";
let textoEncriptado;

function encriptar(){
    textoIngresado = input.value;
    
    reemplazar();

    clean();
    if(textoIngresado == ""){
        createHtml("No hay caracteres encriptables");
    }
    if(textoIngresado == " "){
        createHtml("No se pueden introducir espacios en blanco")
    }
};
function desencriptar(){
    textoIngresado = input.value;
    reemplazarDos();
    if(textoIngresado == " "){
        createHtml("No se pueden introducir espacios en blanco")
    }
    clean();
}

function createHtml(textoEncriptado){
    parrafo.textContent = textoEncriptado;
}

function reemplazar(){
    textoIngresado = input.value.toLowerCase();
    textoEncriptado = textoIngresado.replace(/e/igm, "enter");
    textoEncriptado = textoEncriptado.replace(/o/igm, "ober");
    textoEncriptado = textoEncriptado.replace(/i/igm, "imes");
    textoEncriptado = textoEncriptado.replace(/a/igm, "ai");
    textoEncriptado = textoEncriptado.replace(/u/igm, "ufat");

    createHtml(textoEncriptado);
    plantilla.style.display = "none";
    muñeco.style.display = "none";
    copy.style.display = "block";
}

function clean(){
    input.value = "";
}
// Otra alternativa de reemplazo para usar en el boton "desencriptar"
function reemplazarDos(){
    if(textoIngresado.includes("ai") ||
        textoIngresado.includes("enter") ||
        textoIngresado.includes("imes") || 
        textoIngresado.includes("ober") ||
        textoIngresado.includes("ufat")){
        let textoEncriptado = textoIngresado.replaceAll("ai", "a").replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ober", "o").replaceAll("ufat", "u");
        createHtml(textoEncriptado);
        plantilla.style.display = "none";
        muñeco.style.display = "none";
        copy.style.display = "block";
    } else{
        createHtml("No hay caracteres desencriptables.")
    }
}

function copiar(){
    let content = parrafo.innerHTML;

    navigator.clipboard.writeText(content)
    .then(()=> {
        let msgCopy = document.createElement("span");
        msgCopy.textContent = "Copiado al portapapeles";
        msgCopy.classList.add("msgCopy");
        parrafo.appendChild(msgCopy);
        setTimeout(()=>{
            msgCopy.remove();
        }, 2000)
    })
}








