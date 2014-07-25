$(document).ready(function() {
    $('#logo a').css('display', 'none');
    
    // article height fix
    $('#home article').css('height', $('#home').height());
    $('#about article').css('height', $('#about').height());
    $('#contact article').css('height', $('#contact').height());
    
    // scroll animation when user clicks on header
    $('a[href^="#"]').click(function () {
        $('html, body').animate({
            scrollTop:  $(this.hash).offset().top
        }, 400);
        return false;
        e.preventDefault();
    });
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
        $('#home article').fadeOut(250);
    } else {
        $('#home article').fadeIn(300);
    }
    
   if ($(this).scrollTop() >= 300) {
       $('#logo a').slideDown(400);
       if ($(window).width() < 1024) {
           $('nav li:not([id])').slideUp(400);
       }
   } else {
       $('#logo a').slideUp(400);
       if ($(window).width() < 1024) {
           $('nav li:not([id])').slideDown(400);
       }
   }
});