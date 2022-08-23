let caja = document.querySelector(".nuevosDivs");
let numeroDivs = document.querySelector(".numeroIngresado");

let btnCrear = document.querySelector(".Crear");
btnCrear.addEventListener("click", () => {
  let divCreado = numeroDivs.value;
  crearDivs(divCreado);
});

function crearDivs(divCreado) {
  for (let i = 0; i < divCreado; i++) {
    let divCreado = document.createElement("div");
    caja.appendChild(divCreado).classList.add("divCreado");
  }
}
