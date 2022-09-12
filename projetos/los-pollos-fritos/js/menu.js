let plusBtns = document.querySelectorAll(".plus")
let minusBtns = document.querySelectorAll(".minus")
let value1 = document.querySelector(".value1");
let value2 = document.querySelector(".value2");
let value3 = document.querySelector(".value3");
let value4 = document.querySelector(".value4");
let value5 = document.querySelector(".value5");
let value6 = document.querySelector(".value6");


let counters = [0, 0, 0, 0, 0, 0];
function sumRequests() {
    let totalRequests = 0;
    for(var i = 0; i < counters.length; i++) {
        totalRequests += counters[i];
    }

    let linkRequests = document.querySelector(".link__requests");
    if(totalRequests > 0) {
        linkRequests.textContent = "(" + totalRequests + ")";
        linkRequests.style.display = "block";
    } else {
        linkRequests.style.display = "none";
    }
}



const prices = [19.90, 39.90, 49.90, 15.90, 24.90, 9.90]; //preços de cada produtos

/*pega o preço final de todos os produtos no carrinho*****************/

let partialPrice = [0, 0, 0, 0, 0, 0];
function getFinalPrice() {
    let totalPrice = 0;
    for(var j = 0; j < partialPrice.length; j++) {
        totalPrice += partialPrice[j];
    }

    let roundPrice = totalPrice.toFixed(2).replace(".", ",");
    let totalValue = document.querySelector(".total__value-number");
    totalValue.textContent = roundPrice;
}

/*********************************************************** */

plusBtns.forEach(function(plusBtn) {
    plusBtn.addEventListener("click", function(e) {
        let target = e.currentTarget.classList; //pega as classes do botão clicado

        if(target.contains("btn1")) {
            counters[0]++;
            value1.textContent = counters[0];
            partialPrice[0] = counters[0] * prices[0];
        } else if(target.contains("btn2")) {
            counters[1]++;
            value2.textContent = counters[1];
            partialPrice[1] = counters[1] * prices[1];
        } else if(target.contains("btn3")) {
            counters[2]++;
            value3.textContent = counters[2];
            partialPrice[2] = counters[2] * prices[2];
        } else if(target.contains("btn4")) {
            counters[3]++;
            value4.textContent = counters[3];
            partialPrice[3] = counters[3] * prices[3];
        } else if(target.contains("btn5")) {
            counters[4]++;
            value5.textContent = counters[4];
            partialPrice[4] = counters[4] * prices[4];
        } else {
            counters[5]++;
            value6.textContent = counters[5];
            partialPrice[5] = counters[5] * prices[5];
        }
        sumRequests();
        getFinalPrice();
    })
})


minusBtns.forEach(function(minusBtn) {
    minusBtn.addEventListener("click", function(e) {
        let target = e.currentTarget.classList;
        if(target.contains("btn1") && counters[0] > 0) {
            counters[0]--;
            value1.textContent = counters[0];
            partialPrice[0] = counters[0] * prices[0];
        } else if(target.contains("btn2") && counters[1] > 0) {
            counters[1]--;
            value2.textContent = counters[1];
            partialPrice[1] = counters[1] * prices[1];
        } else if(target.contains("btn3") && counters[2] > 0) {
            counters[2]--;
            value3.textContent = counters[2];
            partialPrice[2] = counters[2] * prices[2];
        } else if(target.contains("btn4") && counters[3] > 0) {
            counters[3]--;
            value4.textContent = counters[3];
            partialPrice[3] = counters[3] * prices[3];
        } else if(target.contains("btn5") && counters[4] > 0) {
            counters[4]--;
            value5.textContent = counters[4];
            partialPrice[4] = counters[4] * prices[4];
        } else if(counters[5] > 0){
            counters[5]--;
            value6.textContent = counters[5];
            partialPrice[5] = counters[5] * prices[5];
        }
        sumRequests();
        getFinalPrice();
    })
})
