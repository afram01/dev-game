$('.header__hambur').click(function(){
    $(".sidebar").animate({
        left: 0
    }, 600);
    $("html").css("overflow", "hidden");
});

$('.sidebar__close').click(function(){
    $(".sidebar").animate({
        left: "-75rem"
    }, 600);

    $("html").css("overflow", "scroll");
});