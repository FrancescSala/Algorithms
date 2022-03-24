function mergeSort(array) {
    if (array.length <= 1) return array;
    let pp = Math.floor(array.length / 2); // partition point
    return merge(
      mergeSort(array.slice(0,pp)),
      mergeSort(array.slice(pp)));
  }
  
  // merges two SORTED arrays: array1, array2
  function merge(array1, array2) {
    let merged = [];
    while (array1.length > 0 && array2.length > 0)
      if (array1[0] < array2[0]) merged.push(array1.shift());
      else merged.push(array2.shift());
    return merged.concat(array1).concat(array2); // one of them is empty, we do not mind
    // Note, this return statement could be also like this,
    // using the spread operator:
    // return [...merged,...array1,...array2];
  }
  // Note: this merge operation could also be done differently, 
  // without destroying arrays 1 and 2
  
  //console.log(mergeSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]));