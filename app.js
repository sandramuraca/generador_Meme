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
//boton img header
const buttonImage = document.querySelector("#buttonImage");

//boton text header
const buttonText = document.querySelector("#buttonText");

//boton modo claro-oscuro
const buttonClaroOscuro = document.querySelector(".buttonClaroOscuro");

//header
const panelInicio = document.querySelector(".panelInicio"); 

//panel img del aside
const panelImag = document.querySelector(".panelImagen"); 

//panel texto del aside
const panelTexto = document.querySelector(".panelTexto"); 

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
//campo donde el usuario ingresa el dato
const inputTextTop = document.querySelector("#topText"); 

//campo donde se refleja ese dato, arriba de la imagen
const textoUsuarioTop = document.querySelector("#textoUsuarioTop"); 

inputTextTop.addEventListener("keydown",()=>{
    textoUsuarioTop.textContent= inputTextTop.value;
});

//campo donde el usuario ingresa el dato
const inputBottomText = document.querySelector("#bottomText");

//campo donde se refleja ese dato, abajo de la imagen
const textoUsuarioBottom = document.querySelector("#textoUsuarioBottom");

inputBottomText.addEventListener("keydown",()=>{
    textoUsuarioBottom.textContent= inputBottomText.value;
});


//cambiar el texto del boton modo claro - oscuro
function FbuttonClaro() {
    let buttonModo = document.getElementById('buttonClaroOscuro');
    if (buttonModo.innerText == 'Modo Oscuro') 
    buttonModo.innerText = 'Modo Claro';
    else buttonModo.innerText = 'Modo Oscuro'; 
}

/*ocular paneles de texto arriba y abajo de la imagen*/


const checkTopText = document.querySelector("#checkTopTex");

checkTopText.addEventListener("click", ()=>{
    if(checkTopText.checked){
        textoUsuarioTop.classList.add("ocultar")
    } else {
        textoUsuarioTop.classList.remove("ocultar")
    }
}); 


//checkbox panel texto text area abajo imagen
const checkBottomText = document.querySelector("#checkBottomTex");

checkBottomText.addEventListener("click", ()=>{
    if(checkBottomText.checked){
        textoUsuarioBottom.classList.add("ocultar")
    } else {
        textoUsuarioBottom.classList.remove("ocultar")
    }
}); 
