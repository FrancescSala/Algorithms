function updateInventory(arr1, arr2) {
    // parse arguments
    if(arguments.length !== 2) throw new Error("Exactly two arguments are required");
    if(!Array.isArray(arr1) || !Array.isArray(arr1)) throw new Error("Arguments should be arrays");

    let updInv = JSON.parse(JSON.stringify(arr1));  // make a copy of arr1
    updInv.map( x => {                              // add stock common to both arrays
        let i = arr2.findIndex(y => y[1] === x[1]);
        x[0] = (i !== -1)? x[0] + arr2[i][0] : x[0];
    });
    let keys = arr1.flat().filter((x,index) => index % 2 === 1);    // keys in arr1
    updInv = updInv.concat(arr2.filter(x => !keys.includes(x[1]))); // add elems in arr2 not in arr1
    return updInv.sort( (x,y) => {                  // return the result sorted
        return (x[1] < y[1]) ? -1 : 1;
    });
}

/*
// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];


console.log(updateInventory(curInv, newInv));
    // expected result [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]

console.log(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []));
    // expected result [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]]

console.log(updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]));
    // expected result [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]]
    
console.log(updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]));
    // expected result [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]]
*/