/* Note: going here for an iterative version of the binarySearch
   But a recursive version is also possible 
*/
function binarySearch(searchList, value) {
    const notFoundMsg = 'Value Not Found';
    // the search is always in the piece of array between index i and index j
    let i = 0;
    let j = searchList.length - 1;  
    let found = false;
    let arrayPath = [];
    while (i <= j && !found) {
      let k = Math.floor((i+j)/2);
      let v = searchList[k];
      arrayPath.push(v);
      found = (value === v);
      if (value < v) j = k - 1;   // decide which part of the array to take
      else i = k + 1;
    }
    return (found? arrayPath: notFoundMsg);
  }
  
  const testArray = [
    0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 49, 70
  ];
  
  /*
  console.log(binarySearch(testArray, 0));  // expected output  [13, 5, 2, 0]
  console.log(binarySearch(testArray, 1));  // expected output  [13, 5, 2, 0,1]
  console.log(binarySearch(testArray, 2));  // expected output  [13, 5, 2]
  console.log(binarySearch(testArray, 6));  // expected output  Value Not Found
  console.log(binarySearch(testArray, 11)); // expected output  [13, 5, 10, 11]
  console.log(binarySearch(testArray, 13)); // expected output  [13]
  console.log(binarySearch(testArray, 70)); // expected output  [13, 19, 22, 49, 70]
  */
 