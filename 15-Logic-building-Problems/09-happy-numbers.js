/*A happy number is defined by the following Sequence: Starting with any positive integer, replace the number by the sum of the squares of its digits in base-ten, and repeat the process until the number either equals 1 (where it will stay), or it loops endlessly in a cycle that does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are sad numbers.

For example, 19 is happy, as the associated Sequence is:

12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1.
Print all the happy numbers from 1 to 200 inclusive, each on their own line.*/

// function happyNumber(num) {
//   let result = String(num).split("");
//   console.log(result);
//   for (let i = result[0]; i < result.length; i++) {
//     let sum=result[i] ** 2;
//     sum++;
//     if (sum == 1) {
//       console.log(sum, "I am happy");
//       break;
//     } else {
//       console.log(sum,"I am not happy");
//       happyNumber(sum);
//     }
//   }
// }
// happyNumber(19);

for (let i = 10; i <= 25; i++) {
    let result = String(i).split("");
    let sum = 0;
    for (let index = result.length - 1; index >= 0; index--) {
      sum += result[index] ** 2;
    }
    if (sum == 1) {
      console.log(i);
    } else {
      // happyNumber();
    }
  }
  
  // function happyNumber() {
  //   let resultSum = String(sum).split("");
  //   let subSum = 0;
  //   for (let ind = resultSum - 1; ind >= 0; ind--) {
  //     subSum += resultSum[ind] ** 2;
  //   }
  // }
  // const num=19;
  
  // let myArr = String(num).split("");
  
  // console.log(myArr);
  
  