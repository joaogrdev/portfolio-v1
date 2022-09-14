let plusBtns = document.querySelectorAll(".plus") //todos os btns de mais
let minusBtns = document.querySelectorAll(".minus") //todos os btns menos
const valuesTxt = document.querySelectorAll(".request__value"); //todos as qtds de pedidos


const products = {
    0: {
        productNumbers: 0,
        productName: "Pollo à Moda",
        productPrice: 19.90,
        partialPrice: 0
    },
    1: {
        productNumbers: 0,
        productName: "Asa Crocante",
        productPrice: 39.90,
        partialPrice: 0
    },
    2: {
        productNumbers: 0,
        productName: "Coxa Família",
        productPrice: 49.90,
        partialPrice: 0
    },
    3: {
        productNumbers: 0,
        productName: "Pollo Balde",
        productPrice: 15.90,
        partialPrice: 0
    },
    4: {
        productNumbers: 0,
        productName: "Pollo Burg",
        productPrice: 24.90,
        partialPrice: 0
    },
    5: {
        productNumbers: 0,
        productName: "Nuggets",
        productPrice: 9.90,
        partialPrice: 0
    }
}

/************************************************* */

valuesTxt.forEach(function(valueTxt) { //pega todos os spans de qtd de cada produto, e joga no objeto PRODUCTS
    var l = 0;
     do {
        products[l].spansValue = valuesTxt[l];
        l++;
    } while(l < 6);
})

/************************************************* */

function getNumberProducts() { //coloca items no carrinho e mostra no navbar
    let totalRequests = 0;
    for(var i = 0; i < 6; i++) {
        totalRequests += products[i].productNumbers;
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

function getFinalPrice() { //pega o preço final de todos os produtos no carrinho
    let totalPrice = 0;
    for(var j = 0; j < 6; j++) {
        totalPrice += products[j].partialPrice;
    }

    let roundPrice = totalPrice.toFixed(2).replace(".", ",");
    let totalValue = document.querySelector(".total__value-number");
    totalValue.textContent = roundPrice;
}

/********************************************************** */

function setValues(index) {
    
    index.spansValue.textContent = index.productNumbers;
    index.partialPrice = index.productNumbers * index.productPrice;
}

/*********************************************************** */

plusBtns.forEach(function(plusBtn) {
    for(var k=0; k < plusBtns.length; k++) { //setando index para cada btn
        plusBtns[k].index = k;
      }
    plusBtn.addEventListener("click", function(e) {
        let actual = products[e.currentTarget.index];
        actual.productNumbers++;
        setValues(actual);
        getNumberProducts();
        getFinalPrice();
        setTxtRequestsMade(actual);
    })
})

minusBtns.forEach(function(minusBtn) {
    for(var m=0; m < minusBtns.length; m++) { //setando index para cada btn
        minusBtns[m].index = m;
      }
    minusBtn.addEventListener("click", function(e) {
        let actual = products[e.currentTarget.index];
        if(actual.productNumbers > 0) {
            actual.productNumbers--;
            setValues(actual);
        }
        getNumberProducts();
        getFinalPrice();
        setTxtRequestsMade(actual);
    })
})

/*********************************************************** */

function setTxtRequestsMade(index) {
    let requestsMade = document.querySelector(".requests-made");

    requestsMade.textContent = ""; //limpa paragrafos antigos e atualiza com novos valores
    
    for(var n = 0; n < 6; n++) { //loop por todas as qtds de pedidos para ver se há pedido, e criar parag com ele
        if(products[n].productNumbers > 0) {
            let txtTag = document.createElement("p");
            txtTag.setAttribute("class", "requests__parag");
            let txtTagContent = document.createTextNode(products[n].productNumbers + "x " + products[n].productName + " " + products[n].partialPrice.toFixed(2).replace(".", ","));
            txtTag.appendChild(txtTagContent);
            requestsMade.appendChild(txtTag);
        }
    }
};