//Menu responsive 768px
//Sidebar container
const container = document.querySelector(".side-menu-container");

// Sidebar links
const linksMenu = document.querySelector("#links-menu-container");
const linksButton = document.querySelector("#links-li");

// Sidebar contact
const contactMenu = document.querySelector("#contact-menu-container");
const contactButton = document.querySelector("#contact-li");
const width = window.matchMedia("(max-width: 768px");

//Event listeners

//Activa y desactiva el menu desplegable de los enlaces
linksButton.addEventListener("mouseover", () => {
  if (width.matches) {
    linksMenu.style.display = "block";
    contactButton.style.transform = "translateY(95%)";
  }
});

linksButton.addEventListener("mouseout", () => {
  if (width.matches) {
    linksMenu.style.display = "none";
    contactButton.style.transform = "translateY(0)";
  }
});

//Activa y desactiva el menu desplegable de contacto
contactButton.addEventListener("mouseover", () => {
  if (width.matches) {
    set(contactMenu.style.display = "block", 300)
  }
});

contactButton.addEventListener("mouseout", () => {
  if (width.matches) {
    contactMenu.style.display = "none";
  }
});

