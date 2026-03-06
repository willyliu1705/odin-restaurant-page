export { loadAboutPage };

function loadAboutPage() {
  const containerDiv = document.createElement("div");
  const headlineHeader = document.createElement("h2");
  headlineHeader.textContent = "Contact us about anything!"

  const contactInfoDiv = document.createElement("div");
  contactInfoDiv.textContent = "Email: lmao@gmail.com | Phone: 123-456-7890";

  containerDiv.append(headlineHeader);
  containerDiv.append(contactInfoDiv);

  return containerDiv;
}
