function createTable() {
    console.log("yes I got clicked");
    let tab = document.createElement("table");
    tab.style.border = "1px solid blue";
    tab.style.marginLeft = "auto";
    tab.style.marginRight = "auto";
    let caption = document.createElement("caption");
    caption.style.border = "1px solid blue";
    caption.innerText = "Dynamic Table by DOM";
    tab.appendChild(caption);
    let rows = document.getElementById("row").value;
    console.log(rows);
    let columns= document.getElementById("column").value;
    console.log(columns);
    let number = 1;
    for (let index = 1; index <= rows; index++) {
      let tr = document.createElement("tr");
      for (let j = 1; j <= columns; j++) {
        let td = document.createElement("td");
        td.style.border = "1px solid red";
        td.innerText = number;
        tr.appendChild(td);
        number++;
      }
      tab.appendChild(tr);
      document.body.appendChild(tab);
    }
  }
// createTable();

//
