function selectionSort(array) {
    // function that searches the minimum element and gets its position
    function minIndex(array) {
      return array.indexOf(array.reduce( (a,b) => {return (a<=b)? a : b;}));
    }
  
    // for each element: calculates the minimum after the element
    // and if needed, swap them both
    array.map((elem,index,arr) => {
        let m = minIndex(array.slice(index));
        if (elem >= arr[m + index])
          [arr[index], arr[m + index]] = [arr[m + index],elem];
    });
    return array;
  }
  
  /*
  console.log(selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]));
  */