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

let lista = document.querySelector("#listaID");

// lista.innerHTML = `
//     <li class="bg-red-500 font-bold text-3xl">${persona.nombre}</li>
//     <li>${persona.edad}</li>
//     <li>${persona.estudiante ? "Es estudiante" : ""}</li>
//     <li>${persona.cursos[0].nCurso}</li>
//     <li>${persona.cursos[0].notas[0].eParcial1}</li>
// `;

// let parrafos = document.querySelectorAll(".parrafo");
// //[p,p,p]

// let btnAlert = document.querySelector("#alert");

// btnAlert.addEventListener("click", alerta);

// function alerta() {
//   alert("hola");
// }

const auto = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2022,
  color: "Rojo",
  kilometraje: 15000,
  combustible: "Híbrido",
  transmisión: "Automática",
  precio: 25000,
  dueñosAnteriores: ["Juan Pérez", "Ana Gómez"],
  especificaciones: {
    motor: {
      tipo: "4 cilindros",
      potencia: "140 HP",
      torque: "190 Nm",
    },
    seguridad: {
      airbags: 8,
      frenosABS: true,
      controlEstabilidad: true,
    },
    dimensiones: {
      largo: "4.63 m",
      ancho: "1.78 m",
      altura: "1.45 m",
    },
  },
  opciones: ["Asientos de cuero", "Pantalla táctil", "Cámara de reversa"],
  historialMantenimiento: [
    {
      fecha: "10/03/2023",
      servicio: "Cambio de aceite",
      costo: 120,
    },
    {
      fecha: "15/07/2023",
      servicio: "Rotación de llantas",
      costo: 50,
    },
  ],
  // Método para calcular depreciación
  calcularDepreciacion: function (añoActual) {
    return this.precio * 0.9 ** (añoActual - this.año);
  },
};

// let dAnteriores = document.querySelector("#dueñosAnteriores");

// dAnteriores.innerHTML = "";

// for (let i = 0; i < auto.dueñosAnteriores.length; i++) {
//   dAnteriores.innerHTML =
//     dAnteriores.innerHTML + `<li>${auto.dueñosAnteriores[i]}</li>`;
// }

// const parrafo2 = document.createElement("p");
// parrafo2.textContent = "Hola soy un parrafo";
// document.body.appendChild(parrafo2);

// const lista3 = document.createElement("ul");
// document.body.appendChild(lista3);
// const listElement = document.createElement("li");
// listElement.textContent = auto.marca;
// lista3.appendChild(listElement);

//Crear elementos
//Poder Iterar esos elementos
//addEventListener

console.log(auto.opciones.length);
console.log(auto.opciones[0]);

/* document.body.innerHTML = `
  <p>${auto.opciones[0]}</p>
  <p>${auto.opciones[1]}</p>
  <p>${auto.opciones[2]}</p>
  `; */

for (let i = 0; i < auto.opciones.length; i++) {
  document.body.innerHTML += `
  <p>${auto.opciones[i]}</p>
  `;
}
