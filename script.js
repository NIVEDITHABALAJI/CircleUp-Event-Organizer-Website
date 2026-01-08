// Main functionality for circleup event organizer website 
let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
};

let themeToggler = document.querySelector(".theme-toggler");
let toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.onclick = () => {
    themeToggler.classList.toggle("active");
};

window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
    themeToggler.classList.remove("active");
};

document.querySelectorAll(".theme-toggler .theme-btn").forEach((btn) => {
    btn.onclick = () => {
        let color = btn.style.background;
        document.querySelector(":root").style.setProperty("--theme-color", color);
    };
});

// swiper sliders initialization
// Home slider
var homeSwiper = new Swiper(".home-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false },
});

// Review slider
var reviewSwiper = new Swiper(".review-slider", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    spaceBetween: 20,
    breakpoints: {
        0: { slidesPerView: 1 },
        700: { slidesPerView: 2 },
        1050: { slidesPerView: 3 },
    },
    autoplay: { delay: 5000, disableOnInteraction: false },
});

// Contact Form Submission Logic
const contactForm = document.querySelector('#contact-form');

if(contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const data = new FormData(contactForm);
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            alert('Thanks for contacting CircleUp! We will get back to you shortly.');
            contactForm.reset();
        } else {
            alert('Oops! There was a problem submitting your form');
        }
    });
}
console.log("%cCircleUp Loaded Successfully", "color: #3498db; font-weight: bold;");