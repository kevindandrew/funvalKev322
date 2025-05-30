let estudiantes = [
  {
    nombre: "Kevin",
    edad: 15,
    pais: "Bolivia",
  },
  {
    nombre: "Juan",
    edad: 33,
    pais: "Peru",
  },
  {
    nombre: "Pedro",
    edad: null,
    pais: "Argentina",
  },
  {
    nombre: "Carlos",
    edad: null,
    pais: "Chile",
  },
  {
    nombre: "Cleto",
    edad: 50,
    pais: "Argentina",
  },
  {
    nombre: "Chente",
    edad: 36,
    pais: "Mexico",
  },
];
let contenedor = document.querySelector("#container-cards");

function traerSpinner() {
  contenedor.innerHTML = "";
  for (let i = 0; i < estudiantes.length; i++) {
    contenedor.innerHTML += `
    <a href="#" class="flex justify-center min-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <div role="status">
    <svg aria-hidden="true" class="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>
</a>
    `;
  }
}
function traerDatos() {
  contenedor.innerHTML = "";
  estudiantes.forEach((estudiante) => {
    if (estudiante.edad != null) {
      contenedor.innerHTML += `
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${estudiante.nombre}</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">tiene la edad de: ${estudiante.edad} - del pais: ${estudiante.pais}</p>
</a>
`;
    } else {
      contenedor.innerHTML += `
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${estudiante.nombre}</h5>
<p class="font-normal text-gray-700 dark:text-gray-400"> del pais: ${estudiante.pais}</p>
</a>
`;
    }
  });
}
traerSpinner();

setTimeout(() => {
  traerDatos();
}, 3000);

let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let resultado = 0;

let in1 = 0;
let in2 = 0;
input1.addEventListener("input", function (e) {
  resultado = resultado - in1;

  if (e.target.value !== "") {
    resultado += parseInt(e.target.value);
    in1 = parseInt(e.target.value);
    console.log(resultado);
  } else {
    in1 = 0;
  }
});

input2.addEventListener("input", function (e) {
  resultado = resultado - in2;

  if (e.target.value !== "") {
    resultado += parseInt(e.target.value);
    in2 = parseInt(e.target.value);
    console.log(resultado);
  } else {
    in2 = 0;
  }
});

/* let boton322 = document.querySelector("#botonloco");

boton322.addEventListener("click", function (evento) {
  console.log(input1.value);
});
 */
/* 
let buscador = document.querySelector("#buscador");
let edades = document.querySelector("#numeritos");
let botoncito = document.querySelector("#botonloco");

botoncito.addEventListener("click", function (evento) {
  contenedor.innerHTML = "";
  if (buscador.value != "" && edades.value != "") {
    contenedor.innerHTML = "";
    console.log(buscador.value);
    console.log(edades.value);
    estudiantes.forEach((estudiante) => {
      if (
        estudiante.nombre
          .toLowerCase()
          .includes(buscador.value.toLowerCase()) &&
        estudiante.edad == edades.value
      ) {
        contenedor.innerHTML += `
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${estudiante.nombre}</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">tiene la edad de: ${estudiante.edad} - del pais: ${estudiante.pais}</p>
</a>
`;
      }
    });
  } else {
    if (buscador.value == "") {
      estudiantes.forEach((estudiante) => {
        if (estudiante.edad == edades.value) {
          contenedor.innerHTML += `
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${estudiante.nombre}</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">tiene la edad de: ${estudiante.edad} - del pais: ${estudiante.pais}</p>
</a>
`;
        }
      });
    } else {
      estudiantes.forEach((estudiante) => {
        if (
          estudiante.nombre.toLowerCase().includes(buscador.value.toLowerCase())
        ) {
          contenedor.innerHTML += `
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${estudiante.nombre}</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">tiene la edad de: ${estudiante.edad} - del pais: ${estudiante.pais}</p>
</a>
`;
        }
      });
    }
  }
}); */

/* buscador.addEventListener("input", function (e) {
  contenedor.innerHTML = "";
  console.log(buscador.value);
  let busqueda = buscador.value.toLowerCase();
  estudiantes.forEach((estudiante) => {
    if (estudiante.nombre.toLowerCase().includes(busqueda)) {
      contenedor.innerHTML += `
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${estudiante.nombre}</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">tiene la edad de: ${estudiante.edad} - del pais: ${estudiante.pais}</p>
</a>
`;
    }
  });
});
 */

let formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  contenedor.innerHTML = "";
  let formdata1 = new FormData(formulario);
  let nombres = formdata1.get("buscador");
  let age = formdata1.get("numeritos");
  if (nombres != "" && age != "") {
    estudiantes.forEach((estudiante) => {
      if (
        estudiante.nombre.toLowerCase().includes(nombres.toLowerCase()) &&
        estudiante.edad == age
      ) {
        contenedor.innerHTML += `
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${estudiante.nombre}</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">tiene la edad de: ${estudiante.edad} - del pais: ${estudiante.pais}</p>
</a>
`;
      }
    });
  } else {
    if (nombres != "") {
      estudiantes.forEach((estudiante) => {
        if (estudiante.nombre.toLowerCase().includes(nombres.toLowerCase())) {
          contenedor.innerHTML += `
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${estudiante.nombre}</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">tiene la edad de: ${estudiante.edad} - del pais: ${estudiante.pais}</p>
</a>
`;
        }
      });
    } else {
      estudiantes.forEach((estudiante) => {
        if (estudiante.edad == age) {
          contenedor.innerHTML += `
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${estudiante.nombre}</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">tiene la edad de: ${estudiante.edad} - del pais: ${estudiante.pais}</p>
</a>
`;
        }
      });
    }
  }
});
