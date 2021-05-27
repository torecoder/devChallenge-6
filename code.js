/* product A */
const articleA = document.querySelector(".number-A");
const addA = document.querySelector(".add");
const removeA = document.querySelector(".remove");

/* product count B */
const articleB = document.querySelector(".number-B");
const addB = document.querySelector(".add2");
const removeB = document.querySelector(".remove2");

/* listener for add and remove */
addA.addEventListener("click", () => addProduct(1));
removeA.addEventListener("click", () => removeProduct(1));
addB.addEventListener("click", () => addProduct(2));
removeB.addEventListener("click", () => removeProduct(2));

const addProduct = (number) => {
  let value = number;
  if (value == 1) {
    articleA.stepUp();
    articleA.innerHTML = articleA;
  } else if (value == 2) {
    articleB.stepUp();
    articleB.innerHTML = articleB;
  }
  purchase(articleA.value, articleB.value);
};

const removeProduct = (number) => {
  if (number === 1) {
    if (articleA.value <= 0) {
      articleA.innerHTML = 0;
    } else {
      articleA.stepDown();
      articleA.innerHTML = articleA;
    }
  } else if (number === 2) {
    if (articleB.value <= 0) {
      articleB.innerHTML = 0;
    } else {
      articleB.stepDown();
      articleB.innerHTML = articleB;
    }
  }
  purchase(articleA.value, articleB.value);
};

/* total check */
const purchase = (artA, artB) => {
  const total = document.querySelector(".total");
  const shipping = document.querySelector(".number-digit");
  let send = 19;
  let bagPrice = 58.99;
  let shoesPrice = 74.99;
  let totalPay = artA * bagPrice + artB * shoesPrice + send;
  let pay = totalPay.toFixed(2);
  shipping.innerHTML = `$${send}`;
  total.innerHTML = `$${pay}`;
};
