function printFibonacci(n) {
    let prev = 0,
      curr = 1,
      sum = 0, sumOfEvenFib=0;
    for (let i = 1; i <= n; i++) {
      sum = prev + curr;
      prev = curr;
      curr = sum;
      if (sum % 2 == 0 && sum < n) {
        sumOfEvenFib +=sum;    }
    }
  console.log(sumOfEvenFib);
  }
  printFibonacci(100);