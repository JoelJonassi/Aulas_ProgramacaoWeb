const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModel = document.querySelectorAll(".show-modal");
// console.log(btnOpenModel);

for (let i = 0; i < btnOpenModel.length; i++) {
  btnOpenModel[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

const todoList = document.querySelector(".todoList");
const inputText = document.querySelector(".createItemInput");
const createListButton = document.querySelector(".createListButton");

createListButton.addEventListener("click", function () {
  const newLi = document.createElement("li");
  const inputContent = document.createTextNode(inputText.value);
  newLi.appendChild(inputContent);
  todoList.appendChild(newLi);
});
