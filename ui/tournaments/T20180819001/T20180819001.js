function login(){
    document.getElementById('Login-box').style.display="block";
    document.getElementById('main-container').style.opacity="0.3";
}

function close_login(){
    document.getElementById('Login-box').style.display="none";
    document.getElementById('main-container').style.opacity="1";
}

var user_credentials=("Afrid","Ashfaque");
var password_credentials=("Avada_Kedavra","Expelliarmus");

var credentials={
    Afrid:"Avada_Kedavra",
    Ashfaque:"Expelliarmus"
};

function Login_permit(){
    var usrname=document.getElementById('usrname').value;
    var pwd=document.getElementById('pwd').value;
    var check;
    var c=0;
    for(check in credentials){
        if(check===usrname){
            if(credentials[check]===pwd){
                c=0;
                break;
            }
            else{
                c=-1;
                break;
            }
        }
        else{
            c=-1;
        }
    }
    
    if(c===0){
        document.getElementById('Update-box').style.display='block';
        document.getElementById('Login-box').style.display="none";
        document.getElementById('main-container').style.opacity="0.3";
    }
    else{
        alert("Invalid Credentials!!??");
    }
}

function close_update(){
    document.getElementById('Update-box').style.display="none";
    document.getElementById('main-container').style.opacity="1";
}