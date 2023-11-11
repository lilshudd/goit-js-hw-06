const ingredientsList = document.getElementById("ingredients");

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const fragment = document.createDocumentFragment();

ingredients.forEach(function(ingredientText) {
  const ingredientItem = document.createElement("li");
  ingredientItem.classList.add("item");
  ingredientItem.textContent = ingredientText;
  fragment.appendChild(ingredientItem);
});

ingredientsList.appendChild(fragment);