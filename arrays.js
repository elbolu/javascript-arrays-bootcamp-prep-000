var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

const array = [1]
function addElementToBeginningOfArray(array) {
  element =  ["foo",...array];
  return(element);
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element);  
}

function addElementToENdOfArray(array) {
  element =  [array,..."foo"];
  return(element);
}

function addElementToEndOfArray(array, element) {
  return array.push(element);  
}

  