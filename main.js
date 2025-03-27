document.addEventListener("DOMContentLoaded", function () {
    const minusBtn = document.querySelector(".main__product-btn.minus");
    const plusBtn = document.querySelector(".main__product-btn.plus");
    const numberOutput = document.querySelector(".main__product-num");

    let count = 0;

    minusBtn.addEventListener("click", function () {
        if (count > 0) {
            count--;
            numberOutput.textContent = count;
        }
    });

    plusBtn.addEventListener("click", function () {
        count++;
        numberOutput.textContent = count;
    });
});

const cartButton = document.querySelector(".cart-button")
const mainProductNumbern = document.querySelector(".main__product-number")

const b1 = document.querySelector("#b1");
const b2 = document.querySelector("#b2");
const b3 = document.querySelector("#b3");
const b4 = document.querySelector("#b4");
const b5 = document.querySelector("#b5");
const b6 = document.querySelector("#b6");
const b7 = document.querySelector("#b7");
const b8 = document.querySelector("#b8");
const b9 = document.querySelector("#b9");

const n1 = document.querySelector("#n1");
const n2 = document.querySelector("#n2");
const n3 = document.querySelector("#n3");
const n4 = document.querySelector("#n4");
const n5 = document.querySelector("#n5");
const n6 = document.querySelector("#n6");
const n7 = document.querySelector("#n7");
const n8 = document.querySelector("#n8");
const n9 = document.querySelector("#n9");

console.log(mainProductNumbern)
b1.addEventListener("click", function () {
    b1.style.display = 'none'
    n1.style.display = 'block'
})
b2.addEventListener("click", function () {
    b2.style.display = 'none'
    n2.style.display = 'block'
})
b3.addEventListener("click", function () {
    b3.style.display = 'none'
    n3.style.display = 'block'
})
b4.addEventListener("click", function () {
    b4.style.display = 'none'
    n4.style.display = 'block'
})
b5.addEventListener("click", function () {
    b5.style.display = 'none'
    n5.style.display = 'block'
})
b6.addEventListener("click", function () {
    b6.style.display = 'none'
    n6.style.display = 'block'
})
b7.addEventListener("click", function () {
    b7.style.display = 'none'
    n7.style.display = 'block'
})
b8.addEventListener("click", function () {
    b8.style.display = 'none'
    n8.style.display = 'block'
})
b9.addEventListener("click", function () {
    b9.style.display = 'none'
    n9.style.display = 'block'
})
