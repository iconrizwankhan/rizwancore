import readlineSync from "readline-sync";
let floors = readlineSync.question(`Enter a floor number (1 - 10) or "q" to quit: `);

function elevatorMovement(floor) {
if (floor == "q") {
} 
else {
  setTimeout(() => {
    console.log("Request added for floor:", floor);
  }, 500);

  if (floor >= 1 && floor <= 10) {
    for (let i = 1; i <= floor - 1; i++) {
      setTimeout(() => {
        console.log("Elevator at Floor", i + 1);
      }, i * 1500);      
    }
     setTimeout(() => {
        console.log("Opening doors at floor",floor);
     }, floor*1500); 

     setTimeout(() => {
        console.log("Closing doors at floor",floor);
     }, floor*2000);    
  } else if (floor > 10 || floor < 1 || floor != "q") {
    setTimeout(() => {
      console.log("Elevator works for floor 1 to 10 only");
    }, 1000);
  }
}
}
elevatorMovement(floors);