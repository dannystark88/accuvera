$(document).ready(function () {
    $('.logo').fadeIn(800);
    
           $(window).scroll(function(){
               if($(window).scrollTop()>0){
                   
                   $('#top-header').slideUp();
                   $('#header-nav').css("position","fixed");
                   $('#header-nav').css("top","0");
                  
               }
               else{
                   $('#header-nav').css("position","relative");
                   $('#top-header').slideDown(300);
               }
               
           });
});