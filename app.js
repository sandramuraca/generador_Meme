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
const buttonImage = document.querySelector("#buttonImage");
const buttonText = document.querySelector("#buttonText");
const panelInicio = document.querySelector(".panelInicio");
const panelImag = document.querySelector(".panelImagen");
const panelTexto = document.querySelector(".panelTexto");
const buttonClaroOscuro = document.querySelector(".buttonClaroOscuro");
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