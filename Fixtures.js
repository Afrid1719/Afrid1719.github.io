
function show_video(){
    
    var frame=document.getElementById("video-frame");
    frame.style.display="block";
    frame.style.animation="video-pop 1s ease";
    frame.style.width="100%";
    frame.style.height="60%";
    var vid_src="https://www.youtube.com/embed/cqnotjll3mg"; //source for the video
    document.getElementById('vid').style.display="block";
    document.getElementById('vid').src=vid_src; //will add the source after the animation
    
}