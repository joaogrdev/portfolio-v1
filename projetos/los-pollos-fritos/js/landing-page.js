const btn = document.querySelector(".header__minmax");

let minmax = "max";
btn.addEventListener('click', function() {
    if (minmax === "max") {
        document.querySelector(".header").style.width = "50px";
        document.querySelector(".header").style.overflow = "hidden";
        document.querySelector(".header").style.transitionDuration = ".7s";

        document.querySelector(".content").style.width = "calc(100vw - 50px)"
        minmax = "min";
    } else {
        document.querySelector(".header").style.width = "25%";
        document.querySelector(".header").style.opacity = "1";
        minmax = "max";
    }
})

