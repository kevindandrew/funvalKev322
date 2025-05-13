let robot1 = {
  nombre: "Robot1",
  vida: 100,
  ataque: 20,
  defensa: 20,
  atacar: function (objetivo) {
    alert(this.nombre + " atacó a " + objetivo.nombre);
    objetivo.vida =
      objetivo.vida - (this.ataque * (100 - objetivo.defensa)) / 100;
    alert("vida actual de " + objetivo.nombre + " es " + objetivo.vida);
  },
  movimiento_especial: function (objetivo) {
    alert(this.nombre + " usó un movimiento especial");
    objetivo.vida = objetivo.vida - 10;
    alert("vida actual de " + objetivo.nombre + " es " + objetivo.vida);
  },
};
let robot2 = {
  nombre: "Robot2",
  vida: 100,
  ataque: 15,
  defensa: 25,
  atacar: function (objetivo) {
    alert(this.nombre + " atacó a " + objetivo.nombre);
    objetivo.vida =
      objetivo.vida - (this.ataque * (100 - objetivo.defensa)) / 100;
    alert("vida actual de " + objetivo.nombre + " es " + objetivo.vida);
  },
  movimiento_especial: function () {
    alert(this.nombre + " usó un movimiento especial");
    this.vida = this.vida + 10;
    alert("vida actual de " + this.nombre + " es " + this.vida);
  },
};

function pelea(robot1, robot2) {
  let seguir = true;
  while (seguir) {
    let turno = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
    let movEsp = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if (turno === 1) {
      robot1.atacar(robot2);
      if (movEsp === 1) {
        robot1.movimiento_especial(robot2);
      }
    } else {
      robot2.atacar(robot1);
      if (movEsp === 1) {
        robot2.movimiento_especial();
      }
    }
    if (robot1.vida <= 0 || robot2.vida <= 0) {
      alert("Fin de la pelea");
      if (robot1.vida <= 0) {
        alert("Ganador: " + robot2.nombre);
      } else {
        alert("Ganador: " + robot1.nombre);
      }
      seguir = false;
    }
  }
}
