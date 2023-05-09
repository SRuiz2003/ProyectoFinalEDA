 //Esta es una prueba de metodos de organizacion usando la extension JavaScript Performance de Khiami.
 function QuickInsertionSortByPoints(arr) {
    'use strict';
  
    if(!arr || 1 > arr.length) {
      return null;
    }
  
    var startIndex = 0, endIndex = arr.length - 1;
  
    // use 'stack' data structure to eliminate recursive call
    // DON'T use Array.push() and Array.pop() because slow !!!
    // so use manual indexing
    var stackLength = 0; 
    
    // use 2 arrays instead of 1 array to fasten (reduce calculation of '+= 2' and '-= 2')
    var startIndexes = [];
    var endIndexes = [];
  
    // variables for partitioning
    var partitionIndex, pivot, left, right, _swap_temp;
  
    // variables for insertion sort
    var i, j, key;
  
    do {
      // in my testing, I found 32 is very good choice for totally generated-random data,
      // more than 100 will cause slower speed overal.      
      if(32 >= endIndex - startIndex) {
  
        // even using insertionSort,
        // still need this because it still come here !!
        if(1 == endIndex - startIndex) {
          if(arr[startIndex].puntos > arr[endIndex].puntos) {
            _swap_temp = arr[startIndex];
            arr[startIndex] = arr[endIndex];
            arr[endIndex] = _swap_temp;
          }
        } else {
          /**************************************
          ****** start of insertion sort ********
          ***************************************/
          for(i = startIndex + 1; endIndex >= i; i++) {
            key = arr[i].puntos;
            
            // Move elements of arr[startIndex..i-1], that are 
            // greater than key, to one position ahead 
            // of their current position
            for (j = i - 1; j >= startIndex; j--) {
              if(arr[j].puntos > key) {
                arr[j + 1] = arr[j];
                continue;
              }
  
              // use 'break' to avoid decreasing 'j' 
              break;
            }
  
            // swap
            arr[j + 1].puntos = key;
          }
          /**************************************
          ****** end of insertion sort **********
          ***************************************/
        }
  
        // continue to process next data, is there any data inside stack ? 
        if(stackLength > 0) {
          // pop
          stackLength--; // reduce counter to get the last position from stack
          startIndex = startIndexes[stackLength];
          endIndex = endIndexes[stackLength];
        } else {
          // no data inside stack, so finish
          break;
        }
      } else {
        // squeeze every millisecond by put main logic here instead of separate function
  
        // in my testing using median_of_3 does not give better result for generated totally random data !!
  
        /*********************************************
        *********** start of partitioning ************
        ************* Tony Hoare *********************
        **********************************************/
  
        // minimize worst case scenario
  
        // === start of select pivot ============
        pivot = arr[startIndex].puntos;
  
        // try to find a different element value
        j = endIndex;
        while(pivot == arr[j].puntos && j >= startIndex) {
          j--;
        }
        if(j > startIndex) {
          // check which element is lower? 
          // use the lower value as pivot   
          if(pivot > arr[j].puntos) {
            pivot = arr[j].puntos;
          }
        }
        // === end of select pivot ============
  
        left = startIndex;
        right = endIndex;
  
        do {
          
          while(pivot > arr[left].puntos) {
            left++;
          }
  
          while(arr[right].puntos > pivot) {
            right--;
          }
  
          if(left >= right) {
            partitionIndex = right;
            break;
          }
  
          //swap(left, right);
          // because many swaps, so optimize to implement swap here !
          _swap_temp = arr[left];
          arr[left] = arr[right];
          arr[right] = _swap_temp;
  
          left++;
          right--;
        } while(true); // loop forever until break
  
        if(partitionIndex > startIndex) {
          // has lower partition, so process it
  
          if(endIndex > partitionIndex + 1) {
            // push 'right' side partition info into stack for later
            startIndexes[stackLength] = partitionIndex + 1;
            endIndexes[stackLength] = endIndex;
            stackLength++; // increase counter for NEXT slot
          }
  
          // prepare next loop
          // keep same value for startIndex but update endIndex
          endIndex = partitionIndex;
  
        } else if(endIndex > partitionIndex + 1) {
          // at this point, it means there is no 'lower' side partition but has 'higher' side partition
  
          // prepare next loop
          // keep same value for endIndex but update startIndex
          startIndex = partitionIndex + 1;
        }
        
        /*********************************************
        ****** end of Tony Hoare partitioning ********
        **********************************************/
      }
    } while(endIndex > startIndex);
  }

// definition
  function partition(arr, left, right, pivot) {
    while (left <= right) {
      while (arr[left] < pivot && left <= right) {
        left++;
      }
      while (arr[right] > pivot) {
        right--;
      }
      if (left <= right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
      }
    }
    return left;
  }

  function QISortByPoints(arr, left = 0, right= arr.length-1){
    if (left>=right) return;  
    let pivot = arr[Math.floor((right+left)/2)];
    const index = partition(arr,left,right,pivot);
    QISortByPoints(arr,left,index-1);
    QISortByPoints(arr,index,right);
    return arr;
  }

  function insertionSort(arr, n = arr.length)
  {
    let i, key, j;
    for (i = 1; i < n; i++)
    {
      key = arr[i];
      j = i - 1;		
      while (j >= 0 && arr[j] > key)
      {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = key;
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
        "golesEnContra": 3
    },
    {
        "equipo": "Norway",
        "puntos": 5,
        "cantidadJuegos": 3,
        "victorias": 1,
        "empates": 2,
        "derrotas": 0,
        "golesMarcados": 5,
        "golesEnContra": 4
    },
    {
        "equipo": "Morocco",
        "puntos": 4,
        "cantidadJuegos": 3,
        "victorias": 1,
        "empates": 1,
        "derrotas": 1,
        "golesMarcados": 5,
        "golesEnContra": 5
    },
    {
        "equipo": "Scotland",
        "puntos": 1,
        "cantidadJuegos": 3,
        "victorias": 0,
        "empates": 1,
        "derrotas": 2,
        "golesMarcados": 2,
        "golesEnContra": 6
    }
];
let arr = [1, 3, 7, 4, 5, 2, 6];
let arr2 = [...arr];
let arr3 = [...arr];



