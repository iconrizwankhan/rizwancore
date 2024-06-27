//------------conditons(if-else-else if)------------------------------

var marks = 400;
if (marks>450){
    console.log("AA");              //prints when variable marks is set to 460 
} else if (marks> 400 & marks<=450){
    console.log("AB,BB,BC,CC,CD,DD");              //prints when variable marks is set to range from 401 to 450
} else if (marks<=400){
    console.log("FF");              //prints when variable marks is set to range from 401 to 450
} else {
    console.error("Result not declared yet");
}
//-----------------------------------------------------------

var transactionType="credit", a = 1000, b = 700;
if (transactionType=="credit") {
    calc=a+b;
    console.log("Amount Credited:",calc); //prints when variable transactionType is set to "credit"
} else if (transactionType=="debit") {
    calc=a-b;
    console.log("Amount Debited:",calc); //prints when variable transactionType is set to "debit"
} else {
    console.log("transaction failed");
}