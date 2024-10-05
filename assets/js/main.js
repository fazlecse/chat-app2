
// Preloader area
const preloader = document.getElementById("preloader");
const preloaderFunction = () => {
    preloader.style.display = "none";
};
// toggleSideMenu start
const toggleSideMenu = () => {
    document.body.classList.toggle("toggle-sidebar");
};
// toggleSideMenu end
// document.getElementById('chat-widget-button').addEventListener('click', () => {
//     console.log("clicked");
//     document.getElementById('chat-widget-section').classList.toggle('open')

// })

// add bg to nav
window.addEventListener("scroll", function () {
    let scrollpos = window.scrollY;
    const header = document.querySelector("nav");
    const headerHeight = header.offsetHeight;

    if (scrollpos >= headerHeight) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});


$(document).ready(function () {
    // owl carousel dashboard card
    $('.carousel-area1').owlCarousel({
        loop: true,
        autoplay: false,
        margin: 20,
        nav: false,
        dots: true,
        // rtl:true,
        responsive: {
            0: {
                items: 1,
                dotsEach: 3,
            },
            550: {
                items: 2
            },
            991: {
                items: 3
            },
            1200: {
                items: 4
            },
        }
    });
    // Swiper-slider livestream-swiper
    var swiper = new Swiper(".livestream-swiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,

    });
    // Testimonial section start
    // Owl carousel 
    $('.testimonial-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 20,
        autoplayTimeout: 2000,
        navText: ["<i class='fa-regular fa-angle-left'></i>", "<i class='fa-regular fa-angle-right'></i>"],
        // rtl: true,
        responsive: {
            0: {
                items: 1,
                dotsEach: 3

            },
            600: {
                items: 1,
                nav: false,
                dots: true,
                dotsEach: 2

            },
            768: {
                items: 2,
                nav: true,
                dots: false,

            },
            1000: {
                items: 2,
                nav: true,
                dots: false,
            }
        }
    });
    // Testimonial section end
    // cmn select2 start
    $('.cmn-select2').select2();
    // cmn select2 end

    // cmn-select2 with image start
    $(document).ready(function () {
        $('.cmn-select2-image').select2({
            templateResult: formatState,
            templateSelection: formatState
        });
    });
    // select2 function
    function formatState(state) {
        if (!state.id) {
            return state.text;
        }
        var baseUrl = "assets/img/mini-flag";
        var $state = $(
            '<span><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.svg" class="img-flag" /> ' + state.text + '</span>'
        );
        return $state;
    };
    function formatState(state) {
        if (!state.id) {
            return state.text;
        }

        var baseUrl = "assets/img/mini-flag";
        var $state = $(
            '<span><img class="img-flag" /> <span></span></span>'
        );

        // Use .text() instead of HTML string concatenation to avoid script injection issues
        $state.find("span").text(state.text);
        $state.find("img").attr("src", baseUrl + "/" + state.element.value.toLowerCase() + ".svg");

        return $state;
    };
    // cmn-select2 with image end
    // Cmn select2 tags start
    $(".cmn-select2-tags").select2({
        tags: true
    });
    // Cmn select2 tags end



    // Payment method with image2 start
    $(document).ready(function () {
        $('.payment-method-select2-image').select2({
            templateResult: paymentMethod,
            templateSelection: paymentMethod
        });
    });
    // select2 function
    function paymentMethod(state) {
        if (!state.id) {
            return state.text;
        }
        var baseUrl = "assets/img/gateway";
        var $state = $(
            '<span><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.jpg" class="img-flag" /> ' + state.text + '</span>'
        );
        return $state;
    };
    function paymentMethod(state) {
        if (!state.id) {
            return state.text;
        }

        var baseUrl = "assets/img/gateway";
        var $state = $(
            '<span><img class="img-flag" /> <span></span></span>'
        );

        // Use .text() instead of HTML string concatenation to avoid script injection issues
        $state.find("span").text(state.text);
        $state.find("img").attr("src", baseUrl + "/" + state.element.value.toLowerCase() + ".jpg");

        return $state;
    };
    // Payment method with image2 start

    // cmn select2 modal start
    $(".modal-select").select2({
        dropdownParent: $("#formModal"),
    });
    // cmn select2 modal start

    // Nice select start
    if ($('.nice-select').length) {
        $('.nice-select').niceSelect();
    }
    // Nice select end

    // Range area start
    if ($('.js-range-slider').length) {
        $(".js-range-slider").ionRangeSlider({
            type: "double",
            min: 0,
            max: 100,
            from: 800,
            to: 500,
            grid: true
        });
    }
    // Range area end
    // Circle progress start
    if ($('.circle').length) {
        $('.first.circle').circleProgress({
            value: 0.83,
            size: 200,
            fill: {
                gradient: ["#fbac24", "#ff871a"]
            }
        }).on('circle-animation-progress', function (event, progress) {
            $(this).find('span').html(Math.round(83 * progress) + '<i>%</i>');
            $(this).find('span').addClass('percent');
        });
    }

    if ($('.circle').length) {
        $('.second.circle').circleProgress({
            value: 0.35,
            size: 200,
            fill: {
                gradient: ["#fbac24", "#ff871a"]
            }
        }).on('circle-animation-progress', function (event, progress) {
            $(this).find('span').html(Math.round(35 * progress) + '<i>%</i>');
            $(this).find('span').addClass('percent');
        });

    }
    if ($('.circle').length) {
        $('.third.circle').circleProgress({
            value: 0.30,
            size: 200,
            fill: {
                gradient: ["#fbac24", "#ff871a"]
            }
        }).on('circle-animation-progress', function (event, progress) {
            $(this).find('span').html(Math.round(30 * progress) + '<i>%</i>');
            $(this).find('span').addClass('percent');
        });
    }



});


