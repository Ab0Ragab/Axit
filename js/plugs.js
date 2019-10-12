/*global $, document, window,*/
//Start reduce opacity Nav when make Scroll
$(document).ready(function () {
    
     //nice scroll
    "use strict";
    $("html").niceScroll();
    
      //smooth scroll to div
    
    $('.nav li a').click(function () {
        
       
        $('html, body').animate({
            
            scrollTop: $('#' + $(this).data('value')).offset().top
            
        }, 1000);
        
    });
   
    
    var nav = $(".navbar");
    $(window).scroll(function () {
        if ($(window).scrollTop() >= nav.height()) {
            nav.addClass("scrolled");
        } else {
            nav.removeClass("scrolled");
        }
    });
    
    //deal with tabs
    $('.tab-switch li').click(function () {
        
        //add selected class to active link
        $(this).addClass('selected').siblings().removeClass('selected');
        
        //hide all divs
        $('.tabs .tabs-content > div').hide();
        
        //show div conect to active link
        $('.' + $(this).data('class')).show(); //'.' to access the class
    });
});

//loading screen
$(window).load(function () {
    
    "use strict";
    
    $(".loding-overlay .spinner").fadeOut(2000, function () {
        
       //show the scroll 
        
        $("body").css("overflow", "auto");
        $(this).parent().fadeOut(2000, function () {
            
            $(this).remove();
            
        });
        
    });
    
});