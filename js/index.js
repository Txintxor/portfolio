// Constantes de los elementos del dom

const modalCv = document.querySelector("#modal-cv");
const modalSkills = document.querySelector("#modal-skills");
const modalCvButton = document.querySelector("#modal-button-cv");
const modalSkillsButton = document.querySelector("#modal-button-skills");
const main = document.querySelector(".main-container");
const modal = document.querySelector(".modal");

modalCvButton.addEventListener("click", () => {
  main.style.opacity = 0.5;
  modalCv.style.display = "block";
  modal.style.display = "block";
});

modalSkillsButton.addEventListener(
  "click",
  () => (modalSkills.style.display = "block")
);

modal.addEventListener("touchstart", () => {
  if (
    modalCv.style.display === "block" ||
    modalSkills.style.display === "block"
  ) {
    modal.style.display = "none";
  }
});
