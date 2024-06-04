"use strict";

// navbar toggle on mobile

const /** {Node Element} **/ $navbar = document.querySelector("[data-navbar]");
const /** {Node Element} **/ $navbarToggler = document.querySelector("[data-nav-toggler]");

$navbarToggler.addEventListener("click", function(){
    $navbar.classList.toggle("active");
});

// header scroll state

const $header = document.querySelector("[data-header]");

window.addEventListener("scroll", function(){
    $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});

// favourite button toggle

const $toggleBtns = document.querySelectorAll("[data-toggle-btn]");

$toggleBtns.forEach($toggleBtn => {
    $toggleBtn.addEventListener("click", function(){
        $toggleBtn.classList.toggle("active")
    })
})
