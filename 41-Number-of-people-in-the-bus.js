// There is a bus moving in the city which takes and drops some people at each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.

// Flow of reasoning:

// 1- Transforms the array with other arrays into a single big array
// 2- Calculates the sum of the array elements that are in the even position.
// 3- Calculates the sum of the array elements that are in odd position.
// 4- Returns the subtraction of the result of the elements that are in even positions with the sum of the elements that are in odd positions.


var number = function (busStops) {
  
  let newArray = busStops.flat();

  let evenIndexSum = newArray.reduce((total, num, index) => {
    if (index % 2 === 0) {
      return total + num;
    } else {
      return total;
    }
  }, 0);

  let oddIndexSum = newArray.reduce((total, num, index) => {
    if (index % 2 !== 0) {
      return total + num;
    } else {
      return total;
    }
  }, 0);

  return evenIndexSum - oddIndexSum;
};
