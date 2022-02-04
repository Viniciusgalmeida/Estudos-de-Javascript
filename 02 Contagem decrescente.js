//Build a function that returns an array of integers from n to 1 where n>0.
//Example : n=5 --> [5,4,3,2,1]

let n = 6;

function contagemDecrescente(n) {
    return [n].concat(n > 1 ? contagemDecrescente(n - 1) : []);
}

console.log(contagemDecrescente(n))






