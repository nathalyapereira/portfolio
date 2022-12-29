const button = document.querySelector(".modal-wrapper");
const modal = document.querySelector("dialog"); 
const buttonClose = document.querySelector("dialog .close")
button.onclick = function () {
    modal.showModal()
}

buttonClose.onclick = function () {
    modal.close()
}