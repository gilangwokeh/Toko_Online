const navbarToggle = document.getElementById("navbar-toggle");
const navbarMenu = document.getElementById("navbar-menu");
const navbarClose = document.getElementById("navbar-close");

navbarToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});

navbarClose.addEventListener("click", () => {
  navbarMenu.classList.remove("open");
});

const carouselContainer = document.querySelector(".carousel-container");
const carouselItems = document.querySelectorAll(".carousel-item");
const totalItems = carouselItems.length;
let currentIndex = 0;

function showItem(index) {
  if (index < 0) {
    index = totalItems - 1;
  } else if (index >= totalItems) {
    index = 0;
  }

  carouselContainer.style.transform = `translateX(-${index * 100}%)`;
  currentIndex = index;
}

function nextItem() {
  showItem(currentIndex + 1);
}

function prevItem() {
  showItem(currentIndex - 1);
}

setInterval(nextItem, 5000);

const slider = document.querySelector(".slider");
const sliderImages = document.querySelectorAll(".slider img");
const totalSlides = sliderImages.length;
let currentIndexSlider = 0;

const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const sliderButtons = document.querySelector(".slider-buttons");

prevButton.addEventListener("click", () => {
  prevSlide();
});

nextButton.addEventListener("click", () => {
  nextSlide();
});

function showSlide(index) {
  if (index < 0) {
    index = totalSlides - 1;
  } else if (index >= totalSlides) {
    index = 0;
  }

  slider.style.transform = `translateX(-${index * 100}%)`;
  currentIndexSlider = index;
}

function nextSlide() {
  showSlide(currentIndexSlider + 1);
}

function prevSlide() {
  showSlide(currentIndexSlider - 1);
}

showSlide(currentIndexSlider);

const helpWhatsappBtn = document.getElementById("help-whatsapp-btn");
const helpWhatsappPopup = document.getElementById("help-whatsapp-popup");
const closePopup = document.getElementById("close-popup");

helpWhatsappBtn.addEventListener("click", () => {
  helpWhatsappPopup.style.display = "block";
});

closePopup.addEventListener("click", () => {
  helpWhatsappPopup.style.display = "none";
});
