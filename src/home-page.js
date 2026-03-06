import pizzeriaImage from "./pizzeria.jpg"
export { loadHomePage };

function loadHomePage() {
  const containerDiv = document.createElement("div");
  const headlineHeader = document.createElement("h2");
  headlineHeader.textContent = "The best pizza in the business!"

  const homepageImage = document.createElement("img");
  homepageImage.src = pizzeriaImage;

  const descriptionP = document.createElement("p");
  descriptionP.textContent = "A cozy neighborhood pizzeria serving hand-tossed \
  pizzas made with fresh dough, rich tomato sauce, and high - quality toppings.From \
  classic favorites like Margherita and Pepperoni to creative specialty pies, every \
  pizza is baked to perfection in a hot oven for that crisp crust and melty cheese.\
  Pair your slice with fresh salads, garlic knots, and refreshing drinks for a simple, \
  satisfying meal with friends and family.";

  containerDiv.append(headlineHeader);
  containerDiv.append(homepageImage);
  containerDiv.append(descriptionP);

  return containerDiv;
}
