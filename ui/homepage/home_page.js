function home()
{
    document.getElementById("Tournaments").style.display='none';
    document.getElementById("Contact").style.display='none';
    document.getElementById("Home").style.display='block';
    document.getElementById("pic-container").style.display='flex';
}

function tournaments()
{
    document.getElementById("Contact").style.display='none';
    document.getElementById("Home").style.display='none';
    document.getElementById("pic-container").style.display='none';
    document.getElementById("Tournaments").style.display='block';
}

function contact()
{
    document.getElementById("Home").style.display='none';
    document.getElementById("pic-container").style.display='none';
    document.getElementById("Tournaments").style.display='none';
    document.getElementById("Contact").style.display='block';
}