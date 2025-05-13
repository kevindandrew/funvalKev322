let buttonDark = document.querySelector("#dark");

buttonDark.addEventListener("mouseup", patito);

/* la función "patito" tiene la instrucción de cambiar la clase de mi etiqueta html y tambien hacer un "cuac" al hacerlo */

function patito() {
  document.documentElement.classList.toggle("dark");
  console.log("cuac");
  console.log("");
}
