// Constantes de los elementos del dom

const modalCv = document.querySelector("#modal-cv");
const modalSkills = document.querySelector("#modal-skills");
const modalCvButton = document.querySelector("#modal-button-cv");
const modalSkillsButton = document.querySelector("#modal-button-skills");
const main = document.querySelector(".main-container");
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
  console.log("hola");
};
