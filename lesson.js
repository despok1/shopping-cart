let modalWindow = document.querySelector('.modal-window');
let btnOpenModal = document.querySelector('.cart');
let overlay = document.querySelector(".overlay");
let fruitsModal = document.querySelector(".fruits-modal")
let btnCloseModal = document.querySelector(".btn-close-modal");
let InputBanana = document.querySelector(".input-banana");
let InputOrange = document.querySelector(".input-orange");
let InputLemon = document.querySelector(".input-lemon");
let costLemon = document.querySelector(".cost-lemon")
let costBanana = document.querySelector(".cost-banana")
let costOrange = document.querySelector(".cost-orange")
let totalPrise = document.querySelector(".total-prise")
let btnfruits = document.querySelectorAll(".btn")


let products = [
    {id: 0, name: 'Lemon', price: 0.5, cost: 0.5 },
    {id: 1, name: 'Banana', price: 1, cost: 1 },
    {id: 2, name: 'Orange', price: 1.5, cost: 1.5 },
    {id: 3, name: 'Apple', price: 2, cost: 2 },
    {id: 4, name: 'Pineapple', price: 6, cost: 6 },
    {id: 5, name: 'Tangerine', price: 1.2, cost: 1.2 }
]

btnOpenModal.onclick = () => { modalWindow.classList.remove("hidden"); overlay.classList.remove("hidden"); };
btnCloseModal.onclick = () => { modalWindow.classList.add("hidden"); overlay.classList.add("hidden"); };


for (let i = 0; i < btnfruits.length; i++) {
    btnfruits[i].onclick = function () {
        generateProduct(products[i]);
        btnfruits[i].innerHTML = "Товар уже в корзине";
        btnfruits[i].disabled = true;
        PlusMinus()
    };
}
function PlusMinus() {
    let btnMinus = document.querySelectorAll(".btn-minus")
    let btnPlus = document.querySelectorAll(".btn-plus")
    let input = document.querySelectorAll(".input-fruits")
    console.log(btnMinus, btnPlus, input);

    for (let i = 0; i < btnMinus.length; i++) {
        btnMinus[i].onclick = function () {
            input[i].value = parseInt(input[i].value) - 1
            cost()
        }

    }
    for (let i = 0; i < btnPlus.length; i++) {
        btnPlus[i].onclick = function () {
            input[i].value = parseInt(input[i].value) + 1
            cost()
        }

    }
    for (let i = 0; i < input.length; i++) {

    }
  
}
function cost() {
    product.cost = product.cost * input[i].value;
}
function generateProduct(product) {
    fruitsModal.innerHTML +=
        `
    <div>
    <div class="modal-fruits">
    <h4 class="fruit-prise">${product.name}(${product.price})</h4>
    <div class="all-fruits">
    <button class="btn-minus " onclick = "minus()">-</button>
    <input class="input-fruits " type="number" value="1" data-id=${product.id}>
    <button class="btn-plus " onclick = "">+</button>
    </div>
    <button class="btn-close-fruits" onclick = "">×</button>
    <div class="cost">$${product.cost}</div>
    </div>
    `;
    console.log("готово");

}


