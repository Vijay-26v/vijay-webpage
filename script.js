$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
    });

    $(Window).on('load scroll',function(){
        $(menu).removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle')


    });

});
