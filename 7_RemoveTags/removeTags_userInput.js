function init(){
var user_html = document.getElementById('userInput').value;
var div = document.createElement("div");
div.innerHTML = user_html;
document.getElementById('output').innerText = div.innerText;
}

function reSet(){
    document.getElementById('myForm').reset();
}