const menuBtn = document.getElementById("menu-btn"); 
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-large-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});


const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header-image img", {
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".header-content h2", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header-content h1", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".banner-card", {
    duration: 1000,
    interval: 500,
});

ScrollReveal().reveal(".order-card", {
    ...scrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".event-image", {
    ...scrollRevealOption,
    origin: "top",
});

ScrollReveal().reveal(".event-content h3", {
    ...scrollRevealOption,
    origin: "left",
    delay: 500,
});

ScrollReveal().reveal(".event-content .section-header", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".event-content .section-description", {
    ...scrollRevealOption,
    delay: 1500,
});

