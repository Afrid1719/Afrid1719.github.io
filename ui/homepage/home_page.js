var count = false;
$(".menu-items").hide();
$("#menu-box").click(function(){
  $(".menu-items").toggle(50);
  if(count === false){
    count = true;
    $(".header").css("opacity","0.55"); 
  }
  else
    {
      count = false;
      $("header").css("opacity","1");
    }
});
