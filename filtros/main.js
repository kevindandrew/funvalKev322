let estudiantes = [
  {
    nombre: "Kevin",
    edad: 28,
    pais: "Bolivia",
  },
  {
    nombre: "Juan",
    edad: 33,
    pais: "Peru",
  },
  {
    nombre: "Pedro",
    edad: 18,
    pais: "Argentina",
  },
  {
    nombre: "Carlos",
    edad: 22,
    pais: "Chile",
  },
  {
    nombre: "Cleto",
    edad: 50,
    pais: "Israel",
  },
  {
    nombre: "Chente",
    edad: 36,
    pais: "Mexico",
  },
];

let contenedor = document.querySelector("#contenedor");

function traerTodo() {
  contenedor.innerHTML = "";
  estudiantes.forEach((estudiante) => {
    contenedor.innerHTML += `
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${estudiante.nombre}</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">${estudiante.edad} - ${estudiante.pais}</p>
</a>
`;
  });
}

traerTodo();

let modal = document.querySelector("#modalsito");
let input1 = document.querySelector("#nombres");
let input2 = document.querySelector("#edades");
let superboton = document.querySelector("#btn");

superboton.addEventListener("click", function (e) {
  contenedor.innerHTML = "";
  if (input1.value != "" && input2.value != "") {
    console.log("ingresaron todo");
    /* aqui va toda la logica de filtrado pero con ambos inputs en este caso nombre y edad */
  } else {
    if (input1.value != "") {
      console.log("solo pusieron el nombre :D");
      /* aqui solo filtramos por el nombre */
    } else {
      if (input2.value != "") {
        console.log("solo ingresaron edad");
        /* aqui solo filtramos x edad */
      } else {
        traerTodo();
      }
    }
  }
  /* modal.classList.add("hidden");   para cerrar el modal cuando se aprete el boton de buscar o search*/
});
