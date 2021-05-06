let input = "Please enter a number";
let range = "please enter within range of 50-100";
function init(){
   let user_input = show(input);
   user_input = success(check(user_input));
    
}
function show(input){
  return  Number(prompt(input))
}
function check(user_input){
    
     if(user_input== 0||user_input==null||user_input==undefined||isNaN(user_input)){
       check(user_input = show(input));
    }else{
        return user_input;
    }
}
function success(input){
    if(input>=50 && input<=100){
        alert(input+' is within the range...');
    }else{
        success(check(show(range)));
    }
}