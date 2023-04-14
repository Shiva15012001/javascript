let toggle_btn = document.querySelector(".toggle-btn");
let nav = document.querySelector(".nav");
let close_btn = document.querySelector(".close-btn");

toggle_btn.addEventListener("click", function () {
    nav.classList.add("nav-show")
})
close_btn.addEventListener("click", function () {
    nav.classList.remove("nav-show")
})
// code scolling change color
function changebg() {
    let header_scroll = document.querySelector(".header")
    let scrolled = window.scrollY
    if (scrolled > 0) {
        header_scroll.classList.add("header-fixed")
    } else {
        header_scroll.classList.remove("header-fixed")
    }
}
window.addEventListener("scroll",changebg)