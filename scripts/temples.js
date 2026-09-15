const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("nav ul");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
});

const yearSpan = document.querySelector("#currentyear");
const lastModifiedP = document.querySelector("#lastModified");

const today = new Date();

yearSpan.textContent = today.getFullYear();
lastModifiedP.textContent = `Last Modified: ${document.lastModified}`;