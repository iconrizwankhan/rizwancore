function convert(fontFam) {
    let oldText = document.getElementById("input-text").value;
    // let fontSelected=document.getElementById("font-select").value;
    let convertedText = document.getElementById("output-text");
    convertedText.value = oldText;
    convertedText.style.fontFamily = fontFam;
}
function resetText() {
    document.getElementById("text-form").reset();
} 