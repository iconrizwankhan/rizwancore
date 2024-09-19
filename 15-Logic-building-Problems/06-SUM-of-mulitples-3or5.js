function main() {
  var num = parseInt(readLine());
  let sum = 0;
  if (num < 3) {
    return "";
  } else {
    for (let i = 1; i < num; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
        sum += i;
      }
    }
    return sum;
  }
}
