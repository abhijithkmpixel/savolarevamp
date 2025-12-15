/** @format */

$(document).ready(function () {
  $("#header__search__toggle").click(function () {
    $(".header__search ").addClass("header__search--active");
  });
  $("#accessibility__menu__toggle").click(function () {
    $(".accessibility-menu ").toggleClass("active");
  });
  $("#hamburger__menu__toggle").click(function () {
    $("body ").toggleClass("hamburger__menu__toggle__active");
    $($(this)).toggleClass("is-active");
  });
  if (window.innerWidth < 1200) {
    $(".has__sub__menu").click(function (e) {
      e.stopPropagation();
      var isActive = $(this).hasClass("sub__menu__active");
      $(".has__sub__menu").removeClass("sub__menu__active");
      if (!isActive) {
        $(this).addClass("sub__menu__active");
      }
    });
  }
  $(".js-contact-show").click(function (e) {
    e.preventDefault();

    $(".top__footer__inner").hide();
    $(".js-contact-details").fadeIn();
  });

  $(".js-contact-hide").click(function (e) {
    e.preventDefault();

    $(".top__footer__inner").fadeIn();
    $(".js-contact-details").hide();
  });

  setTimeout(() => {
    $("body").css({ "--header-height": $("header").height() + "px" });
    $("body").css({ "--header-height-neg": -$("header").height() + "px" });
  }, 100);
  // $(".top__footer .btn.btn-default").click(function (e) {
  //   e.preventDefault();
  //   $(".top__footer__inner").css({ display: "none" });
  // });
  // $(
  //   ".contact-section-details.js-contact-details .link.link-default.js-contact-hide.icon-icon-x"
  // ).click(function () {
  //   $(".top__footer__inner").css({ display: "flex" });
  // });

  // $(document).click(function () {
  //     var $trigger = document.querySelector(
  //         ".header__search "
  //     );
  //     if (
  //         $trigger == event.target
  //         || $trigger.contains(event.target)
  //     ) {
  //     } else {
  //         $('.header__search').removeClass('header__search--active')
  //     }
  // });

  $(
    ".timeline__and__history__primary__slider .timeline__and__history__primary__slide__item .timeline__and__history__primary__slide__item__wrap .timeline__and__history__primary__slide__item__content .timeline__and__history__primary__slide__item__accordian__wrap .timeline__and__history__primary__slide__item__accordian__item .timeline__and__history__primary__slide__item__accordian__button"
  ).click(function (e) {
    e.stopPropagation();

    var isActive = $(this)
      .closest(".timeline__and__history__primary__slide__item__accordian__item")
      .hasClass(
        "timeline__and__history__primary__slide__item__accordian__item--active"
      );

    $(
      ".timeline__and__history__primary__slider .timeline__and__history__primary__slide__item .timeline__and__history__primary__slide__item__wrap .timeline__and__history__primary__slide__item__content .timeline__and__history__primary__slide__item__accordian__wrap .timeline__and__history__primary__slide__item__accordian__item .timeline__and__history__primary__slide__item__accordian__button"
    )
      .closest(".timeline__and__history__primary__slide__item__accordian__item")
      .removeClass(
        "timeline__and__history__primary__slide__item__accordian__item--active"
      );

    if (!isActive) {
      $(this)
        .closest(
          ".timeline__and__history__primary__slide__item__accordian__item"
        )
        .addClass(
          "timeline__and__history__primary__slide__item__accordian__item--active"
        );
    }
  });

  const isRtl = $("html").attr("dir") === "rtl";

  // $(".hero__banner__homepage__slider").slick({
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   dots: true,
  //   // autoplay: true,
  //   autoplaySpeed: 3000,
  //   pauseOnFocus: false,
  //   pauseOnHover: false,
  //   pauseOnDotsHover: false,
  //   swipeToSlide: false, // Disable swipe-to-slide
  //   rtl: isRtl,
  //   initialSlide: 0,
  // });

  $(".timeline__and__history__primary__slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    pauseOnFocus: false,
    // fade:true,
    pauseOnHover: false,
    swipeToSlide: true,
    asNavFor: ".timeline__year__slider",
    rtl: $("html").attr("dir") == "ltr" ? false : true,
  });
  $(".latest__news__slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    pauseOnFocus: false,
    prevArrow: `<button type="button" class="latest__news__nav latest__news__nav--prev"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
<path d="M8.25 0.75L0.75 8.25M0.75 8.25L8.25 15.75M0.75 8.25H18.75" stroke="#111111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button>`,
    nextArrow: `<button type="button" class="latest__news__nav latest__news__nav--next"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
<path d="M11.25 0.75L18.75 8.25M18.75 8.25L11.25 15.75M18.75 8.25H0.75" stroke="#111111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button>`,
    appendArrows: ".latest__news__section__actions .latest__news__slider__nav",
    // fade:true,
    pauseOnHover: false,
    swipeToSlide: true,
    rtl: $("html").attr("dir") == "ltr" ? false : true,
    responsive: [

      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".timeline__year__slide__item").each(function () {
    $(this).wrap('<div class="timeline__year__slide__wrapper"></div>');
  });
  $(".timeline__year__slider").slick({
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    arrows: true,
    swipe: true,
    swipeToSlide: true,
    edgeFriction: 1,
    // variableWidth:true,
    // centerMode: false,
    asNavFor: ".timeline__and__history__primary__slider",
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
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
    // centerMode: true,
    rtl: $("html").attr("dir") == "ltr" ? false : true,
  });

  // setTimeout(() => {
  //   $(".hero__banner__homepage__slider .slick-dots li.slick-active")
  //     .append(`    <div class="circle-container">
  //       <svg>
  //           <circle class="circle" cx="12" cy="12" r="10"></circle>
  //       </svg>
  //   </div>`);
  // }, 500);

  // $(".hero__banner__homepage__slider").on(
  //   "afterChange",
  //   function (event, slick, currentSlide, nextSlide) {
  //     $(".hero__banner__homepage__slider .slick-dots li.slick-active")
  //       .append(`    <div class="circle-container">
  //       <svg>
  //           <circle class="circle" cx="12" cy="12" r="10"></circle>
  //       </svg>
  //   </div>`);
  //   }
  // );
  // $(".hero__banner__homepage__slider").on(
  //   "beforeChange",
  //   function (event, slick, currentSlide, nextSlide) {
  //     $(
  //       ".hero__banner__homepage__slider .slick-dots li.slick-active .circle-container"
  //     ).remove();
  //   }
  // );
  // var video = $('#myVideo')[0];
  // var playButton = $('#playButton');
  // var videoOverlay = $('#overlay__blade');

  // playButton.on('click', function () {
  //     video.play();
  //     playButton.addClass('hidden');
  //     videoOverlay.addClass('hidden');
  // });

  // $('#myVideo').on('click', function () {
  //     if (video.paused) {
  //         video.play();
  //         playButton.addClass('hidden');
  //         videoOverlay.addClass('hidden');
  //     } else {
  //         video.pause();
  //         playButton.removeClass('hidden');
  //         videoOverlay.removeClass('hidden');
  //     }
  // });

  $(".full_width__video__widget__innerwrap").each(function () {
    var playButton = $(this).find("button");
    var videoOverlay = $(this).find(".overlay__blade");
    var video = $(this).find("video")[0]; // Correctly reference video here

    // Play button click event
    playButton.on("click", function () {
      video.play();
      playButton.addClass("hidden");
      videoOverlay.addClass("hidden");
    });

    // Video click event (play/pause toggle)
    $(video).on("click", function () {
      if (video.paused) {
        video.play();
        playButton.addClass("hidden");
        videoOverlay.addClass("hidden");
      } else {
        video.pause();
        playButton.removeClass("hidden");
        videoOverlay.removeClass("hidden");
      }
    });
  });
  //news filter function
  function UpdateNews() {
    // if (!$("#news-and-media-form").valid()) return;
    var formData = $("#news-and-media-form").serialize();

    $(".loader").show();
    var apiUrl = $('#news-and-media-form input[name="Api"]').val();
    // if (
    //   $("section.news-and-media #news-and-media-load-more-btn").prop(
    //     "disabled"
    //   ) == true
    // ) {
    //   console.log("disabled");

    //   return false;
    // }
    $.post(apiUrl, formData, function (data) {
      $(".loader").hide();
      if (data.success) {
        $(".news-row").remove();
        if (!data.loadmore) {
          $("section.news-and-media #news-and-media-load-more-btn").hide();
        } else {
          $("section.news-and-media #news-and-media-load-more-btn").show();
        }
        $("#news-and-media-page").val(data.page);
        $.each(data.news, function (i, e) {
          if ($("#news-holder .news-row").length == 0) {
            $("#news-holder").append(
              '<div class="row margin-bottom news-row"></div>'
            );
          }
          if ($("#news-holder .news-row:last > div").length == 4) {
            $("#news-holder").append(
              '<div class="row margin-bottom news-row"></div>'
            );
          }
          if ($("#news-holder").hasClass("without-images")) {
            $("#news-holder").append(
              '<li class="news-row" id="' +
              e.Id +
              '"><h4>' +
              e.DateStr +
              ", " +
              e.CategoriesStr +
              "</h4>" +
              '<h2><a target="_blank" href="' +
              e.Url +
              '">' +
              e.Title +
              "</a></h2></li>"
            );
          } else {
            $("#news-holder .news-row:last").append(
              '<div class="col-sm-3" id="' +
              e.Id +
              '"><div class="body-small"><ul class="list-span"><li><date>' +
              e.DateStr +
              "</date>" +
              '</li><li class="text-right">' +
              e.CategoriesStr +
              '</li></ul><img src="' +
              e.Image +
              '" class="img-responsive margin-xs-bottom"><p><strong>' +
              e.Title +
              "</strong></p>" +
              "<p>" +
              e.Summary +
              '</p><div class="text-right"><a href="' +
              e.Url +
              '" class="link-green">read <span class="icon-doc-text"></span></a></div></div>'
            );
          }
        });
      }

      $("section.news-and-media #news-and-media-load-more-btn").prop(
        "disabled",
        false
      );
    });
  }
  $("section.news-and-media select").on("change.fs", function (e) {
    e.preventDefault();
    $("#news-and-media-page").val("");
    UpdateNews();
  });
  $("section.news-and-media #news-and-media-load-more-btn").on(
    "click",
    function (e) {
      e.preventDefault();
      $("section.news-and-media #news-and-media-load-more-btn").prop(
        "disabled",
        true
      );
      $("#news-and-media-page").val(
        parseInt($("#news-and-media-page").val()) + 1
      );
      UpdateNews();
    }
  );



  // const $slider = $(".hero__banner__homepage__slider");

  // $slider.slick({
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   dots: true,
  //   autoplaySpeed: 3000,
  //   pauseOnFocus: false,
  //   pauseOnHover: false,
  //   pauseOnDotsHover: false,
  //   swipeToSlide: false,
  //   rtl: isRtl,
  //   initialSlide: 0,

  //   customPaging: function (slider, i) {
  //     const title = $(slider.$slides[i]).find("h1").text();
  //     return `<span class="progress"></span><span class="dot-label">${title}</span>`;
  //   },
  // });
  const $slider = $(".hero__banner__homepage__slider");
  const $counter = $(".hero__banner__homepage__navigation__count");

  $slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    arrows: true,
    appendArrows: ".hero__banner__homepage__navigation",

    prevArrow: `
    <button type="button" class="slider-arrow slider-arrow--prev" aria-label="Previous slide">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
        <path d="M8.25 0.75L0.75 8.25M0.75 8.25L8.25 15.75M0.75 8.25H18.75"
          stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  `,

    nextArrow: `
    <button type="button" class="slider-arrow slider-arrow--next" aria-label="Next slide">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
        <path d="M11.25 0.75L18.75 8.25M18.75 8.25L11.25 15.75M18.75 8.25H0.75"
          stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  `,

    dots: true,
    autoplaySpeed: 3000,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    swipeToSlide: false,
    rtl: isRtl,
    initialSlide: 0,

    customPaging: function (slider, i) {
      const title = $(slider.$slides[i]).find("h1").text();
      return `
      <span class="progress"></span>
      <span class="dot-label">${title}</span>
    `;
    },
  });

  /* ==============================
     Slide counter (updates BEFORE slide moves)
  =============================== */
  function updateCounter(slideIndex, total) {
    const currentFormatted = String(slideIndex + 1).padStart(2, "0");
    const totalFormatted = String(total).padStart(2, "0");

    $counter.html(`<span>${currentFormatted}</span>/${totalFormatted}`);
  }

  // BEFORE slide changes: update counter to next slide
  $slider.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    updateCounter(nextSlide, slick.slideCount);
  });

  // Manually update counter **immediately after slick() initialization**
  updateCounter(0, $slider.slick("getSlick").slideCount);

  //news filter function


  $("#new__custom__accordian__parent .new__custom__accordian--item .new__custom__accordian--item--header").click(function () {
    let wasActive = $(this).closest(".new__custom__accordian--item").hasClass("new__custom__accordian--item--active");
    $("#new__custom__accordian__parent .new__custom__accordian--item").removeClass("new__custom__accordian--item--active");
    if (!wasActive) {
      $(this).closest(".new__custom__accordian--item").addClass("new__custom__accordian--item--active");
      setTimeout(() => {
        $("html, body").animate({
          scrollTop: $(this).closest(".new__custom__accordian--item").offset().top - 150
        }, 400);
      }, 500);
    }
  });

  setTimeout(() => {
    $("#new__custom__accordian__parent .new__custom__accordian--item:first-child").addClass("new__custom__accordian--item--active");
  }, 200);

});


