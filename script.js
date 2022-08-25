/*  ***REGLAS DEL ENCRIPTADOR***
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
 */

//Definición de constantes para recibir información en las cajas de texto

const inputTexto = document.querySelector(".ingresarMensaje");
const mensajeRecibido = document.querySelector(".resultado-texto");
var botonCopiar = document.querySelector("#botonCopiar")


// Función botón que manda a llamar la función encriptar

function botonEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value); 
    mensajeRecibido.value = textoEncriptado;
    mensajeRecibido.style.backgroundImage = "none";
    inputTexto.value = "";
    document.getElementById("ningunMensaje").style.display = "none";
    document.getElementById("ingreseTexto").style.display = "none";
    document.getElementById("botonCopiar").style.visibility = "visible";
}

// "VAMO" A ENCRIPTAR FUNCIÓN --- meme poKemon

function encriptar(stringEncriptar){

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];   
    
        stringEncriptar = stringEncriptar.toLowerCase(); //convierte todo el texto en minúscula

        for(let i=0; i < matrizCodigo.length; i++){ 
            if(stringEncriptar.includes(matrizCodigo[i][0])){ 
                stringEncriptar = stringEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]); // .replaceAll remplaza lo que coincida en el valor "i" y lo pasa a posicion [1]
            }
        }
    return stringEncriptar; 
}

// Función botón que manda a llamar la función desencriptar

function botonDesencriptar(){
    const textoEncriptado = desencriptar(inputTexto.value); //.value toma el valor ingresado en inputTexto
    mensajeRecibido.value = textoEncriptado;
    inputTexto.value = "";

    document.getElementById("ningun-mensaje").style.display = "none";
    document.getElementById("ingrese-texto").style.display = "none";
}

// "VAMO" A DESENCRIPTAR FUNCIÓN --- meme poKemon

function desencriptar(stringDesencriptar){

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];     

        stringDesencriptar = stringDesencriptar.toLowerCase(); //convierte todo el texto en minúscula

            for(let i=0; i < matrizCodigo.length; i++){ 
                if(stringDesencriptar.includes(matrizCodigo[i][0])){ 
                    stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]); //.replaceAll remplaza lo que coincida en el valor "i" y lo pasas a posicion [0]
                }
            }
    return stringDesencriptar; //Muestra el mensaje encriptado
}

//FUNCION PARA COPIAR EL TEXTO BOTÓN

function copyToClipBoard(){

    const contenidoCopiado=document.getElementById("mensajeRecibido");
    mensajeRecibido.select(); //.select selecciona el texto
    navigator.clipboard.writeText(mensajeRecibido.value) 
    mensajeRecibido.value = "";
    alert("Texto Copiado")
}
