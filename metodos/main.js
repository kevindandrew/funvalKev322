let persona = {
  nombre: "Diego",
  edad: 27,
  estudiante: true,
  cursos: [
    {
      nCurso: "Math",
      notas: [
        { eParcial1: 7 },
        { eParcial2: 6 },
        { mProyecto1: 7 },
        { mProyecto2: 10 },
      ],
    },
    {
      nCurso: "English",
      notas: [
        { eParcial1: 7 },
        { eParcial2: 5 },
        { mProyecto1: 14 },
        { mProyecto2: 25 },
      ],
    },
    {
      nCurso: "Office",
      notas: [
        { eParcial1: 10 },
        { eParcial2: 8 },
        { mProyecto1: 12 },
        { mProyecto2: 20 },
      ],
    },
  ],
};
/* console.log(persona.cursos[0].notas[0].eParcial1); */
/* console.log(persona.cursos[0].notas[1]);
console.log(persona.cursos[0].notas.length); */
/* console.log(persona.cursos.length) */

/* for (let j = 0; j < persona.cursos.length; j++) {
  console.log("-------");
  console.log(persona.cursos[j].nCurso);
  let suma = 0;
  for (let i = 0; i < persona.cursos[j].notas.length; i++) {
    console.log(persona.cursos[0].notas[i]);
    suma = suma + persona.cursos[0].notas[i];
  }
  console.log("El promedio es " + suma / persona.cursos[0].notas.length);
} */

/* let info = Object.entries(persona.cursos[0].notas[0]); */
/* console.log(info[0][1]); */
/* 
for (let j = 0; j < persona.cursos.length; j++) {
  console.log("-------");
  console.log(persona.cursos[j].nCurso);
  let suma = 0;
  for (let index = 0; index < persona.cursos[j].notas.length; index++) {
    let info = Object.entries(persona.cursos[j].notas[index]);
    console.log(info[0][1]);
    suma = suma + info[0][1];
  }
  console.log("El promedio es " + suma / persona.cursos[0].notas.length);
} */

/* let manzana = {
  peso: 10,
  precio: 20,
};

for (let key in manzana) {
  console.log(manzana[key]);
}

for (let j = 0; j < persona.cursos.length; j++) {
  console.log("-------");
  console.log(persona.cursos[j].nCurso);
  let suma = 0;
  for (let index = 0; index < persona.cursos[j].notas.length; index++) {
    for (const key in persona.cursos[j].notas[index]) {
      console.log(persona.cursos[j].notas[index][key]);
      suma = suma + persona.cursos[j].notas[index][key];
    }
  }
  console.log("El promedio es " + suma / persona.cursos[0].notas.length);
}

let array = [12, 123, 5, 34, 6, 7, 56, 8, 4, 5, 34];

let suma2 = 0;

for (let i = 0; i < array.length; i++) {
  suma2 = suma2 + array[i];
}

console.log(suma2 / array.length);
 */

// push  -  pop
let mediosDeTransporte = ["carro", "moto", "tren"];
mediosDeTransporte.push("avion");
mediosDeTransporte.pop();
console.log(mediosDeTransporte);

// shift - unshift

mediosDeTransporte.unshift("lancha", "bicicleta");
let lancha = mediosDeTransporte.shift();
console.log(mediosDeTransporte);
console.log(lancha);

// length

console.log(mediosDeTransporte.length);

// forEach
let lista = "";
mediosDeTransporte.forEach((medio) => (lista += medio + " "));
console.log(lista);

// map
let arrNum = [12, 32, 33, 9, 0, 34, 5];

let dobles = arrNum.map((numero) => numero * 2);

console.log(arrNum);
console.log(dobles);

let palabras = ["hola", "bye", "marco", "polo", "escuela"];

let mayusculas = palabras.map((palabra) => palabra.toUpperCase());
console.log(palabras);
console.log(mayusculas);

let objs = [
  { nombre: "Daniel", edad: 24 },
  { nombre: "Miguel", edad: 22 },
  { nombre: "Gustavo", edad: 23 },
  { nombre: "Domingo", edad: 20 },
];

let edades = objs.map((elemento) => {
  let miniObj = {
    edad: elemento.edad,
  };
  return miniObj;
});
console.log(edades);

//[24,22,24,20]
let objs2 = [
  { nombre: "Daniel", puntos: 74 },
  { nombre: "Miguel", puntos: 22 },
  { nombre: "Gustavo", puntos: 23 },
  { nombre: "Domingo", puntos: 80 },
];

let objsModificados = objs2.map((obj) => {
  return {
    nombre: obj.nombre,
    puntos: obj.puntos > 50 ? obj.puntos + 10 : obj.puntos,
  };
});

console.log(objsModificados);
