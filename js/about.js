let bioParag = document.getElementsByClassName("bio__parag")[0];
const shortAbout = document.getElementById("short-about");
const mediumShortAbout = document.getElementById("mediumshort-about");
const mediumLargeAbout = document.getElementById("mediumlarge-about");
const largeAbout = document.getElementById("large-about");



const bioOptions = ["João Gabriel faz o que gosta, e gosta do que faz.", 
                    "João Gabriel faz o que gosta, e gosta do que faz. Ele é formado em Biologia, mas decidiu seguir o chamado da programação.", 
                    "João Gabriel faz o que gosta, e gosta do que faz. Ele é formado em Biologia, mas decidiu seguir o chamado da programação. João é autodidata, e se considera uma pessoa criativa e que adora resolver problemas.", 
                    "João Gabriel faz o que gosta, e gosta do que faz. Ele é formado em Biologia, mas decidiu seguir o chamado da programação. João é autodidata, e se considera uma pessoa criativa e que adora resolver problemas. Prezando pelo código claro e reutilizável, ele trilha o caminho DEV em busca da próxima oportunidade."];

shortAbout.onclick = () => {
    bioParag.textContent = bioOptions[0];
}

mediumShortAbout.onclick = () => {
    bioParag.textContent = bioOptions[1];
}

mediumLargeAbout.onclick = () => {
    bioParag.textContent = bioOptions[2];
}

largeAbout.onclick = () => {
    bioParag.textContent = bioOptions[3];
}