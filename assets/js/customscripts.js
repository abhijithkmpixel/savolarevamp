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