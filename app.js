"use strict";

//--------ASIDE--------
const panel = document.querySelector("#panelAside");

//--------BOTON CRUZ PARA CERRAR--------
const buttonClose =document.querySelector("#buttonClose");

//cuando hago click en boton de cerrar se cierra el panel de aside
//agrega la clase ocultar
buttonClose.addEventListener("click", ()=>{
    panel.classList.add("ocultar");
}
)

//--------BOTON IMG--------
const buttonImage = document.querySelector("#buttonImage");

//--------BOTON TEXTO--------
const buttonText = document.querySelector("#buttonText");

//--------BOTON CLARO - OSCURO--------
const buttonClaroOscuro = document.querySelector(".buttonClaroOscuro");

//--------HEADER--------
const panelInicio = document.querySelector(".panelInicio"); 

//--------PANEL IMG - ASIDE--------
const panelImag = document.querySelector(".panelImagen"); 


//--------PANEL TEXTO - ASIDE--------
const panelTexto = document.querySelector(".panelTexto"); 

const body = document.querySelector("body");

//cuando hago click en el boton imagen o texto quiero que se vea el aside
//se va a ver el panel al que le quito "ocultar"

// --------VER PANEL IMAGEN--------
buttonImage.addEventListener("click", ()=>{
    panel.classList.remove("ocultar");
    panelTexto.classList.add("ocultar");
    panelImag.classList.remove("ocultar");
}
)

// --------VER PANEL TEXTO--------
buttonText.addEventListener("click", ()=>{
    panel.classList.remove("ocultar");
    panelTexto.classList.remove("ocultar");
    panelImag.classList.add("ocultar");
}
)

//--------MODO CLARO - OSCURO --------
//los colores fueron definidos en el css con variables
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

//***** PANEL IMAGEN EVENTOS ********* */

//IMPUT IMG
const urlImgMeme = document.querySelector(".urlImgMeme");

//DIV IMG
const imgMeme = document.querySelector(".imgMeme");

urlImgMeme.addEventListener("input", ()=>{
    const url = urlImgMeme.value;
    imgMeme.style.backgroundImage = `url('${url}')`;
});

//COLOR FONDO DIV IMG
const colorFondoImg = document.querySelector("#colorFondoImg");//div img
const colorFondoDiv = document.querySelector("#colorFondoDiv"); //input color
const nombreColorFondoDiv = document.querySelector("#nombreColorFondoDiv"); //span ref color

colorFondoDiv.addEventListener("input", ()=>{
    colorFondoImg.style.backgroundColor = colorFondoDiv.value;
    nombreColorFondoDiv.textContent = `${colorFondoDiv.value}`;
});

//Select de Efectos de Imagen
const blendMode = document.querySelector("#blendMode");

blendMode.addEventListener("input", ()=> {
    imgMeme.style.backgroundBlendMode = blendMode.value;
});



//SLIDERS

const brightness = document.getElementById("brightness-slider");
const opacity = document.getElementById("opacity-slider");
const contrast = document.getElementById("contrast-slider");
const blurs = document.getElementById("blur-slider");
const grayscale = document.getElementById("grayscale-slider");
const sepia = document.getElementById("sepia-slider");
const hue = document.getElementById("hue-slider");
const saturate = document.getElementById("saturate-slider");
const invert = document.getElementById("invert-slider");


const imgFilter = () => {
    imgMeme.style.filter = `brightness(${brightness.value})
                            opacity(${opacity.value})
                            contrast(${contrast.value}%)
                            blur(${blurs.value}px)
                            grayscale(${grayscale.value}%)
                            sepia(${sepia.value}%)
                            hue-rotate(${hue.value}deg)
                            saturate(${saturate.value}%)
                            invert(${invert.value})`;
}

brightness.addEventListener("change",imgFilter);
opacity.addEventListener("change",imgFilter);
contrast.addEventListener("change",imgFilter);
blurs.addEventListener("change",imgFilter);
grayscale.addEventListener("change",imgFilter);
sepia.addEventListener("change",imgFilter);
hue.addEventListener("change",imgFilter);
saturate.addEventListener("change",imgFilter);
invert.addEventListener("change",imgFilter);


//Reset filtros

const resetFiltros = document.getElementById("resetFiltros");

resetFiltros.addEventListener("click", ()=>{
    imgMeme.style.filter = brightness.value="1"; 
                            opacity.value="1";
                            contrast.value="100";
                            blurs.value = "1";
                            grayscale.value = "0";
                            sepia.value="0";
                            hue.value="0";
                            saturate.value="100";
                            invert.value="0";
                            imgFilter(); 
});

//DESGARGA IMAGEN
const recuadroMeme = document.querySelector(".recuadroMeme");
const downloadMeme = document.querySelector(".downloadMeme");


downloadMeme.addEventListener("click",()=>{
    domtoimage.toBlob(recuadroMeme)
      .then(function (blob) {
      window.saveAs(blob, 'meme.png');
    });
  });

//***** PANEL TEXTO EVENTOS ********* */

//indicación para que en el recuadro de texto de arriba y abajo de la imagen se vea lo que el usuario escriba en el text area del panel de texto:
//--------INPUT PARA TEXTO SUPERIOR--------
const inputTextTop = document.querySelector("#topText"); 

