(function($) {
    $('.navbar__search-btn').on('click load', function () {
        $('.navbar__search').toggleClass('navbar__search--open');
    });
    ///////////////////////////
	// On Scroll
    $(window).on('scroll load resize', function () {
        var wScroll = $(this).scrollTop();

        if (window.innerWidth >= 769) {
            wScroll > 1 ? $('#nav').addClass('fixed') : $('#nav').removeClass('fixed');
        } else {
            window.innerWidth <= 768 ? $('#nav').addClass('fixed') : $('#nav').removeClass('fixed');
        }
    });
    ///////////////////////////
    // sliders
    $('#home-slider').slick({
        arrows: false,
        dots: true,
        dotsClass: 'dots dots-b'
    });

    $('#reviews-slider').slick({
        slidesToShow: 2,
        arrows: false,
        dots: true,
        dotsClass: 'dots dots-a',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    ///////////////////////////
    // Mmen basket
    // Mmenu.configs.offCanvas.page.selector = "#page";

    document.addEventListener("DOMContentLoaded", () => {
        new Mmenu( "#basket-shop", {
            "offCanvas": true,
            "extensions": ["position-right"],
            "navbar": {
                'title' : 'Корзина'
            }
        });
    });
    document.addEventListener("DOMContentLoaded", () => {
        new Mmenu( "#navbar-categories", {
            "offCanvas": true,
            "extensions": ["position-left"],
            "navbar": {
                'title' : 'Категории товаров'
            }
        });
    });

    $('.slider-single').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        responsive: [{
            breakpoint: 768,
            settings: {
                asNavFor: null,
                dots: true,
                dotsClass: 'single-dots'
            }
        }],
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        // centerMode: true,
        asNavFor: '.slider-single',
        dots: false,
        focusOnSelect: true,
        arrows: false,
        // prevArrow: '<button type="button" class="single-arrow single-arrow-prev"><svg viewBox="0 0 18 10" id="icon_arrow" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 1.01c0-.24-.08-.48-.23-.67-.33-.41-.9-.45-1.27-.08L8.99 7.68 1.49.26C1.12-.11.55-.07.22.34c-.33.42-.3 1.05.07 1.42L8.4 9.77c.34.34.85.34 1.19 0l8.1-8.01c.2-.2.31-.48.31-.75z"></path></svg></button>',
        // nextArrow: '<button type="button" class="single-arrow single-arrow-next"><svg viewBox="0 0 18 10" id="icon_arrow" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 1.01c0-.24-.08-.48-.23-.67-.33-.41-.9-.45-1.27-.08L8.99 7.68 1.49.26C1.12-.11.55-.07.22.34c-.33.42-.3 1.05.07 1.42L8.4 9.77c.34.34.85.34 1.19 0l8.1-8.01c.2-.2.31-.48.31-.75z"></path></svg></button>',
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }]
    });

    $(window).on("resize", function(e) {
        e.preventDefault();
        if (window.innerWidth <= 768) {
            $('.slider-nav').slick('unslick');
            // sliderIsLive = false;
        }
        else {
            if (sliderIsLive) {
                $('.slider-nav').slick();
                // sliderIsLive = true;
            }
        }
    });
    // $(".slider-single").on("afterChange", function (event, slick, currentSlide) {
    //     $(".slider-nav").slick("slickGoTo", currentSlide);
    //     var currrentNavSlideElem =
    //         '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    //     $(".slider-nav .slick-slide.is-active").removeClass("is-active");
    //     $(currrentNavSlideElem).addClass("is-active");
    // });
    // $(".slider-nav").on("click", ".slick-slide", function (event) {
    //     event.preventDefault();
    //     var goToSingleSlide = $(this).data("slick-index");

    //     $(".slider-single").slick("slickGoTo", goToSingleSlide);
    // });
})(jQuery);