// input file preview
const previewImage = (id) => {
    document.getElementById(id).src = URL.createObjectURL(event.target.files[0]);
};

// Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

// Copy text start
function copyTextFunc() {
    // get the container
    const element = document.querySelector('.docs-code');
    // Create a fake `textarea` and set the contents to the text
    // you want to copy
    const storage = document.createElement('textarea');
    storage.value = element.innerHTML;
    element.appendChild(storage);

    // Copy the text in the fake `textarea` and remove the `textarea`
    storage.select();
    storage.setSelectionRange(0, 99999);
    document.execCommand('copy');
    element.removeChild(storage);
}
// Copy text end
// Highlight editor start
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre code').forEach((el) => {
        hljs.highlightElement(el);
    });
});
// Highlight editor end



// International Telephone Input start
if ($('#telephone').length) {
    const input = document.querySelector("#telephone");
    window.intlTelInput(input, {
        initialCountry: "bd",
        separateDialCode: true,
    });
}
// International Telephone Input end


// input field show hide password start
if ($('.password').length) {
    const password = document.querySelector('.password');
    const passwordIcon = document.querySelector('.password-icon');

    passwordIcon.addEventListener("click", function () {
        if (password.type == 'password') {
            password.type = 'text';
            passwordIcon.classList.add('fa-eye-slash');
        } else {
            password.type = 'password';
            passwordIcon.classList.remove('fa-eye-slash');
        }
    })
}
// input field show hide password end

// countdown
if ($('#countdown1').length) {
    $('#countdown1').countdown('2023/11/05', function (event) {
        $(this).html(event.strftime('<div class="single-coundown"><h5>%H :</h5></div><div class="single-coundown"><h5>%M :</h5></div><div class="single-coundown"><h5>%S</h5></div>'));
    });
}




// Dark theme start
if ($('.dark-theme').length) {
    const toggleBtn = document.getElementById("toggle-btn");
    const body = document.querySelector("body");
    toggleBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");
        if (document.body.classList.contains("dark-theme")) {
            localStorage.setItem("dark-theme", 1);
        } else {
            localStorage.setItem("dark-theme", 0);
        }
        setTheme();
    });

    function setTheme() {
        const isDarkTheme = localStorage.getItem("dark-theme");
        if (isDarkTheme == 1) {
            document.querySelector('body').classList.add('dark-theme');
            document.getElementById("moon").style.display = "none";
            document.getElementById("sun").style.display = "block";
        } else {
            document.querySelector('body').classList.remove('dark-theme');
            document.getElementById("moon").style.display = "block";
            document.getElementById("sun").style.display = "none";
        }
    }
    setTheme();
}
// Dark theme end




