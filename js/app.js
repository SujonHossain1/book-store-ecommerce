// Not a ton of code, but hard to
const nav = document.querySelector('#main-header');
const navLinkList = document.querySelectorAll('.nav-link');

function fixNav() {
    if (window.scrollY >= 30) {
        nav.classList.add('fixed');

    } else {
        nav.classList.remove('fixed');
    }
}

window.addEventListener('scroll', fixNav);


// side menu toggle button

const toggle = document.getElementById('toggler-btn');
const sideMenuOverlay = document.querySelector(".side-menu-overlay");
const crossBtn = document.getElementById("times-icon");
const toggleMobile = document.querySelector(".mobile-nav-button");


toggle.addEventListener('click', () => {
    sideMenuOverlay.style.display = "block";
})

toggleMobile.addEventListener('click', () => {
    sideMenuOverlay.style.display = "block";
})

crossBtn.addEventListener('click', () => {
    sideMenuOverlay.style.display = "none";
})

// Owl Carousel
// owlCarousel


const secondOwl = $('#secondary-carousel');

secondOwl.owlCarousel({
    items: 5,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },

        1000: {
            items: 2
        }
    }
});

var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 5,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    nav: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },

        1000: {
            items: 6
        }
    }
});

$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
})