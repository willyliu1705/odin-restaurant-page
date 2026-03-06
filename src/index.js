import { loadHomePage } from "./home-page.js";
import { loadMenuPage } from "./menu-page.js";
import { loadAboutPage } from "./about-page.js";

console.log("Hi from index.js");

const contentDiv = document.querySelector("#content");
contentDiv.append(loadHomePage());

const homePageButton = document.querySelector(".home-button");
const menuPageButton = document.querySelector(".menu-button");
const contactPageButton = document.querySelector(".about-button");

function clearPage() {
  contentDiv.innerHTML = "";
}

homePageButton.addEventListener("click", () => {
  clearPage();
  contentDiv.append(loadHomePage());
})

menuPageButton.addEventListener("click", () => {
  clearPage();
  contentDiv.append(loadMenuPage());
})

contactPageButton.addEventListener("click", () => {
  clearPage();
  contentDiv.append(loadAboutPage());
})

