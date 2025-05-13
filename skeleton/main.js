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

let contenedor = document.querySelector("#contenedor-card");

function traerSkeleton() {
  contenedor.innerHTML = "";
  for (let i = 0; i < estudiantes.length; i++) {
    contenedor.innerHTML += `
    <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
<div role="status" class="max-w-sm animate-pulse">
    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
    <span class="sr-only">Loading...</span>
</div>
</a>
    `;
  }
}
function traerDatos() {
  contenedor.innerHTML = "";
  estudiantes.forEach((estudiante) => {
    contenedor.innerHTML += `
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${estudiante.nombre}</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">tiene la edad de: ${estudiante.edad} - del pais: ${estudiante.pais}</p>
</a>
`;
  });
}

traerSkeleton();

setTimeout(() => {
  traerDatos();
}, 2000);
