const headerIcons = document.querySelector(".header-icons");
const downMenu = document.querySelector(".down-menu");

downMenu.addEventListener("click", () => {
    headerIcons.classList.toggle("show");
});