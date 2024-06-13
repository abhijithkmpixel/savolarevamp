$(document).ready(function () {
    $('#header__search__toggle').click(function () {
        $('.header__search ').addClass('header__search--active')
    })
    $(document).click(function () {
        var $trigger = document.querySelector(
            ".header__search "
        );
        if (
            $trigger == event.target
            || $trigger.contains(event.target)
        ) {
        } else {
            $('.header__search').removeClass('header__search--active')
        }
    });
    $('#accessibility__menu__toggle').click(function () {
        $('.accessibility-menu ').toggleClass('active')
    })
    $('#hamburger__menu__toggle').click(function () {
        $('body ').toggleClass('hamburger__menu__toggle__active')
        $($(this)).toggleClass('is-active')
    })
    if (window.innerWidth < 1200) {
        $('.has__sub__menu').click(function (e) {
            e.stopPropagation();
            var isActive = $(this).hasClass('sub__menu__active');
            $(".has__sub__menu").removeClass('sub__menu__active');
            if (!isActive) {
                $(this).addClass('sub__menu__active');
            }
        });
    }

    $('.timeline__and__history__primary__slider .timeline__and__history__primary__slide__item .timeline__and__history__primary__slide__item__wrap .timeline__and__history__primary__slide__item__content .timeline__and__history__primary__slide__item__accordian__wrap .timeline__and__history__primary__slide__item__accordian__item .timeline__and__history__primary__slide__item__accordian__button').click(function (e) {
        e.stopPropagation();

        var isActive = $(this).closest('.timeline__and__history__primary__slide__item__accordian__item').hasClass('timeline__and__history__primary__slide__item__accordian__item--active');

        $(".timeline__and__history__primary__slider .timeline__and__history__primary__slide__item .timeline__and__history__primary__slide__item__wrap .timeline__and__history__primary__slide__item__content .timeline__and__history__primary__slide__item__accordian__wrap .timeline__and__history__primary__slide__item__accordian__item .timeline__and__history__primary__slide__item__accordian__button").closest('.timeline__and__history__primary__slide__item__accordian__item').removeClass('timeline__and__history__primary__slide__item__accordian__item--active');

        if (!isActive) {
            $(this).closest('.timeline__and__history__primary__slide__item__accordian__item').addClass('timeline__and__history__primary__slide__item__accordian__item--active');
        }
    });

    $('.hero__banner__homepage__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        swipeToSlide:true,
        rtl: $('html').attr('dir') == 'ltr' ? false : true
    });
    $('.timeline__and__history__primary__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        pauseOnFocus: false,
        // fade:true,
        pauseOnHover: false,
        swipeToSlide: true,
        asNavFor: '.timeline__year__slider',
        rtl: $('html').attr('dir') == 'ltr' ? false : true
    });
    $('.timeline__year__slide__item').each(function () {
        $(this).wrap('<div class="timeline__year__slide__wrapper"></div>');
    });
    $('.timeline__year__slider').slick({
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        arrows: true,
        swipe:false,
        // swipeToSlide: true,
        // variableWidth:true,
        // centerMode: false,
        asNavFor: '.timeline__and__history__primary__slider',
        focusOnSelect: true,
        prevArrow: `<button type="button" class="time_line__nav time_line__nav--prev"><svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.247 19.8105C11.1125 19.9237 10.9387 19.9904 10.7559 19.999C10.573 20.0077 10.3926 19.9576 10.2461 19.8576L10.1411 19.7706L0.706616 10.4704C0.591293 10.3561 0.520031 10.2107 0.503635 10.0561C0.487239 9.90161 0.526607 9.74644 0.615765 9.61414L0.706616 9.50568L10.1411 0.229744C10.2738 0.0986691 10.4556 0.0176182 10.6506 0.00255203C10.8457 -0.0125122 11.0398 0.0395012 11.1949 0.148346C11.3499 0.257191 11.4546 0.41498 11.4883 0.590635C11.522 0.766293 11.4823 0.947083 11.377 1.0974L11.2909 1.19872L3.0578 9.29733C2.82279 9.47746 2.67254 9.73284 2.638 10.0109C2.68551 10.2903 2.84378 10.5441 3.08286 10.7244L11.2909 18.803C11.4151 18.9256 11.4883 19.0839 11.4978 19.2505C11.5072 19.4171 11.4523 19.5814 11.3425 19.7149L11.247 19.8105Z" fill="#212121"/>
</svg>
</button>`,
        nextArrow: `<button type="button" class="time_line__nav time_line__nav--next"><svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.753009 0.189461C0.887494 0.0762543 1.06127 0.00955355 1.24413 0.000950135C1.42699 -0.00765328 1.60738 0.0423845 1.75395 0.142368L1.85889 0.229419L11.2934 9.52962C11.4087 9.64391 11.48 9.78934 11.4964 9.94386C11.5128 10.0984 11.4734 10.2536 11.3842 10.3859L11.2934 10.4943L1.85889 19.7703C1.72618 19.9013 1.54441 19.9824 1.34938 19.9974C1.15434 20.0125 0.960187 19.9605 0.805147 19.8517C0.650107 19.7428 0.545421 19.585 0.511707 19.4094C0.477994 19.2337 0.517697 19.0529 0.622997 18.9026L0.709149 18.8013L8.9422 10.7027C9.17721 10.5225 9.32746 10.2672 9.362 9.98913C9.31449 9.70973 9.15622 9.45587 8.91714 9.2756L0.709149 1.19697C0.584889 1.07445 0.511675 0.916135 0.502232 0.749542C0.492788 0.582949 0.547712 0.418606 0.657458 0.285075L0.753009 0.189461Z" fill="212121"/>
</svg>
</button>`,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 3,
                }
            }
        ],
        // centerMode: true,
        rtl: $('html').attr('dir') == 'ltr' ? false : true
    });

    setTimeout(() => {
        $('.hero__banner__homepage__slider .slick-dots li.slick-active').append(`    <div class="circle-container">
        <svg>
            <circle class="circle" cx="12" cy="12" r="10"></circle>
        </svg>
    </div>`)
    }, 500);

    $('.hero__banner__homepage__slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        $('.hero__banner__homepage__slider .slick-dots li.slick-active').append(`    <div class="circle-container">
        <svg>
            <circle class="circle" cx="12" cy="12" r="10"></circle>
        </svg>
    </div>`)
    });
    $('.hero__banner__homepage__slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $('.hero__banner__homepage__slider .slick-dots li.slick-active .circle-container').remove()
    });
    var video = $('#myVideo')[0];
    var playButton = $('#playButton');
    var videoOverlay = $('#overlay__blade');

    playButton.on('click', function () {
        video.play();
        playButton.addClass('hidden');
        videoOverlay.addClass('hidden');
    });

    $('#myVideo').on('click', function () {
        if (video.paused) {
            video.play();
            playButton.addClass('hidden');
            videoOverlay.addClass('hidden');
        } else {
            video.pause();
            playButton.removeClass('hidden');
            videoOverlay.removeClass('hidden');
        }
    });
})