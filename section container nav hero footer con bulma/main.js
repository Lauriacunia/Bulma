/**
 * 
 * BULMA RESUELVE ESTO CON LA CLASE is-hoverable
 
const dropdown = document.querySelector(".navbar-link")
const menu = document.querySelector("#menu")


dropdown.onclick = () => {
    menu.classList.toggle("is-active")
}


dropdown.onmouseenter = () => {
    menu.classList.add("is-active")
}


dropdown.onmouseleave = () => {
    menu.classList.remove("is-active")
} */