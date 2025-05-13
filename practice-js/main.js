// 1- Edad para votar
// Escribe un programa que pida una edad y diga si la persona puede votar (mayor o igual a 18 años).
/* alert("Bienvenido");
let cont = true;
while (cont) {
  let edad = parseInt(prompt("Qué edad tienes?"));
  if (edad >= 18) {
    alert("Puedes votar");
    cont = false;
  } else if (edad < 18) {
    alert("No puedes votar");
    cont = false;
  } else {
    alert("información incorrecta");
  }
} */
// 2- Número positivo, negativo o cero
// Escribe un programa que determine si un número es positivo, negativo o cero.
/* let contador = 0;
while (true) {
  let numero = parseFloat(prompt("Ingrese su número:"));
  if (numero === 0) {
    alert("Tu número es 0");
    break;
  } else if (numero > 0) {
    alert("Tu número es positivo");
    break;
  } else if (numero < 0) {
    alert("Tu número es negativo");
    break;
  } else {
    alert("información incorrecta");
    contador++;
    if (contador >= 3) {
      alert("Intentos superados");
      alert("Pruebe más tarde");
      break;
    }
  }
} */

// 3- Día de la semana
// Usa switch o if para mostrar qué día es según un número del 1 al 7.
/* let day = prompt("Seleccione un número del 1 al 7:");

switch (day) {
  case "1":
    alert("Escogiste Lunes");
    break;
  case "2":
    alert("Escogiste Martes");
    break;
  case "3":
    alert("Escogiste Miercoles");
    break;
  case "4":
    alert("Escogiste Jueves");
    break;
  case "5":
    alert("Escogiste Viernes");
    break;
  case "6":
    alert("Escogiste Sabado");
    break;
  case "7":
    alert("Escogiste Domingo");
    break;

  default:
    alert("información incorrecta");
    break;
} */

// 4- Número par o impar
// Escribe un programa que determine si un número es par o impar.
/* let numero = parseFloat(prompt("Ingrese su número:"));
if (numero % 2 === 0) {
  alert("El número es par");
} else if (numero % 2 === 1 || numero % 2 === -1) {
  alert("El número es impar");
} else {
  alert("información incorrecta");
} */

// 5- Notas escolares
// Según una nota del 0 al 20, muestra:
// 0-10: "Desaprobado", 11-13: "Regular", 14-17: "Bueno", 18-20: "Excelente"
// En el caso de ingresar un dato no válido(menor a 0 o un string) mostrar el mensaje correspondiente.

/* while (true) {
  let nota = parseFloat(prompt("Ingrese su nota:"));
  if (nota >= 18 && nota <= 20) {
    alert("Excelente");
    break;
  } else if (nota >= 14 && nota < 18) {
    alert("Bueno");
    break;
  } else if (nota >= 11 && nota < 14) {
    alert("Regular");
    break;
  } else if (nota >= 0 && nota < 11) {
    alert("Desaprobado");
    break;
  } else if (nota > 20 || nota < 0) {
    alert("nota incorrecta, ingrese otro número");
  } else {
    alert("dato no válido, ingrese un número");
  }
} */

// 6- Tabla de multiplicar
// Muestra la tabla de multiplicar de un número usando un bucle for.
// En el caso de ingresar un dato no válido(un string) mostrar el mensaje correspondiente.

/* let num = parseInt(
  prompt("Ingrese su número para generar su tabla de multiplicar:")
);
let tabla = parseInt(prompt("hasta que número quiere saber la tabla:"));
console.log("La tabla del " + num + " es: ");
for (let index = 1; index < tabla + 1; index++) {
  console.log(num + "x" + index + "=" + num * index);
} */

// 7- Sumar los primeros 100 números
// Usa un bucle para sumar los números del 1 al 100.

/* let suma = 0;
let num = parseInt(prompt("Ingrese un número:"));
for (let index = 0; index <= num; index++) {
  suma = suma + index;
}
console.log(suma); */

function tablaDeMultiplicar(num1, num2) {
  for (let index = 1; index < num2 + 1; index++) {
    console.log(num1 + "x" + index + "=" + num1 * index);
  }
}
tablaDeMultiplicar(5, 8);
tablaDeMultiplicar(3, 8);
tablaDeMultiplicar(4, 8);
