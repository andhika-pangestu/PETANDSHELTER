const images = [
    "img/pet (1).jpg",
    "img/pet (2).webp",
    "img/pet (2).jpg",
  ];
  let currentIndex = 0;
  const imageElement = document.querySelector(".card-image");

  function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex];
  }

  setInterval(changeImage, 3000); // Change image every 3 seconds