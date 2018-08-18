function login(){
    document.getElementById('Login-box').style.visibility="visible";
    document.getElementById('main-container').style.opacity="0.3";
}

function close_login(){
    document.getElementById('Login-box').style.visibility="hidden";
    document.getElementById('main-container').style.opacity="1";
}

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
        document.getElementById('Update-box').style.visibility="visible";
        document.getElementById('Login-box').style.visibility="hidden";
        document.getElementById('main-container').style.opacity="0.3";
    }
    else{
        alert("Invalid Credentials!!??");
    }
    return false;
}

function close_update(){
    document.getElementById('Update-box').style.display="none";
    document.getElementById('main-container').style.opacity="1";
}

function update(){
    var pl_name=document.getElementById("name").value;
    var uid=document.getElementById("UID").value;
    var contact=document.getElementById("contact_no").value;
    var fix_round=document.getElementById("rounds").value;
    var pl_no=document.getElementById("players").value;
    console.log(fix_round+" "+pl_no);
    document.getElementById(fix_round+"-"+pl_no).innerHTML=pl_name+"<br/>"+uid+"<br/>"+contact;
    return false;
}