"use strict";
//ASIDE
const panel = document.querySelector("#panel");

//BOTON CRUZ PARA CERRAR
const buttonClose =document.querySelector("#buttonClose");

//cuando hago click en boton de cerrar se cierra el panel de aside
//agrega la clase ocultar

buttonClose.addEventListener("click", ()=>{
    panel.classList.add("ocultar");
}
)
const buttonImage = document.querySelector("#buttonImage");//boton img header
const buttonText = document.querySelector("#buttonText");//boton text header
const buttonClaroOscuro = document.querySelector(".buttonClaroOscuro"); //boton modo claro-oscuro
const panelInicio = document.querySelector(".panelInicio"); //header
const panelImag = document.querySelector(".panelImagen"); //panel img del aside
const panelTexto = document.querySelector(".panelTexto"); //panel texto del aside

const body = document.querySelector("body");

//cuando hago click en el boton imagen o texto quiero que se vea el aside
//se va a ver el panel al que le quito "ocultar"

//panel imagen
buttonImage.addEventListener("click", ()=>{
    panel.classList.remove("ocultar");
    panelTexto.classList.add("ocultar");
    panelImag.classList.remove("ocultar");
}
)

//panel texto
buttonText.addEventListener("click", ()=>{
    panel.classList.remove("ocultar");
    panelTexto.classList.remove("ocultar");
    panelImag.classList.add("ocultar");
}
)

//modo claro o modo oscuro, los colores fueron definidos en el css con variables
buttonClaroOscuro.addEventListener("click", ()=>{
   body.classList.toggle("modoClaro");
   body.classList.toggle("modoOscuro");
}
)

//indicación para que en el recuadro de texto de arriba y abajo de la imagen de vea lo que el usuario escriba en el text area del panel de texto:
const inputTextTop = document.querySelector("#topText");
const textoUsuarioTop = document.querySelector("#textoUsuarioTop");

inputTextTop.addEventListener("keydown",()=>{
    textoUsuarioTop.textContent= inputTextTop.value;
});

const inputBottomText = document.querySelector("#bottomText");
const textoUsuarioBottom = document.querySelector("#textoUsuarioBottom");

inputBottomText.addEventListener("keydown",()=>{
    textoUsuarioBottom.textContent= inputBottomText.value;
});

//cambiar el texto del boton modo claro - oscuro

function FbuttonClaro() {
    let buttonModo = document.getElementById('buttonClaroOscuro');
    if (buttonModo.innerText == 'Modo Claro') 
    buttonModo.innerText = 'Modo Oscuro';
    else buttonModo.innerText = 'Modo Claro'; 
}