const modalBg = document.querySelector(".modal-bg");
const btnModal = document.querySelector(".btn-modal");
const closeModal = document.querySelector(".close-modal");

btnModal.addEventListener("click", function modalHandler(){
    modalBg.classList.add("bg-active");
})

window.onclick = function(event){
    if(event.target === modalBg ){
        modalBg.classList.remove("bg-active")
    }
}

closeModal.addEventListener("click", function closeModalHandler(){
    console.log("clicked");
    modalBg.classList.remove("bg-active")
})

