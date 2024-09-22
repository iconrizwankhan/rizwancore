/* https://www.hackerrank.com/challenges/diagonal-difference/problem
1 2 3
4 5 6
9 8 9  
The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .
*/
import matrixInput from "../../08-Matrices/02-matrices-&-create.js";

function main() {
  const matrix = matrixInput();
  console.log("Entered matrix is",matrix);
  if (matrix.length !== matrix[0].length)
    return console.log("matrix is not a sqaure");
  let lefdiagSum = 0,
    rightdiagSum = 0;
  for (let i = 0, j = matrix.length - 1; i < matrix.length, j >= 0; i++, j--) {
    lefdiagSum += matrix[i][i];
    rightdiagSum += matrix[i][j];
    // console.log("ij", matrix[i][j], "ii", matrix[i][i]);
  }
  return console.log(Math.abs(lefdiagSum-rightdiagSum));
}

main();
