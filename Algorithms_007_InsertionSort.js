function insertionSort(array) {
  if (array.length === 0) return array;
  // begins the sorted array with the first element
  let sorted = [array[0]];
  // then inspect rest of elements
  for (let i = 1; i < array.length;i++)
    // for each of them find its place in the sorted portion and insert it there
    for (let j = sorted.length-1; j >= 0; j--) {
      if (sorted[j]<= array[i]) {
        sorted.splice(j+1,0,array[i]);
        break;
      }
      if (j=== 0) sorted.unshift(array[i]);
    }
  return sorted;
}

// console.log(insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]));
//console.log(insertionSort([5, 4, 33, 2, 8]));
