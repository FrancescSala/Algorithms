function pairwise(arr, arg) {
    let used = new Array(arr.length).fill(false); // an array to control which numbers have already been used in a pair
    let sum = 0;
    for (let i = 0; i < arr.length; i++) 
      if (!used[i])
        for (let j = i + 1; j < arr.length; j++)
          if (!used[j] && arr[i]+arr[j] === arg) {
            used[i] = used[j] = true;
            sum += (i + j);
            break; 
          }
    return sum;
  }
  
  /*
  console.log(pairwise([1,4,2,3,0,5], 7));      // expected output 11
  console.log(pairwise([1, 3, 2, 4], 4));       // expected output 1
  console.log(pairwise([1, 1, 1], 2));          // expected output 1
  console.log(pairwise([0, 0, 0, 0, 1, 1], 1)); // expected output 10
  console.log(pairwise([], 100));               // expected output 0
  */