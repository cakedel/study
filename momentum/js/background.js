const images = ["01.jpg", "02.jpg", "03.jpg"];

const chonsenImages = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chonsenImages}`;

document.body.appendChild(bgImage);