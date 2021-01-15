const boton = document.querySelector("#boton")

boton.onclick = () => {
    boton.classList.add("is-loading")
    setTimeout(() => {
        boton.classList.remove("is-loading")
    },2000)
}