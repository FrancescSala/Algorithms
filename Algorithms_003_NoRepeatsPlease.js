function permAlone(str) {
  // generates all permutations of str
  let p = permutations(str);
  // count how many of them do not have consecutive letters
  let n = 0;
  p.map((elem) => { if (!consecutiveLetter(elem)) n++; });
  return n;
}

// generates all permutations of str and returns them as an array
function permutations(str) {
  if (str.length === 0) return [];
  if (str.length === 1) return [str];
  let p = permutations(str.substring(1));
  let q = [];
  for (let i = 0; i < p.length; i++)
    for (let j = 0; j < str.length; j++)
      q.push(insert(str[0],p[i], j));
  return q;
}

// returns a new string, result of 
// inserting c at the position pos of str
function insert (c,str,pos) {
  return (pos === 0) ? c + str : str.substring(0,pos) + c + str.substring(pos);
}

// returns true if str contains two equal consecutive letters
// returns false otherwise
function consecutiveLetter(str) {
  if (str.length <= 1) return false;
  for (let i = 0; i < str.length-1; i++)
    if (str[i] === str[i+1]) return true;
  return false;
}

/*
   Alternatively, it could have been done something using a regular expression
	function consecutiveLetter(str) {
	  if (str.length <= 1) return false;
	  return str.match(/(.)\1+/);
	}
	
   Or even another option would be not making a map, but filtering
   // returns true if str does NOT have any pair of consecutive equal letters; false otherwise
   const noConsLet = function (str) {
	  if (str.length <= 1) return true;
	  return !str.match(/(.)\1+/);
   }
   
   function permAlone(str) {
	 let p = permutations(str);   // generates all permutations of str
     // count how many of them do not have consecutive letters
     return p.filter(noConsLet).length;
   }
   
   
   A different approach would be not to generate the permuations and, instead, build
   a frequency table of all the letters of the string, and from there try to calculate
   the number of permutations that would have no consecutive letters equal. Feasible approach,
   but not easy.
   
*/


console.log(permAlone("aab"));    // expected output 2
console.log(permAlone("aaa"));    // expected output 0
console.log(permAlone("aabb"));   // expected output 8
console.log(permAlone("abcdefa"));    // expected output 3600
console.log(permAlone("abfdefa"));    // expected output 2640
console.log(permAlone("zzzzzzzz"));   // expected output 0
console.log(permAlone("a"));      // expected output 1
console.log(permAlone("aaab"));   // expected output 0
console.log(permAlone("aaabb"));  // expected output 12
console.log(permAlone(""));       // expected output 0
