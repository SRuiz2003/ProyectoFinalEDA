function resolverTorneo(torneo){

    let info = [];

    info.split("--");
    
    let equipos = info[2].split(",");
    let partidos = info[3].split(",");
    
}

function limpiarCampo(){
    campoEntrada.value = "";
    campoSalida.value = "";
}

let botonLimpiar = document.getElementById("botonLimpiar");
let botonCalcular = document.getElementById("botonCalcular");
let torneo = document.getElementById("campoEntrada");
let campoSalida = document.getElementById("campoSalida");

botonLimpiar.addEventListener("click", limpiarCampo);
botonCalcular.addEventListener("click", resolverTorneo(torneo));