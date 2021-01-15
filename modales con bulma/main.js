const botonAbrirModal = document.querySelector("#btn-open-modal")
const modal = document.querySelector(".modal")
const botonCerrarModal = document.querySelector(".delete")

botonAbrirModal.onclick = () => {
    modal.classList.add("is-active")
}

botonCerrarModal.onclick = () => {
    modal.classList.remove("is-active")
}