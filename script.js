let prefixInput = document.getElementById("prefixInput");
let suffixInput = document.getElementById("suffixInput");

let editableTextArea = document.getElementById("editableTextArea");
let resultTextArea = document.getElementById("resultTextArea");

let goButton = document.getElementById("goButton");
goButton.addEventListener("click", generateResultText);

let copyButton = document.getElementById("copyButton");
copyButton.addEventListener("click", copyToClipboardAction);

function generateResultText() {
  let lines = editableTextArea.value.split("\n");

  let result = "";

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    let lineResult = prefixInput.value + line + suffixInput.value;
    result += lineResult;

    if (i != lines.length - 1) {
      result += "\n";
    }
  }
  resultTextArea.value = result;
}

function copyToClipboardAction() {
  resultTextArea.select();
  document.execCommand("copy");
  alert("Kopioitu teksti:\n" + resultTextArea.value);
}
