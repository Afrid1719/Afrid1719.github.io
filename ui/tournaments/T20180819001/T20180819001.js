function login(){
    document.getElementById('Login-box').style.display="block";
    document.getElementById('main-container').style.opacity="0.3";
}

function close_form(){
    document.getElementById('Login-box').style.display="none";
    document.getElementById('main-container').style.opacity="1";
}

var user_credentials=("Afrid","Ashfaque");
var password_credentials=("Avada_Kedavra","Expelliarmus");

function Login_permit(){
    var usrname=document.getElementById('usrname').value;
    var pwd=document.getElementById('pwd').value;
    for(var i=0;i<2;i++)
    {
        if((user_credentials[i]===usrname) && (password_credentials[i]===pwd))
        {
            document.getElementById('Update-box').style.display='block';
            document.getElementById('Login-box').style.display="none";
            document.getElementById('main-container').style.opacity="0.3";
            break;
        }
        else if(i==1)
        {
            if((user_credentials[i]!==usrname) || (password_credentials!==pwd))
            {
                alert("Invalid Credentials!!??");
                break;
            }
        }
    }
}

function close_update(){
    document.getElementById('Update-box').style.display="none";
    document.getElementById('main-container').style.opacity="1";
}