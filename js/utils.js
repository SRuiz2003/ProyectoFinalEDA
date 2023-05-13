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

        // Sea k la longitud de la cadena a separar en el metodo split

        //Word Cup 1998 – Group A--Brazil,Norway,Morocco,Scotland-- Brazil#2#1#Scotland,Norway#2#2#Morocco,Scotland#1#1#Norway,/////Brazil#3#0#Morocco, Morocco#3#0#Scotland,Brazil#1#2#Norway
        
        const info = torneo.split('--'); // Complejidad: O(k) 
        // [Word Cup 1998 – Group A, Brazil,Norway,Morocco,Scotland, Brazil#2#1#Scotland,Norway#2#2#Morocco,Scotland#1#1#Norway,Brazil#3#0#Morocco, Morocco#3#0#Scotland,Brazil#1#2#Norway]
        
        const equipos = info[1].split(','); // Complejidad: O(k)
        //[Brazil,Norway,Morocco,Scotland]

        const encuentros = info[2].split(',').map(partido => partido.split('#').reverse()); // Complejidad: O(k)

        // Encuentros es una matriz de 4 columnas donde la primera y la ultima son los equipos y la segunda y tercera los goles respectivamente
        //      0      1    2       3
        // ['Brazil', '1', '2', 'Norway']
        // ['Morocco', '3', '0', 'Scotland']
        // ['Brazil', '3', '0', 'Morocco']
        // ['Scotland', '1', '1', 'Norway']
        // ['Norway', '2', '2', 'Morocco']
        // ['Brazil', '2', '1', 'Scotland']

        // El entries y el arreglo [indice, equipo] es para poner el indice en la respuesta al final.

<<<<<<< Updated upstream
        for(const [indice, equipo] of equipos.entries()){

            // Se descartan las variables calculables
            let cantidadJuegos = 0;
            let victorias = 0;
            let empates = 0;
            let derrotas = 0;
            let golesMarcados = 0;
            let golesEnContra = 0;

            let linea = '';
=======
        // Agregar titulo del torneo a la salida
        campoSalida.value+= `${info[0]}\n` // Complejidad: O(1)

        const final  = [] // Complejidad: O(1)

        // Arreglo para contener los equipos finales con toda su informacion y ordenarlos
        for(let equipo of equipos){ // Complejidad: O(n)

            // Se descartan las variables calculables
            let cantidadJuegos = 0; // Complejidad: O(1)
            let victorias = 0; // Complejidad: O(1)
            let empates = 0; // Complejidad: O(1)
            let derrotas = 0; // Complejidad: O(1)
            let golesMarcados = 0; // Complejidad: O(1)
            let golesEnContra = 0; // Complejidad: O(1)
>>>>>>> Stashed changes

            for (let i = 0; i < encuentros.length; i++) { // Complejidad: O(m)
                // Caso 1 ['Scotland', '1', '1', 'Norway']
                if (encuentros[i][0] == equipo) { // Complejidad: O(1)
                    cantidadJuegos++; // Complejidad: O(1)
                    golesMarcados += parseInt(encuentros[i][1]); // Complejidad: O(1)
                    golesEnContra += parseInt(encuentros[i][2]); // Complejidad: O(1)
                    if(encuentros[i][1] > encuentros[i][2]){ // Complejidad: O(1)
                        victorias++;
                    }else if(encuentros[i][1] < encuentros[i][2]){ // Complejidad: O(1)
                        derrotas++; // Complejidad: O(1)
                    }else{
                        empates++; // Complejidad: O(1)
                    }
                // Caso 2 ['Morocco', '3', '0', 'Scotland']
                }else if(encuentros[i][3] == equipo){ // Complejidad: O(1)
                    cantidadJuegos++; // Complejidad: O(1)
                    golesMarcados += parseInt(encuentros[i][2]); // Complejidad: O(1)
                    golesEnContra += parseInt(encuentros[i][1]); // Complejidad: O(1)
                    if(encuentros[i][2] > encuentros[i][1]){ // Complejidad: O(1)
                        victorias++; // Complejidad: O(1)
                    }else if(encuentros[i][2] < encuentros[i][1]){ // Complejidad: O(1)
                        derrotas++; // Complejidad: O(1)
                    }else{
                        empates++; // Complejidad: O(1)
                    }
                }
            }
<<<<<<< Updated upstream

            // Formato de salida: Nombre del equipo, Puntos del equipo[p], Cantidad de juegos[g], (victorias-empates-derrotas), diferencia de goles[gd] (Goles marcados - Goles en contra)

            linea = `${indice+1}) ${equipo} ${(victorias*3)+empates}p, ${cantidadJuegos}g (${victorias}-${empates}-${derrotas}), ${golesMarcados - golesEnContra}gd (${golesMarcados}-${golesEnContra})\n`;

            campoSalida.value += linea;

        }

=======
            let difGoles = golesMarcados - golesEnContra;// Complejidad: O(1)
            let EqObj = { // Complejidad: O(1)
                equipo:equipo,
                puntos:(victorias*3)+empates,
                cantidadJuegos:cantidadJuegos,
                victorias:victorias,
                empates:empates,
                derrotas:derrotas,
                golesMarcados:golesMarcados,
                golesEnContra:golesEnContra,
                difGoles: difGoles
            }
            final.push(EqObj);// Complejidad: O(1)

        }
        let linea = ''; // Complejidad: O(1)

        sortEquipos(final); // Complejidad: ? 
        console.log(final); // Complejidad: O(1)

         // Formato de salida: Nombre del equipo, Puntos del equipo[p], Cantidad de juegos[g], (victorias-empates-derrotas), diferencia de goles[gd] (Goles marcados - Goles en contra)
         
        let i = 1; // Complejidad: O(1)
        final.forEach(element => {
            linea += `${i}) ${element.equipo} ${element.puntos}p, ${element.cantidadJuegos}g (${element.victorias}-${element.empates}-${element.derrotas}), ${element.difGoles}gd (${element.golesMarcados}-${element.golesEnContra})\n`; // Complejidad: O(1)
            i++; // Complejidad: O(1)
          });
          
        campoSalida.value += linea; // Complejidad: O(1)
>>>>>>> Stashed changes
    } catch (TypeError) {
        alert('El campo de entrada está vacio'); // Complejidad: O(1)
    }
        
}

function limpiarCampo() {
<<<<<<< Updated upstream
>>>>>>> Stashed changes
    campoEntrada.value = "";
    campoSalida.value = "";
=======
    campoEntrada.value = ""; // Complejidad: O(1)
    campoSalida.value = ""; // Complejidad: O(1)
>>>>>>> Stashed changes
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