document.addEventListener("DOMContentLoaded", () => {
  /* =====================================
     1️⃣ Equal height for all titles (h4)
  ====================================== */

  const titles = document.querySelectorAll(".principles__card h4");
  let maxTitleHeight = 0;

  titles.forEach(title => {
    title.style.height = "auto"; // reset
    maxTitleHeight = Math.max(maxTitleHeight, title.offsetHeight);
  });

  titles.forEach(title => {
    title.style.height = `${maxTitleHeight}px`;
  });

  /* =====================================
     2️⃣ Clamp paragraphs + Read more / less
  ====================================== */

  const MAX_LINES = 6;

  document.querySelectorAll(".principles__card p").forEach(p => {
    const fullText = p.textContent.trim();
    const lineHeight = parseFloat(getComputedStyle(p).lineHeight);
    const maxHeight = lineHeight * MAX_LINES;

    const isRTL = document.documentElement.dir === "rtl";

    // Labels
    const LABELS = {
      more: isRTL ? "اقرأ المزيد" : "Read more",
      less: isRTL ? "اقرأ أقل" : "Read less",
    };

    // Suffixes
    const suffixMore = isRTL
      ? `... <span class="read-more" dir="rtl">${LABELS.more}</span>`
      : `... <span class="read-more">${LABELS.more}</span>`;

    const suffixLess = `<span class="read-more">${LABELS.less}</span>`;

    // Reset
    p.textContent = fullText;
    p.classList.add("is-clamped");

    // If it doesn't overflow, stop here
    if (p.scrollHeight <= maxHeight) {
      p.classList.remove("is-clamped");
      return;
    }

    // Find the maximum text length that fits WITH "... Read more"
    let low = 0;
    let high = fullText.length;
    let clampedText = fullText;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      p.innerHTML = fullText.slice(0, mid) + suffixMore;

      if (p.scrollHeight > maxHeight) {
        high = mid - 1;
      } else {
        clampedText = fullText.slice(0, mid);
        low = mid + 1;
      }
    }

    // Store clamped text for later reuse
    p.dataset.clampedText = clampedText;

    // Apply final clamped version
    p.innerHTML = clampedText + suffixMore;

    /* ===== Toggle logic ===== */

    p.addEventListener("click", e => {
      const btn = e.target.closest(".read-more");
      if (!btn) return;

      const isClamped = p.classList.contains("is-clamped");

      if (isClamped) {
        // Expand
        p.classList.remove("is-clamped");
        p.innerHTML = `${fullText} ${suffixLess}`;
      } else {
        // Collapse
        p.classList.add("is-clamped");
        p.innerHTML = `${p.dataset.clampedText}${suffixMore}`;
      }
    });
  });
});
