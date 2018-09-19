$(document).ready(function(){

  $("#nav-portfolio").click(function(){
    $('html, body').animate({
       scrollTop: $("#portfolio").offset().top
   }, 1000);
  });

  $("#nav-about").click(function(){
    $('html, body').animate({
       scrollTop: $("#about").offset().top
   }, 1000);
  });


  $("#nav-footer").click(function(){
    
    $('html, body').animate({
       scrollTop: $("#footers").offset().top
   }, 1000);

  });

});
