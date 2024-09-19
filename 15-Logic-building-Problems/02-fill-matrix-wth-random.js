const printRandom = (min, max) => {
    let randomNum = Math.floor(Math.random() * (max-min + 1) + min);
    return randomNum;
  };
  // printRandom(1,10)
  
  import readlineSync from "readline-sync";
  const row = readlineSync.questionInt("Enter no of rows: ");
  const col = readlineSync.questionInt("Enter no of cols: ");
  console.log(`The Order of the matrix is ${row} x ${col}`);
  
  const matrix = new Array(row);
    for (let i = 0; i < matrix.length; i++) {
      matrix[i] = new Array(col); 
    }
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        matrix[i][j] = printRandom(0, 10);
      }
    }
  console.log(matrix);