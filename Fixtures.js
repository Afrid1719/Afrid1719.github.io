/*It will contain the source of the videos with match number*/
var vid_pair={
                r1:"abc.com",
                r2:"bcd.com",
                r3:"cde.com",
                r4:"def.com",
                r5:"",
                r6:"",
                r7:"",
                r8:"",
                r9:"",
                r10:"",
                r11:"",
                r12:"",
                r13:"",
                r14:"",
                r15:"",
                r16:"",
                pq1:"",
                pq2:"",
                pq3:"",
                pq4:"",
                pq5:"",
                pq6:"",
                pq7:"",
                pq8:"",
                q1:"",
                q2:"",
                q3:"",
                q4:"",
                sf1:"",
                sf2:"",
                final:"",
};

function show_video(id){
    var source="";
    var c;
    for(c in vid_pair)
    {
        if(c==id)
        {
            source+=vid_pair[c];
            break;
        }
    }
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