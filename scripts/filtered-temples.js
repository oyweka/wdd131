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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
    {
    templeName: "Nairobi Kenya",
    location: "Nairobi, Kenya",
    dedicated: "2025, May, 18",
    area: 19870,
    imageUrl:
      "https://www.churchofjesuschrist.org/imgs/xbrnlkgvoumomut7itk86rrpepzrej7pax1mvuzz/full/640%2C/0/default"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl:
      "https://www.churchofjesuschrist.org/imgs/7cf8e8b9e5a5a1f379d4e2c9bc2166f9c6007aca/full/640%2C/0/default"
  },
  {
    templeName: "Johannesburg South Africa",
    location: "Johannesburg, South Africa",
    dedicated: "1985, August, 24",
    area: 19184,
    imageUrl:
      "https://www.churchofjesuschrist.org/imgs/b378c080e5880db5bf2bcf6d828b2f3fd59820de/full/640%2C/0/default"
  }
];

const templeGrid = document.querySelector(".temple-grid");

const homeLink = document.querySelector("#home");
homeLink.addEventListener("click", () => {
    displayTemples(temples);
});
const oldLink = document.querySelector("#old");
oldLink.addEventListener("click", () => {
    displayTemples(oldTemples);
});
const newTemples = temples.filter((temple) => {
    return Number(temple.dedicated.split(",")[0]) > 2000;
});
const newLink = document.querySelector("#new");
newLink.addEventListener("click", () => {
    displayTemples(newTemples);
});
const largeTemples = temples.filter((temple) => {
    return temple.area > 90000;
});
const largeLink = document.querySelector("#large");
largeLink.addEventListener("click", () => {
    displayTemples(largeTemples);
});
const smallTemples = temples.filter((temple) => {
    return temple.area < 10000;
});
const smallLink = document.querySelector("#small");
smallLink.addEventListener("click", () => {
    displayTemples(smallTemples);
});

function displayTemples(temples) {
    templeGrid.innerHTML = "";
temples.forEach((temple) => {
templeGrid.innerHTML += `
    <figure>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        <figcaption>
            <h2>${temple.templeName}</h2>
            <p>${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Area: ${temple.area.toLocaleString()} square feet</p>
        </figcaption>
    </figure>
`;
});
}

const oldTemples = temples.filter((temple) => {
    return Number(temple.dedicated.split(",")[0]) < 1900;
});
displayTemples(temples);

