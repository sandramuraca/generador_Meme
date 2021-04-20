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
//cambiar el texto del boton modo claro - oscuro

const textoButton = document.querySelector("#textoButton");

buttonClaroOscuro.addEventListener("click", ()=>{
   body.classList.toggle("modoClaro");
   body.classList.toggle("modoOscuro");

   if (textoButton.innerText == 'Modo Claro'){
        textoButton.innerText = 'Modo Oscuro';
        } else {
        textoButton.innerText = 'Modo Claro';
        }
    }
);

//indicación para que en el recuadro de texto de arriba y abajo de la imagen de vea lo que el usuario escriba en el text area del panel de texto:
//campo donde el usuario ingresa el dato
const inputTextTop = document.querySelector("#topText"); 

//campo donde se refleja ese dato, arriba de la imagen
const textoUsuarioTop = document.querySelector("#textoUsuarioTop"); 

inputTextTop.addEventListener("input",()=>{
    textoUsuarioTop.textContent= inputTextTop.value;
});

//campo donde el usuario ingresa el dato
const inputBottomText = document.querySelector("#bottomText");

//campo donde se refleja ese dato, abajo de la imagen
const textoUsuarioBottom = document.querySelector("#textoUsuarioBottom");

inputBottomText.addEventListener("input",()=>{
    textoUsuarioBottom.textContent= inputBottomText.value;
});





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

//cambio tipografias en el campo arriba y abajo de la imagen
//se selecciona el select de las opciones

const selectTipografias = document.querySelector("#selectTipodrafias");

selectTipografias.addEventListener("input", () => {
    textoUsuarioTop.style.fontFamily = selectTipografias.value;
    textoUsuarioBottom.style.fontFamily = selectTipografias.value;
}
);

//cambio tamaño  tipografias en el campo arriba y abajo de la imagen

const tamanioFuente = document.querySelector("#tamanioFuente");

tamanioFuente.addEventListener("input", () => {
    textoUsuarioTop.style.fontSize = `${tamanioFuente.value}px`;
    textoUsuarioBottom.style.fontSize  = `${tamanioFuente.value}px`;
    console.log({textoUsuarioTop,textoUsuarioBottom,tamanio:tamanioFuente.value})
}
);

//cambio de alineación de la fuente

const alignLeft = document.querySelector(".left");
const alignCenter = document.querySelector(".center");
const alignRight = document.querySelector(".right");

alignLeft.addEventListener("click", () => {
    textoUsuarioTop.style = `text-align: left;`
    textoUsuarioBottom.style = `text-align: left;`
})

alignCenter.addEventListener("click", () => {
    textoUsuarioTop.style = `text-align: center;`
    textoUsuarioBottom.style = `text-align: center;`
})

alignRight.addEventListener("click", () => {
    textoUsuarioTop.style = `text-align: right;`
    textoUsuarioBottom.style = `text-align: right;`
})

/*textoUsuarioBottom.style = `font-size: 40px;`*/