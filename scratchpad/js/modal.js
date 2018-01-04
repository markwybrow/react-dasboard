// modal.js
const modal = document.getElementById("modalComponent");
const modalBtn = document.getElementById("modalBtn");
const closeBtn = document.getElementsByClassName("closeBtn")[0];

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', clickOutside);

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

function clickOutside(e) {
    if(e.target == modal) {
        modal.style.display = "none";
    }   
}