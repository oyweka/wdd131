const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");
const interestForm = document.querySelector("#interest-form");
const formMessage = document.querySelector("#form-message");
const visitorName = document.querySelector("#visitor-name");
const interestSelect = document.querySelector("#interest");
const currentYear = document.querySelector("#current-year");

const topics = [
  {
    value: "areas",
    name: "Rice-growing areas",
    page: "areas.html"
  },
  {
    value: "production",
    name: "Rice production",
    page: "production.html"
  },
  {
    value: "challenges",
    name: "Farming challenges",
    page: "production.html#challenges"
  }
];

function updateYear() {
  currentYear.textContent = new Date().getFullYear();
}

function toggleMenu() {
  const isOpen = navigation.classList.toggle("open");

  menuButton.setAttribute("aria-expanded", `${isOpen}`);
  menuButton.textContent = isOpen ? "Close Menu" : "Menu";
}

function displaySavedInterest() {
  const savedInterest = localStorage.getItem("riceFarmingInterest");

  if (savedInterest) {
    const savedData = JSON.parse(savedInterest);

    formMessage.textContent = `Welcome back${savedData.name ? `, ${savedData.name}` : ""}! Your saved topic is ${savedData.topicName}.`;
  }
}

function saveInterest(event) {
  event.preventDefault();

  const name = visitorName.value.trim();
  const selectedValue = interestSelect.value;

  const selectedTopic = topics.find(
    (topic) => topic.value === selectedValue
  );

  if (!selectedTopic) {
    formMessage.textContent = "Please select a topic before continuing.";
    return;
  }

  const interestData = {
    name: name,
    topic: selectedTopic.value,
    topicName: selectedTopic.name,
    page: selectedTopic.page
  };

  localStorage.setItem(
    "riceFarmingInterest",
    JSON.stringify(interestData)
  );

  formMessage.textContent = `Thank you${name ? `, ${name}` : ""}! Your interest in ${selectedTopic.name} has been saved.`;

  interestForm.reset();
}

function setupMenu() {
  if (menuButton && navigation) {
    menuButton.addEventListener("click", toggleMenu);
  }
}

function setupInterestForm() {
  if (interestForm && formMessage && visitorName && interestSelect) {
    interestForm.addEventListener("submit", saveInterest);
    displaySavedInterest();
  }
}

function displayTopicLinks() {
  const topicLinks = topics
    .map(
      (topic) =>
        `<li><a href="${topic.page}">${topic.name}</a></li>`
    )
    .join("");

  const topicList = document.querySelector("#extra-topic-links");

  if (topicList) {
    topicList.innerHTML = topicLinks;
  }
}

function initializePage() {
  if (currentYear) {
    updateYear();
  }

  setupMenu();
  setupInterestForm();
  displayTopicLinks();
}

initializePage();
