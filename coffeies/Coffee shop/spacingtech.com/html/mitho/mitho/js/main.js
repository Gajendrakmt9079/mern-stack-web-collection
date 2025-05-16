/*==============================
    zoom js
==============================*/
function zoom(e){
    var zoomer = e.currentTarget;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
    x = offsetX/zoomer.offsetWidth*100
    y = offsetY/zoomer.offsetHeight*100
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
}

$(window).on('load', function () {
    var popup = localStorage.getItem('popup_value');
    if (popup != 1) {
        $('#news-letter-modal').modal('show');
    }

    /*==============================
        pre-loader js
    ==============================*/
    $('.preloader').delay(100).fadeOut('fast');
});

(function($) {
    "use strict";
        var $body = $("body"),
            $window = $(window),
            $document = $(document);
        var WT = {
            init: function() {
            },
        };

    /*====================================
       notification-close-btn js
    ====================================*/
    $(".notification-close-btn").on("click", function() {
        $('#noti-bar').slideToggle();
    });

    var slides = document.querySelectorAll('ul.header-offer-text li.li');
      var currentSlide = 0;
      var slideInterval = setInterval(nextSlide, 3000);
      function nextSlide(){
        slides[currentSlide].className = 'li';
        currentSlide = (currentSlide+1)%slides.length;
        slides[currentSlide].className = 'li show';
    }

    /*==============================
        home13 top notification js
    ==============================*/
    // slogan js
    var slides = document.querySelectorAll('p.offer-text span.text');
    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide, 3000);
    function nextSlide(){
        slides[currentSlide].className = 'text';
        currentSlide = (currentSlide+1)%slides.length;
        slides[currentSlide].className = 'text show';
    }

    /*==============================
        sticky header js
    ==============================*/
    var lastScrollTop = 0;
    $(window).on('scroll', () => {
        var header = $('#stickyheader'),
        sticky = $(window).scrollTop();
        if (sticky >= 100) {
            header.addClass('sticky-header');
        } else {
            header.removeClass('sticky-header');
        }
    });

    /*==============================
        sticky header js
    ==============================*/
    var lastScrollTop = 0;
    $(window).on('scroll', function() {
        var scroll = $(this).scrollTop();
        if (scroll > lastScrollTop) {
            $('#header-top-area').addClass('sticky-down');
            $('#header-top-area').removeClass('sticky-up');
        } 
        else {
            if (lastScrollTop <= 100) {
                $('#header-top-area').removeClass('sticky');
                $('#header-top-area').removeClass('sticky-down');
                $('#header-top-area').removeClass('sticky-up');
            } 
            else {
                $('#header-top-area').addClass('sticky');
                $('#header-top-area').removeClass('sticky-down');
                $('#header-top-area').addClass('sticky-up');
            }
        }
        lastScrollTop = scroll;
    });


    /*==============================
        login account js
    ==============================*/
    $('a.acc-ti-lg').on('click', function () {
        if ($('#store-account').hasClass('active')) {
            $('#store-account').removeClass('active');
            $(this).removeClass('active');
        }
        else {
            $('#store-account').addClass('active');
            $(this).addClass('active');
        }
    });

    /*==============================
        currency js
    ==============================*/
    $('.local-currency a.currency-title-lg').on('click', function () {
        if($('#menu-currency').hasClass('active')) {
            $('#menu-currency').removeClass("active");
            $(this).removeClass("active");
        }
        else {
            $('#menu-currency').addClass("active");
            $(this).addClass("active");
        }
    });

    /*====================================
        toggler-menu js
    ====================================*/
    $("button.toggler-button, .toggler-wrapper button.toggler-btn").on("click", function() {
        $("#menu-toggle, .mobile-menu, .main-menu-area, .header-bottom").addClass('active');
        $("body").addClass('hidden');
        $(".screen-bg, .bg-screen").addClass('active');
    });
    $("button.close-box, .menu-close button.menu-close-btn").on("click", function() {
        $("#menu-toggle, .mobile-menu, .main-menu-area, .header-bottom").removeClass('active');
        $("body").removeClass("hidden");
        $(".screen-bg, .bg-screen").removeClass('active');
    });

    /*==============================
        cart-drawer js
    ==============================*/
    $("a.js-cart-drawer, .bottom-menu-wrapper, .add-to-cart .bottom-menu-cart, .cart-wrapper a.js-cart-drawer, .bottom-menu-wrapper a.bottom-menu-cart, a.add-to-cart, .bottom-menu-cart").on("click", function() {
        $("#cart-drawer").addClass('active');
        $("body").addClass("hidden");
        $(".screen-bg, .bg-screen").addClass('active');
    });
    $(".drawer-close button.drawer-close-btn").on("click", function() {
        $("#cart-drawer").removeClass('active');
        $("body").removeClass("hidden");
        $(".screen-bg, .bg-screen").removeClass('active');
    });

    /*==============================
        screen-bg js
    ==============================*/
    $(".screen-bg, .bg-screen").on("click", function() {
        $(this).removeClass('active');
        $("#menu-toggle, .mobile-menu, .main-menu-area, .header-bottom").removeClass('active');
        $("#cart-drawer").removeClass('active');
        $("body").removeClass('active');
        });
        $('#trigger-overlay').on('click', function(){
        $(".overlay").addClass('open'); 
    });

    $('.overlay-close').on('click', function(){
        $(".overlay").removeClass('open');  
    });

    /*========================================== 
        Minus and Plus Btn js
    ==========================================*/
    $('.dec').on('click', function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.inc').on('click', function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    /*==============================
        read-agree js
    ==============================*/
    $('label.box-area, .read-agree').on('click', function () {
        if($('.cust-checkbox, .create-checkbox').is(':checked')) {
            $('.checkout, .create').removeClass('disabled');
        }
        else {
            $('.checkout, .create').addClass('disabled');
        }
    });

    /*===================================
        range slider js
    ===================================*/
    if($('#range1').length){
        var slider1 = document.getElementById("range1");
        var slider2 = document.getElementById("range2");
        var output1 = document.getElementById("demo1");
        var output2 = document.getElementById("demo2");
        output1.innerHTML = slider1.value;
        output2.innerHTML = slider2.value;

        slider1.oninput = function() {
            output1.innerHTML = slider1.value;
        }
        slider2.oninput = function() {
            output2.innerHTML = slider2.value;
        }
    }

    /*==============================
        video popup js
    ==============================*/
    $('.play-button').magnificPopup ({
        type: 'iframe',
        tClose: 'Close (Esc)',
        mainClass: 'mfp-fade',
        removalDelay: 160
    });

    /*==============================
        filter js
    ==============================*/
    $('button.filter-button').on('click', function () {
        $('.filter-sidebar').addClass("active");
        $('.screen-bg').addClass("active");
    });
    $('button.close-sidebar').on('click', function () {
        $('.filter-sidebar').removeClass("active");
        $('.screen-bg').removeClass("active");
    });

    /*==============================
        back-to-top js
    ==============================*/
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 600) {
            $('#top').addClass('show');
        } 
        else {
            $('#top').removeClass('show');
        }
    });
    $('#top').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    /*==============================
        quickview js
    ==============================*/
    var galleryThumbs = new Swiper(".gallery-thumbs", {
        loop: false,
        rewind: true,
        spaceBetween: 15,
        slidesPerView: 3,
        thumbs: {
            swiper: galleryTop,
        },
    });
    var galleryTop = new Swiper(".gallery-top", {
        rewind: true,
        spaceBetween: 15,
        navigation: {
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
        },
        thumbs: {
            swiper: galleryThumbs,
        },
    });

    /*==============================
      timer js
    ==============================*/
    setInterval(function time(){
      var d = new Date();
      var days = d.getDay();
      var hours = 24 - d.getHours();
      var min = 60 - d.getMinutes();
      if((min + '').length == 1){
        min = '0' + min;
      }
      var sec = 60 - d.getSeconds();
      if((sec + '').length == 1){
        sec = '0' + sec;
      }
      jQuery('#the-24h-countdown ul').html('<li class="clock-li"><span class="clock-timer">'+days+'</span><span class="clock-title">Day</span></li><li class="clock-li"><span class="clock-timer">'+hours+'</span><span class="clock-title">Hrs</span></li><li class="clock-li"><span class="clock-timer">'+min+'</span><span class="clock-title">Min</span></li><li class="clock-li"><span class="clock-timer">'+sec+'</span><span class="clock-title">Sec</span></li>')
    }, 1000);

    /*==============================
        timer js
    ==============================*/
    if($('#cust_text_days').length){
        const second = 1030,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
        let countDown = new Date('March 30, 2025 00:00:00').getTime(),
        a = setInterval(function() {
            let now = new Date().getTime(),
            distance = countDown - now;
            document.getElementById('cust_text_days').innerText = Math.floor(distance / (day)),
            document.getElementById('cust_text_hours').innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById('cust_text_minutes').innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById('cust_text_seconds').innerText = Math.floor((distance % (minute)) / second);
        }, second)
    }
    if($('#cust_text_days2').length){
        const second2 = 1060,
        minute2 = second2 * 60,
        hour2 = minute2 * 60,
        day2 = hour2 * 24;
        let countDown2 = new Date('March 12, 2025 00:00:00').getTime(),
        b = setInterval(function() {
            let now = new Date().getTime(),
            distance = countDown2 - now;
            document.getElementById('cust_text_days2').innerText = Math.floor(distance / (day2)),
            document.getElementById('cust_text_hours2').innerText = Math.floor((distance % (day2)) / (hour2)),
            document.getElementById('cust_text_minutes2').innerText = Math.floor((distance % (hour2)) / (minute2)),
            document.getElementById('cust_text_seconds2').innerText = Math.floor((distance % (minute2)) / second2);
        }, second2)
    }
    if($('#cust_text_days3').length){
        const second3 = 1090,
        minute3 = second3 * 60,
        hour3 = minute3 * 60,
        day3 = hour3 * 24;
        let countDown3 = new Date('March 22, 2025 00:00:00').getTime(),
        c = setInterval(function() {
            let now = new Date().getTime(),
            distance = countDown3 - now;
            document.getElementById('cust_text_days3').innerText = Math.floor(distance / (day3)),
            document.getElementById('cust_text_hours3').innerText = Math.floor((distance % (day3)) / (hour3)),
            document.getElementById('cust_text_minutes3').innerText = Math.floor((distance % (hour3)) / (minute3)),
            document.getElementById('cust_text_seconds3').innerText = Math.floor((distance % (minute3)) / second3);
        }, second3)
    }
    if($('#cust_text_days4').length){
        const second4 = 1100,
        minute4 = second4 * 60,
        hour4 = minute4 * 60,
        day4 = hour4 * 24;
        let countDown4 = new Date('March 19, 2025 00:00:00').getTime(),
        d = setInterval(function() {
            let now = new Date().getTime(),
            distance = countDown4 - now;
            document.getElementById('cust_text_days4').innerText = Math.floor(distance / (day4)),
            document.getElementById('cust_text_hours4').innerText = Math.floor((distance % (day4)) / (hour4)),
            document.getElementById('cust_text_minutes4').innerText = Math.floor((distance % (hour4)) / (minute4)),
            document.getElementById('cust_text_seconds4').innerText = Math.floor((distance % (minute4)) / second4);
        }, second4)
    }
    if($('#cust_text_days5').length){
        const second5 = 1200,
        minute5 = second5 * 60,
        hour5 = minute5 * 60,
        day5 = hour5 * 24;
        let countDown5 = new Date('March 25, 2025 00:00:00').getTime(),
        e = setInterval(function() {
            let now = new Date().getTime(),
            distance = countDown5 - now;
            document.getElementById('cust_text_days5').innerText = Math.floor(distance / (day5)),
            document.getElementById('cust_text_hours5').innerText = Math.floor((distance % (day5)) / (hour5)),
            document.getElementById('cust_text_minutes5').innerText = Math.floor((distance % (hour5)) / (minute5)),
            document.getElementById('cust_text_seconds5').innerText = Math.floor((distance % (minute5)) / second5);
        }, second5)
    }

    /*===================================
        product-grid js
    ===================================*/
    $('.list-change-view').on("click",function () {
        event.preventDefault();
        var data_grid = $(this).attr('data-grid-view');
        if ($('.special-product').hasClass('grid-1') ||
            $('.special-product').hasClass('grid-2') ||
            $('.special-product').hasClass('grid-3') ||
            $('.special-product').hasClass('grid-4'))
        {
            $('.special-product').removeClass('grid-1');
            $('.special-product').removeClass('grid-2');
            $('.special-product').removeClass('grid-3');
            $('.special-product').removeClass('grid-4');
            $('.special-product').addClass('grid-'+data_grid);
        }
        else {
            $('.special-product').addClass('grid-'+data_grid);
        }
    });

    $('.list-change-view').on("click",function () {
        $('.list-change-view').removeClass('active');
        $(this).addClass('active');
    });

    /*==============================
        read-agree js
    ==============================*/
    $('label.box-area, .read-agree').on('click', function () {
        if($('.cust-checkbox, .create-checkbox').is(':checked')) {
            $('.checkout, .create').removeClass('disabled');
        }
        else {
            $('.checkout, .create').addClass('disabled');
        }
    });

    /*==============================
        counter js
    ==============================*/
    $('.custom-count, .counter').counterUp({
        delay: 10,
        time: 1000
    });

    /*==============================
        magnificPopup js
    ==============================*/
    $('.full-view').on('click', function () {
        $(this).next().magnificPopup('open');
    });

    $('.slider-big, .slider-big-vertical').magnificPopup({
        delegate: 'a',
        type: 'image',
        showCloseBtn: true,
        closeBtnInside: false,
        midClick: true,
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

    /*==============================
        collectine-page js
    ==============================*/
    $('.product-short a.short-title-lg').on('click', function () {
        if ($('#select-wrap').hasClass('active')) {
          $('#select-wrap').removeClass('active');
          $(this).removeClass('active');
        }
        else {
          $('#select-wrap').addClass('active');
          $(this).addClass('active');
        }
    });

    /*==============================
        home1-slider js
    ==============================*/
    $('#home1-slider').owlCarousel({
        loop: false,
        items: 1,
        margin: 0,
        rewind: true,
        nav: false,
        dots: true,
        navText: ['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>'],
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
    });
    $('.owl-nav').addClass('container');
    $('.owl-dots').addClass('container');

    /*==============================
        home2 slider js
    ==============================*/
    $('#home-slider2').owlCarousel({
        loop: true,
        items: 1,
        nav: false,
        navText : ['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>'],
        dots: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        }
    });

    /*==============================
        home3 slider js
    ==============================*/
    $('#home-slider3').owlCarousel({
        loop: false,
        items: 1,
        rewind: true,
        nav: true,
        navText : ['<i class="bi bi-arrow-left-short"></i>','<i class="bi bi-arrow-right-short"></i>'],
        dots: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        }
    });

    /*==============================
        home4 slider js
    ==============================*/
    $('#home-slider4').owlCarousel({
        loop: false,
        items: 1,
        nav: false,
        navText : ['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>'],
        dots: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        }
    });

    /*==============================
        home5 slider js
    ==============================*/
    $('#home-slider5').owlCarousel({
        loop: false,
        items: 1,
        margin: 0,
        nav: true,
        navText : ['<i class="bi bi-arrow-left-short"></i>','<i class="bi bi-arrow-right-short"></i>'],
        dots: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        }
    });

    /*==============================
        home6 slider js
    ==============================*/
    var owl = $('#home-slider6');
    jQuery(document).ready(function() {
        owl.owlCarousel({
        loop: false,
        items: 1,
        margin: 0,
        rewind: true,
        nav: false,
        navText : ['<i class="bi bi-arrow-left-short"></i>','<i class="bi bi-arrow-right-short"></i>'],
        dots: true,
        animateOut: 'fadeOut',
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
            },
                responsive: {
            }
        });
        $('#home-slider6 .owl-dot')[0].innerHTML = '<div class="inner"></div><div class="bar left-bar"><div class="progress-wrap"></div></div><div class="bar right-bar"><div class="progress-wrap"></div></div>';
        owl.owlCarousel();
        owl.on('changed.owl.carousel', function() {
            owl.trigger('stop.owl.autoplay');
            owl.trigger('play.owl.autoplay');
            var buttons = $('.owl-dot');
            for(var button of buttons) {
                if(button.classList.contains('active')) {
                    button.innerHTML = '<div class="inner"></div><div class="bar left-bar"><div class="progress-wrap"></div></div><div class="bar right-bar"><div class="progress-wrap"></div></div>';
                } else {
                    button.innerHTML = '<span></span>';
                }
            }
        });
    });

    /*==============================
        home7 slider js
    ==============================*/
    $('#home-slider7').owlCarousel({
        loop: false,
        items: 1,
        margin: 0,
        nav: true,
        navText : ['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>'],
        dots: true
    });

    /*==============================
        home8 slider js
    ==============================*/
    $('#home-slider8').owlCarousel({
        loop: false,
        items: 1,
        margin: 0,
        nav: true,
        navText : ['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>'],
        dots: true
    });

    /*==============================
        home9 slider js
    ==============================*/
    $('#home-slider9').owlCarousel({
        loop: false,
        items: 1,
        margin: 0,
        nav: false,
        navText : ['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>'],
        dots: true,
        fade: true,
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
    });

    /*==============================
        home10 slider js
    ==============================*/
    $('#home-slider10').owlCarousel({
        loop: false,
        items: 1,
        margin: 0,
        nav: true,
        navText : ['<i class="bi bi-arrow-left-short"></i>','<i class="bi bi-arrow-right-short"></i>'],
        dots: false,
        fade: true,
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
    });
    $('#home-slider10 .owl-nav').addClass('container');

    /*==============================
        home11 slider js
    ==============================*/
    $('#home-slider11').owlCarousel({
        loop: false,
        items: 1,
        margin: 0,
        nav: true,
        navText : ['<div>P</div><div>R</div><div>E</div><div>V</div>','<div>N</div><div>E</div><div>X</div><div>T</div>'],
        dots: false,
        fade: true,
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
    });

    /*==============================
        home12 slider js
    ==============================*/
    $('#home-slider12').owlCarousel({
        loop: false,
        items: 1,
        margin: 0,
        nav: true,
        navText : ['<i class="bi bi-arrow-left-short"></i>','<i class="bi bi-arrow-right-short"></i>'],
        dots: true,
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
    });

    /*==============================
        home13 slider js
    ==============================*/
    $('#home-slider13').owlCarousel({
        loop: false,
        items: 1,
        margin: 0,
        nav: true,
        navText : ['<i class="bi bi-arrow-left-short"></i>','<i class="bi bi-arrow-right-short"></i>'],
        dots: true,
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
    });

    /*==============================
        home14 slider js
    ==============================*/
    $('#home-slider14').owlCarousel({
        loop: false,
        items: 1,
        margin: 0,
        nav: true,
        navText : ['<i class="bi bi-arrow-left"></i>','<i class="bi bi-arrow-right"></i>'],
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
        }
    });
    $('#home-slider14 .owl-nav').addClass('container-fluid');
    $('#home-slider14 .owl-dots').addClass('container-fluid');

    /*==============================
        home15 slider js
    ==============================*/
    $('#home-slider15').owlCarousel({
        loop: false,
        items: 1,
        margin: 0,
        nav: true,
        navText : ['<i class="bi bi-arrow-up-short"></i>','<i class="bi bi-arrow-down-short"></i>'],
        dots: false,
        fade: true,
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
    });

    /*==============================
        home16 slider js
    ==============================*/
    $('#home-slider16').owlCarousel({
        loop: false,
        items: 1,
        margin: 0,
        nav: false,
        navText: ['<i class="bi bi-arrow-left-short"></i>','<i class="bi bi-arrow-right-short"></i>'],
        dots: true,
        fade: true,
        singleItem: true,
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
    });

    /*==============================
        home-17 slider js
    ==============================*/
    $('#home-slider17').owlCarousel({
        loop: true,
        items: 1,
        nav: false,
        navText : ['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>'],
        dots: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        }
    });

    /*==============================
       home6  category-slider js
    ==============================*/
    var swiper = new Swiper('.swiper#cat-slider6', {
        loop: false,
        slidesPerView: 3,
        grid: {
            rows: 2,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-cat6',
            nextEl: '.swiper-next-cat6'
        },
        pagination: {
            el: ".swiper-pagination-cat6",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    /*==============================
        home7 category js
    ==============================*/
    $('#category-slider7').owlCarousel({
        loop: false,
        items: 6,
        margin: 30,
        rewind: true,
        nav: true,
        navText : ['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>'],
        dots: true,
        responsive: {
            0 : {
                items: 2,
                margin: 12
            },
            479 : {
                items: 2,
                margin: 12
            },
            540 : {
                items: 3,
                margin: 12
            },
            640 : {
                items: 4,
                margin: 12
            },
            768 : {
                items: 4,
                margin: 30
            },
            979 : {
                items: 5,
                margin: 30
            },
            1199 : {
                items: 6,
                margin: 30
            }
        }
    });

    /*==============================
       home8 category js
    ==============================*/
    $('#category-slider8').owlCarousel({
        loop: false,
        items: 3,
        margin: 30,
        rewind: true,
        nav: false,
        navText: ['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>'],
        dots: false,
        responsive: {
            0 : {
                items: 1,
                margin: 12
            },
            479 : {
                items: 1,
                margin: 12
            },
            540 : {
                items: 2,
                margin: 12
            },
            640 : {
                items: 2,
                margin: 12
            },
            768 : {
                items: 2,
                margin: 30
            },
            979 : {
                items: 2,
                margin: 30
            },
            1199 : {
                items: 3,
                margin: 30
            }
        }
    });

    /*==============================
       home11 categories-slider js
    ==============================*/
    $('#category-slider11').owlCarousel({
        loop: false,
        rewind: true,
        margin: 30,
        items: 5,
        nav: false,
        navText: ['<i class="bi bi-arrow-left-short"></i>','<i class="bi bi-arrow-right-short"></i>'],
        autoplay: false,
        dots: false,
        responsive: {
            0 : {
                items: 2,
                margin: 12
            },
            479 : {
                items: 2,
                margin: 12
            },
            540 : {
                items: 2,
                margin: 12
            },
            640 : {
                items: 3,
                margin: 12
            },
            768 : {
                items: 3,
                margin: 30
            },
            979 : {
                items: 4,
                margin: 30
            },
            1199 : {
                items: 5,
                margin: 30
            }
        }
    });

    /*==============================
        home12 category-slider js
    ==============================*/
    $('#category-slider12').owlCarousel({
        loop: false,
        rewind: true,
        margin: 30,
        nav: false,
        navText: ['<i class="bi bi-arrow-left-short"></i>','<i class="bi bi-arrow-right-short"></i>'],
        dots: false,
        responsive: {
            0 : {
                items: 1,
                margin: 12
            },
            479 : {
                items: 1,
                margin: 12
            },
            540 : {
                items: 2,
                margin: 12
            },
            640 : {
                items: 3,
                margin: 12
            },
            768 : {
                items: 3,
                margin: 30
            },
            979 : {
                items: 4,
                margin: 30
            },
            1199 : {
                items: 5,
                margin: 30
            },
            1499 : {
                items: 6,
                margin: 30
            }
        }
    });

    /*==============================
       home14 category shop-slider js
    ==============================*/
    var swiper = new Swiper('.swiper#category-slider14', {
        rewind: false,
        slidesPerView: 3,
        grid: {
            rows: 1,
            fill: 'row' | 'column',
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.swiper-next14',
            prevEl: '.swiper-prev14',
        },
        pagination: {
            el: ".swiper-pagination14",
            clickable: true
        },
        scrollbar: {
            el: ".swiper-scrollbar14",
            draggable: false
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            }
        }
    });

    /*==============================
       home15 category js
    ==============================*/ 
    $('#cat-slider15').owlCarousel({
        loop: false,
        rewind: true,
        margin: 30,
        nav: true,
        dots: false,
        navText: ['<i class="bi bi-arrow-left-short"></i>','<i class="bi bi-arrow-right-short"></i>'],
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0 : {
                items: 1,
                margin: 12
            },
            479 : {
                items: 1,
                margin: 12
            },
            540 : {
                items: 2,
                margin: 12
            },
            640 : {
                items: 3,
                margin: 12
            },
            768 : {
                items: 3,
                margin: 30
            },
            979 : {
                items: 4,
                margin: 30
            },
            1199 : {
                items: 5,
                margin: 30
            },
            1399: {
                items: 6,
                margin: 30
          }
        }
    });

    /*==============================
        home16 category js
    ==============================*/ 
    $('#category-slider16').owlCarousel({
        loop: false,
        rewind: true,
        items: 5,
        margin: 30,
        nav: false,
        dots: false,
        navText: ['<i class="bi bi-arrow-left-short"></i>','<i class="bi bi-arrow-right-short"></i>'],
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        responsive: {
            0 : {
                items: 1,
                margin: 12
            },
            479 : {
                items: 1,
                margin: 12
            },
            540 : {
                items: 2,
                margin: 12
            },
            640 : {
                items: 2,
                margin: 12
            },
            768 : {
                items: 2,
                margin: 30
            },
            979 : {
                items: 3,
                margin: 30
            },
            1199 : {
                items: 4,
                margin: 30
            }
        }
    });

    /*==============================
       home1 product-tab-slider js
    ==============================*/
    var swiper = new Swiper('.swiper#home1-new_product_tab', {
        loop: false,
        rewind: true,
        slidesPerView: 4,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-new',
            nextEl: '.swiper-next-new'
        },
        pagination: {
            el: ".swiper-pagination-new",
            clickable: false
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            }
        }
    });

    // feature-product-tab
    var swiper = new Swiper('.swiper#home1-feature_product_tab', {
        loop: false,
        rewind: true,
        slidesPerView: 4,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-feature',
            nextEl: '.swiper-next-feature'
        },
        pagination: {
            el: ".swiper-pagination-feature",
            clickable: false
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            }
        }
    });

    // best-product-tab
    var swiper = new Swiper('.swiper#home1-best_product_tab', {
        loop: false,
        rewind: true,
        slidesPerView: 4,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-best',
            nextEl: '.swiper-next-best'
        },
        pagination: {
            el: ".swiper-pagination-best",
            clickable: false
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            }
        }
    });

    /*==============================
       home2  product-tab-slider js
    ==============================*/
    var swiper = new Swiper('.swiper#new_pro_tab2', {
        loop: false,
        slidesPerView: 4,
        grid: {
            rows: 2,
            fill: 'row' | 'column'
        },
        spaceBetween: 10,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-new2',
            nextEl: '.swiper-next-new2'
        },
        pagination: {
            el: ".swiper-pagination-new2",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 7
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 7
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 7
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 7
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 7
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 10
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 10
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 10
            }
        }
    });

    // feature-product-tab js
    var swiper = new Swiper('.swiper#feture_pro_tab2', {
        loop: false,
        rewind: true,
        slidesPerView: 4,
        grid: {
            rows: 2,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-new2',
            nextEl: '.swiper-next-new2'
        },
        pagination: {
            el: ".swiper-pagination-new2",
            clickable: false
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 7
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 7
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 7
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 2
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 7
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 10
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 10
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 10
            }
        }
    });

    // best-product-tab
    var swiper = new Swiper('.swiper#best_pro_tab2', {
        loop: false,
        rewind: true,
        slidesPerView: 4,
        grid: {
            rows: 2,
            fill: 'row' | 'column'
        },
        spaceBetween: 10,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-best2',
            nextEl: '.swiper-next-best2'
        },
        pagination: {
            el: ".swiper-pagination-best2",
            clickable: false
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 7
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 7
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 7
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 7
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 7
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 10
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 10
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 10
            }
        }
    });

    /*==============================
        home3 product-tab-slider js
    ==============================*/
    // new-product-tab js//
    var swiper = new Swiper('.swiper#new_product_tab3', {
        loop: false,
        slidesPerView: 4,
        grid: {
            rows: 2,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-new3',
            nextEl: '.swiper-next-new3'
        },
        pagination: {
            el: ".swiper-pagination-new3",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    // feature-product-tab
    var swiper = new Swiper('.swiper#feature_product_tab3', {
        loop: false,
        slidesPerView: 4,
        grid: {
            rows: 2,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-feature3',
            nextEl: '.swiper-next-feature3'
        },
        pagination: {
            el: ".swiper-pagination-feature3",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    // best-product-tab
    var swiper = new Swiper('.swiper#best_seller_tab3', {
        loop: false,
        slidesPerView: 4,
        grid: {
            rows: 2,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-best3',
            nextEl: '.swiper-next-best3'
        },
        pagination: {
            el: ".swiper-pagination-best3",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    /*==============================
       home4 product-tab-slider js
    ==============================*/
    // new-product-tab js//
    var swiper = new Swiper('.swiper#new_pro_tab4', {
        loop: false,
        slidesPerView: 4,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-new4',
            nextEl: '.swiper-next-new4'
        },
        pagination: {
            el: ".swiper-pagination-new4",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    // feature-product-tab
    var swiper = new Swiper('.swiper#feture_pro_tab4', {
        loop: false,
        slidesPerView: 4,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-feature4',
            nextEl: '.swiper-next-feature4'
        },
        pagination: {
            el: ".swiper-pagination-feature4",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    // best-product-tab
    var swiper = new Swiper('.swiper#best_pro_tab4', {
        loop: false,
        slidesPerView: 4,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-best4',
            nextEl: '.swiper-next-best4'
        },
        pagination: {
            el: ".swiper-pagination-best4",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    /*==============================
       home4 special-product-tab js
    ==============================*/
    var swiper = new Swiper('.swiper#special_product4', {
        loop: false,
        slidesPerView: 4,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-special4',
            nextEl: '.swiper-next-special4'
        },
        pagination: {
            el: ".swiper-pagination-special4",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    /*==============================
        home5 product-tab-slider js
    ==============================*/
    // new-product-tab js//
    var swiper = new Swiper('.swiper#new_product_tab5', {
        loop: false,
        slidesPerView: 4,
        grid: {
            rows: 2,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-new5',
            nextEl: '.swiper-next-new5'
        },
        pagination: {
            el: ".swiper-pagination-new5",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    // feature-product-tab
    var swiper = new Swiper('.swiper#feture_pro_tab5', {
        loop: false,
        slidesPerView: 4,
        grid: {
            rows: 2,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-feature5',
            nextEl: '.swiper-next-feature5'
        },
        pagination: {
            el: ".swiper-pagination-feature5",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    // best-product-tab
    var swiper = new Swiper('.swiper#best_pro_tab5', {
        loop: false,
        slidesPerView: 4,
        grid: {
            rows: 2,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-best5',
            nextEl: '.swiper-next-best5'
        },
        pagination: {
            el: ".swiper-pagination-best5",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    /*==============================
       home6 product-tab-slider js
    ==============================*/
    // new-product-tab js
    var swiper = new Swiper('.swiper#new_product_tab6', {
        slidesPerView: 4,
        spaceBetween: 30,
        grid: {
            rows: 2,
            fill: 'row' | 'column'
        },
        navigation: {
            prevEl: '.swiper-prev-new6',
            nextEl: '.swiper-next-new6'
        },
        pagination: {
            el: '.swiper-pagination-new6',
            clickable: true
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            }
        }
    });

    // feature-product-tab js
    var swiper = new Swiper('.swiper#feture_pro_tab6', {
        slidesPerView: 4,
        spaceBetween: 30,
        grid: {
            rows: 2,
            fill: 'row' | 'column'
        },
        navigation: {
            prevEl: '.swiper-prev-feature6',
            nextEl: '.swiper-next-feature6'
        },
        pagination: {
            el: '.swiper-pagination-feature6',
            clickable: true
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            }
        }
    });

    // best-product-tab js
    var swiper = new Swiper('.swiper#best_pro_tab6', {
        slidesPerView: 4,
        spaceBetween: 30,
        grid: {
            rows: 2,
            fill: 'row' | 'column'
        },
        navigation: {
            prevEl: '.swiper-prev-best6',
            nextEl: '.swiper-next-best6'
        },
        pagination: {
            el: '.swiper-pagination-best6',
            clickable: true
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            }
        }
    });

    /*==============================
       home6 single-product js
    ==============================*/
    var swiper = new Swiper('.swiper#single-product6', {
        slidesPerView: 4,
        spaceBetween: 30,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        navigation: {
            prevEl: '.swiper-prev-single6',
            nextEl: '.swiper-next-single6'
        },
        pagination: {
            el: '.swiper-pagination-single6',
            clickable: true
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            }
        }
    });

    /*==============================
       home7 product-tab-slider js
    ==============================*/
    var swiper = new Swiper('.swiper#new_product_tab7', {
        loop: false,
        rewind: true,
        slidesPerView: 4,
        grid: {
            rows: 2,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-new7',
            nextEl: '.swiper-next-new7'
        },
        pagination: {
            el: ".swiper-pagination-new7",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            }
        }
    });

    // feature-product-tab
    var swiper = new Swiper('.swiper#feature_product_tab7', {
        loop: false,
        rewind: true,
        slidesPerView: 4,
        grid: {
            rows: 2,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-feature7',
            nextEl: '.swiper-next-feature7'
        },
        pagination: {
            el: ".swiper-pagination-feature7",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            }
        }
    });

    // best-product-tab
    var swiper = new Swiper('.swiper#best_product_tab7', {
        loop: false,
        rewind: true,
        slidesPerView: 4,
        grid: {
            rows: 2,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-best7',
            nextEl: '.swiper-next-best7'
        },
        pagination: {
            el: ".swiper-pagination-best7",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            }
        }
    });

    /*==============================
      home8  products js
    ==============================*/
    var swiper = new Swiper('.swiper#new_pro_tab8', {
        slidesPerView: 4,
        spaceBetween: 30,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        pagination: {
            el: '.swiper-pagination8',
            clickable: true,
        },
        breakpoints: {
            0: {
              slidesPerView: 2,
              grid: {
                rows: 1,
                fill: 'row' | 'column',
              },
              spaceBetween: 12
            },
            320: {
              slidesPerView: 2,
              grid: {
                rows: 1,
                fill: 'row' | 'column',
              },
              spaceBetween: 12
            },
            360: {
              slidesPerView: 2,
              grid: {
                rows: 1,
                fill: 'row' | 'column',
              },
              spaceBetween: 12
            },
            540: {
              slidesPerView: 2,
              grid: {
                rows: 1,
                fill: 'row' | 'column',
              },
              spaceBetween: 12
            },
            640: {
              slidesPerView: 3,
              grid: {
                rows: 1,
                fill: 'row' | 'column',
              },
              spaceBetween: 12
            },
            768: {
              slidesPerView: 3,
              grid: {
                rows: 1,
                fill: 'row' | 'column',
              },
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 4,
              grid: {
                rows: 1,
                fill: 'row' | 'column',
              },
              spaceBetween: 30
            },
            1199: {
              slidesPerView: 4,
              grid: {
                rows: 1,
                fill: 'row' | 'column',
              },
              spaceBetween: 30
            }
        }
    });

    /*==============================
        home9 collection-slider js
    ==============================*/
    var swiper = new Swiper('.swiper#collection-slider9', {
        loop: false,
        rewind: true,
        slidesPerView: 3,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-gym9',
            nextEl: '.swiper-next-gym9'
        },
        pagination: {
            el: ".swiper-pagination-gym9",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            }
        }
    });

    /*==============================
        home9 new_pro_tab js
    ==============================*/
    var swiper = new Swiper('.swiper#new_pro_tab9', {
        loop: false,
        rewind: true,
        slidesPerView: 3,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-new9',
            nextEl: '.swiper-next-new9'
        },
        pagination: {
            el: ".swiper-pagination-new9",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            }
        }
    });

    /*==============================
        home10 product-tab-slider js
    ==============================*/
    var swiper = new Swiper('.swiper#new_product_tab10', {
        loop: false,
        rewind: true,
        slidesPerView: 4,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-new10',
            nextEl: '.swiper-next-new10'
        },
        scrollbar: {
            el: ".new-product-scrollbar",
            draggable: true
        },
        pagination: {
            el: ".swiper-pagination-new10",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            }
        }
    });

    // feature-product-tab
    var swiper = new Swiper('.swiper#feature_product_tab10', {
        loop: false,
        rewind: true,
        slidesPerView: 4,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-new10',
            nextEl: '.swiper-next-new10'
        },
        scrollbar: {
            el: ".feature-product-scrollbar",
            draggable: true
        },
        pagination: {
            el: ".swiper-pagination-new10",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            }
        }
    });

    // best-product-tab
    var swiper = new Swiper('.swiper#best_seller_tab10', {
        loop: false,
        rewind: true,
        slidesPerView: 4,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-new10',
            nextEl: '.swiper-next-new10'
        },
        scrollbar: {
            el: ".best-product-scrollbar",
            draggable: true
        },
        pagination: {
            el: ".swiper-pagination-new10",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            }
        }
    });

    // shirts-tab
    var swiper = new Swiper('.swiper#shirts10', {
        loop: false,
        rewind: true,
        slidesPerView: 4,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-new10',
            nextEl: '.swiper-next-new10'
        },
        scrollbar: {
            el: ".shirts-scrollbar",
            draggable: true
        },
        pagination: {
            el: ".swiper-pagination-new10",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            }
        }
    });

    // t-shirts-tab
    var swiper = new Swiper('.swiper#t-shirts10', {
        loop: false,
        rewind: true,
        slidesPerView: 4,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-new10',
            nextEl: '.swiper-next-new10'
        },
        scrollbar: {
            el: ".t-shirts-scrollbar",
            draggable: true
        },
        pagination: {
            el: ".swiper-pagination-new10",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            }
        }
    });

    /*==============================
        home11 product-tab-slider js
    ==============================*/
    var swiper = new Swiper('.swiper#new_product_tab11', {
        loop: false,
        rewind: true,
        slidesPerView: 6,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev11',
            nextEl: '.swiper-next11'
        },
        pagination: {
            el: ".swiper-pagination-new11",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
               slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
               slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
               slidesPerView: 6,
                grid: { 
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    // feature-product-tab
    var swiper = new Swiper('.swiper#feature_product_tab11', {
        loop: false,
        rewind: true,
        slidesPerView: 6,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev11',
            nextEl: '.swiper-next11'
        },
        pagination: {
            el: ".swiper-pagination-feature11",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
               slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
               slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
               slidesPerView: 6,
                grid: { 
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    // best-product-tab
    var swiper = new Swiper('.swiper#best_seller_tab11', {
        loop: false,
        rewind: true,
        slidesPerView: 6,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev11',
            nextEl: '.swiper-next11'
        },
        pagination: {
            el: ".swiper-pagination-best11",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
               slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
               slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
               slidesPerView: 6,
                grid: { 
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    /*==============================
        home12 product-slider js
    ==============================*/
    var swiper = new Swiper('.swiper#product-slider12', {
        loop: false,
        rewind: true,
        slidesPerView: 5,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev12',
            nextEl: '.swiper-next12'
        },
        pagination: {
            el: ".swiper-pagination-new12",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
               slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
               slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
               slidesPerView: 4,
                grid: { 
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1499: {
               slidesPerView: 5,
                grid: { 
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    /*==============================
        home12 product-tab-slider js
    ==============================*/
    // new-product-tab js
    var swiper = new Swiper('.swiper#new_pro_tab12', {
        loop: false,
        rewind: true,
        slidesPerView: 5,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev12',
            nextEl: '.swiper-next12'
        },
        pagination: {
            el: ".swiper-pagination-new12",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
               slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
               slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
               slidesPerView: 4,
                grid: { 
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1499: {
               slidesPerView: 5,
                grid: { 
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    // new-product-tab js
    var swiper = new Swiper('.swiper#new_product_tab12', {
        slidesPerView: 5,
        spaceBetween: 30,
        rewind: true,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        navigation: {
            prevEl: '.swiper-prev12',
            nextEl: '.swiper-next12'
        },
        pagination: {
            el: '.swiper-pagination-new12',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
               slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
               slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
               slidesPerView: 4,
                grid: { 
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1499: {
               slidesPerView: 5,
                grid: { 
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    // feature-product-tab js
    var swiper = new Swiper('.swiper#feature_product_tab12', {
        slidesPerView: 5,
        spaceBetween: 30,
        rewind: true,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        navigation: {
            prevEl: '.swiper-prev12',
            nextEl: '.swiper-next12'
        },
        pagination: {
            el: '.swiper-pagination-feature12',
            clickable: true
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
               slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
               slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
               slidesPerView: 4,
                grid: { 
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1499: {
               slidesPerView: 5,
                grid: { 
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    // best-product-tab js
    var swiper = new Swiper('.swiper#best_product_tab12', {
        slidesPerView: 5,
        spaceBetween: 30,
        rewind: true,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        navigation: {
            prevEl: '.swiper-prev12',
            nextEl: '.swiper-next12'
        },
        pagination: {
            el: '.swiper-pagination-best12',
            clickable: true
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
               slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
               slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
               slidesPerView: 4,
                grid: { 
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1499: {
               slidesPerView: 5,
                grid: { 
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    /*==============================
       home13 product-tab-slider js
    ==============================*/
    var swiper = new Swiper('.swiper#new_pro_tab13', {
        loop: false,
        rewind: true,
        slidesPerView: 3,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev13',
            nextEl: '.swiper-next13'
        },
        pagination: {
            el: ".swiper-pagination-new13",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
               slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
               slidesPerView: 3,
                grid: { 
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    // feature-product-tab js
    var swiper = new Swiper('.swiper#feture_pro_tab13', {
        loop: false,
        rewind: true,
        slidesPerView: 3,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-feature13',
            nextEl: '.swiper-next-feature13'
        },
        pagination: {
            el: ".swiper-pagination-feature13",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
               slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
               slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
               slidesPerView: 3,
                grid: { 
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    // best-product-tab js
    var swiper = new Swiper('.swiper#best_pro_tab13', {
        loop: false,
        rewind: true,
        slidesPerView: 3,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-best13',
            nextEl: '.swiper-next-best13'
        },
        pagination: {
            el: ".swiper-pagination-best13",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
               slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
               slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
               slidesPerView: 3,
                grid: { 
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    /*==============================
       home14 product-tab-slider js
    ==============================*/
    // new-product-tab js    
    var swiper = new Swiper('.swiper#new_product_tab14', {
        loop: true,
        slidesPerView: 6,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev14',
            nextEl: '.swiper-next14'
        },
        pagination: {
            el: ".swiper-pagination-new14",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            }
        }
    });

    // feature-product-tab
    var swiper = new Swiper('.swiper#feature_product_tab14', {
        loop: true,
        slidesPerView: 6,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-feature14',
            nextEl: '.swiper-next-feature14'
        },
        pagination: {
            el: ".swiper-pagination-feature14",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            }
        }
    });

    // best-product-tab
    var swiper = new Swiper('.swiper#best_seller_tab14', {
        loop: true,
        slidesPerView: 6,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-best14',
            nextEl: '.swiper-next-best14'
        },
        pagination: {
            el: ".swiper-pagination-best14",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            }
        }
    });

    /*==============================
       home15 product-tab-slider js
    ==============================*/
    // new-product-tab js    
    var swiper = new Swiper('.swiper#new_product_tab15', {
        loop: false,
        rewind: true,
        slidesPerView: 4,
        grid: {
            rows: 3,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev15',
            nextEl: '.swiper-next15'
        },
        pagination: {
            el: ".swiper-pagination-new15",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 3,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
               slidesPerView: 1,
                grid: {
                    rows: 3,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 3,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 3,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 3,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 3,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
               slidesPerView: 3,
                grid: {
                    rows: 3,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
               slidesPerView: 4,
                grid: { 
                    rows: 3,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    // feature-product-tab
    var swiper = new Swiper('.swiper#feature_product_tab15', {
        loop: false,
        rewind: true,
        slidesPerView: 4,
        grid: {
            rows: 3,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev15',
            nextEl: '.swiper-next15'
        },
        pagination: {
            el: ".swiper-pagination-feature15",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 3,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
               slidesPerView: 1,
                grid: {
                    rows: 3,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 3,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 3,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 3,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 3,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
               slidesPerView: 3,
                grid: {
                    rows: 3,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
               slidesPerView: 4,
                grid: { 
                    rows: 3,
                fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    // best-product-tab
    var swiper = new Swiper('.swiper#best_seller_tab15', {
        loop: false,
        rewind: true,
        slidesPerView: 4,
        grid: {
            rows: 3,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev15',
            nextEl: '.swiper-next15'
        },
        pagination: {
            el: ".swiper-pagination-best15",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 3,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
               slidesPerView: 1,
                grid: {
                    rows: 3,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 3,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 3,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 3,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 3,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
               slidesPerView: 3,
                grid: {
                    rows: 3,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
               slidesPerView: 4,
                grid: { 
                    rows: 3,
                fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    /*==============================
       home15 Trending-products js
    ==============================*/
    var swiper = new Swiper('.swiper#new_pro_tab15', {
        slidesPerView: 4,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        autoplayHoverPause: true,
        grid: {
            rows: 3,
            fill: 'row' | 'column'
        },
        navigation: {
            prevEl: '.swiper-prev15',
            nextEl: '.swiper-next15'
        },
        pagination: {
            el: '.swiper-pagination-new15',
            clickable: true,
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 3,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
               slidesPerView: 1,
                grid: {
                    rows: 3,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 3,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 3,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 3,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 3,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
               slidesPerView: 3,
                grid: {
                    rows: 3,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
               slidesPerView: 4,
                grid: { 
                    rows: 3,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    /*==============================
       home15 gym-products js
    ==============================*/
    var swiper = new Swiper('.swiper#gym_pro_tab15', {
        slidesPerView: 3,
        spaceBetween: 30,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        pagination: {
            el: '.swiper-pagination-gym15',
            clickable: true,
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            320: {
                slidesPerView: 1
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            750: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            1024: {
                slidesPerView: 3
            },
            1199: {
                slidesPerView: 3
            }
        }
    });

    /*==============================
        home16 product-tab-slider js
    ==============================*/
    // new-product-tab js    
    var swiper = new Swiper('.swiper#new_product_tab16', {
        loop: false,
        slidesPerView: 4,
        grid: {
            rows: 2,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev16',
            nextEl: '.swiper-next16'
        },
        pagination: {
            el: ".swiper-pagination-new16",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
              slidesPerView: 2,
              grid: {
                rows: 2,
                fill: 'row' | 'column',
              },
              spaceBetween: 12
            },
            320: {
              slidesPerView: 2,
              grid: {
                rows: 2,
                fill: 'row' | 'column',
              },
              spaceBetween: 12
            },
            360: {
              slidesPerView: 2,
              grid: {
                rows: 2,
                fill: 'row' | 'column',
              },
              spaceBetween: 12
            },
            540: {
              slidesPerView: 2,
              grid: {
                rows: 2,
                fill: 'row' | 'column',
              },
              spaceBetween: 12
            },
            640: {
              slidesPerView: 2,
              grid: {
                rows: 2,
                fill: 'row' | 'column',
              },
              spaceBetween: 12
            },
            768: {
              slidesPerView: 2,
              grid: {
                rows: 2,
                fill: 'row' | 'column',
              },
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 3,
              grid: {
                rows: 2,
                fill: 'row' | 'column',
              },
              spaceBetween: 30
            },
            1199: {
              slidesPerView: 3,
              grid: {
                rows: 2,
                fill: 'row' | 'column',
              },
              spaceBetween: 30
            },
            1399: {
              slidesPerView: 4,
              grid: {
                rows: 2,
                fill: 'row' | 'column',
              },
              spaceBetween: 30
            }
        }
    });

    /*==============================
       home-17 Trending-products js
    ==============================*/
    var swiper = new Swiper('.swiper#home17-trending_pro', {
        loop: false,
        slidesPerView: 4,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.home1-swiper-prev-new_pro_tab',
            nextEl: '.home1-swiper-next-new_pro_tab'
        },
        pagination: {
            el: ".home1-swiper-pagination-new_pro_tab",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 4,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    /*====================================
        home-17 tab-product js
    ====================================*/
    var swiper = new Swiper('.swiper#home17-new_product_tab', {
        loop: false,
        rewind: true,
        slidesPerView: 4,
        grid: {
            rows: 2,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-new',
            nextEl: '.swiper-next-new'
        },
        pagination: {
            el: ".swiper-pagination-new",
            clickable: false
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    // feature-product-tab
    var swiper = new Swiper('.swiper#home17-feature_product_tab', {
        loop: false,
        rewind: true,
        slidesPerView: 4,
        grid: {
            rows: 2,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-feature',
            nextEl: '.swiper-next-feature'
        },
        pagination: {
            el: ".swiper-pagination-feature",
            clickable: false
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView:2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    // best-product-tab
    var swiper = new Swiper('.swiper#home17-best_product_tab', {
        loop: false,
        rewind: true,
        slidesPerView: 4,
        grid: {
            rows: 2,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-best',
            nextEl: '.swiper-next-best'
        },
        pagination: {
            el: ".swiper-pagination-best",
            clickable: false
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    /*==============================
       home15 deal-slider js
    ==============================*/
    var swiper = new Swiper('.swiper#deal-slider15', {
        rewind: true,
        slidesPerView: 1,
        grid: {
            rows: 1,
            fill: 'row' | 'column',
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: '.swiper-next15',
            prevEl: '.swiper-prev15',
        },
        pagination: {
            el: ".swiper-pagination15",
            clickable: true
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            draggable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 15
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 15
            },
            360: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 15
            },
            540: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 15
            },
            640: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 15
            },
            768: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            }
        }
    });

    /*==============================
       home1 testi-slider js
    ==============================*/
    $('#home1-testi-slider').owlCarousel({
        loop: false,
        items: 2,
        margin: 30,
        rewind: true,
        nav: false,
        navText : ['<i class="bi bi-arrow-left-short"></i>','<i class="bi bi-arrow-right-short"></i>'],
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0 : {
                items: 1,
                margin: 12
            },
            479 : {
                items: 1,
                margin: 12
            },
            540 : {
                items: 1,
                margin: 12
            },
            640 : {
                items: 1,
                margin: 12
            },
            768 : {
                items: 1,
                margin: 30
            },
            979 : {
                items: 2,
                margin: 30
            },
            1199 : {
                items: 2,
                margin: 30
            }
        }
    });

    /*==============================
        home2 testi-slider js
    ==============================*/
    $('#testi-slider2').owlCarousel({
        loop: false,
        items: 2,
        margin: 20,
        nav: true,
        navText : ['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>'],
        dots: true,
        responsive: {
            0 : {
                items: 1,
                margin: 2
            },
            479 : {
                items: 1,
                margin: 2
            },
            540 : {
                items: 1,
                margin: 2
            },
            640 : {
                items: 2,
                margin: 2
            },
            768 : {
                items: 2,
                margin: 20
            },
            979 : {
                items: 2,
                margin: 20
            },
            1199 : {
                items: 2,
                margin: 20
            }
        }
    });

    /*==============================
        home3 testi-slider js
    ==============================*/
    $('#testi-slider3').owlCarousel({
        loop: false,
        items: 3,
        margin: 30,
        nav: true,
        navText : ['<i class="bi bi-arrow-left-short"></i>','<i class="bi bi-arrow-right-short"></i>'],
        dots: true,
        responsive: {
            0 : {
                items: 1,
                margin: 12
            },
            479 : {
                items: 1,
                margin: 12
            },
            540 : {
                items: 1,
                margin: 12
            },
            640 : {
                items: 2,
                margin: 12
            },
            768 : {
                items: 2,
                margin: 30
            },
            979 : {
                items: 2,
                margin: 30
            },
            1199 : {
                items: 3,
                margin: 30
            }
        }
    });

    /*==============================
        home5 testi-slider js
    ==============================*/
    $('#testi-slider5').owlCarousel({
        loop: false,
        items: 1,
        margin: 0,
        rewind: false,
        nav: true,
        navText : ['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>'],
        dots: true
    });

    /*==============================
       home6  testi-slider js
    ==============================*/
    $('#testi-slider6').owlCarousel({
        loop: false,
        items: 1,
        margin: 0,
        rewind: true,
        nav: true,
        navText : ['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>'],
        dots: false
    });

    /*==============================
       home7 testi-slider js
    ==============================*/
    $('#testi-slider7').owlCarousel({
        loop: false,
        items: 1,
        margin: 0,
        rewind: true,
        nav: true,
        navText : ['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>'],
        dots: false
    });

    /*==============================
       home8 testi-slider js
    ==============================*/
    $('#testi-slider8').owlCarousel({
        loop: false,
        items: 3,
        margin: 30,
        rewind: true,
        nav: false,
        navText: ['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>'],
        dots: true,
        responsive: {
            0 : {
                items: 1,
                margin: 12
            },
            479 : {
                items: 1,
                margin: 12
            },
            540 : {
                items: 1,
                margin: 12
            },
            640 : {
                items: 2,
                margin: 12
            },
            768 : {
                items: 2,
                margin: 30
            },
            979 : {
                items: 2,
                margin: 30
            },
            1199 : {
                items: 3,
                margin: 30
            }
        }
    });

    /*==============================
       home11 testi-slider js
    ==============================*/
    $('#testi-slider11').owlCarousel({
        loop: false,
        items: 2,
        margin: 30,
        rewind: true,
        nav: false,
        navText : ['<i class="bi bi-arrow-left-short"></i>','<i class="bi bi-arrow-right-short"></i>'],
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0 : {
                items: 1,
                margin: 12
            },
            479 : {
                items: 1,
                margin: 12
            },
            540 : {
                items: 1,
                margin: 12
            },
            640 : {
                items: 1,
                margin: 12
            },
            768 : {
                items: 1,
                margin: 30
            },
            979 : {
                items: 2,
                margin: 30
            },
            1199 : {
                items: 2,
                margin: 30
            }
        }
    });

    /*==============================
       home12 testi-slider js
    ==============================*/
    $('#testi-slider12').owlCarousel({
        loop: false,
        items: 1,
        margin: 30,
        rewind: true,
        nav: false,
        navText : ['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>'],
        dots: true,
    });

    /*==============================
        home13 testi-slider js
    ==============================*/
    $('#testi-slider13').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="slick-prev"><i class="bi bi-arrow-up-short"></i></button>',
        nextArrow: '<button class="slick-next"><i class="bi bi-arrow-down-short"></i></button>',
        dots: false,
        vertical: true,
        verticalSwiping: true,
        speed: 500,
        focusOnSelect: true,
        responsive: [
            {
                    breakpoint: 1199,
                    settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                    breakpoint: 1024,
                    settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                    breakpoint: 768,
                    settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                    breakpoint: 480,
                    settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    /*==============================
       home15 testi-slider js
    ==============================*/
    $('#testi-slider15').owlCarousel({
        loop: false,
        items: 1,
        margin: 0,
        rewind: true,
        nav: false,
        navText : ['<i class="bi bi-arrow-left-short"></i>','<i class="bi bi-arrow-right-short"></i>'],
        dots: true,
    });

    /*==============================
        home16 testi-slider js
    ==============================*/
    $('#testi-slider16').owlCarousel({
        loop: false,
        items: 1,
        margin: 30,
        rewind: true,
        nav: true,
        navText : ['<i class="bi bi-arrow-left-short"></i>','<i class="bi bi-arrow-right-short"></i>'],
        dots: false,
        responsive: {
            0 : {
                items: 1,
                margin: 12
            },
            479 : {
                items: 1,
                margin: 12
            },
            540 : {
                items: 1,
                margin: 12
            },
            640 : {
                items: 1,
                margin: 12
            },
            768 : {
                items: 1,
                margin: 20
            },
            979 : {
                items: 1,
                margin: 30
            },
            1199 : {
                items: 1,
                margin: 30
            }
        }
    });

    /*==============================
        home-17 testi-slider js
    ==============================*/
    $('#home17-testi-slider').owlCarousel({
        loop: false,
        items: 3,
        margin: 30,
        nav: true,
        navText : ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        dots: true,
        responsive: {
            0 : {
                items: 1,
                margin: 12
            },
            479 : {
                items: 1,
                margin: 12
            },
            540 : {
                items: 1,
                margin: 12
            },
            640 : {
                items: 2,
                margin: 12
            },
            768 : {
                items: 2,
                margin: 30
            },
            979 : {
                items: 2,
                margin: 30
            },
            1199 : {
                items: 3,
                margin: 30
            }
        }
    });

    /*==============================
        home1 blog-slider js
    ==============================*/
    $('#home1-blog-slider').owlCarousel({
        loop: false,
        items: 3,
        margin: 30,
        nav: true,
        navText : ['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>'],
        dots: true,
        responsive: {
            0 : {
                items: 1,
                margin: 12
            },
            479 : {
                items: 1,
                margin: 12
            },
            540 : {
                items: 1,
                margin: 12
            },
            640 : {
                items: 2,
                margin: 12
            },
            768 : {
                items: 2,
                margin: 30
            },
            979 : {
                items: 2,
                margin: 30
            },
            1199 : {
                items: 3,
                margin: 30
            }
        }
    });

    /*==============================
        home2 blog-slider js
    ==============================*/
    $('#blog-slider2').owlCarousel({
        loop: false,
        items: 3,
        margin: 30,
        nav: true,
        navText : ['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>'],
        dots: true,
        responsive: {
            0 : {
                items: 1,
                margin: 12
            },
            479 : {
                items: 1,
                margin: 12
            },
            540 : {
                items: 1,
                margin: 12
            },
            640 : {
                items: 2,
                margin: 12
            },
            768 : {
                items: 2,
                margin: 30
            },
            979 : {
                items: 2,
                margin: 30
            },
            1199 : {
                items: 3,
                margin: 30
            }
        }
    });

    /*==============================
        home3 blog-slider js
    ==============================*/
    $('#blog-slider3').owlCarousel({
        loop: false,
        items: 3,
        margin: 30,
        nav: true,
        navText : ['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>'],
        dots: true,
        responsive: {
            0 : {
                items: 1,
                margin: 12
            },
            479 : {
                items: 1,
                margin: 12
            },
            540 : {
                items: 1,
                margin: 12
            },
            640 : {
                items: 2,
                margin: 12
            },
            768 : {
                items: 2,
                margin: 30
            },
            979 : {
                items: 2,
                margin: 30
            },
            1199 : {
                items: 3,
                margin: 30
            }
        }
    });

    /*==============================
       home4 blog-slider js
    ==============================*/
    $('#blog-slider4').owlCarousel({
        loop: false,
        items: 2,
        margin: 30,
        nav: true,
        navText : ['<i class="bi bi-arrow-left-short"></i>','<i class="bi bi-arrow-right-short"></i>'],
        dots: true,
        responsive: {
            0 : {
                items: 1,
                margin: 12
            },
            479 : {
                items: 1,
                margin: 12
            },
            540 : {
                items: 1,
                margin: 12
            },
            640 : {
                items: 1,
                margin: 12
            },
            768 : {
                items: 1,
                margin: 30
            },
            979 : {
                items: 1,
                margin: 30
            },
            1199 : {
                items: 2,
                margin: 30
            }
        }
    });

    /*==============================
       home5 blog-slider js
    ==============================*/
    $('#blog-slider5').owlCarousel({
        loop: false,
        items: 3,
        margin: 30,
        nav: true,
        navText : ['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>'],
        dots: true,
        responsive: {
            0 : {
                items: 1,
                margin: 12
            },
            479 : {
                items: 1,
                margin: 12
            },
            540 : {
                items: 1,
                margin: 12
            },
            640 : {
                items: 2,
                margin: 12
            },
            768 : {
                items: 2,
                margin: 30
            },
            979 : {
                items: 2,
                margin: 30
            },
            1199 : {
                items: 3,
                margin: 30
            }
        }
    });

    /*==============================
        home6 blog-slider js
    ==============================*/
    $('#blog-slider6').owlCarousel({
        loop: false,
        items: 3,
        margin: 30,
        rewind: true,
        nav: true,
        navText : ['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>'],
        dots: true,
        responsive: {
            0 : {
                items: 1,
                margin: 12
            },
            479 : {
                items: 1,
                margin: 12
            },
            540 : {
                items: 1,
                margin: 12
            },
            640 : {
                items: 2,
                margin: 12
            },
            768 : {
                items: 2,
                margin: 30
            },
            979 : {
                items: 2,
                margin: 30
            },
            1199 : {
                items: 3,
                margin: 30
            }
        }
    });

    /*==============================
       home8 blog-slider js
    ==============================*/
    $('#blog-slider8').owlCarousel({
        loop: false,
        items: 3,
        margin: 30,
        rewind: true,
        nav: true,
        navText : ['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>'],
        dots: true,
        responsive: {
            0: {
                items: 1,
                margin: 12
            },
            479: {
                items: 1,
                margin: 12
            },
            768: {
                items: 1
            },
            979: {
                items: 2
            },
            1024: {
                items: 3
            },
            1199: {
                items: 3
            }
        }
    });

    /*==============================
       home9 blog-slider js
    ==============================*/
    $('#blog-slider9').owlCarousel({
        loop: false,
        items: 2,
        margin: 30,
        rewind: true,
        nav: false,
        navText : ['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>'],
        dots: false,
        responsive: {
            0 : {
                items: 1,
                margin: 12
            },
            479 : {
                items: 1,
                margin: 12
            },
            540 : {
                items: 1,
                margin: 12
            },
            640 : {
                items: 2,
                margin: 12
            },
            768 : {
                items: 2,
                margin: 30
            },
            979 : {
                items: 2,
                margin: 30
            },
            1199 : {
                items: 2,
                margin: 30
            }
        }
    });

    /*==============================
      home10 blog-slider js
    ==============================*/
    $('#blog-slider10').owlCarousel({
        loop: false,
        items: 3,
        margin: 30,
        nav: false,
        navText : ['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>'],
        dots: false,
        responsive: {
            0 : {
                items: 1,
                margin: 12
            },
            479 : {
                items: 1,
                margin: 12
            },
            540 : {
                items: 1,
                margin: 12
            },
            640 : {
                items: 2,
                margin: 12
            },
            768 : {
                items: 2,
                margin: 30
            },
            979 : {
                items: 3,
                margin: 30
            },
            1199 : {
                items: 3,
                margin: 30
            }
        }
    });

    /*==============================
       home12 blog-slider js
    ==============================*/
    $('#blog-slider12').owlCarousel({
        loop: false,
        rewind: true,
        items: 4,
        margin: 30,
        nav: false,
        navText : ['<i class="bi bi-arrow-left-short"></i>','<i class="bi bi-arrow-right-short"></i>'],
        dots: false,
        responsive: {
            0 : {
                items: 1,
                margin: 12
            },
            479 : {
                items: 1,
                margin: 12
            },
            540 : {
                items: 2,
                margin: 12
            },
            640 : {
                items: 2,
                margin: 12
            },
            768 : {
                items: 2,
                margin: 30
            },
            979 : {
                items: 3,
                margin: 30
            },
            1199 : {
                items: 4,
                margin: 30
            }
        }
    });

    /*==============================
      home14 blog-slider js
    ==============================*/
    $('#blog-slider14').owlCarousel({
        loop: false,
        items: 3,
        margin: 30,
        rewind: true,
        nav: false,
        navText : ['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>'],
        dots: false,
        responsive: {
            0 : {
                items: 1,
                margin: 12
            },
            479 : {
                items: 1,
                margin: 12
            },
            540 : {
                items: 2,
                margin: 12
            },
            640 : {
                items: 2,
                margin: 12
            },
            768 : {
                items: 2,
                margin: 30
            },
            979 : {
                items: 2,
                margin: 30
            },
            1199 : {
                items: 3,
                margin: 30
            }
        }
    });

    /*==============================
      home16 blog-slider js
    ==============================*/
    $('#blog-slider16').owlCarousel({
        loop: false,
        items: 3,
        margin: 30,
        rewind: true,
        nav: false,
        navText : ['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>'],
        dots: true,
        responsive: {
            0 : {
                items: 1,
                margin: 2
            },
            479 : {
                items: 1,
                margin: 2
            },
            540 : {
                items: 1,
                margin: 2
            },
            640 : {
                items: 1,
                margin: 2
            },
            768 : {
                items: 1,
                margin: 20
            },
            979 : {
                items: 1,
                margin: 20
            },
            1199 : {
                items: 1,
                margin: 20
            },
            1399 : {
                items: 2,
                margin: 20
            }
        }
    });

    /*==============================
       home-17 blog-slider js
    ==============================*/
    $('#home17-blog-slider').owlCarousel({
        loop: false,
        items: 3,
        margin: 30,
        nav: true,
        navText : ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        dots: true,
        responsive: {
            0 : {
                items: 1,
                margin: 12
            },
            479 : {
                items: 1,
                margin: 12
            },
            540 : {
                items: 1,
                margin: 12
            },
            640 : {
                items: 2,
                margin: 12
            },
            768 : {
                items: 2,
                margin: 30
            },
            979 : {
                items: 2,
                margin: 30
            },
            1199 : {
                items: 2,
                margin: 30
            }
        }
    });

    /*==============================
        home2 deal-slider js
    ==============================*/
    $('#deal-slider2').owlCarousel({
        loop: false,
        items: 2,
        margin: 20,
        nav: true,
        navText : ['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>'],
        dots: true,
        responsive: {
            0 : {
                items: 1,
                margin: 0
            },
            479 : {
                items: 1,
                margin: 0
            },
            540 : {
                items: 1,
                margin: 0
            },
            640 : {
                items: 1,
                margin: 0
            },
            768 : {
                items: 1,
                margin: 20
            },
            979 : {
                items: 2,
                margin: 20
            },
            1199 : {
                items: 2,
                margin: 20
            }
        }
    });

    /*==============================
        home3 deal-slider js
    ==============================*/
    $('#deal-slider3').owlCarousel({
        loop: false,
        items: 4,
        margin: 30,
        nav: true,
        navText : ['<i class="bi bi-arrow-left-short"></i>','<i class="bi bi-arrow-right-short"></i>'],
        dots: true,
        responsive: {
            0 : {
                items: 1,
                margin: 12
            },
            479 : {
                items: 1,
                margin: 12
            },
            540 : {
                items: 2,
                margin: 12
            },
            640 : {
                items: 2,
                margin: 12
            },
            768 : {
                items: 2,
                margin: 30
            },
            979 : {
                items: 3,
                margin: 30
            },
            1199 : {
                items: 4,
                margin: 30
            }
        }
    });

    /*==============================
       home4 deal js
    ==============================*/
    var swiper = new Swiper('.swiper#deal-slider4', {
        slidesPerView: 1,
        spaceBetween: 30,
        rewind: true,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        navigation: {
            prevEl: '.swiper-prev-deal4',
            nextEl: '.swiper-next-deal4'
        },
        pagination: {
            el: '.swiper-pagination-deal4',
            clickable: true
        }
    });

    /*==============================
        home5 deal-slider js
    ==============================*/
    $('#deal-slider5').owlCarousel({
        loop: false,
        items: 4,
        margin: 30,
        nav: true,
        navText : ['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>'],
        dots: true,
        responsive: {
            0 : {
                items: 1,
                margin: 12
            },
            479 : {
                items: 1,
                margin: 12
            },
            540 : {
                items: 2,
                margin: 12
            },
            640 : {
                items: 2,
                margin: 12
            },
            768 : {
                items: 2,
                margin: 30
            },
            979 : {
                items: 3,
                margin: 30
            },
            1199 : {
                items: 4,
                margin: 30
            }
        }
    });

    /*==============================
       home6 deal-slider js
    ==============================*/
    var swiper = new Swiper('.swiper#deal-slider6', {
        slidesPerView: 2,
        spaceBetween: 30,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        navigation: {
            prevEl: '.swiper-prev-deal6',
            nextEl: '.swiper-next-deal6'
        },
        pagination: {
            el: '.swiper-pagination-deal6',
            clickable: true
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            }
        }
    });

    /*==============================
        home14 deal-slider js
    ==============================*/
    var swiper = new Swiper('.swiper#deal-slider14', {
        loop: false,
        rewind: true,
        slidesPerView: 1,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev14',
            nextEl: '.swiper-next14'
        },
        pagination: {
            el: ".swiper-pagination14",
            clickable: true
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            draggable: true
        },
    });

    /*====================================
        home1 brand-logo js
    ====================================*/
    $('#home1-brand-logo').owlCarousel({
        loop: true,
        items: 6,
        margin: 30,
        nav: false,
        navText : ['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>'],
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dots: false,
        responsive: {
            0 : {
                items: 2,
                margin: 12
            },
            479 : {
                items: 2,
                margin: 12
            },
            540 : {
                items: 3,
                margin: 12
            },
            640 : {
                items: 4,
                margin: 12
            },
            768 : {
                items: 4,
                margin: 30
            },
            979 : {
                items: 5,
                margin: 30
            },
            1299 : {
                items: 5,
                margin: 30
            },
            1399 : {
                items: 6,
                margin: 30
            },
            1499 : {
                items: 6,
                margin: 30
            }
        }
    });

    /*==============================
       home3 brand-logo js
    ==============================*/
    $('#brand-logo3').owlCarousel({
        loop: false,
        items: 6,
        margin: 30,
        nav: false,
        navText : ['<i class="bi bi-arrow-left-short"></i>','<i class="bi bi-arrow-right-short"></i>'],
        dots: false,
        responsive: {
            0 : {
                items: 2,
                margin: 12
            },
            479 : {
                items: 2,
                margin: 12
            },
            540 : {
                items: 3,
                margin: 12
            },
            640 : {
                items: 4,
                margin: 12
            },
            768 : {
                items: 4,
                margin: 30
            },
            979 : {
                items: 5,
                margin: 30
            },
            1199 : {
                items:6,
                margin: 30
            }
        }
    });

    /*==============================
       home5 brand-logo js
    ==============================*/
    $('#brand-logo5').owlCarousel({
        loop: false,
        items: 6,
        margin: 30,
        nav: false,
        navText : ['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>'],
        dots: false,
        responsive: {
            0 : {
                items: 2,
                margin: 12
            },
            479 : {
                items: 2,
                margin: 12
            },
            540 : {
                items: 3,
                margin: 12
            },
            640 : {
                items: 4,
                margin: 12
            },
            768 : {
                items: 4,
                margin: 30
            },
            979 : {
                items: 5,
                margin: 30
            },
            1199 : {
                items: 6,
                margin: 30
            }
        }
    });

    /*==============================
       home6 brand-logo js
    ==============================*/
    $('#brand-logo6').owlCarousel({
        loop: false,
        items: 6,
        margin: 30,
        rewind: true,
        nav: false,
        navText : ['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>'],
        dots: false,
        responsive: {
            0 : {
                items: 2,
                margin: 12
            },
            479 : {
                items: 2,
                margin: 12
            },
            540 : {
                items: 3,
                margin: 12
            },
            640 : {
                items: 4,
                margin: 12
            },
            768 : {
                items: 4,
                margin: 30
            },
            979 : {
                items: 5,
                margin: 30
            },
            1199 : {
                items: 6,
                margin: 30
            }
        }
    });

    /*==============================
       home10 bard-logo-slider js
    ==============================*/
    $('#brand-logo10').owlCarousel({
        loop: false,
        rewind: true,
        items: 5,
        margin: 30,
        nav: false,
        navText: ['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>'],
        dots: false,
        responsive: {
            0 : {
                items: 2,
                margin: 12
            },
            479 : {
                items: 2,
                margin: 12
            },
            540 : {
                items: 3,
                margin: 12
            },
            640 : {
                items: 3,
                margin: 12
            },
            768 : {
                items: 4,
                margin: 30
            },
            979 : {
                items: 4,
                margin: 30
            },
            1199 : {
                items: 5,
                margin: 30
            }
        }
    });

    /*==============================
       home11 instagram-slider js
    ==============================*/
    $('#instagram-slider11').owlCarousel({
        loop: false,
        items: 6,
        margin: 30,
        rewind: true,
        nav: false,
        dots: false,
        navText: ['<i class="bi bi-arrow-left-short"></i>','<i class="bi bi-arrow-right-short"></i>'],
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0 : {
                items: 2,
                margin: 12
            },
            479 : {
                items: 2,
                margin: 12
            },
            540 : {
                items: 3,
                margin: 12
            },
            640 : {
                items: 3,
                margin: 12
            },
            768 : {
                items: 3,
                margin: 30
            },
            979 : {
                items: 4,
                margin: 30
            },
            1199 : {
                items: 5,
                margin: 30
            },
            1399 : {
                items: 6,
                margin: 30
            }
        }
    });

    /*==============================
       home16 instagram-slider js
    ==============================*/
    $('#instagram-slider16').owlCarousel({
        loop: false,
        items: 6,
        margin: 30,
        rewind: true,
        nav: false,
        navText : ['<i class="bi bi-arrow-left-short"></i>','<i class="bi bi-arrow-right-short"></i>'],
        dots: false,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0 : {
                items: 2,
                margin: 12
            },
            479 : {
                items: 2,
                margin: 12
            },
            540 : {
                items: 3,
                margin: 12
            },
            640 : {
                items: 3,
                margin: 12
            },
            768 : {
                items: 3,
                margin: 30
            },
            979 : {
                items: 4,
                margin: 30
            },
            1199 : {
                items: 5,
                margin: 30
            },
            1399 : {
                items: 6,
                margin: 30
            }
        }
    });

    /*====================================
       animation  js
    ====================================*/
    WT.animateTemplate = {
        aDelay: 100,
        aQueue: [],
        aTimer: null,
        aBody: null,
        init: function() {
            var $at = this;
            $at.aBody = $body;
            $at.aQueue = [];
            $at.aTimer = null;
            if(typeof aDelay !== 'undefined') {
                $at.aDelay = aDelay;
            }
            $at.aQueue["animate__animated_0"] = [];
            $body.find("#main-content").find(">div,>section").each(function(index) {
                $(this).attr("data-animated-id", (index + 1));
                $at.aQueue["animate__animated_" + (index + 1)] = [];
            });
            setTimeout(function() {
                $at.registerAnimation();
            }, 200);
        },
        registerAnimation: function() {
            var $at = this;
            $("[data-animate]:not(.animate__animated)", $at.aBody).waypoint(function() {
                var $at_el = this.element ? this.element : this,
                    $this = $($at_el);
                if($this.is(":visible")) {
                    var $at_animated_wrap = $this.closest("[data-animated-id]"),
                        $at_animated_id = '0';
                    if($at_animated_wrap.length) {
                        $at_animated_id = $at_animated_wrap.data("animated-id");
                    }
                    $at.aQueue["animate__animated_" + $at_animated_id].push($at_el);
                    $at.processItemQueue();
                } else {
                    $this.addClass($this.data("animate")).addClass("animate__animated");
                }
            }, {
                offset: '90%',
                triggerOnce: true
            });
        },
        processItemQueue: function() {
            var $at = this;
            if($at.aTimer) {
                return;
            }
            $at.aTimer = window.setInterval(function() {
                var $at_queue = false;
                for(var $at_animated_id in $at.aQueue) {
                    if($at.aQueue[$at_animated_id].length) {
                        $at_queue = true;
                        break;
                    }
                }
                if($at_queue) {
                    for(var $at_animated_id in $at.aQueue) {
                        var $at_item = $($at.aQueue[$at_animated_id].shift());
                        $at_item.addClass($at_item.data("animate")).addClass("animate__animated");
                    }
                    $at.processItemQueue();
                } else {
                    window.clearInterval($at.aTimer);
                    $at.aTimer = null
                }
            }, $at.aDelay);
        }
    };
    WT.animateTemplate.init();

    /*====================================
        product-style-1 js  
    ====================================*/
    $('.slider-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        asNavFor: '.slider-small',
        adaptiveHeight: true,
    });
    $('.slider-small').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="slick-prev"><i class="bi bi-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="bi bi-chevron-right"></i></button>',
        dots: false,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        asNavFor: '.slider-big',
            responsive: [{
              breakpoint: 480,
              settings: {
                slidesToShow: 3
            }
        }]
    });

    /*====================================
        product-style-2 js  
    ====================================*/
    $('.style2-slider-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        asNavFor: '.style2-slider-small',
        adaptiveHeight: true,
    });
    $('.style2-slider-small').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="slick-prev"><i class="bi bi-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="bi bi-chevron-right"></i></button>',
        dots: false,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        asNavFor: '.style2-slider-big',
        vertical: true,
        verticalSwiping: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                  vertical: false,
                  verticalSwiping: false
                }
            }
        ]
    });

    /*====================================
        product-style-3 js  
    ====================================*/
    $('.style3-slider-small').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="fa-solid fa-arrow-right"></i></i></button>',
        dots: false,
        centerMode: true,
        centerPadding: 'calc(33.33% - 30px)',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true,
                    centerMode: true,
                    centerPadding: '0px',
                }
            }
        ]
    });

    /*====================================
        product-style-4 js  
    ====================================*/
    $('.style4-slider-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        asNavFor: '.style4-slider-small',
        adaptiveHeight: true,
    });
    $('.style4-slider-small').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="slick-prev"><i class="bi bi-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="bi bi-chevron-right"></i></button>',
        dots: false,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        asNavFor: '.style4-slider-big',
        vertical: true,
        verticalSwiping: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                  vertical: false,
                  verticalSwiping: false
                }
            }
        ]
    });

    /*====================================
        product-style-5 js  
    ====================================*/
    $('.style5-slider-small').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        prevArrow: '<button class="slick-prev"><i class="bi bi-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="bi bi-chevron-right"></i></button>',
        dots: true,
        focusOnSelect: true,
    });

    /*====================================
        product-style-6 js  
    ====================================*/
    $('.slider-big-6').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        asNavFor: '.slider-small-6',
        adaptiveHeight: true,
    });
    $('.slider-small-6').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="slick-prev"><i class="bi bi-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="bi bi-chevron-right"></i></button>',
        dots: false,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        asNavFor: '.slider-big-6',
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 3
            }
        }]
    });

    /*====================================
        product-style-7 js  
    ====================================*/
    $('.slider-big-7').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        asNavFor: '.slider-small-7',
        adaptiveHeight: true,
    });
    $('.slider-small-7').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        prevArrow: '<button class="slick-prev"><i class="bi bi-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="bi bi-chevron-right"></i></button>',
        dots: false,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        asNavFor: '.slider-big-7',
            responsive: [{
            breakpoint: 480,
                settings: {
                slidesToShow: 3
            }
        }]
    });

})(jQuery);