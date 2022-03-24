/*
// Option 1
function quickSort(array) {
  if (array.length <= 1) return array;
  const pivot = array[0];
  let arr1 = array.filter(x => x < pivot);
  let arr2 = array.filter(x => x == pivot);
  let arr3 = array.filter(x => x > pivot);
  return quickSort(arr1).concat(arr2).concat(quickSort(arr3));
 }

// Option 2
function quickSort(array) {
  if (array.length <= 1) return array;
  const pivot = array.shift();
  let arr1 = array.filter(x => x <= pivot);
  let arr2 = array.filter(x => x > pivot);
  return quickSort(arr1).concat([pivot]).concat(quickSort(arr2));
 }
 
 Option 2 makes more recusive calls than option 1.
 But both are doing .filter more than once, resulting in more
 iterations on the array than streictly necessary.
 Let's do the option 3 - the one uncommented - , which separates elements
 below and above in a single iteraiton of the array.

 */
function quickSort(array) {
    if (array.length <= 1) return array;
    const pivot = array[0];
    let below = [], equal = [], above = [];
    for (let v of array) 
      if (v < pivot) below.push(v);
      else if (v === pivot) equal.push(v);
      else above.push(v);
    // this iteration of array could have been done also
    // with indexes, or with .forEach, or with .map
    // Just a matter of preference
    return quickSort(below).concat(equal).concat(quickSort(above));
   }
  
  // console.log(quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]));
  