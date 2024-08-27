const alpha = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
  "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
  "U", "V", "W", "X", "Y", "Z"
];
let form = document.createElement("form");
form.setAttribute("id", "input-form");
let table = document.createElement("table");
let trh = document.createElement("tr");
let thArray = [];
for (let index = 0; index <= alpha.length; index++) {
  let thColumn = document.createElement("th");
  // thColumn.setAttribute("id", "column-header");
  thColumn.setAttribute("id", index === 0 ? "corner-header" : "column-header");
  if (index == 0) {
    thColumn.innerText = "";
  } else {
    thColumn.innerText = alpha[index - 1];
  }
  trh.appendChild(thColumn);
  thArray.push(thColumn);
}
console.log(thArray[1]);

table.appendChild(trh);
let thRowArrray = [];
for (let index = 1; index <= 100; index++) {
  let tr = document.createElement("tr")
  let thRow = document.createElement("th");
  thRow.setAttribute("id", "row-header");
  thRow.innerText = index;
  thRowArrray.push(thRow);
  tr.appendChild(thRow);
  for (let j = 0; j < alpha.length; j++) {
    let td = document.createElement("td");
    let input = document.createElement("input");
    input.setAttribute("id", "input-fields");
    td.appendChild(input);
    tr.appendChild(td);
  }
  table.appendChild(tr);
}
console.log(thRowArrray);

form.appendChild(table);
document.querySelector(".table-container").appendChild(form);
// document.body.appendChild(form);
const tables = document.querySelector("table");
const rows = document.querySelectorAll("tr");
const rowsArray = Array.from(rows);

let previousHighlightedColumnHeader = null;
let previousHighlightedRowHeader = null;

tables.addEventListener("click", (event) => {
  if (event.target.tagName === "INPUT") {
    const rowIndex = rowsArray.findIndex((row) => row.contains(event.target));
    const columns = Array.from(rowsArray[rowIndex].querySelectorAll("input"));
    const columnIndex = columns.findIndex((column) => column === event.target);
    if (rowIndex > 0 && columnIndex >= 0) {
      if (previousHighlightedColumnHeader) {
        previousHighlightedColumnHeader.style.backgroundColor = "";
      }
      if (previousHighlightedRowHeader) {
        previousHighlightedRowHeader.style.backgroundColor = "";
      }
      thArray[0].innerText = thArray[columnIndex + 1].innerText + rowIndex;
      thArray[columnIndex + 1].style.backgroundColor = "#7CC1D7";
      thRowArrray[rowIndex - 1].style.backgroundColor = "#7CC1D7";
      previousHighlightedColumnHeader = thArray[columnIndex + 1];
      previousHighlightedRowHeader = thRowArrray[rowIndex - 1];
    }
  }
});
function tableToCSV() {
  // console.log("i am clicked");
  let csvData = [];
  let rows = document.getElementsByTagName("tr");
  for (let i = 1; i < rows.length; i++) {
    let cols = rows[i].querySelectorAll("input");
    let csvRow = [];
    for (let j = 0; j < cols.length; j++) {
      csvRow.push(cols[j].value);
    }
    csvData.push(csvRow.join(","));
  }
  csvData = csvData.join("\n");
  downloadCSVFile(csvData);
}

function downloadCSVFile(csvData) {
  // console.log("i am called");
  let csvContent = "data:text/csv," + csvData;
  let tempLink = document.createElement("a");
  tempLink.href = csvContent;
  tempLink.download = "spreadsheet.csv";
  tempLink.style.display = "none";
  document.body.appendChild(tempLink);
  tempLink.click();
  document.body.removeChild(tempLink);
}
function resetText() {
  // console.log("i am trying to clear");
  document.getElementById("input-form").reset();
}
