/*It will contain the source of the videos with match number*/
var vid_pair={
                r1:"https://www.youtube.com/embed/JbRQYf1oLbE?ecver=2",
                r2:"",
                r3:"",
                r4:"",
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
                pq1:"https://www.youtube.com/embed/9CE8P0ObW5k",
                pq2:"",
                pq3:"",
                pq4:"",
                pq5:"https://www.youtube.com/embed/lmPrfIUs7gU",
                pq6:"",
                pq7:"",
                pq8:"",
                q1:"https://www.youtube.com/embed/icHBST_xRgY",
                q2:"",
                q3:"",
                q4:"",
                sf1:"",
                sf2:"",
                final:"",
                third:"",
};

function show_video(id){
    var source=""; //source for the video
    var c;
    for(c in vid_pair)
    {
        if(c==id)
        {
            source+=vid_pair[c];
            break;
        }
    }
    if(source==="")
    {
        alert("Sorry,no video uploaded for this match");
    }
    else
    {
        var frame=document.getElementById("video-frame");
        frame.style.display="block";
        frame.style.width="100%";
        frame.style.height="60%";
        document.getElementById('vid').style.display="block";
        document.getElementById('vid').src=source; //it will add the source 
        document.getElementById("main-container").style.opacity="0.45";
    }

}

function close_frame(){
    document.getElementById('video-frame').style.display="none";
    document.getElementById("main-container").style.opacity="1";
}