const menus = document.querySelectorAll(".container__hamburguer");
let hamburguer = document.querySelector(".hamburguer")


menus.forEach(function (menu) {
    menu.addEventListener('click', function() {
        hamburguer.classList.toggle("open");
        if (hamburguer.classList.contains("open")) {
            document.getElementById("myNav").style.height = "50%";
            hamburguer.style.position = "fixed";
            hamburguer.style.maxWidth = "45px";
        } else {
            document.getElementById("myNav").style.height = "0%";
            hamburguer.style.position = "relative";
        }
    })
})

