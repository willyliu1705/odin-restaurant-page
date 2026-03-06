export { loadMenuPage };

function loadMenuPage() {
  const containerDiv = document.createElement("div");
  const headlineHeader = document.createElement("h2");
  headlineHeader.textContent = "Current Menu (every week has new dishes!)"

  const menuList = document.createElement("ul");
  const menuArray = ["Cheese Pizza", "Pepperoni Pizza", "Margherita Pizza"];
  for (let i = 0; i < menuArray.length; i++) {
    const menuItem = document.createElement("li");
    menuItem.textContent = menuArray[i]
    menuList.append(menuItem);
  }

  containerDiv.append(headlineHeader);
  containerDiv.append(menuList);

  return containerDiv;
}
