const cartButton = [...document.querySelectorAll(".cart-button")];
const mainProductNumbern = [...document.querySelectorAll(".main__product-number")];
const elBtn = [...document.querySelectorAll('.main__product-btn')];
const shopCartMenu = document.querySelector('.shop-cart__menu')
const shopImg = document.querySelector('.shop-img')
const cardimg = [...document.querySelectorAll('.card img')]
console.log(cardimg)
for (let l = 0; l < cartButton.length; l++) {
    cartButton[l].addEventListener("click", function () {
        cartButton[l].style.display = 'none';
        mainProductNumbern[l].style.display = 'block';
        shopImg.style.display = 'none';
        shopCartMenu.style.display = 'block';
        cardimg[l].style.border = '3px solid #C73B0F';
    });
}
for (let i = 0; i < elBtn.length; i++) {
    elBtn[i].addEventListener("click", function () {
        prepare(this);  
    });
}

function prepare(btn) {
    let parent = btn.closest('.main__product-number');
    let number = parent.querySelector('.main__product-num');
    let symbol = btn.getAttribute('data-symbol');
    let count = parseInt(number.textContent);

    if (symbol === "+") { 
        count += 1;
    } else if (symbol === "-" && count > 0) { 
        count -= 1;  
    }

    number.textContent = count;
}