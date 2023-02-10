//Menu responsive 768px
//Sidebar container
const container = document.querySelector(".side-menu-container");

// Sidebar links
const linksMenu = document.querySelector("#links-menu-container");
const linksButton = document.querySelector("#links-li");

// Sidebar contact
const contactMenu = document.querySelector("#contact-menu-container");
const contactButton = document.querySelector("#contact-li");

//Tags a del menú de contactos
const aTagContact = document.querySelector(".contact-a");

//Variable que controla el ancho de la pantalla
const width = window.matchMedia("(max-width: 768px");

//Event listeners

//Activa y desactiva el menu desplegable de los enlaces
linksButton.addEventListener("mouseover", () => {
  if (width.matches) {
    linksMenu.style.display = "block";
    contactButton.style.transform = "translateY(150%)";
  }
});

linksButton.addEventListener("mouseout", () => {
  if (width.matches) {
    linksMenu.style.display = "none";
    contactButton.style.transform = "translateY(0)";
  }
});

//Activa y desactiva el menu desplegable de contacto

if (width.matches) {
  contactButton.addEventListener("mouseover", () => {
    contactMenu.style.display = "block";
    contactMenu.style.marginTop = "0";
    contactMenu.addEventListener(
      "transitionend",
      () => (contactMenu.style.transform = "translateY(0%)")
    );
  });
}
contactButton.addEventListener("mouseout", () => {
  if (width.matches) {
    contactMenu.style.marginTop = "50rem";
    contactMenu.style.display = "none";
  }
});
