function addNow() {
    let inputText= document.getElementById("input-text");
    let addedText = document.getElementById("added-text");

    let paraLine=document.createElement("p");
    // paraLine.setAttribute('id','added-line');

    let delbtn=document.createElement("button");
    delbtn.type="button";
    delbtn.innerText="Delete";
    // delbtn.setAttribute('id',"btn-del");

    paraLine.append(inputText.value,delbtn);
    addedText.append(paraLine);
    inputText.value="";

    // let button = document.getElementById("btn-del");
    delbtn.addEventListener("click", () => {
        console.log("I am clicked");
        paraLine.remove();
      });
}