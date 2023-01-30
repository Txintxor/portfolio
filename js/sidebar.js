// Sidebar links
const linksMenu = document.querySelector("#links-menu-container");
const linksButton = document.querySelector("#links-li");

// Sidebar contact
const contactMenu = document.querySelector("#contact-menu-container");
const contactButton = document.querySelector("#contact-li");

const container = document.querySelector(".menu-link-li");

// Event Listeners que hacen aparecer los menus  de la sidebar escondidos
linksButton.addEventListener("mouseover", () => {
  linksMenu.style.display = "block";
});

contactButton.addEventListener("mouseover", () => {
  contactMenu.style.display = "block";
});

// Event Listeners que hacen desaparecer los menus  de la sidebar escondidos
linksButton.addEventListener("mouseout", () => {
  linksMenu.style.display = "none";
});
contactButton.addEventListener("mouseout", () => {
  contactMenu.style.display = "none";
});
