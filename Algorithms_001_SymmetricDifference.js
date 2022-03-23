function sym() {
  // parse arguments to check there are enough and all are arrays
  if (arguments.length < 2) throw new Error('At least two arguments are expected.');
  // convert arguments to an array
  let args = Array.from(arguments);
  if (args.find(x => !Array.isArray(x))) throw new Error('All arguments should be arrays');

  // makes symmetric difference two sets at a time, from left to right
  // sorts the final result to meet problem specifications
  return args.reduce(_sym).sort();  // attention, that sorting like this sorts as strings: 11 is sorted before 2
									// indicate a sort function if want to be sorted as numbers
									// ...(_sym).sort((x,y) =>{ return parseInt(x) - parseInt(y);}));
}

// symmetric difference of two sets
function _sym(a,b) {
  let s1 = a.filter(x => !b.includes(x)); // a - b
  let s2 = b.filter(x => !a.includes(x)); // b - a
  s1 = s1.concat(s2);            // (a-b) U (b-a) 
  return s1.filter((x,index) => s1.indexOf(x) === index); // eliminate duplicates
  // the filter above takes only te first appearance of each element
}

/*
    console.log(sym([1, 2, 3], [5, 2, 1, 4]));            // expected output [3, 4, 5]
    console.log((sym([1, 2, 3, 3], [5, 2, 1, 4])));       // expected output [3, 4, 5]
    console.log((sym([1, 2, 3], [5, 2, 1, 4, 5])));       // expected output [3, 4, 5]
    console.log((sym([1, 2, 5], [2, 3, 5], [3, 4, 5])));  // expected output [1, 4, 5]
    console.log((sym([1, 1, 2, 5], [2, 2, 3, 5], //
                      [3, 4, 5, 5])));                    // expected output [1, 4, 5]
    console.log((sym([3, 3, 3, 2, 5], [2, 1, 5, 7], //
                      [3, 4, 6, 6], [1, 2, 3])));         // expected output [2, 3, 4, 6, 7]
    console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], //
                      [3, 4, 6, 6], [1, 2, 3], //
                      [5, 3, 9, 8], [1]));                // expected output [1, 2, 4, 5, 6, 7, 8, 9]
    console.log(sym([], [5, 2, 1, 4]));                   // expected output [1, 2, 4, 5]
    console.log(sym([3,6], [5, 2, 1, 4]));                // expected output [1, 2, 3, 4, 5, 6]
    console.log(sym([], []));                             // expected output []
    console.log(sym([], 3));                              // expected output Error
*/


