// // Escribe una función que sume todos los elementos de un array numérico
// function sumarArray(arr) {
//   // Tu código aquí
//   let suma = 0;
//   for (let index = 0; index < arr.length; index++) {
//     suma = suma + arr[index];
//   }
//   return suma;
// }
// console.log(sumarArray([1, 2, 3, 4])); // Debería devolver 10

// Escribe una función que encuentre el número más grande en un array
// function encontrarMaximo(arr) {
//   // Tu código aquí
//   let max = 0;
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] > max) {
//       max = arr[index];
//     }
//   }
//   return max;
// }

// console.log(encontrarMaximo([3, 1, 17, 5, 9])); // Debería devolver 17
// Escribe una función que devuelva un nuevo array solo con los números pares
/* function filtrarPares(arr) {
  let pares = [];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] % 2 === 0) {
      pares.push(arr[index]);
    }
  }
  return pares;
  // Tu código aquí
}

console.log(filtrarPares([1, 2, 3, 4, 5, 6])); // Debería devolver [2, 4, 6] */
// Escribe una función que invierta el orden de los elementos en un array
// function invertirArray(arr) {
//   // Tu código aquí
//   let newArr = [];
//   for (let index = 0; index < arr.length; index++) {
//     newArr.unshift(arr[index]);
//   }
//   return newArr;
// }

// console.log(invertirArray(["a", "b", "c", "d"])); // Debería devolver ['d', 'c', 'b', 'a']
/* let pikachu = {
  nombre: "Pikachu",
  peso: {
    unidad: "kg",
    cantidad: 6,
  },
  ataques: [
    "impactrueno",
    "Cola de acero",
    "electro bola",
    "tacleada de voltios",
  ],
  tipo: ["electrico"],
  genero: "Masculino",
  nacionalidad: "Ioto",
}; */
// let num = [1, 3, 5, 7];
// console.log(num);
// let arr3 = [];
// function asd(num) {
//   arr3.push(num * 2);
// }
// /* num.forEach((num) => arr3.push(num * 2)); */
// num.forEach(asd);
// console.log(arr3);

let uno = 1;
let dos = 2;
let tres = 2;
let arr = [uno, dos, tres];

console.log(arr);
arr[0] = 0;
console.log(arr);
console.log(uno);

console.log(arr);
