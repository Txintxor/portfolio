

// Modals
const modalCv = document.querySelector("#cv-modal");
const modalSkills = document.querySelector("#skills-modal");
const modalCvButton = document.querySelector("#modal-cv-button");
const modalSkillsButton = document.querySelector("#modal-skills-button");

// Main y modal class
const main = document.querySelector(".page-wrapper");
const modal = document.querySelector(".modal");

// Funciones
modalCvButton.addEventListener("click", () => {
  main.style.opacity = 0.5;
  main.style.zindex = 0;
  modalCv.style.display = "block";
});

modalSkillsButton.addEventListener("click", () => {
  main.style.opacity = 0.5;
  main.style.zindex = 0;
  modalSkills.style.display = "block";
});

modalCv.onclick = () => {
  main.style.opacity = 1;
  modalCv.style.display = "none";
};

modalSkills.onclick = () => {
  main.style.opacity = 1;
  modalSkills.style.display = "none";
};
