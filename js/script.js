
// dark mode 
let btnSwitch = document.querySelector('.switch');
let chefSvg = document.querySelectorAll('.overlay-chef');
btnSwitch.onclick = function() {
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        btnSwitch.classList.remove("fa-moon");
        btnSwitch.classList.add("fa-sun") ;
        chefSvg.forEach( item => {
            item.src = "./images/team-shape-dark.svg";
        });
    } else {
        btnSwitch.classList.remove("fa-sun");
        btnSwitch.classList.add("fa-moon");
        chefSvg.forEach(item => {
            item.src = "./images/team-shape.svg";
        });
    }
}
// Show / hide mobile-navbar 
let navLinks = document.querySelector('.links')
function showLinks() {
    navLinks.style.cssText = "right: 0;";
}
function hideLinks() {
    navLinks.style.cssText = "right: -100%;"
}
// Add / Remove active class to navbar links 
let navLinkss = document.querySelectorAll('.section-link');
navLinkss.forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.active').classList.remove('active');
        link.style.cssText = "transition: none;"
        link.classList.add('active')
    })
})

// function resizeCheck() {
//     if (window.innerWidth > 992) {
//         navLinks.style.cssText = "display: flex;";
//     } else if (window.innerWidth < 992) {
//         navLinks.style.cssText = "display: none;";
//     }
// }
// window.addEventListener('resize', resizeCheck)


// Scroll To Top button 
let topIcon = document.querySelector(".top");

window.onscroll = function () {
    if (this.scrollY >= 300) {
        topIcon.classList.add("show");
    } else {
        topIcon.classList.remove("show");
    }
};
topIcon.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
})
