// Sidebar links
const linksMenu = document.querySelector("#links-menu-container");
const linksButton = document.querySelector("#links-li");

// Sidebar contact
const contactMenu = document.querySelector("#contact-menu-container");
const contactButton = document.querySelector("#contact-li");


const container = document.querySelector(".pop-li");

// Para hacer aparecer los menus de enlaces y contacto
linksButton.addEventListener("mouseover", () => {
  linksMenu.style.display = "block";
});

contactButton.addEventListener("mouseover", () => {
  contactMenu.style.display = "block";
});

//Para hacer desaparecer los menus
linksButton.addEventListener("mouseout", () => {
  linksMenu.style.display = "none";
});
contactButton.addEventListener("mouseout", () => {
  contactMenu.style.display = "none";
});
