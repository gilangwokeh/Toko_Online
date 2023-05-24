const slider = document.querySelector(".slider");
const sliderImages = document.querySelectorAll(".slider img");
const totalSlides = sliderImages.length;
let currentIndexSlider = 0;

const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");

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

const slider2 = document.querySelector(".slider2");
const sliderImages2 = document.querySelectorAll(".slider2 img");
const totalSlides2 = sliderImages.length;
let currentIndexSlider2 = 0;

const prevButton2 = document.querySelector(".prev-btn2");
const nextButton2 = document.querySelector(".next-btn2");

prevButton2.addEventListener("click", () => {
  prevSlide2();
});

nextButton2.addEventListener("click", () => {
  nextSlide2();
});

function showSlide2(index) {
  if (index < 0) {
    index = totalSlides2 - 1;
  } else if (index >= totalSlides2) {
    index = 0;
  }

  slider2.style.transform = `translateX(-${index * 100}%)`;
  currentIndexSlider2 = index;
}

function nextSlide2() {
  showSlide2(currentIndexSlider2 + 1);
}

function prevSlide2() {
  showSlide2(currentIndexSlider2 - 1);
}

showSlide2(currentIndexSlider2);

const helpWhatsappBtn = document.getElementById("help-whatsapp-btn");
const helpWhatsappPopup = document.getElementById("help-whatsapp-popup");
const closePopup = document.getElementById("close-popup");

helpWhatsappBtn.addEventListener("click", () => {
  helpWhatsappPopup.style.display = "block";
});

closePopup.addEventListener("click", () => {
  helpWhatsappPopup.style.display = "none";
});
