let bioParag = document.querySelector(".bio__parag");

const bioOptions = ["<strong>João Gabriel</strong> faz o que gosta, e gosta do que faz.", 
                    " Ele é formado em ADS e trabalha como desenvolvedor <span class='bio__even'>fullstack</span> há 3 anos.", 
                    " João adora <span class='bio__odd'>resolver</span> problemas, é <span class='bio__even'>criativo</span> e busca <span class='bio__odd'>aprender</span> coisas novas ativa e constantemente. Preza pelo código claro e reutilizável, sem deixar a inovação de lado.", 
                    " Seu objetivo é conquistar espaço, se tornando <span class='bio__even'>referência no desenvolvimento</span> e contribuindo em projetos que possam melhorar a vida das pessoas."];



const boxes = document.querySelectorAll(".checkbox__input");

boxes.forEach(function(box) {
    box.addEventListener('click', function(e) {
        let boxChecked = e.currentTarget.classList;
        if (boxChecked.contains("mediumshort")) {
            bioParag.innerHTML = bioOptions[0] + bioOptions[1];
            bioParag.style.height = "60px";
        } else if(boxChecked.contains("mediumlarge")) {
            bioParag.innerHTML = bioOptions[0] + bioOptions[1] + bioOptions[2];
            bioParag.style.height = "120px";
        } else if (boxChecked.contains("large")) {
            bioParag.innerHTML = bioOptions[0] + bioOptions[1] + bioOptions[2] + bioOptions[3];
            bioParag.style.height = "190px";
        } else {
            bioParag.innerHTML = bioOptions[0];
            bioParag.style.height = "20px";
        }
    })
})