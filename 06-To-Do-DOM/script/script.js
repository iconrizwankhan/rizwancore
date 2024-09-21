function showForm() {
  document.getElementById("modaloverlay").style.visibility = "visible";
  document.getElementById("modaloverlay").style.opacity = "1";
  document.body.style.overflow = "hidden";
}

function closeForm() {
  document.getElementById("form-input").reset();
  document.getElementById("modaloverlay").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("modaloverlay").style.visibility = "hidden"; // Use 'hidden' instead of 'none'
  }, 400);
  document.getElementById("btn-sbumit").innerText = "Add"; // Reset button text
  document.body.style.overflow = "auto";
}

let btnOpen = document.getElementById("show-form");
let userName = document.getElementById("user-name");
let userPassword = document.getElementById("user-password");
let userFullname = document.getElementById("user-fullname");
let userEmail = document.getElementById("user-email");
let userPhone = document.getElementById("user-phone");
let userTable = document.getElementById("table-body");

function addNow() {
  let userData = [
    userName.value,
    userPassword.value,
    userFullname.value,
    userEmail.value,
    userPhone.value,
  ];

  if (userData.includes("")) {
    alert("All fields are required.");
    return;
  }

  let tr = document.createElement("tr");
  for (let i = 0; i < userData.length; i++) {
    let td = document.createElement("td");
    td.innerText = userData[i];
    tr.appendChild(td);
  }

  let btnEdit = document.createElement("button");
  btnEdit.innerText = "Edit";
  btnEdit.style.backgroundColor="rgb(85, 88, 218)"

  let btnDelete = document.createElement("button");
  btnDelete.innerText = "Delete";
  btnDelete.style.backgroundColor="rgb(253, 29, 29)"

  let userActions = [btnEdit, btnDelete];

  for (let j = 0; j < userActions.length; j++) {
    let tdAction = document.createElement("td");
    tdAction.appendChild(userActions[j]);
    tr.appendChild(tdAction);
  }
  userTable.appendChild(tr);
  closeForm();

  //Delete Functionality
  btnDelete.onclick = function () {
    tr.remove();
  };
  //Edit Functionality
  btnEdit.onclick = function () {
    document.getElementById("btn-sbumit").innerText = "Update";
    document.getElementById("modaloverlay").style.visibility = "visible";
    document.getElementById("modaloverlay").style.opacity = "1";
    document.body.style.overflow = "hidden";
    userName.value = tr.children[0].innerText;
    userPassword.value = tr.children[1].innerText;
    userFullname.value = tr.children[2].innerText;
    userEmail.value = tr.children[3].innerText;
    userPhone.value = tr.children[4].innerText;

    btnEdit.disabled = true;
    btnDelete.disabled = true;
    btnOpen.disabled = true;

    document.getElementById("btn-sbumit").onclick = function updateRow() {
      if (
        [
          userName.value,
          userPassword.value,
          userFullname.value,
          userEmail.value,
          userPhone.value,
        ].includes("")
      ) {
        alert("All fields are required.");
        return;
      }

      tr.children[0].innerText = userName.value;
      tr.children[1].innerText = userPassword.value;
      tr.children[2].innerText = userFullname.value;
      tr.children[3].innerText = userEmail.value;
      tr.children[4].innerText = userPhone.value;

      btnEdit.disabled = false;
      btnDelete.disabled = false;
      btnOpen.disabled = false;
      document.getElementById("btn-sbumit").onclick = addNow;
      closeForm();
    };
  };
}