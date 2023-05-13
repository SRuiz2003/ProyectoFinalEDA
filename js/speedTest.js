
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
  
  function createRandomTeams(numTeams) {
    var teams = [];
  
    for (var i = 0; i < numTeams; i++) {
      var puntos = Math.floor(Math.random() * 100); // Generate a random number between 0 and 99 for points
      var victorias = Math.floor(Math.random() * 10); // Generate a random number between 0 and 9 for victories
      var difGoles = Math.floor(Math.random() * 20) - 10; // Generate a random number between -10 and 10 for goal difference
  
      var randomTeam = {
        puntos: puntos,
        victorias: victorias,
        difGoles: difGoles
      };
  
      teams.push(randomTeam);
    }
  
    return teams;
  }
  
  
  
    const info = createRandomTeams(5000);




const copy = [...info];

// case 1 quickSort
quickSort(info);

// case 2 insertionSort
insertionSort(copy);





