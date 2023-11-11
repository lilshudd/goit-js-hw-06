const counterValue = document.getElementById("value");

let currentValue = 0;
counterValue.textContent = currentValue;

const minusButton = document.querySelector('button[data-action="decrement"]');
const plusButton = document.querySelector('button[data-action="increment"]');

plusButton.addEventListener("click", () => {
  currentValue -= 1;
  counterValue.textContent = currentValue;
});

minusButton.addEventListener("click", () => {
  currentValue += 1;
  counterValue.textContent = currentValue;
});
