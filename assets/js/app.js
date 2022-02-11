// Ленивая загрузка
var myLazyLoad = new LazyLoad();

function scrollMenuHeader () {
    window.addEventListener('scroll', () => {
        let scrollDistance = window.scrollY;
        if (window.innerWidth > 0) {
          document.querySelectorAll('.section').forEach((el, i) => {
            if (el.offsetTop - document.querySelector('header').clientHeight <= scrollDistance) {
              document.querySelectorAll('.header-navigation a').forEach((el) => {
                if (el.classList.contains('active')) {
                  el.classList.remove('active');
                }
              });
              document.querySelectorAll('.header-navigation li')[i].querySelector('a').classList.add('active');
            }
          });
        }
      });
};
// jQuery function
$(document).ready(function() {
    //Табы на Банкоматах
    (function tabsMain() {
        $('.atm-tab__btn').click(function() {
            let id = $(this).attr('data-tab'), 
            content = $('.atm-block[data-tab="'+ id +'"]');
            $('.atm-tab__btn').removeClass('active');
            $(this).addClass('active');
            $('.atm-block').removeClass('show');
            content.addClass('show');
        });
        $('.self-tab__btn').click(function() {
            let id = $(this).attr('data-tab'), 
            content = $('.self-block[data-tab="'+ id +'"]');
            $('.self-tab__btn').removeClass('active');
            $(this).addClass('active');
            $('.self-block').removeClass('show');
            content.addClass('show');
        });
    }());
    // sticky
    function sticky () {
        $(window).scroll(function() {
            if ($(window).scrollTop() > 40) {
                $('.header').addClass('sticky');
            } else {
                $('.header').removeClass('sticky');
            }
        });
    }
    sticky();
    // ScrollHeader
    function scrollHeader() {
        $('.header-navigation a').first().addClass('active');
        window.addEventListener('scroll', () => {
            let scrollDistance = window.scrollY;
            if (window.innerWidth > 0) {
              document.querySelectorAll('.section').forEach((el, i) => {
                if (el.offsetTop - document.querySelector('header').clientHeight <= scrollDistance) {
                  document.querySelectorAll('.header-navigation a').forEach((el) => {
                    if (el.classList.contains('active')) {
                      el.classList.remove('active');
                    }
                  });
                  document.querySelectorAll('.header-navigation li')[i].querySelector('a').classList.add('active');
                }
              });
            }
        });
    }
    scrollHeader()
    // AOS
    AOS.init({
        offset: 200,
        duration: 1200,
        delay: 150,
        wait:0,
        once: true,
      });
      
      
    setTimeout(function() {
        AOS.refresh();
    }, 1000);

    // Акордеон
    function accordion() {
        $(".class-title").click(function(){
            $(this).toggleClass("open").next().slideToggle();
            $(".class-title").not(this).removeClass("open").next().slideUp();
        });
    };
    accordion();

    //Бургер меню
    function headerBurger (){
        $('.header-burger').click(function () {
        $('.header-burger').toggleClass('active');
        $('.header-mobile').toggleClass('active ');
        $('html').toggleClass('hidden');
        });
    };
    headerBurger();

    //Стрелка наверх
    function scrollUp () {
        $(window).scroll(function() {
        if ($(window).scrollTop() > 400) {
            $('.scroll-up').addClass('active');
        } else {
            $('.scroll-up').removeClass('active');
        }
        });

        $('.scroll-up').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop:0}, 1500);
        });
    };
    scrollUp();

    //Валидации сайта
    function formValidate() {
        $('.contact-form').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    minlength: 5
                },
                tel: {
                    required: true,
                    minlength: 5
                },
                service: {
                required: true,
                minlength: 5
                },
                message: {
                required: true,
                minlength: 10
                }
            },
            messages: {
            name: {
                required: "Заполните поле",
                minlength: "Должно быть не менее: 2 символов"
            },
            email: {
                required: "Заполните поле",
                minlength: "Должно быть не менее: 5 символов"
            },
            tel: {
                required: "Заполните поле",
                minlength: "Должно быть не менее: 5 символов"
            },
            service: {
                required: "Заполните поле",
                minlength: "Должно быть не менее: 5 символов"
            },
            message: {
                required: "Заполните поле",
                minlength: "Должно быть не менее: 10 символов"
            }
            }
        });
    };
    formValidate();
});