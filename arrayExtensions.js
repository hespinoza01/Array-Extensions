/*
  Author: Harold Espinoza
  Description: Simple code to add a Array.prototype some more util features
*/

let data = [2,8,4,"a","d","z",5,7,1],
    data2 = ["b", "c", "f"];

// Sort all numbers into array, all data that is't number is pushing to end
Array.prototype.sortByNumber = function(ascendent=true){
  let arrayToSort = [],
      arrayToNotSort = [],
      typeSorted = (ascendent) ? 'a - b' : 'b -a',
      cont = 0;

  // Detect all numbers that can be sorted, and other data that can't
  for(let value of this){
    if(typeof value !== "number"){
      arrayToNotSort.push(value);
    }else{
      arrayToSort.push(value);
    }
  }

  // Verify if number array is not empty
  if (arrayToSort.length === 0){
    console.error("The array not contains numbers to sort...");
    return undefined;
  }

  let tempArray = arrayToSort.sort((a,b) => eval(typeSorted)).concat(arrayToNotSort);

  // Saving the array result
  for(let value of tempArray){
    this[cont++] = value;
  }
};


// Sort all strings into array, all data that is't string is puching to end
Array.prototype.sortByString = function(ascendent=true){
  let arrayToSort = [],
    arrayToNotSort = [],
    typeSorted = `a.toLocaleLowerCase() ${(ascendent) ? '>' : '<'} b.toLocaleLowerCase()`,
    cont = 0;

  // Detect all numbers that can be sorted, and other data that can't
  for(let value of this){
    if(typeof value !== "string"){
      arrayToNotSort.push(value);
    }else{
      arrayToSort.push(value);
    }
  }

  // Verify if number array is not empty
  if (arrayToSort.length === 0){
    console.error("The array not contains strings to sort...");
    return undefined;
  }

  let tempArray = arrayToSort.sort( (a,b) => eval(typeSorted) ).concat(arrayToNotSort);

  // Saving the array result
  for(let value of tempArray){
    this[cont++] = value;
  }
};


// Sort all numbers into array
data.sortByNumber();
data2.sortByNumber();

// Sort all strings into array
data.sortByString(true);
data2.sortByString();