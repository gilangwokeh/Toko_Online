function toggleNav() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show-nav");
}

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
