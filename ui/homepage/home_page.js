function home()
{
    document.getElementById("Tournaments").style.display='none';
    document.getElementById("Contact").style.display='none';
    document.getElementById("Home").style.display='block';
}

function tournaments()
{
    document.getElementById("Contact").style.display='none';
    document.getElementById("Home").style.display='none';
    document.getElementById("Tournaments").style.display='block';
}

function contact()
{
    document.getElementById("Home").style.display='none';
    document.getElementById("Tournaments").style.display='none';
    document.getElementById("Contact").style.display='block';
}