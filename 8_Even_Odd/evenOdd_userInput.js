function init(){
    let output="";
    for(let number = 20; number<=30; number++){
        if(number%2==0){
            output += '"'+ number +' is even"<br>';
        }else{
            output += '"'+ number +' is odd"<br>';
        }
    }
    setTimeout(()=>document.getElementById('value').innerHTML = output,500)
}

init();