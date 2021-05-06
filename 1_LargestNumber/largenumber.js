function init(){
    let number1 = document.getElementById('inputNumber1').value;
    let number2 = document.getElementById('inputNumber2').value;
    let number3 = document.getElementById('inputNumber3').value;

    document.getElementById('output').value = max_Number(number1,number2,number3);
}
//this function is used to find maximumNumber in given arguments
function max_Number(num_1,num_2,num_3){
    let largestNumber = num_1;
    if(largestNumber<num_2){
        largestNumber = num_2;
    }
    if(largestNumber<num_3){
        largestNumber = num_3
    }
        return largestNumber;
}

function reSet(){
    document.getElementById('myForm').reset();
}