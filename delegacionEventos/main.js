/* let nombres = ["Kevin", "Pedro", "Juan", "Cristian"];

let listado = document.querySelector("#lista");

listado.innerHTML = "";

nombres.forEach((item) => {
  listado.innerHTML += `<li>
        ${item}
        <button class="aprobado">X</button>
      </li>`;
});

listado.addEventListener("click", function (evento) {
  console.log(evento.target);
  if (evento.target.classList.contains("aprobado")) {
    let itemListado = evento.target.closest("li");
    itemListado.innerHTML = "ESTUDIANTE APROBADO";
  }
});
 */

/* let estudiantes = [
  {
    name: "Cristian",
    cel: 77207634,
    pais: "Bolivia",
  },
  {
    name: "Tomas",
    cel: 271236323,
    pais: "Argentina",
  },
  {
    name: "Gino",
    cel: 3220762,
    pais: "Chile",
  },
  {
    name: "Ana",
    cel: 98762235,
    pais: "Argentina",
  },
  {
    name: "Kevin",
    cel: 86243207634,
    pais: "Mexico",
  },
  {
    name: "Milton",
    cel: 89712350,
    pais: "Uruguay",
  },
  {
    name: "Ricardo",
    cel: 123987523,
    pais: "Mexico",
  },
  {
    name: "Rodrigo",
    cel: 77207634,
    pais: "Narnia",
  },
];

let tabla = document.querySelector("#tabla");
tabla.innerHTML = "";

estudiantes.forEach((item) => {
  tabla.innerHTML += ` <tr>
          <td>${item.name}</td>
          <td>${item.cel}</td>
          <td>${item.pais}</td>
          <td><button class="eliminacion">eliminar</button></td>
        </tr>`;
});

tabla.addEventListener("click", function (evento) {
  if (evento.target.classList.contains("eliminacion")) {
    let caja = evento.target.closest("tr");
    caja.innerHTML = "";
  }
});
 */

/* var nombre = "Kevin";

let apellido = "Rodriguez";

const añoNacimiento = 1996;

apellido = "Perez";

function hola() {
  const añoNacimiento = 2000;
  console.log(añoNacimiento);
}

console.log(añoNacimiento); //1996
hola(); //2000 */

/* let nombres = "Elias";

if (2 > 1) {
  var prueba = 1;
}

console.log(prueba); */

/* const edades = [1, 2, 3, 4, 5, 6];

edades.push(322);
console.log(edades);
edades = [1, 2, 3, 4, 5, 6, 322];
console.log(edades);
 */

/* let nombre = "Kevin";
let edad = 28;
let pais = "Bolivia";

console.log(
  `hola mi nombre es : ${nombre} mi edad es: ${edad - 10} soy de ${pais}
  multiple linea 1
  multiple linea 2
  `
);
console.log(
  "hola mi nombre es " + nombre + "mi edad es :" + edad - 10 + "soy de: " + pais
); */

/* let edades = [18, 22, 34, 51, 12, 37, 88];

///foreach

edades.forEach((item) => {
  console.log(item * 2);
});

//map
let nuevoArray = edades.map((e) => {
  return e * 2;
});
console.log(edades);
console.log(nuevoArray);

for (let index = 0; index < array.length; index++) {
  const element = array[index];
}
 */
/* let numero = [
  [1, 2],
  [3, 4],
];

numero.forEach((e) => {
  e.forEach((i) => {
    console.log(i);
  });
});
 */
///desestructuracion de array
/* const edades = [18, 22, 34, 51, 12, 37, 88, 322];
let [primero, , , , , , septimo, octavo = 0, noveno = 0, decimo = 0] = edades;
console.log(primero); */
/* console.log(segundo); */
/* console.log(tercero); */
/* console.log(cuarto); */
/* console.log(quinto); */
/* console.log(sexto); */
/* console.log(septimo);
console.log(octavo);
console.log(noveno);
console.log(decimo); */
///desestructuracion de objetos
/* let persona = {
  nombre: "Tomas",
  edad: 20,
  pais: "Argentina",
  correo: "tomas123@gmail.com",
};

let { edad, pais, correo = "tomas@gmail.com", nombre: name } = persona;

console.log(edad);
console.log(pais);
console.log(correo);
console.log(name);

///propagacion de arrays
let numeros = [1, 2, 3, 4, 5, 6, 7];
let numeritos = [11, 22, 33, 44, 55, 66, 77];
let resultado = [...numeros, 322, 777, ...numeritos];
console.log(resultado); */
///PROPAGACION DE OBJETOS
/* let estudiante = {
  nombre: "kevin",
  edad: 22,
};
let superestudiante = {
  nombre: "Ricardo",
  pais: "Mexico",
};

let fusion = {
  ...estudiante,
  ...superestudiante,
  correo: "ricardo322@gmail.com",
};

console.log(fusion); */

const usuarios = [
  { id: 1, nombre: "Ana", roles: ["admin"] },
  { id: 2, nombre: "Gino", roles: ["user"] },
  { id: 3, nombre: "Cristian", roles: ["admin", "user"] },
];

function procesarUsuarios(usuarios) {
  const admins = usuarios
    .filter((u) => u.roles.includes("admin"))
    .map((u) => ({
      ...u,
      email: `${u.nombre}@example.com`,
    }));

  const [primero] = admins;
  const { nombre, email } = primero;
  console.log(nombre, email);
  return admins;
}
console.log(procesarUsuarios(usuarios));

/// NO PUEDEN MODIFICAR EL ARRAY USUARIOS
///NO PUEDEN USAR CICLO FOR XXXX FOREACH MAP FILTER
///NO PUEDEN MODIFICAR LOS OBJETOS DENTRO DEL ARRAY USUARIOS
///todo debe estar dentro de una funcion q reciba el array usuarios
/* 
    FILTRAR A TODOS LOS USUARIOS DE TIPO ADMIN
    A CADA OBJETO LE AGREGEN UNA LLAVE Q SE LLAMA CORREO NOMBRE*@GMAIL.COM   ANA@GMAIL.COM
    MOSTRAR DEL PRIMER ELEMENTO LAAS LLAVES CORREO Y NOMBRE USANDO DESESTRUCTURACION DE ARRAYS Y OBJETOS 
*/
