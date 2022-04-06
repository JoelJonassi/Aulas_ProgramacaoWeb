const modal = document.querySelector(".modal");
const olverlay = document.querySelector(".olveray");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

// console.log(btnOpenModal);


for(let i = 0; i < btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener("click", function(){
    modal.classList.remove("hidden");
    olverlay.classList.remove("hidden");
    });
    
}

const closeModal = function(){
    modal.classList.add("hidden");
    olverlay.classList.add("hidden");
};

btnCloseModal.add("click", closeModal());
olverlay.classList.add("click",closeModal());


document.addEventListener('keydown', function(e){
    if(e.key === "Escape"){
        closeModal();
    } 
}); //keypress e key down pesquisar


const todoList = document.querySelector(".todoList");
const inputText = document.querySelector(".createIteminput");
const createListButton = document.querySelector(".createListButton");

createListButton.addEventListener("click", function(){
    const newLi = document.createElement("li");
    const licontent = document.createTextNode(inputText.value);
    newLi.appendChild(licontent);
    todoList.appendChild(newLi);
})