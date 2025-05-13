/* for (let i = 1; i <= 10; i++) {
  console.log(i);
}
 */
/// 2,4,6,8,10,12,14

/* 
crear una aplicacion q muestre los n terminos de la serie de los numero pares
n=5
2,4,6,8,10
n=3
2,4,6
*/

/* let n = 5;
let par = 2;

for (let i = 1; i <= n; i++) {
  console.log(par);
  par = par + 2;
} */
/* 
crear una aplicacion q muestre los n terminos de la serie de los numeros primos
nota: un numero es primo si solo es divisible entre 1 y si mismo

n=4
2,3,5,7
*/
/* let n = 4;

let numero = 2;

for (let contador = 0; contador < n; numero++) {
  let esPrimo = true;

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      esPrimo = false;
      break;
    }
  }

  if (esPrimo) {
    console.log(numero);
    contador++;
  }
}
 */

/// generar los n terminos de la serie fibonacci
///  0,1,1,2,3,5,8
//los n terminos de la serie fibonacci

/* let n = 7;

let a = 0;
let b = 1;
let c = 0;

for (let i = 1; i <= n; i++) {
  if (i === 1) {
    console.log(a);
  } else {
    if (i === 2) {
      console.log(b);
    } else {
      c = a + b;
      a = b;
      b = c;
      console.log(c);
    }
  }
} */

/* let nombres = ["juan", "pedro", "elias", "carlos", "luis"];

console.log(nombres[2]);

let persona = {
  nombres: "pedro",
  edad: 32,
  pais: "narnia",
};

console.log(persona.pais);

let estudiante = {
  nombre: "kevin",
  edad: 32,
  notas: [32, 55, 100, 0],
};
console.log(estudiante.notas[1]);

let participantes = [
  {
    nombre: "pedro",
    edad: 30,
    respuestas: [1, 5, 7, 8, 2],
  },
  {
    nombre: "juan",
    edad: 18,
    respuestas: [1, 3, 7, 8, 1],
  },
  {
    nombre: "carlos",
    edad: 45,
    respuestas: [2, 5, 7, 8, 2],
  },
  {
    nombre: "luis",
    edad: 22,
    respuestas: [1, 8, 7, 8, 3],
  },
];

console.log(participantes[2].edad); */

///QUIERO IMPRIMAN EN CONSOLA

/* NOMBRE + LOS LENGUAJES Q CONOCE CADA ESTUDIANTE

    CRISTIAN CONOCE LOS LENGUAJES DE: HTML , CSS, JS
    MILTON CONOCE LOS LENGUAJES DE :
*/

/* for (let i = 0; i < estudiantes.length; i++) {
  console.log(
    `èl estudiante ${estudiantes[i].nombre} sabe los lenguajes de programacion ${estudiantes[i].lenguajes}`
  );
}
 */

/* let estudiantes = [
  {
    nombre: "Cristian",
    lenguajes: ["HTML", "CSS", "JS"],
  },
  {
    nombre: "Milton",
    lenguajes: ["HTML", "CSS", "JS", "python", "JAVA", "C++"],
  },
  {
    nombre: "Ana",
    lenguajes: ["C#", "JAVA", "PYTHON"],
  },
];

estudiantes.forEach((estudiante) => {
  console.log(estudiante.nombre);
  estudiante.lenguajes.forEach((lenguaje) => {
    console.log(lenguaje);
  });
}); */

let profesores = [
  {
    nombre: "kevin",
    estudiantes: ["Gino", "ana", "cristian", "ricardo"],
  },
  {
    nombre: "Diego",
    estudiantes: ["milton", "kevin", "elias", "Luis"],
  },
  {
    nombre: "Jorge",
    estudiantes: ["tomas", "pedro"],
  },
];

///programa q pueda saber q profesor es el asignado de estudiante x
/* 
ejemplo si x= tomas
el profesor es jorge

si x=milton
el profesor DIEGO
*/

/* function prosor(est) {
  for (let profesor of profesores) {
    if (profesor.estudiantes.includes(est)) {
      return profesor.nombre;
    }
  }
}

console.log(prosor("milton")); */
/* 
MAP         TRANSFORMA CADA VALOR Y CREA UN ARRAY NUEVO
FILTER      FILTRA LOS Q CUMPLEN UNA CONDICION y agregarlos  A UN NUEVO ARRAY
REDUCE      REDUCE TODO A UN SOLO VALOR
FIND        BUSCA AL PRIMERO Q CUMPLA

*/

/* let numeros = [1, 2, 3, 4, 5, 6, 7];

let pares = numeros.map((numero) => {
  return numero * 2;
});
console.log(pares);

let superpares = numeros.filter((numero) => {
  return numero % 2 === 0;
});

console.log(superpares);

let total = numeros.reduce((contador, numero) => contador + numero, 0);
console.log(total);

let resultado = numeros.find((numero) => numero > 5);
console.log(resultado);

const personas = [
  { nombre: "Ana", edad: 20 },
  { nombre: "Luis", edad: 25 },
  { nombre: "Carlos", edad: 17 },
  { nombre: "Marta", edad: 30 },
]; */
/* Obtener un array con solo los nombres?

Filtrar a los mayores de edad (edad >= 18)?

Encontrar a la primera persona mayor de 25 años?

Calcular la edad total de todos?

 */
import { hola, chau } from "./funciones.js";
import Kevin from "./funciones.js";
console.log(hola("Milton"));
console.log(chau("Tomas"));
console.log(Kevin("kevin"));
