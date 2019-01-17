let welcome = $('.welcome_screen').height() / 2;

$(window).scroll(function () {
    if ($(document).scrollTop() >= welcome) {

        $(".scroll_top").css({
            "opacity": "1"
        });
        $(".mask").css({
            "opacity": "1"
        });


    } else {

        $(".scroll_top").css({
            "opacity": "0"
        });
        $(".mask").css({
            "opacity": "0"
        });

    }
});