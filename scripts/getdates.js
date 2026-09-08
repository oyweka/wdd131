const yearSpan = document.querySelector("#currentyear");
const lastModifiedP = document.querySelector("#lastModified");

const today = new Date();

yearSpan.textContent = today.getFullYear();

lastModifiedP.textContent = `Last Modified: ${document.lastModified}`;