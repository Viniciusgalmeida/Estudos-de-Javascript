/* 

Task
Given a Divisor and a Bound , Find the largest integer N , Such That ,

Conditions :
N is divisible by divisor

N is less than or equal to bound

N is greater than 0.

Notes
The parameters (divisor, bound) passed to the function are only positive values .
It's guaranteed that a divisor is Found .
Input >> Output Examples
maxMultiple (2,7) ==> return (6)
Explanation:
(6) is divisible by (2) , (6) is less than or equal to bound (7) , and (6) is > 0 .

maxMultiple (10,50)  ==> return (50)
Explanation:
(50) is divisible by (10) , (50) is less than or equal to bound (50) , and (50) is > 0 .*

maxMultiple (37,200) ==> return (185)
Explanation:
(185) is divisible by (37) , (185) is less than or equal to bound (200) , and (185) is > 0 . 

*/

function maxMultiple(divisor, bound){
    // Calcular o limite superior para o loop
    const loopUpperBound = bound - divisor;
    
    // Criar um array vazio para armazenar os candidatos a múltiplos
    const candidateMultiples = [];
    
    // Preencher o array com valores candidatos
    for (let i = 0; i <= loopUpperBound; i++) {
        candidateMultiples.push(divisor + i);
    }
    
    // Filtrar o array para incluir apenas os múltiplos positivos do divisor
    const positiveMultiples = candidateMultiples.filter(x => x > 0 && x % divisor == 0);
    
    // Retornar o maior valor entre os múltiplos positivos
    return Math.max(...positiveMultiples);
  }
  