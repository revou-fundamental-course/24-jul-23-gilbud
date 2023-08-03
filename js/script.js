function validationEmail() {
  var email = document.getElementById("email").value;
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  var text = document.getElementById("text");

  text.innerHTML = "anjasss";

  if (email.match(pattern)) {
    text.innerHTML = "Your Email Addres is Valid";
    text.style.color = "#00ff00";
  } else {
    text.innerHTML = "Please Enter Valid Email Address";
    text.style.color = "#ff0000";
    text.style.fontWeight = "600";
  }

  if (email == "") {
    text.innerHTML = "";
  }
  {
  }
}

const slides = document.querySelectorAll(".slider-card");
const totalSlides = slides.length;
let counter = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const prevCard = () => {
  counter--;
  slideCard();
};

const nextCard = () => {
  counter++;
  slideCard();
};

const slideCard = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });

  // Handle looping to the beginning when reaching the first card
  if (counter < 0) {
    counter = totalSlides - 1;
    slideCardInstant();
  }

  // Handle looping to the end when reaching the last card
  if (counter === totalSlides) {
    counter = 0;
    slideCardInstant();
  }
};

// Helper function to slide cards instantly without transition
const slideCardInstant = () => {
  slides.forEach((slide) => {
    slide.style.transition = "1s";
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });

  // Reset the transition after a short delay
  // A short delay for the transition to reset smoothly
};

// const slider = document.querySelector("left-home");
// let cardWidth = document.querySelector("slider-card");
// let currentIndex = 0;

// function updateSliderPosition() {
//   slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
// }

// function nextCard() {
//   currentIndex = (currentIndex + 1) % slider.children.length;
//   updateSliderPosition();
// }

// function prevCard() {
//   currentIndex =
//     (currentIndex - 1 + slider.children.length) % slider.children.length;
//   updateSliderPosition();
// }
