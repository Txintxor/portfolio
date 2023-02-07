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
    contactMenu.style.display = "block";
  }
});

contactButton.addEventListener("mouseout", () => {
  if (width.matches) {
    contactMenu.style.display = "none";
  }
});

// Botones de activación y desactivacion de menus sin transición

// const on = document.querySelector(".open-responsive-menu-button");
// let check = false;

// on.addEventListener("click", () => {
//   if ((!check)) {
//     // container.style.z-index = "3";
//     container.style.transform = "translateY(0)";
//     container.style.opacity = "1";
//     check = true;
//   } else {
//     // container.style.display = "none";
//     container.style.transform = "translateY(-110%)";
//     container.style.opacity = "0";
//     check = false;
//   }
// });

// Para hacer aparecer los menus de enlaces y contacto sin transición

// linksButton.addEventListener("mouseover", () => {

//   linksMenu.style.display = "block";
// });

// contactButton.addEventListener("mouseover", () => {
//   contactMenu.style.display = "block";
// });

//Para hacer desaparecer los menus

// linksButton.addEventListener("mouseout", () => {
//   linksMenu.style.display = "none";
// });
// contactButton.addEventListener("mouseout", () => {
//   contactMenu.style.display = "none";
// });