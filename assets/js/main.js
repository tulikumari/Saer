!(function ($) {
  "use strict";

  // Preloader
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });


  function carousel() {
    //  if ($(document).innerWidth() < 992) {
    $(".clients-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      margin: 30,
      loop: true,
      center: false,
      navigation: true,
      autoplayHoverPause: false,
      rewindNav: false,

      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 1
        },
        900: {
          items: 2
        }
      }
    });
    //}
  }
  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on("click", ".nav-menu a, .left-nav-menu a, .scrollto", function (e) {
    if (
      location.pathname.replace(/^\//, "") ==
      this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top;

        $("html, body").animate(
          {
            scrollTop: scrollto,
          },
          1500,
          "easeInOutExpo"
        );

        if ($(this).parents(".nav-menu, .mobile-nav").length) {
          $(".nav-menu .current-menu-item, .mobile-nav .current-menu-item").removeClass("current-menu-item");
          $(this).closest("li").addClass("current-menu-item");
        }

        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $(".mobile-nav-toggle i").toggleClass(
            "nav-menu-mobile icofont-close"
          );
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function () {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top;
        $("html, body").animate(
          {
            scrollTop: scrollto,
          },
          1500,
          "easeInOutExpo"
        );
      }
    }
    carousel();
    $(".service-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      margin: 30,
      loop: true,
      center: false,
      navigation: true,
      autoplayHoverPause: false,
      rewindNav: false,

      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 1
        },
        900: {
          items: 1
        }
      }
    });

    ///Create dot menu///////////////
    var menuStr = $(".nav-menu").html();
    $(".left-nav-menu").html(menuStr);
    $(".left-nav-menu").find(".social-media").remove();
    $(".left-nav-menu").find("a").each(function () {
      var aStr = $(this).html();
      if (aStr == "RENTALS") { $(this).remove(); }
    });
    $(".left-nav-menu").find("a").html("");
  });

  $(window).resize(function () {
    //  carousel();
  });


  $(document).on("click", ".mobile-nav-toggle", function (e) {
    $("body").toggleClass("mobile-nav-active");
    $(".mobile-nav-toggle i").toggleClass(
      "nav-menu-mobile icofont-close"
    );
  });

  $(document).click(function (e) {
    var container = $(".mobile-nav-toggle");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($("body").hasClass("mobile-nav-active")) {
        $("body").removeClass("mobile-nav-active");
        $(".mobile-nav-toggle i").toggleClass(
          "nav-menu-mobile icofont-close"
        );
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $("section");
  var main_nav = $(".nav-menu, .left-nav-menu,#mobile-nav");

  $(window).on("scroll", function () {
    var cur_pos = $(this).scrollTop() + 300;

    nav_sections.each(function () {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find("li").removeClass("current-menu-item");
        }
        main_nav
          .find('a[href="#' + $(this).attr("id") + '"]')
          .parent("li")
          .addClass("current-menu-item");
      }
      if (cur_pos < 200) {
        $(".nav-menu ul:first li:first").addClass("current-menu-item");
        $(".left-nav-menu ul:first li:first").addClass("current-menu-item");
      }



    });

  });


  $(window).scroll(function () {
    var cur_scroll = $(this).scrollTop();
    console.log("sdsa" + cur_scroll);
    if (cur_scroll > 180) {
      $('#header').addClass("fixed-top");
      $('.mobile-nav-toggle').addClass("fixed-top-menu");

    } else {
      $('#header').removeClass("fixed-top");
      $('.mobile-nav-toggle').removeClass("fixed-top-menu");
    }
  });


  // Skills section
  $(".skills-content").waypoint(
    function () {
      $(".progress .progress-bar").each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + "%");
      });
    },
    {
      offset: "80%",
    }
  );

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }

  // Porfolio isotope and filter
  $(window).on("load", function () {
    // Initiate aos_init() function
    aos_init();
  });


})(jQuery);
