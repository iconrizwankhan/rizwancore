let text = document.createElement("input");
function displayTime() {
  var time = new Date().toLocaleTimeString();
  text.value = time;
  document.body.append(text);
}
setInterval(displayTime, 1000);

let inputTime = document.getElementById("input-time");
let addedTime = document.getElementById("alarm-time");
let addBtn = document.getElementById("btn-sbumit");

addBtn.addEventListener("click", () => {

    addedTime.innerText=inputTime.value;
    inputTime.value="";
    console.log(addedTime.innerText);
    console.log(text.value);    
});


