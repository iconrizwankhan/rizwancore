function showForm() {
  document.getElementById("form-div").style.visibility = "visible";
  document.getElementById("form-div").style.opacity = "1";
}
function closeForm() {
  document.getElementById("form-div").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("form-div").style.display = "hidden";
  }, 400);
}
function addNow() {
  let inputText = document.getElementById("input-text");
  let addedText = document.getElementById("added-text");

  let paraLine = document.createElement("p");

  let input = document.createElement("li");
  input.innerText = inputText.value;

  let delbtn = document.createElement("button");
  delbtn.type = "button";
  delbtn.innerText = "Delete";

  let editbtn = document.createElement("button");
  editbtn.type = "button";
  editbtn.innerText = "Edit";

  paraLine.append(input, " ", editbtn, " ", delbtn);
  addedText.append(paraLine);
  inputText.value = "";

  delbtn.addEventListener("click", () => {
    paraLine.remove();
  });

  editbtn.addEventListener("click", () => {
    inputText.value = input.innerText; // Populate input field with current text
    editbtn.disabled = true; // Disable edit button to prevent multiple edits

    //   inputText.focus(); // Optional: focus on the input field

    inputText.addEventListener("keyup", function updateText(event) {
      if (event.key === "Enter") {
        // Press Enter to confirm edit
        input.innerText = inputText.value;
        editbtn.disabled = false;
        inputText.removeEventListener("keyup", updateText);
      }
    });
  });
}
