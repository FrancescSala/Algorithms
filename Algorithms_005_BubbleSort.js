function bubbleSort(array) {
    let sorted = false;
    let outerIterations = 0;
    while (!sorted) {
      sorted = true;
      for (let i = 0; i < array.length - outerIterations - 1; i++) // the last outerIterations elements in array are already sorted
        if (array[i] > array[i+1]) {
          sorted = false;
          [array[i],array[i+1]] = [array[i+1],array[i]]; // swap elements
        }
      outerIterations++;
    }
    return array;
    // Could have chosen also not to sort on array itself, but having sorted and returned a copy of array
    // (leaving array unchanged). But instead do on array itself, to be more similar to the sort method 
    // implemented in javascript language.
  }
  
  /*  
      Alternatively, it could be done also like this:
      function bubbleSort(array) {
          for (let i = 0; i < array.length; i++) {
            let sorted = true;
            for (let j = 0; j < array.length - i - 1; j++) // the last i elements in array are already sorted
              if (array[j] > array[j+1]) {
                sorted = false;
                [array[j],array[j+1]] = [array[j+1],array[j]]; // swap elements
              }
            if (sorted) break;
          }
          return array;
      }


  */
  /*
    let a = [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92];
    bubbleSort(a)
    console.log(a); // expected output [ 1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643 ]
  */
  