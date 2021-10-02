
# Observaciones

Sandra, felicitaciones por tu trabajo. Se ve muy bonito, me encanta la paleta de colores. El funcionamiento esta impecable y se nota que hay mucho trabajo acá. 

## Estructura correcta de documento HTML

Te dejé varios comentarios. 

## Respeta el diseño dado

Cumplido. 

## Respeta el funcionamiento

Cumplido

## Responsive funciona correctamente

Cumplido

## Buena estructura de proyecto

Cumplido salvo por la carpeta .vscode, que no se debe subir a github. 

## Código bien indentado

Cumplido a medias en HTML y CSS, muuuuuy desprolijo en JS. Todo tu JS se ve desprolijo, hecho a las apuradas. Hay herramientas para VSCode que te ayudan a arreglarlo, te recomiendo prettier, pero tambien tene la costumbre de leer tu codigo y dejar el tabulado bien hecho y los espacios correctos entre las cosas. 

A veces no dejas el espaciado correcto en cada orden de css. En lugar de escribir por ejemplo `.name{`, deja un espacio entre el nombre de la clase y la llave: `.name {`

En CSS se cumplen las mismas reglas que en html, si dejas tabulado significa que estas adentro de otra cosa (por ejemplo una media query).


## Comentarios que permiten mejorar la legibilidad del código

Impecables. 

## Uso correcto de etiquetas semánticas

Cumplido con una excepcion. Usás como títulos cosas que no lo son, como los h3 en lugar de label. Aquí creo que hay una confusión: un texto **importante** no es lo mismo que un **título**. Un título encabeza secciones o subsecciones. Un texto importante, como el que sirve para cambiar el texto del meme, no tiene necesariamente que tener una etiqueta h1, h2 o h3, que está reservada para los titulos. Pensá en los títulos desde una perspectiva de diseño: cuáles son las secciones y subsecciones de mi web? Cuales son los títulos de esas secciones? En esta web creo yo hay tres secciones principales: la de editar meme, el panel aside de imagen, y el panel aside de texto. La sección de editar meme no tiene título, pero las otras dos sí: La palabra "texto" y la palabra "imagen". Ahí están tus h2. El resto de los textos, aunque sean importantes, **no** son títulos, y no deberían tener etiquetas como h2 o h3. 

## Buenos nombres de clases

Cumplido en general, aunque tenés la tendencia de usar camelCase para los nombres de clases y de IDs. Comentamos en clase que siempre que esté en html, usamos por convención guiones para separar palabras. Es decir, "boton-texto" en lugar de "botonTexto". camelCase, lo usamos por convención para Javascript. 

## Buenos nombres de funciones y variables

Cumplido. 

## Reutilización de estilos

Cumplido, aunque te dejo varios comentarios. 

## Funciones pequeñas

Cumplido. 

## Accesibilidad

No cumplido, hay muchas decisiones aquí que impactan muy negativamente en la accesibilidad de tu sitio. 

- Le diste "outline: none" a tus  botones. No puedo insistir lo suficiente en lo pernicioso que es esto: le quitaste a tus usuarios la posibilidad de navegar tu web por teclado. Cualquier persona que por dificultades motrices no pueda usar el mouse, no va a poder navegar tu web. No quiero ser dramática, pero es nuestro deber y responsabilidad como desarrolladoras web permitir que todos puedan usar nuestros sitios. Quitar el outline que viene por defecto es como comprar un edificio que tiene rampas para sillas de ruedas y reemplazarlas a todas por escaleras. Nunca, nunca, nunca quitamos el outline **a menos** que lo reemplacemos con una alternativa clara toda vez que un elemento está en foco. Ante la duda, mejor dejar el outline que viene por defecto. 

- Te olvidas de usar label, lo reemplazas por h3, que no es lo mismo

- Falta aria-label en muchísimos elementos. Te dejo como ejemplo los botones para alinear texto:

```html
<button class="alingLeft colorInputYButton buttonAncho">
    <i class="fas fa-align-left"></i>
</button>
<button class="alingCenter colorInputYButton buttonAncho">
    <i class="fas fa-align-center"></i>
</button>
<button class="alingRight colorInputYButton buttonAncho">
    <i class="fas fa-align-right"></i>
</button>
```

¿Como puede saber un usuario que depende del lector de pantalla qué son estos elementos? El ícono se ignora. Ni el id ni el nombre de clase se leen. El usuario que depende del lector de pantalla no tiene idea para qué sirven estos botones. 


## Commits con mensajes adecuados

Cumplido. 

# Nota final: 8

