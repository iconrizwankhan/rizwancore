/*
Given an integer n, write a function that returns count of trailing zeroes in n!.

Input: n = 5
Output: 1
Explanation: Factorial of 5 is 120 which has one trailing 0.

Input: n = 20
Output: 4
Explanation: Factorial of 20 is 2432902008176640000 which has 4 trailing zeroes.

Input: n = 100
Output: 24
*/

function factorial(n) {
    let temp = BigInt(1);
    for (let i = BigInt(1); i <= n; i++) {
      temp = temp * i;
    }
    console.log(`Fatcorial of ${n} is ${temp}`);
    let tempArr= String(temp).split('');
// let zeroArr=[];
let count=0;
    for(let index=tempArr.length-1;index>=0;index--){
      if(tempArr[index]>0){
        break;
      } else if(tempArr[index]==0){
        // zeroArr.push(tempArr[index]);
        count++;
      }
    }
    console.log(`It has ${count} trailing zeroes.`);
  }
  factorial(100);
