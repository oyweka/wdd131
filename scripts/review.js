let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

reviewCount += 1;

localStorage.setItem("reviewCount", reviewCount);

const reviewCountElement = document.querySelector("#reviewCount");

if (reviewCountElement) {
  reviewCountElement.textContent = reviewCount;
}
document.querySelector("#lastModified").textContent = document.lastModified;
