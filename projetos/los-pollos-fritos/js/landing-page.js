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



const coupons = document.querySelectorAll(".coupons__item");

coupons.forEach(function(coupon) {
    coupon.addEventListener("click", function(e) {
        let target = e.currentTarget.classList;
        if(target.contains("coupon1")) {
            alert("Cupom resgatado! Use o código POLLO10 no carrinho.")
        } else {
            alert("Cupom resgatado! Use o código FRITO20 no carrinho.")
        }
    })
})
