import {resolverTorneo, limpiarCampo} from './utils.js'

let botonLimpiar = document.getElementById("botonLimpiar");
let botonCalcular = document.getElementById("botonCalcular");
let campoEntrada = document.getElementById("campoEntrada");
let campoSalida = document.getElementById("campoSalida");

botonLimpiar.addEventListener("click", limpiarCampo);
botonCalcular.addEventListener("click", function () {
    resolverTorneo(campoEntrada.value)
});