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

  return this;
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

  return this;
};

// Get the first element of array
Array.prototype.first = function(){
  return this[0];
};

// Get the last element of array
Array.prototype.last = function(){
  return this[this.length - 1];
};

// Print the array
Array.prototype.print = function(){
  console.log(this);
};

// Verify is the array content values
Array.prototype.isEmpty = function(){
  return (this.length === 0);
};

// Verify if all the elements are numbers
Array.prototype.isAllNumbers = function(){
  for(let value of this){
    if(typeof value !== "number")
      return false;
  }

  return true;
};

// Verify if all the elements are strings
Array.prototype.isAllStrings = function(){
  for(let value of this){
    if(typeof value !== "string")
      return false;
  }

  return true;
};

// Check if a element exist or not (return true or false)
Array.prototype.has = function(value){
  return (this.indexOf(value) !== -1);
};

// Get all numbers into array
Array.prototype.getNumbers = function(){
  let data = [];

  for(let value of this){
    if(typeof value === "number"){
      data.push(value);
    }
  }

  return data;
};

// Get all positives numbers into array
Array.prototype.getAllPositiveNumbers = function(includeZeros=false){
  let data = [],
      condition = `value >${(includeZeros) ? '=' : ''} 0`;

  for(let value of this){
    if(typeof value === "number"){
      if(eval(condition)){
        data.push(value);
      }
    }
  }

  return data;
};

//Get all negatives numbers into array
Array.prototype.getAllNegativeNumbers = function(includeZeros=false){
  let data = [],
      condition = `value <${(includeZeros) ? '=' : ''} 0`;

  for(let value of this){
    if(typeof value === "number"){
      if(eval(condition)){
        data.push(value);
      }
    }
  }

  return data;
};

// Get all values while the condition argument as string is true
Array.prototype.getWhile =  function(toEval='true'){
  let data = [],
      condition = toEval.replace('?', 'value');

  try {

    for(let value of this){
      if(eval(condition)){
        data.push(value);
      }
    }

  }catch (e) {
    console.log(`Error in condition argument:\n${e}`);
    return undefined;
  }

  return data;
};

// Get random element into array
Array.prototype.getRandomElement = function(){
  let min = 0,
      max = this.length - 1,
      random = Math.floor( Math.random() * (+max - +min) ) + +min;

  return this[random];
};

// Get the min value into array
Array.prototype.minNumber = function(){
  let data = this.getNumbers();

  if(!data.length){ return undefined; }

  let minValue = data[0];

  for(let value of this){
    if(minValue > value){
      minValue = value;
    }
  }

  return minValue;
};

// Get the max value into array
Array.prototype.maxNumber = function(){
  let data = this.getNumbers();

  if(!data.length){ return undefined; }

  let maxValue = data[0];

  for(let value of this){
    if(maxValue < value){
      maxValue = value;
    }
  }

  return maxValue;
};

// Get the middle value into array
Array.prototype.middleNumber = function(){
  let data = this.getNumbers(),
      middleIndex = Math.floor(data.length / 2);

  if(!data.length){ return undefined; }

  data.sortByNumber();
  return (data.length % 2 === 0) ? [data[middleIndex - 1], data[middleIndex]] : data[middleIndex];
};


// Sort all numbers into array
data.sortByNumber();
data2.sortByNumber();

// Sort all strings into array
data.sortByString(true);
data2.sortByString();
