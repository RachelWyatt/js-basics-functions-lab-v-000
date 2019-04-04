// Code your solution in this file!
function distanceFromHqInBlocks (someValue) {
  if (someValue >= 42) {
    let result = someValue - 42;
    return result;
  }
  else if (someValue < 42) {
    let result = 42 - someValue;
    return result;
  }
}
 
function distanceFromHqInFeet (someValue) {
  result = distanceFromHqInBlocks(someValue) * 264;
  return result;
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  //the return value of distanceFromHqInBlocks can then be used to calculate feet
}