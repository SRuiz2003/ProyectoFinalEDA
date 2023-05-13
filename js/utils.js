// QuickSort implementado tal como nos lo enseñaron, ningun cambio aqui
function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start >= end) {
    return;
  }

  const pivotIndex = partition(arr, start, end);
  quickSort(arr, start, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, end);
}

function partition(arr, start, end) {
  const pivot = arr[end];
  let partitionIndex = start;

// el cambio comienza aqui, usamos la funcion comparar objetos en vez de comparar directamente a arr[i] con el pivote

  for (let i = start; i < end; i++) {
    if (compararObjetos(arr[i], pivot) < 0) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }

  swap(arr, partitionIndex, end);
  return partitionIndex;
}

// La funcion comparar objetos toma ambos objetos y entonces se pregunta sobre que criterio debe evaluar, si los puntos son iguales evalua sobre las victorias y si estas tambien son iguales evalua sobre la diferencia de goles
// Si la funcion retorna un valor positivo, entonces el valor del pivote es mayor que el del objeto y se mantiene a la izquierda, si es menor o igual a cero lo mueve a la derecha del pivote. 

function compararObjetos(obj1, obj2) {
  if (obj1.puntos !== obj2.puntos) {
    return obj2.puntos - obj1.puntos;
  } else if (obj1.victorias !== obj2.victorias) {
    return obj2.victorias - obj1.victorias;
  } else {
    return obj2.difGoles - obj1.difGoles;
  }
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Esta es una implementacion sencilla de insertion sort con la misma condicion de progreso de compararObjetos 

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    let j = i - 1;

    while (j >= 0 && compararObjetos(arr[j], current) > 0) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }
}

function sortEquipos(arr){
  if(arr.length<1000){
    insertionSort(arr);
  }else{
    quickSort(arr);
  }
}

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
    } catch (TypeError) {
        alert('El campo de entrada está vacio'); // Complejidad: O(1)
    }
}

function limpiarCampo() {
    campoEntrada.value = "";
    campoSalida.value = "";
}

let botonLimpiar = document.getElementById("botonLimpiar");
let botonCalcular = document.getElementById("botonCalcular");
let torneo = document.getElementById("campoEntrada");
let campoSalida = document.getElementById("campoSalida");

botonLimpiar.addEventListener("click", limpiarCampo);
botonCalcular.addEventListener("click", resolverTorneo(torneo));

export {resolverTorneo, limpiarCampo};

