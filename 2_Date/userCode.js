function init(){
    let date_of_birth = new Date(document.getElementById('date').value);
    let present_Date = new Date();
    let age = present_Date.getFullYear() - date_of_birth.getFullYear();
    if(age>=18 && age<=44){
        window.open("https://selfregistration.cowin.gov.in");
    }else{
        document.getElementById('message').innerHTML="Your are "+age+" Years old <br> Sorry!!! You are unable to access Covid wesite."
    }
}

function reSet(){
    document.getElementById('myForm').reset();
}