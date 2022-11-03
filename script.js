let menuBtn = document.querySelector('.mobileMenu')
let menuLists = document.getElementById('myNav')
let closeIcon = document.querySelector('.closeBtn')


menuBtn.addEventListener('click', () => {
    showNav();
})

closeIcon.addEventListener('click', () => {
    hideNav();
})

function showNav() {
    menuLists.style.width = "70%";
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.744)";
}

function hideNav() {
    menuLists.style.width = "0%";
    document.body.style.backgroundColor = "rgba(255, 255, 255, 0)";
}