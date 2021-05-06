function celsious(){
    let userinput_celcious = document.getElementById('celsious').value;
    celsious_to_fahrenheit(userinput_celcious);
}
function celsious_to_fahrenheit(celsius) {
  var c_temp = celsius;
  var c_to_fahr = c_temp * 9 / 5 + 32;
  document.getElementById('fahrenheit').value = c_to_fahr;
}

function fahrenheit(){
    let useriput_fahrenheit = document.getElementById('fahrenheit1').value;
    fahrenheit_to_celsious(useriput_fahrenheit);
}
function fahrenheit_to_celsious(fahrenheit) {
  var f_temp = fahrenheit;
  var f_to_cel = (f_temp - 32) * 5 / 9;
  document.getElementById('celsious1').value = f_to_cel;
}