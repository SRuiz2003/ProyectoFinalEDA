
// definition

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
  
    for (let i = start; i < end; i++) {
      if (compararObjetos(arr[i], pivot) < 0) {
        swap(arr, i, partitionIndex);
        partitionIndex++;
      }
    }
  
    swap(arr, partitionIndex, end);
    return partitionIndex;
  }
  
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
  



  const info = [
    {
        "equipo": "Brazil",
        "puntos": 6,
        "cantidadJuegos": 3,
        "victorias": 2,
        "empates": 0,
        "derrotas": 1,
        "golesMarcados": 6,
        "golesEnContra": 3,
        "difGoles": 3

    },
    {
        "equipo": "Norway",
        "puntos": 5,
        "cantidadJuegos": 3,
        "victorias": 1,
        "empates": 2,
        "derrotas": 0,
        "golesMarcados": 5,
        "golesEnContra": 4,
        "difGoles": 1
    },
    {
        "equipo": "Morocco",
        "puntos": 4,
        "cantidadJuegos": 3,
        "victorias": 1,
        "empates": 1,
        "derrotas": 1,
        "golesMarcados": 5,
        "golesEnContra": 5,
        "difGoles": 0
    },
    {
        "equipo": "Scotland",
        "puntos": 1,
        "cantidadJuegos": 3,
        "victorias": 0,
        "empates": 1,
        "derrotas": 2,
        "golesMarcados": 2,
        "golesEnContra": 6,
        "difGoles": -4
    }
];

const copy = [...info];

// case 1 quickSort
quickSort(info);

// case 2 insertionSort
insertionSort(copy);


console.log(info);


