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

// input file preview
const previewImage = (id) => {
    document.getElementById(id).src = URL.createObjectURL(event.target.files[0]);
};

// Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

// cmn select2 start
$(document).ready(function () {
    $('.cmn-select2').select2();
});
// cmn select2 end

// cmn-select2-modal
$(".modal-select").select2({
    dropdownParent: $("#formModal"),
});

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
// cmn-select2 with image start





$(document).ready(function () {
    // owl carousel dashboard card
    $('.carousel-1').owlCarousel({
        loop: true,
        // autoplay: true,
        margin: -20,
        nav: false,
        dots: false,
        // rtl:true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            }
        }
    });

    // Bootstrap datepicker start
    if ($('.date').length) {
        $('.date').datepicker({
            // options here
            format: 'dd/mm/yyyy',
        });
    }

    // Bootstrap datepicker end
    //Multi step progress section start



});

// Dropdown click to select start
document.addEventListener('DOMContentLoaded', function () {
    const dropdownItems = document.querySelectorAll('#sidebar-bottom .dropdown-item');
    dropdownItems.forEach((item) => {
        item.addEventListener('click', () => {
            const selectedImageSrc = item.querySelector('img').getAttribute('src');
            const selectedTitle = item.querySelector('.title').textContent;
            const dropdownToggle = document.querySelector('#sidebar-bottom .dropdown-toggle');
            dropdownToggle.querySelector('img').setAttribute('src', selectedImageSrc);
            dropdownToggle.querySelector('.title').textContent = selectedTitle;
        });
    });
});
// Dropdown click to select end

// Dark theme start
if (document.querySelectorAll('.dark-theme').length > 0) {
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



