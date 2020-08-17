"use strict";
(function($) {
    $('.navbar__search-btn').on('click load', function () {
        $('.navbar__search').toggleClass('navbar__search--open');
    })
    ///////////////////////////
	// On Scroll
    $(window).on('scroll load resize', function () {
        let wScroll = $(this).scrollTop();

        wScroll > 1 ? $('#nav').addClass('fixed') : $('#nav').removeClass('fixed');
        this.innerWidth <= 768 ? $('#nav').addClass('fixed') : $('#nav').removeClass('fixed');
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
    Mmenu.configs.offCanvas.page.selector = "#page";

    document.addEventListener(
        "DOMContentLoaded", () => {
            new Mmenu( "#basket-shop", {
                "offCanvas": true,
                "extensions": ["position-right"],
                "navbar": {
                    'title' : 'Корзина'
                }
            });
            new Mmenu( "#navbar-categories", {
                "offCanvas": true,
                "extensions": ["position-left"],
                "navbar": {
                    'title' : 'Категории товаров'
                }
            });
        }
    );

})(jQuery);