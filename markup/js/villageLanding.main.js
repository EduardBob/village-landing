/* Main scripts file. */
(function($){


    /**
     * Chosen select
     */
     liveGroup.Behavior.chosenSelect = function(context) {
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
    liveGroup.Behavior.mobMenu = function(context) {
        var $mobMenuLink = $('.mob-menu-icon', context),
            $navbarMenuOverlay = $('.navbar-menu-overlay', context),
            $mobSidebar = $('.mob-sidebar'),
            $body = $('body'),
            $toggleMenuItems = $mobMenuLink.add($navbarMenuOverlay).add('.menu.menu-mob li a');

            if ($toggleMenuItems.length) {
                $toggleMenuItems.on('click', function () {
                    $mobSidebar.toggleClass('mob-sidebar-opened');
                    $mobMenuLink.toggleClass('mob-menu-icon-opened');
                    $body.toggleClass('pos-fixed');
                    $navbarMenuOverlay.toggle();
                });
            }
    }


    /**
     * Header slider
     */
    liveGroup.Behavior.headerSlider = function(context) {
        $(".owl-carousel").owlCarousel({
            nav: false,
            loop: true,
            items: 1,
            navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive:{
                991:{
                    nav: true
                }
            }

            // "singleItem:true" is a shortcut for:
            // items : 1,
            // itemsDesktop : false,
            // itemsDesktopSmall : false,
            // itemsTablet: false,
            // itemsMobile : false

        });
    }
    /**
     * Header slider
     */
    liveGroup.Behavior.carouselRotate = function(context) {
        $(".carousel-rotate").owlCarousel({
            nav: true,
            loop: true,
            dots: false,
            items: 1,
            navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
        });
    }
    /**
     * Reviews Slider
     */
    liveGroup.Behavior.reviewsSlider = function(context) {
        $(".reviews-slider").owlCarousel({
            nav: true,
            loop: true,
            dots: false,
            items: 1,
            navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive:{
                775:{
                    items:4,
                    nav:true
                }
            }

        });
    }

    /**
     * earnings Slider
     */
    liveGroup.Behavior.earningsSlider = function(context) {
        //обьявляешь таймер
        if ($(window).width() < 991) {
            $(".earnings-slider").owlCarousel({
                nav: true,
                loop: true,
                dots: true,
                items: 1,
                navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
            });

        }
        // вынести в функцию
        // он ресайз проверить
        // обнуляем таймер
        // запускаем таймер 200мс
        // если < 991
        // если уже слайдер ничего не делать
        // если не слайдер функция
        // если больше 991
        // если не слайдер ничего
        // если слайдер - дестрой


    }



    /**
     * rate slider
     */
    liveGroup.Behavior.ratesSlider = function(context) {
        $(".rates-slider").owlCarousel({
            nav: true,
            loop: true,
            dots: true,
            items: 1,
            navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive:{
                900:{
                    items:3
                }
            }
        });
    }

    /**
     * imagefill
     */
    liveGroup.Behavior.imageFill = function(context) {
        $('.img-wrapper').imagefill();

    }

    /**
     * matchHeight
     */
    liveGroup.Behavior.matchHeight = function(context) {
        var $el = $('.js-equal-height');
        if($el.length) {
            $el.matchHeight();
        }
    }

    /**
     * Show info block
     */
    liveGroup.Behavior.showInfoBlock = function(context) {
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
    liveGroup.Behavior.btnAdvantagesOpen = function(context) {
        var $btnAdvantagesOpen = $('.btn-advantages-open', context),
            $advantagesOpen = $('.advantages-open'),
            $btnAdvantagesClose = $('.btn-advantages-close');

        if ($btnAdvantagesOpen.length) {
            $btnAdvantagesOpen.on('click', function (e) {
                e.preventDefault();
                $advantagesOpen.toggle();
            });
            $btnAdvantagesClose.on('click', function (e) {
                e.preventDefault();
                $advantagesOpen.toggle();
            });
        }
    }

    /**
     * Popup open
     */
    liveGroup.Behavior.openPopup = function (context) {
        var $linkPopup = $('[data-popup-link]', context);
        if ($linkPopup.length) {
            $linkPopup.on('click', function (e) {
                e.preventDefault();
                liveGroup.Functions.closeAllPopups();
                var attrPopup = $(this, context).attr('data-popup-link');
                if (attrPopup.length) {
                    liveGroup.Functions.openPopup(attrPopup);
                }
            });

        }
    }
    liveGroup.Functions.openPopup = function (popup) {
        liveGroup.Functions.closeAllPopups();
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

    liveGroup.Functions.closeAllPopups = function (context) {
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
    liveGroup.Behavior.hidePopup = function (context) {
        var $link = $('.popup .icon-close', context);
        if ($link.length) {
            $link.on('click', function (e) {
                e.preventDefault();
                liveGroup.Functions.closeAllPopups();
            });
            $('.popup-overlay').on('click', function (event) {
                if ($(event.target).closest('.popup').length === 0) {
                    liveGroup.Functions.closeAllPopups();
                }
            });
        }
    }

    /**
     * Scroll 2 id
     */
    liveGroup.Behavior.scroll2Id = function (context) {
        $("a[href*='#']").mPageScroll2id();
    }



})(jQuery)

