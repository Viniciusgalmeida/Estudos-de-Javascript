// https://www.codewars.com/users/JbPasquier

//You get an array of numbers, return the sum of all of the positives ones.
//Example [1,-4,7,12] => 1 + 7 + 12 = 20
//Note: if there is nothing to sum, the sum is default to 0.

let arr = [1,-4,7,12];

function positiveSum(arr) {
  let result = arr.filter(positive);
  function positive(arr){
    return arr >= 0
  }
  let soma = 0
  for (let i = 0; i < result.length; i++){
     soma += result[i];
  }
  return soma
}

console.log(positiveSum(arr))