//--------TEXTO SUPEROR--------
const textoUsuarioTop = document.querySelector("#textoUsuarioTop"); 

inputTextTop.addEventListener("input",()=>{
    textoUsuarioTop.textContent= inputTextTop.value;
});

//--------INPUT PARA TEXTO INFERIOR--------
const inputBottomText = document.querySelector("#bottomText");

//--------TEXTO INFERIOR--------
const textoUsuarioBottom = document.querySelector("#textoUsuarioBottom");

inputBottomText.addEventListener("input",()=>{
    textoUsuarioBottom.textContent= inputBottomText.value;
});


//--------CHECKBOX TEXTO SUPERIOR - OCULTAR--------
const checkTopText = document.querySelector("#checkTopTex");

checkTopText.addEventListener("click", ()=>{
    if(checkTopText.checked){
        textoUsuarioTop.classList.add("ocultar")
    } else {
        textoUsuarioTop.classList.remove("ocultar")
    }
}); 


//--------CHECKBOX TEXTO INFERIOR - OCULTAR--------
const checkBottomText = document.querySelector("#checkBottomTex");

checkBottomText.addEventListener("click", ()=>{
    if(checkBottomText.checked){
        textoUsuarioBottom.classList.add("ocultar")
    } else {
        textoUsuarioBottom.classList.remove("ocultar")
    }
}); 

//--------CAMBIO TIPOGRAFIA--------
//select de las opciones
const selectTipografias = document.querySelector("#selectTipodrafias");

selectTipografias.addEventListener("input", () => {
    textoUsuarioTop.style.fontFamily = selectTipografias.value;
    textoUsuarioBottom.style.fontFamily = selectTipografias.value;
}
);

//--------TAMAÑO FUENTE--------
const tamanioFuente = document.querySelector("#tamanioFuente");

tamanioFuente.addEventListener("input", () => {
    textoUsuarioTop.style.fontSize = `${tamanioFuente.value}px`;
    textoUsuarioBottom.style.fontSize  = `${tamanioFuente.value}px`;
    console.log({textoUsuarioTop,textoUsuarioBottom,tamanio:tamanioFuente.value})
}
);

//--------ALINEACION--------
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

//--------COLOR TEXTO ARRIBA Y ABAJO DE LA IMAGEN--------
const colorTexto = document.querySelector("#colorDeTexto");
const referenciaColorTexto = document.querySelector("#refSpanTexto");

colorTexto.addEventListener("input",()=>{
    textoUsuarioTop.style.color = colorTexto.value;
    textoUsuarioBottom.style.color = colorTexto.value;
    referenciaColorTexto.textContent = colorTexto.value; //actualiza referencia color del texto en el span
});

//--------COLOR FONDO ARRIBA Y ABAJO DE LA IMAGEN--------
const colorFondo = document.querySelector("#colorDeFondo");
const referenciaColorFondo = document.querySelector("#refSpanFondo");

colorFondo.addEventListener("input",()=>{
    textoUsuarioTop.style.backgroundColor = colorFondo.value;
    textoUsuarioBottom.style.backgroundColor = colorFondo.value;
    referenciaColorFondo.textContent = colorFondo.value;//actualiza referencia color de fondo en el span
});

//-----FONDO TRANSPARENTE------

const backgroundTransparent = document.querySelector("#backgroundTransparent");

backgroundTransparent.addEventListener("input",()=>{
    textoUsuarioTop.style = `background-color: transparent;`
    textoUsuarioBottom.style = `background-color: transparent;`
});


//--------CONTORNO--------
const sinContorno = document.querySelector(".ninguno");
const contornoClaro = document.querySelector(".claro");
const contornoOscuro = document.querySelector(".oscuro");

sinContorno.addEventListener("click", ()=>{
    textoUsuarioTop.classList.add("sinContorno");
    textoUsuarioBottom.classList.add("sinContorno");
});

contornoClaro.addEventListener("click", ()=>{
    textoUsuarioTop.classList.add("contornoClaro");
    textoUsuarioBottom.classList.add("contornoClaro");
});

contornoOscuro.addEventListener("click", ()=>{
    textoUsuarioTop.classList.add("contornoOscuro");
    textoUsuarioBottom.classList.add("contornoOscuro");
});

//--------ESPACIADO--------
const espaciado = document.querySelector("#espaciado");
espaciado.addEventListener ("input", ()=>{
    textoUsuarioTop.style.padding = `${espaciado.value}px 50px`;
    textoUsuarioBottom.style.padding = `${espaciado.value}px 50px`;
}
);
 
//--------INTERLINEADO--------
const interlineado = document.querySelector("#interlineado");
interlineado.addEventListener("input", ()=>{
    textoUsuarioTop.style.leneHeight = interlineado.value;
    textoUsuarioBottom.style.leneHeight = interlineado.value;
});

//--------BOTON DESCARGA (?????)---------------


/* style.fontSize = `${tamanioFuente.value}px`;*/
/*const textoUsuarioBottom = document.querySelector("#textoUsuarioBottom");

inputBottomText.addEventListener("input",()=>{
    textoUsuarioBottom.textContent= inputBottomText.value;
});*/

/*textoUsuarioBottom.style = `font-size: 40px;`*/