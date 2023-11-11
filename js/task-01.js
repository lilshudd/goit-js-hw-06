let categoriesList = document.getElementById("categories");
let categoryItems = categoriesList.querySelectorAll("li.item");
console.log("Number of categories: " + categoryItems.length);
categoryItems.forEach(function (categoryItem) {
  let categoryTitle = categoryItem.querySelector("h2").textContent;
  let categoryElements = categoryItem.querySelectorAll("ul li");
  console.log("Category: " + categoryTitle);
  console.log("Elements: " + categoryElements.length);
});
