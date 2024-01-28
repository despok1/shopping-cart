let modalWindow = document.querySelector(".modal-window");
let btnOpenModal = document.querySelector(".cart");
let overlay = document.querySelector(".overlay");
let fruitsModal = document.querySelector(".fruits-modal");
let btnCloseModal = document.querySelector(".btn-close-modal");
let InputBanana = document.querySelector(".input-banana");
let InputOrange = document.querySelector(".input-orange");
let InputLemon = document.querySelector(".input-lemon");
let costLemon = document.querySelector(".cost-lemon");
let costBanana = document.querySelector(".cost-banana");
let costOrange = document.querySelector(".cost-orange");
let totalPrise = document.querySelector(".total-prise");
let btnfruits = document.querySelectorAll(".btn");

let products = [
  { id: 0, name: "Lemon", price: 5, cost: 0.5 },
  { id: 1, name: "Banana", price: 1, cost: 1 },
  { id: 2, name: "Orange", price: 0.5, cost: 1.5 },
  { id: 3, name: "Apple", price: 2, cost: 2 },
  { id: 4, name: "Pineapple", price: 6, cost: 6 },
  { id: 5, name: "Tangerine", price: 1.2, cost: 1.2 },
];

btnOpenModal.onclick = () => {
  modalWindow.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
btnCloseModal.onclick = () => {
  modalWindow.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnfruits.length; i++) {
  btnfruits[i].onclick = function () {
    generateProduct(products[i]);
    btnfruits[i].innerHTML = "Товар уже в корзине";
    btnfruits[i].disabled = true;
    PlusMinus();
  };
}

function PlusMinus() {
  let btnMinus = document.querySelectorAll(".btn-minus");
  let btnPlus = document.querySelectorAll(".btn-plus");
  let input = document.querySelectorAll(".input-fruits");
  let cost = document.querySelectorAll(".cost-value");

  for (let i = 0; i < btnMinus.length; i++) {
    btnMinus[i].onclick = function () {
      input[i].value = parseInt(input[i].value) - 1;
    };
  }

  /* 
    В общем, Максим, смотри, что я делал, чтобы правильно пересчитывать цену:

      1. Создал метод recalculatePrice(), который пересчитывает цену товара в корзине
      2. В этом коде он срабатывает при клике на + (на минус я пока не вешал его)
      3. Когда мы нажимаем плюс, мы находим не цену в HTML (из спана), т.к. это приводит к багу 
      4. Я нахожу по input'у data-id, через него выхожу на цену в products 
      5. Далее всё просто: цену беру из объекта, умножаю на к-во и вывожу это в HTML
      6. Это делает функция recalculatePrice
      7. Плюс всякие округления, не забудь переводить строки в числа и наоборот там, где это нужно 
  */

  for (let i = 0; i < btnPlus.length; i++) {
    btnPlus[i].onclick = function () {
      /* change input value */
      input[i].value = parseInt(input[i].value) + 1;
      // recalculatePrice();

      /* product id same as product index */
      const productIndex = input[i].dataset.id;
      console.log('- productID -', productIndex);
      

      /* recalculate total price */
      let costElement = cost[i];
      let productCost = products[productIndex].price;
      let productCount = Number(input[i].value);
      recalculatePrice(costElement, productCost, productCount);
    };
  }
}

/* считаем цену товара в корзине */
function recalculatePrice(costElement, cost, count) {
  console.log("- costElement -", costElement);
  console.log("- cost -", cost);
  console.log("- count -", count);

  costElement.innerHTML =  Number((cost * count).toFixed(2));
}

/* создаём товар в корзине при клике на "add to cart" */
function generateProduct(product) {
  fruitsModal.innerHTML += `
    <div>
    <div class="modal-fruits">
    <h4 class="fruit-prise">${product.name}(${product.price})</h4>
    <div class="all-fruits">
    <button class="btn-minus " onclick = "minus()">-</button>
    <input class="input-fruits " type="number" value="1" data-id=${product.id}>
    <button class="btn-plus " onclick = "">+</button>
    </div>
    <button class="btn-close-fruits" onclick = "">×</button>
    <div class="cost">$<span class = "cost-value">${product.cost}</span></div>
    </div>
    `;
  console.log("готово");
}
