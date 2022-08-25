let j = 'open';
let svg = document.querySelector('#social__menu--click').childNodes;
let expan = document.querySelector('#toggle--clicked');

console.log(svg);

expan.addEventListener('click', expand)
function expand(){
    if (j === 'open') {
        document.querySelector('#item__add').style.transform='rotate(45deg)';

        svg[1].style.transform='translateY(-90px)';
        svg[3].style.transform='translate(75px, -45px)';
        svg[5].style.transform='translate(75px, 45px)';
        svg[7].style.transform='translateY(90px)';
        svg[9].style.transform='translate(-75px, 45px)';
        svg[11].style.transform='translate(-75px, -45px)';
        j = 'close';

    } else {
        document.querySelector('#item__add').style.transform='rotate(0deg)';
    
        svg[1].style.transform='translateY(0)';
        svg[3].style.transform='translate(0)';
        svg[5].style.transform='translate(0)';
        svg[7].style.transform='translateY(0)';
        svg[9].style.transform='translate(0)';
        svg[11].style.transform='translate(0)';

        j = 'open';
    } 

}

