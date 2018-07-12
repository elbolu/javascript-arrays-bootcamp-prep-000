var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
 return [element,...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element)
  return array
}

function addElementToEndOfArray(array) {
  element = [array,..."foo"];
  return(element);
}

function destructivelyAddElementToEndOfArray(array, element) {
  return array.push(element);  
}

function accessElementInArray(array, index){
  return (array [2]);
}
  

  