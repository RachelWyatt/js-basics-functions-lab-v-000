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
}

function distanceTravelledInFeet (streetOne, streetTwo) {
  if (streetOne < streetTwo) {
    let result = (streetTwo - streetOne) * 264;
    return result;
  }
  else if (streetOne > streetTwo) {
    let result = (streetOne - streetTwo) * 264;
    return result;
  }
}

function calculatesFarePrice (streetOne, streetTwo) {
  distance = distanceTravelledInFeet (streetOne, streetTwo)
  if (distance = 0) {
    let result = 0;
    return result;
  }
  else if (distance >= 400 && distance <= 2000) {
    let result = 2;
    return result;
  }
}