const year = new Date().getFullYear();
document.querySelector("#currentyear").textContent = year;

const lastModified = document.lastModified;
document.querySelector("#lastModified").textContent = `Last Modified: ${lastModified}`;

const temperature = 10;
const windSpeed = 5;
function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}
if (temperature <= 10 && windSpeed > 4.8) {
    document.querySelector("#windchill").textContent =
        `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`;
} else {
    document.querySelector("#windchill").textContent = "N/A";
}