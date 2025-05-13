/* let titulo = document.getElementById("idTtulo"); //extrae un elemento html q coincida con el ID
let minititutlo = document.getElementsByClassName("miniTitulo"); // extraer todos los elemneto html q coincidan con la clase

let supertitulo = document.querySelector(".miniTitulo"); //extrae el primer elemento q coincida con el filtro */

///primer paso selecionar el elemento HTML al q nosotrs queremos escuchar

/* let boton = document.querySelector("#btn");

let kevin = document.querySelector("#kevin");

let dia = true;
boton.addEventListener("click", function () {
  dia = !dia; */

/*  dia ? (boton.textContent = "DIA") : (boton.textContent = "NOCHE"); */

/*   if (dia) {
    boton.textContent = "DIA";
    kevin.textContent = "PRINCESA FIONA";
  } else {
    boton.textContent = "noche";
    kevin.textContent = "ogra fiona";
  }
}); */

//// la prncesa fiona vive en una etiqueta es crear un boton q pueda alternar entre el dia y la noche

/* let parrafo = document.querySelector("#parrafoloco");

function gino(evento, pais) {
  console.log(evento);
  console.log(pais);
}
parrafo.addEventListener("click", function (evento) {
  gino(evento, "Chile");
}); */

/// EVENTO submit

/* let formulario = document.querySelector("#elias");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  let formdata1 = new FormData(formulario);

  if (formdata1.get("nombre") === "") {
    alert("nombre Obligatorio");
    console.log(formdata1.get("nombre"));
  }
  if (formdata1.get("celular").length !== 8) {
    alert("el numero de celular es incorercto");
  }
}); */
/// crear un formulario q reciba
///1 nombre de usuario
/// 2 edad   validar q tenga mas de 18 años
/// pais de origen   validar q sea chileno

/* eventos mouse
mouseover: Cuando el cursor entra en un elemento.
mouseout: Cuando el cursor sale del elemento. 
mousemove:  Se dispara cada vez que el mouse se mueve sobre un elemento.
    eventos teclado
keydown: Cuando presionas una tecla.
keyup: Cuando sueltas la tecla.

Puedes verificar teclas con e.key o e.code.
*/
/* let botoncito = document.querySelector("#btn");

botoncito.addEventListener("mouseover", function (evento) {
  botoncito.style.backgroundColor = "gray";
});

botoncito.addEventListener("mouseout", function (evento) {
  botoncito.style.backgroundColor = "";
});

let caja = document.querySelector("#caja");
let cordenadas = document.querySelector("#cord");

caja.addEventListener("mousemove", function (evento) {
  console.log(evento);
  cordenadas.textContent = `cordenadas: (${evento.clientX},${evento.clientY})`;
}); */

/// fiona en una etiqueta h2 presione el boton de dia o de noche
/// fiona se transforma en ogro o princesa pero tambien los estilos de la etiqueta q
/// la contengan

let megainput = document.querySelector("#inputCadena");

let cuenta = document.querySelector("#supercontador");
let contador = 0;
megainput.addEventListener("keyup", function (evento) {
  console.log(evento.target);
  contador = evento.target.value.length;
  cuenta.textContent = `CONTADOR : ${contador}`;
});

/* crear un input de filtrado
vamos a tener un listado <ul>,<li>
de peliculas
*/
