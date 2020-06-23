/*
  Author: Harold Espinoza
  Description: Simple code to add a Array.prototype some more util features
*/



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

// Shuffle all elements into array
Array.prototype.shuffle = function() {
    let i = this.length, j, temp;

    // si no hay elementos en el arreglo, se termina la función
    if (i == 0) return this;

    for (i = i - 1; i > 0; i--) {
        j = Math.floor( Math.random() * (i + 1) );
        temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }

    return this;
}

// Shuffle all elements into array using Sattolo algorithm
Array.prototype.sattolo = function() {
    const len = this.length;

    for (let i = 0; i < len - 1; i++) { // 0 to n -1, exclusive because the last item doesn't need swapping
        let j = Math.floor(Math.random() * (len-(i+1)))+(i+1); // i+1 to len, exclusive
        const temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }
    
    return this;
}

// check is a array is equals to another
Array.prototype.equalsTo = function(array) {
    if (this.length !== array.length) return false;

    for (let i = 0; i < this.length; i++) {
        if (this[i] !== array[i]) return false;
    }

    return true;
}

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

// Get sum value of elements into array
Array.prototype.sum = function(){
  let data = this.getNumbers();
      sum = 0;

  for(let value of data){
    sum += value;
  }

  return sum;
};

// Get a copy from array
Array.prototype.copy = function(){
  return Array.from(this);
};

// Get average value of elements into array
Array.prototype.average = function(){
  return this.sum() / this.length;
};

// Get media value of elements into array
Array.prototype.median = function(){
  let data = this.getNumbers().sortByNumber(),
      length = data.length,
      middleLength = length / 2;

  if(length % 2 === 0){
    return (data[middleLength - 1] + data[middleLength]) / 2;
  }

  middleLength = (length - 1) / 2;
  return data[middleLength];
};

// Get mode of the array
Array.prototype.mode = function(){
  let data = this.getNumbers(),
      modes = [],
      count = {},
      maxIndex = 0;

  for(let value of data){
    let number = value;
    count[number] = (count[number] || 0) + 1;

    if(count[number] > maxIndex){
      maxIndex = count[number];
    }
  }

  for(let value of data){
    if(count.hasOwnProperty(value)){
      if(count[value] === maxIndex){
        modes.push(value);
      }
    }
  }

  return modes;
};

// Get rangeInterval of array
Array.prototype.rangeInterval = function(){
  let data = this.getNumbers().sortByNumber();

  return (!data.length) ? undefined : [data[0], data[data.length - 1]];
};

// Return the union of two arrays
Array.prototype.union = function(otherArray){
  if(!Array.isArray(otherArray)){
    console.error("Param pass is not Array");
    return undefined;
  }

  let data = [],
      firstArray = this.copy(),
      secondArray = otherArray.copy();

  for(let value of firstArray){ data.push(value); }
  for(let value of secondArray){ data.push(value); }

  return data;
};

// Return the intersection of two sets
Array.prototype.intersection = function(otherArray){
  if(!Array.isArray(otherArray)){
    console.error("Param pass is not Array");
    return undefined;
  }

  let data = [],
    firstArray = this.copy();

  for(let value of firstArray){
    if(otherArray.has(value)){
      data.push(value);
    }
  }

  return data;
};

// Return the difference of two sets
Array.prototype.difference = function(otherArray){
  if(!Array.isArray(otherArray)){
    console.error("Param pass is not Array");
    return undefined;
  }

  let data = [],
      firstArray = this.copy();

  for(let value of firstArray){
    if(!otherArray.has(value)){
      data.push(value);
    }
  }

  return data;
};
