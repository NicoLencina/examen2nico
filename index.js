let caja = document.querySelector(".nuevosDivs");
let cantidadDivs = document.querySelector(".numeroIngresado");

let Crear = document.querySelector(".Crear");
Crear.addEventListener("click", () => {
  let divCreado = cantidadDivs.value;
  crearDivs(divCreado);
});

function crearDivs(divCreado) {
  for (let i = 0; i < divCreado; i++) {
    let divCreado = document.createElement("div");
    caja.appendChild(divCreado).classList.add("divCreado");
  }
}
