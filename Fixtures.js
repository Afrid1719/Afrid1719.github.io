
function show_video(){
    
    var frame=document.getElementById("video-frame");
    frame.style.display="block";
    frame.style.width="100%";
    frame.style.height="60%";
    var vid_src="https://www.youtube.com/embed/cqnotjll3mg"; //source for the video
    document.getElementById('vid').style.display="block";
    document.getElementById('vid').src=vid_src; //it will add the source 
    document.getElementById("main-container").style.opacity="0.45";

}

function close_frame(){
    document.getElementById('video-frame').style.display="none";
    document.getElementById("main-container").style.opacity="1";
}