// // Efek Navbar Berubah Warna Saat Scroll
// window.addEventListener("scroll", function () {
//     let navbar = document.querySelector(".navbar");
//     if (window.scrollY > 50) {
//         navbar.classList.add("scrolled");
//     } else {
//         navbar.classList.remove("scrolled");
//     }
// });

// // Highlight Active Nav Item Saat Scroll
// document.addEventListener("DOMContentLoaded", function () {
//     const sections = document.querySelectorAll("section");
//     const navLinks = document.querySelectorAll(".nav-link");

//     function changeActiveNav() {
//         let scrollPos = window.scrollY + 150; // Offset supaya lebih responsif

//         sections.forEach((section) => {
//             if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
//                 navLinks.forEach((link) => {
//                     link.classList.remove("active");
//                     if (link.getAttribute("href").substring(1) === section.id) {
//                         link.classList.add("active");
//                     }
//                 });
//             }
//         });
//     }

//     window.addEventListener("scroll", changeActiveNav);
// });