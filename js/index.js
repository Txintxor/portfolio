
  const modalCv = document.querySelector("#modal-cv");
  const modalSkills = document.querySelector("#modal-skills");
  const modalCvButton = document.querySelector("#modal-button-cv");
  const modalSkillsButton = document.querySelector("#modal-button-skills");
  const main = document.querySelector('.main-container');
  
  
  modalCvButton.addEventListener("click", () => {
    main.style.opacity = 0.5;
    modalCv.style.display = "block";
  });

  modalSkillsButton.addEventListener(
    "click",
    () => (modalSkills.style.display = "block")
  );

