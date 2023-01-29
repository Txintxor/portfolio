// Sidebar links
const linksMenu = document.querySelector("#links-menu-container");
const linksButton = document.querySelector("#links-menu-button");

// Sidebar contact
const contactMenu = document.querySelector("#contact-menu-container");
const contactButton = document.querySelector("#contact-menu-button");


const container = document.querySelector("#links-li");

// Funciones
linksButton.addEventListener("mouseover", () => {
  linksMenu.style.display = "block";
});

contactButton.addEventListener("mouseover", () => {
  contactMenu.style.display = "block";
});



container.addEventListener("mouseout", () => {
  linksMenu.style.display = "none";
});


