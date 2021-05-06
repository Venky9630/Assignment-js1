function init(){
let userInput = document.getElementById('userInput').value;
let newString = '';
let length = userInput.length;
for(var count=length-1; count>=0; count--){
    newString+=userInput[count];
}
if(userInput==newString){
    document.getElementById('output').innerHTML = "the given input is a palindrome!!!<br>"+newString
}else{
    document.getElementById('output').innerHTML = "the given input is not palindrome!!!<br>"+newString
}
}