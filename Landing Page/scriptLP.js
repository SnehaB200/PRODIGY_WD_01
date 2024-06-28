const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen?"fa-solid fa-x":"fa-solid fa-bars") 
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("click", "fa-solid fa-bars");
})

const scrollRevealOption = {
    distance:"50px",
    origin:"buttom",
    duration:1000,
};
ScrollReveal().reveal(".header_img img", {
    ...scrollRevealOption,
    origin:"right",
});

ScrollReveal().reveal(".header_content h1", {
    ...scrollRevealOption,
    delay:500,
});

ScrollReveal().reveal(".header_content p", {
    ...scrollRevealOption,
    delay:1000,
});

ScrollReveal().reveal(".header_content form", {
    ...scrollRevealOption,
    delay:1500,
});

ScrollReveal().reveal(".header_content .bar", {
    ...scrollRevealOption,
    delay:2000,
});

ScrollReveal().reveal(".header_img_card", {
    duration:1000,
    interval:500,
    delay:2500,
});