console.log("Hola a todos!");
console.log(2 + 2);
console.log(2 - 2);
console.log(2 / 2);
console.log(24 % 2);
console.log(25 % 2);
console.log(2 * 2);
console.log(2 ** 4);
console.log(true);
console.log(false);
console.log(5 >= 1);
console.log(5 <= 1);
console.log(2 == "2");
console.log(2 === "2");
/* alert("Esta es una alerta"); */
/* prompt("Este es un prompt"); */
/* let var const */
var nombre = "Diego";
let edad = 6;
const pi = 3.1415;
/* 
"hola",-23.3,true,false,
[123,"def",true],
{
    nombre:"Diego",
    edad:26,
    peliculas_favoritas:["avengers:endgame","el caballero de la noche"]
}
NaN, undefined, null
*/
let edadEnCincoAños = edad + 5;
console.log(edadEnCincoAños - nombre);
let ciudad;
console.log(ciudad);

ciudad = "Arequipa";
console.log(ciudad);

/* &&(y) - ||(o) */
console.log(5 < 10 && 5 < 4);
console.log(5 < 10 || 5 < 4);

if (edad > 20 || ciudad === "Arequipa") {
  console.log("hola");
}
