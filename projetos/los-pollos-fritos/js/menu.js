let plusBtns = document.querySelectorAll(".plus") //todos os btns de mais
let minusBtns = document.querySelectorAll(".minus") //todos os btns menos
const valuesTxt = document.querySelectorAll(".request__value"); //todos as qtds de pedidos


let countEachCard = [0, 0, 0, 0, 0, 0]; //qtd de cada produto
const pricesEachCard = [19.90, 39.90, 49.90, 15.90, 24.90, 9.90]; //preços de cada produtos


/************************************************* */
let spansValue = []; //array com spans
valuesTxt.forEach(function(valueTxt) { //pega todos os spans de qtd de cada produto, e joga na array
    var l = 0;
    do {
        spansValue.push(valuesTxt[l])
        l++;
    } while(spansValue.length < 7);
})

/************************************************* */

function sumRequests() { //coloca items no carrinho e mostra no navbar
    let totalRequests = 0;
    for(var i = 0; i < countEachCard.length; i++) {
        totalRequests += countEachCard[i];
    }

    let linkRequests = document.querySelector(".link__requests");
    if(totalRequests > 0) {
        linkRequests.textContent = "(" + totalRequests + ")";
        linkRequests.style.display = "block";
    } else {
        linkRequests.style.display = "none";
    }
}

/*************************************************** */

let partialPrice = [0, 0, 0, 0, 0, 0];
function getFinalPrice() { //pega o preço final de todos os produtos no carrinho
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
    for(var k=0; k < plusBtns.length; k++) { //setando index para cada btn
        plusBtns[k].index = k;
      }
      
    plusBtn.addEventListener("click", function(e) {
        let indexP = e.currentTarget.index;

        countEachCard[indexP]++;
        spansValue[indexP].textContent = countEachCard[indexP];
        partialPrice[indexP] = countEachCard[indexP] * pricesEachCard[indexP];

        sumRequests();
        getFinalPrice();
    })
})

minusBtns.forEach(function(minusBtn) {
    for(var m=0; m < minusBtns.length; m++) { //setando index para cada btn
        minusBtns[m].index = m;
      }
    minusBtn.addEventListener("click", function(e) {
        let indexM = e.currentTarget.index;

        countEachCard[indexM]--;
        spansValue[indexM].textContent = countEachCard[indexM];
        partialPrice[indexM] = countEachCard[indexM] * pricesEachCard[indexM];

        sumRequests();
        getFinalPrice();
    })
})













/*if(target.contains("btn1")) {
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
        }*/