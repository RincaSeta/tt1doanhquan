$(document).ready(function () {
    
   //isotope

    let $btns = $('.project-area .button-group button');


    $btns.click(function (e) {

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })

    // Owl-carousel

    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            }
        }
    })


// accc
     $(".item-header").click(function(){
        $(".accordion-item").removeClass("active");
        $(this).parent().addClass("active");
        $(".icon").text("+");
        $(this).children(".icon").text("-");
    })
    // sticky navigation menu

    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area ').addClass('navbar_fixed');

                    $('.header_area .main-menu .navbar .navbar-brand img').css({
                        'width':'3rem',
                        'height': '3rem'
                    });
                    $('.header_area .main-menu .navbar').css('padding','.3rem 0');
                } else {
                    $('.header_area').removeClass('navbar_fixed');
                    $('.header_area .main-menu .navbar .navbar-brand img').css({
                        'width':'5rem',
                        'height': '5rem'
                    });
                     $('.header_area .main-menu .navbar').css('padding','1.5rem 0');
                }
            })
        }
    }

    navbarFixed();

});

