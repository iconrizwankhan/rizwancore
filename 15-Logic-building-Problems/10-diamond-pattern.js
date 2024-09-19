/*       1
        121
       12321
      1234321
     123454321
    12345654321
   1234567654321
  123456787654321
 12345678987654321
  123456787654321
   1234567654321
    12345654321
     123454321
      1234321
       12321
        121
         1        */

let num2 = "",
  num1 = "";
for (var i = 1; i <= 9; i++) {
  num1 += i;
  num2 = i + num2;
  var num = "";
  for (var j = 1; j <= 9 - i; j++) {
    num += " ";
  }
  console.log(num + num1 + num2.substring(1));
}
let s = "";
for (let ss = 1; ss <= 8; ss++) {
  s = s + " ";
  let s1 = "",
    s2 = "";
  for (let count = 1; count <= 9 - ss; count++) {
    s1 = s1 + count;
    s2 = count + s2;
  }
  console.log(s + s1 + s2.substring(1));
}
//substring is used here to remove first value from s2 and num2.
