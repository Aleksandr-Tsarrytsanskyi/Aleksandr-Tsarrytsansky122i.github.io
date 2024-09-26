window.addEventListener("DOMContentLoaded", () => {
  const resizableSwiper = (
    breakpoint,
    swiperClass,
    swiperSettings,
    callback
  ) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    };

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener("change", checker);
    checker();
  };

  const someFunc = (instance) => {
    if (instance) {
      instance.on("slideChange", function (e) {
        console.log("*** mySwiper.activeIndex", instance.activeIndex);
      });
    }
  };

  resizableSwiper("(max-width: 3500px)", ".slider", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // autoplay: {
    //     delay: 5000,
    //   },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1200: {
        spaceBetween: 20,
      },
    },
  });

    resizableSwiper("(max-width: 3500px)", ".slider1", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // autoplay: {
    //     delay: 5000,
    //   },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1200: {
        spaceBetween: 20,
      },
    },
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
  resizableSwiper("(max-width: 1300px)", ".slider1", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // autoplay: {
    //     delay: 5000,
    //   },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1200: {
        spaceBetween: 20,
      },
    },
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
  resizableSwiper("(max-width: 980px)", ".slider1", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 2,
    freeMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // autoplay: {
    //     delay: 5000,
    //   },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1200: {
        spaceBetween: 20,
      },
    },
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

  resizableSwiper("(max-width: 650px)", ".slider1", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // autoplay: {
    //     delay: 5000,
    //   },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1200: {
        spaceBetween: 20,
      },
    },
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
  resizableSwiper("(max-width: 3500px)", ".slider2", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // autoplay: {
    //     delay: 5000,
    //   },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1200: {
        spaceBetween: 20,
      },
    },
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
  resizableSwiper("(max-width: 3500px)", ".slider3", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // autoplay: {
    //     delay: 5000,
    //   },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1200: {
        spaceBetween: 20,
      },
    },
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  })
});
