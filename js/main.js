
$(function(){

    $('#nav-menu-btn').on('click', function(){

        if($('#nav-menu').hasClass('open')){
            $('#nav-menu').removeClass('open');
        }else{
            $('#nav-menu').addClass('open');
        }
    });

    let startPos = 0;
    let scrollTopPos = 0;
    $(window).on('scroll', function(){
        scrollTopPos = $(this).scrollTop();
        if (scrollTopPos >= startPos) {
            $('#nav-bar').addClass('hide');
        } else {
            $('#nav-bar').removeClass('hide');
        }
        startPos = scrollTopPos;
    });

    $('.slider').slick({
        arrows: false,
        asNavFor: '.thumbnail'
    });

    $('.thumbnail').slick({
        asNavFor: '.slider',
        focusOnSelect: true,
        slidesToShow:5,
        slidesToScroll:1,
        centerMode: true
    });

});