const menus = document.querySelectorAll(".container__hamburguer");
let hamburguer = document.querySelector(".hamburguer")

//fecha o menu, e destrava posição do botão
function closeMenu() {
    document.getElementById("myNav").style.height = "0%";
    hamburguer.style.position = "relative";
}

//ao clicar em MENU liga e desliga classe OPEN, abrindo e fechando menu, e mudando design de hamburguer para X
menus.forEach(function (menu) {
    menu.addEventListener('click', function() {
        hamburguer.classList.toggle("open");
        if (hamburguer.classList.contains("open")) {
            document.getElementById("myNav").style.height = "50%";
            hamburguer.style.position = "fixed";
            hamburguer.style.maxWidth = "45px";
        } else {
            closeMenu();
        } 
    })
})

const links = document.querySelectorAll(".overlay-content");
//ao clicar em um link, fecha o menu, destrava botao, e volta para hamburguer
links.forEach(function(link){
    link.addEventListener('click', () => {
        closeMenu();
        hamburguer.classList.toggle("open");
    })
});
