$(document).ready(function() {

    $('.main_btn, .main_btna, a[href="#sheldure"]').on('click', function(){

        $('.overlay').fadeIn(1000);
        $('.modal').slideDown(1000);

    });

    $('.close').on('click', function() { 
        $('.modal').slideUp(500);
        $('.overlay').fadeOut(500);
     });

});