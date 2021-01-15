const botonDropdown = document.querySelector("#btn-dropdown")
const divDropdown = document.querySelector(".dropdown")

botonDropdown.onclick = () => {
    divDropdown.classList.toggle("is-active")
}

