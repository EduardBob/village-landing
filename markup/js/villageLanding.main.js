/* Main scripts file. */
(function ($) {

  var resizeCatch;

  /**
   * Chosen select
   */
  villageLanding.Behavior.chosenSelect = function (context) {
    var $select = $('select', context);
    var $selectItem = $();
    if ($select.length) {
      for (var i = 0, len = $select.length; i < len; i++) {
        $item = $select.eq(i);
        if ($item.hasClass('multiple')) {
          // chosen multiple
        } else if ($item.hasClass('custom')) {
          // custom chosen
        } else {
          // basic chosen no search
          $item.chosen({
            disable_search: true,
            width: '100%'
          })
        }
      }
    }
  }


  /**
   * Mob menu
   */
  villageLanding.Behavior.mobMenu = function (context) {
    var $mobMenuLink = $('.mob-menu-icon', context),
      $navbarMenuOverlay = $('.navbar-menu-overlay', context),
      $mobSidebar = $('.mob-sidebar'),
      $mobMenuContainer = $('.mob-menu-container'),
      $body = $('body'),
      $toggleMenuItems = $mobMenuLink.add($navbarMenuOverlay).add('.menu.menu-mob li a');

    if ($toggleMenuItems.length) {
      $toggleMenuItems.on('click', function () {
        $mobSidebar.toggleClass('mob-sidebar-opened');
        $mobMenuContainer.toggleClass('animated fadeIn');
        $mobMenuLink.toggleClass('mob-menu-icon-opened');
        $body.toggleClass('pos-fixed');
        $navbarMenuOverlay.toggle();
      });
    }
  }


  /**
   * Header slider
   */
  villageLanding.Behavior.headerSlider = function (context) {
    $(".owl-carousel").owlCarousel({
      nav: false,
      loop: true,
      autoplay: true,

      items: 1,
      smartSpeed: 1000,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      responsive: {
        991: {
          nav: true
        }
      }

    });
  }
  /**
   * Phone slider
   */
  villageLanding.Behavior.carouselRotate = function (context) {
    $(".carousel-rotate").owlCarousel({
      nav: false,
      loop: true,
      dots: false,
      autoplay: true,
      smartSpeed: 1000,
      items: 1,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      responsive: {
        991: {
          nav: true
        }
      }

    });

  }
  /**
   * Reviews Slider
   */
  villageLanding.Behavior.reviewsSlider = function (context) {
    $(".reviews-slider").owlCarousel({
      nav: true,
      loop: true,
      dots: false,
      items: 1,
      smartSpeed: 1000,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      responsive: {
        775: {
          items: 4,
        }
      }

    });

  }
  villageLanding.Behavior.toggleReviewCard = function (context) {
    var $btns = $('.client-img.js-toggle-review-card', context);
    if ($btns.length) {
      $btns.on('click', function (e) {
        e.preventDefault();
        var $this = $(this),
          index = $this.data('index'),
          $cards = $('.reviews-card');
        $cards.removeClass('active').eq(index).addClass('active').addClass('animated fadeInLeft');;
        $btns.removeClass('active-user');
        $this.addClass('active-user');

      });
    }
  }


  /**
   * Earning slider
   */
  villageLanding.Functions.checkSlider = function () {
    var width = $(window).width(),
      $slider = $(".earnings-slider");
    console.log($slider.data('owlCarousel') );
    if (width > 991) {
      if (typeof $slider.data('owlCarousel') !== "undefined") {
        $slider.data('owlCarousel').destroy();
      }
    }
    else {
      if (typeof $slider.data('owlCarousel') == "undefined") {
        $slider.owlCarousel({
          nav: false,
          loop: true,
          dots: true,
          items: 1,
          smartSpeed: 1000,
          onResize: function () {},
          navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
          responsive: {
            991: {
              nav: true
            }
          }
        });
      }
    }
  }

   villageLanding.Behavior.earningsSlider = function (context) {
     if ($('.earnings-slider').length) {
       villageLanding.Functions.checkSlider();
       $(window).resize(function() {
         clearTimeout(resizeCatch);
         resizeCatch = setTimeout(function () {
           villageLanding.Functions.checkSlider();
         }, 300);
       });

     }
   };


  /**
   * rate slider
   */
  villageLanding.Behavior.ratesSlider = function (context) {
    $(".rates-slider").owlCarousel({
      nav: false,
      loop: true,
      dots: true,
      slideBy: 3,
      items: 1,
      smartSpeed: 1000,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      responsive: {
        991: {
          items: 3,
          nav: true
        }
      }
    })
  }

  /**
   * imagefill
   */
  villageLanding.Behavior.imageFill = function (context) {
    $('.img-wrapper').imagefill();

  }

  /**
   * matchHeight
   */
  villageLanding.Behavior.matchHeight = function (context) {
    var $el = $('.js-equal-height');
    if ($el.length) {
      $el.matchHeight();
    }
  }

  /**
   * Show info block
   */
  villageLanding.Behavior.showInfoBlock = function (context) {
    var $imgLink = $('.img-link', context),
      $vilageCardOpen = $('.vilage-card-open'),
      $vilageCardWrap = $('.vilage-card-wrap'),
      $cardClose = $('.card-close');


    if ($imgLink.length) {
      $imgLink.on('click', function (e) {
        e.preventDefault();
        $vilageCardWrap.toggleClass('dn');
        $vilageCardOpen.toggle();

      });

      $cardClose.on('click', function (e) {
        e.preventDefault();
        $vilageCardWrap.removeClass('dn');
        $vilageCardOpen.toggle();
      });
    }
  }

  /**
   * Show advantages block
   */
  villageLanding.Behavior.btnAdvantagesOpen = function (context) {
    var $btnAdvantagesOpen = $('.btn-advantages-open', context),
      $advantagesOpen = $('.advantages-open'),
      $btnAdvantagesClose = $('.btn-advantages-close');

    if ($btnAdvantagesOpen.length) {
      $btnAdvantagesOpen.on('click', function (e) {
        e.preventDefault();
        $btnAdvantagesOpen.toggle(0);
        $advantagesOpen.toggle();

      });
      $btnAdvantagesClose.on('click', function (e) {
        e.preventDefault();
        $advantagesOpen.toggle();
        $btnAdvantagesOpen.toggle(0);
      });
    }
  }

  /**
   * Popup open
   */
  villageLanding.Behavior.openPopup = function (context) {
    var $linkPopup = $('[data-popup-link]', context);
    if ($linkPopup.length) {
      $linkPopup.on('click', function (e) {
        e.preventDefault();
        villageLanding.Functions.closeAllPopups();
        var attrPopup = $(this, context).attr('data-popup-link');
        if (attrPopup.length) {
          villageLanding.Functions.openPopup(attrPopup);

          if(attrPopup == 'map') {
            villageLanding.Functions.initGMap();
          }
        }
      });

    }
  }

  villageLanding.Functions.openPopup = function (popup) {
    villageLanding.Functions.closeAllPopups();
    var $popup = $('[data-popup=' + popup + ']'),
      $body = $('body');
    if ($popup.length) {
      $popup.fadeIn('fast');
      $body.addClass('popup-opened').css('padding-right');
      $body.on('touchmove', function (e) {
        if (!$('.popup-overlay').has($(e.target)).length) {
          e.preventDefault();
        }
      });
    }
  }

  villageLanding.Functions.closeAllPopups = function (context) {
    var $popups = $('.popup-overlay', context),
      $body = $('body', context);
    if ($popups.length) {
      $popups.hide();
      $body.removeClass('popup-opened').css('padding-right', '').unbind('touchmove');
    }
  }


  /**
   * Popup close
   */
  villageLanding.Behavior.hidePopup = function (context) {
    var $link = $('.popup .icon-close', context);
    if ($link.length) {
      $link.on('click', function (e) {
        e.preventDefault();
        villageLanding.Functions.closeAllPopups();
      });
      $('.popup-overlay').on('click', function (event) {
        if ($(event.target).closest('.popup').length === 0) {
          villageLanding.Functions.closeAllPopups();
        }
      });
    }
  }

  /**
   * Scroll 2 id
   */
  villageLanding.Behavior.scroll2Id = function (context) {
    $("a[href*='#']").mPageScroll2id();
  }

  villageLanding.Functions.initGMap = function(){

    // When the window has finished loading create our google map below
      // Basic options for a simple Google Map
      // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
      var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 11,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(55.75154, 37.5997293), // Moscow

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b5a265"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#0f4d67"},{"visibility":"on"}]},{"featureType":"water","elementType":"labels.text","stylers":[{"color":"#ffffff"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#256461"}]}]
      };

      // Get the HTML DOM element that will contain your map
      // We are using a div with id="map" seen below in the <body>
      var mapElement = document.getElementById('map');

      // Create the Google Map using our element and options defined above
      var map = new google.maps.Map(mapElement, mapOptions);

      // Let's also add a marker while we're at it
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(55.75154, 37.5997293),
        map: map,
        title: 'Snazzy!'
      });
  }


})(jQuery)

