// Constantes de los elementos del dom

const modalCv = document.querySelector("#cv-modal");
const modalSkills = document.querySelector("#skills-modal");
const modalCvButton = document.querySelector("#modal-cv-button");
const modalSkillsButton = document.querySelector("#modal-skills-button");
const main = document.querySelector(".page-wrapper");
const modal = document.querySelector(".modal");

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
