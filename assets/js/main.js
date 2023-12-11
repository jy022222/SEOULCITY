//visual
$('.sc_visual .group_nav li a').click(function (e) {
    e.preventDefault();
    tab = $(this).data('tab');
    $(this).parent().addClass('on').siblings().removeClass('on');
    $(tab).addClass('on').siblings().removeClass('on');
})

var visualSlider = new Swiper('.visual_slider', {
    slidesPerView: '1',
    autoplay: {
        speed: 3000,
    },
    loop: true,
    navigation: {
        nextEl: ".sc_visual .swiper-button-next",
        prevEl: ".sc_visual .swiper-button-prev",
    },
    pagination: {
        el: ".sc_visual .swiper-pagination",
        type: "fraction",
    },
});
$('.visual_slider .btn_pause').click(function () {
    $(this).hide();
    $('.visual_slider .btn_play').show();
    visualSlider.autoplay.stop();
})
$('.visual_slider .btn_play').click(function () {
    $(this).hide();
    $('.visual_slider .btn_pause').show();
    visualSlider.autoplay.start();
})

//popup
var popup_slider = new Swiper('.popup_slider', {
    slidesPerView: 'auto',
    loop: true,
    autoplay: true,
    navigation: {
        nextEl: ".sc_banner .swiper-button-next",
        prevEl: ".sc_banner .swiper-button-prev",
    },
    pagination: {
        el: ".sc_banner .swiper-pagination",
        type: "fraction",
    },
});
$('.popup_slider .btn_pause').click(function () {
    $(this).hide();
    $('.popup_slider .btn_play').show();
    popup_slider.autoplay.stop();
})
$('.popup_slider .btn_play').click(function () {
    $(this).hide();
    $('.popup_slider .btn_pause').show();
    popup_slider.autoplay.start();
})

//relate
$('.sc_relate .relate_list .sub_list').hide();
$('.sc_relate .relate_list button').click(function () {
    $(this).removeClass('on')
    if ($(this).next().css('display') == "none") {
        $('.sc_relate .relate_list .sub_list').slideUp();
        $(this).addClass('on');
        $(this).parent().siblings().children('button').removeClass('on')
    }
    $(this).next().slideToggle();
});

//탑버튼
$(window).scroll(function () {
    var window1 = $(this).scrollTop();
    if (window1 >= 100) {
        $('.btn_top').addClass('show');
    } else {
        $('.btn_top').removeClass('show');
    }
});

$(".btn_top").click(function () {
    $('body, html').animate({
        scrollTop: ($('header').offset().top)
    }, 400);
});
