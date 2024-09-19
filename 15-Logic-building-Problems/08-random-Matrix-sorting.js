import matrixInput from "../../08-Matrices/02-matrices-&-create.js";
import formatMatrix from "../../08-Matrices/04-format-matrix.js";
let index = 0;
const arr = matrixInput();
let arr1D = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    arr1D.push(arr[i][j]);
  }
}
// console.log(arr1D);
let temp;
for (let i = 0; i < arr1D.length; i++) {
  for (let j = 0; j < arr1D.length - 1 - i; j++) {
    if (arr1D[j] > arr1D[j + 1]) {
      temp = arr1D[j];
      arr1D[j] = arr1D[j + 1];
      arr1D[j + 1] = temp;
    }
  }
}
// console.log(arr1D);
let row=arr.length, col=arr[index].length;
const sortedMatrix=[];
// console.log(sortedMatrix);
for (let i = 0; i < row; i++) {
    const rowMatrix=[];
    for (let j = 0; j < col; j++){
        rowMatrix.push(arr1D[index]);
        index++;
    }
    // console.log(rowMatrix);
    sortedMatrix.push(rowMatrix);
}
formatMatrix(sortedMatrix);