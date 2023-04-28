<<<<<<< Updated upstream
function resolverTorneo(torneo){

    let info = [];

    info.split("--");
    
    let equipos = info[2].split(",");
    let partidos = info[3].split(",");
    
}

function limpiarCampo(){
=======
function resolverTorneo(torneo) {

    try {

        //Word Cup 1998 – Group A--Brazil,Norway,Morocco,Scotland-- Brazil#2#1#Scotland,Norway#2#2#Morocco,Scotland#1#1#Norway,/////Brazil#3#0#Morocco, Morocco#3#0#Scotland,Brazil#1#2#Norway
        
        const info = torneo.split('--');
        // [Word Cup 1998 – Group A, Brazil,Norway,Morocco,Scotland, Brazil#2#1#Scotland,Norway#2#2#Morocco,Scotland#1#1#Norway,Brazil#3#0#Morocco, Morocco#3#0#Scotland,Brazil#1#2#Norway]
        
        const equipos = info[1].split(','); 
        //[Brazil,Norway,Morocco,Scotland]

        const encuentros = info[2].split(',').map(partido => partido.split('#').reverse());

        // Encuentros es una matriz de 4 columnas donde la primera y la ultima son los equipos y la segunda y tercera los goles respectivamente
        //      0      1    2       3
        // ['Brazil', '1', '2', 'Norway']
        // ['Morocco', '3', '0', 'Scotland']
        // ['Brazil', '3', '0', 'Morocco']
        // ['Scotland', '1', '1', 'Norway']
        // ['Norway', '2', '2', 'Morocco']
        // ['Brazil', '2', '1', 'Scotland']

        // Para calcular la complejidad habrá que usar un for convencional el entries y el arreglo [indice, equipo] es para poner el indice en la respuesta el final.

        for(const [indice, equipo] of equipos.entries()){

            // Se descartan las variables calculables
            let cantidadJuegos = 0;
            let victorias = 0;
            let empates = 0;
            let derrotas = 0;
            let golesMarcados = 0;
            let golesEnContra = 0;

            let linea = '';

            for (let i = 0; i < encuentros.length; i++) {
                // Caso 1 ['Scotland', '1', '1', 'Norway']
                if (encuentros[i][0] == equipo) {
                    cantidadJuegos++;
                    golesMarcados += parseInt(encuentros[i][1]);
                    golesEnContra += parseInt(encuentros[i][2]);
                    if(encuentros[i][1] > encuentros[i][2]){
                        victorias++;
                    }else if(encuentros[i][1] < encuentros[i][2]){
                        derrotas++;
                    }else{
                        empates++;
                    }
                // Caso 2 ['Morocco', '3', '0', 'Scotland']
                }else if(encuentros[i][3] == equipo){
                    cantidadJuegos++;
                    golesMarcados += parseInt(encuentros[i][2]);
                    golesEnContra += parseInt(encuentros[i][1]);
                    if(encuentros[i][2] > encuentros[i][1]){
                        victorias++;
                    }else if(encuentros[i][2] < encuentros[i][1]){
                        derrotas++;
                    }else{
                        empates++;
                    }
                }
            }

            // Formato de salida: Nombre del equipo, Puntos del equipo[p], Cantidad de juegos[g], (victorias-empates-derrotas), diferencia de goles[gd] (Goles marcados - Goles en contra)

            linea = `${indice+1}) ${equipo} ${(victorias*3)+empates}p, ${cantidadJuegos}g (${victorias}-${empates}-${derrotas}), ${golesMarcados - golesEnContra}gd (${golesMarcados}-${golesEnContra})\n`;

            campoSalida.value += linea;

        }

    } catch (TypeError) {
        alert('El campo de entrada está vacio');
    }
        
}

function limpiarCampo() {
>>>>>>> Stashed changes
    campoEntrada.value = "";
    campoSalida.value = "";
}

<<<<<<< Updated upstream
let botonLimpiar = document.getElementById("botonLimpiar");
let botonCalcular = document.getElementById("botonCalcular");
let torneo = document.getElementById("campoEntrada");
let campoSalida = document.getElementById("campoSalida");

botonLimpiar.addEventListener("click", limpiarCampo);
botonCalcular.addEventListener("click", resolverTorneo(torneo));
=======
export {resolverTorneo, limpiarCampo}
>>>>>>> Stashed changes
