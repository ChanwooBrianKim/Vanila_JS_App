// List of background images
const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
];

// Random image on the background
const chosenImage = images[Math.floor(Math.random() * images.length)]

// Create element on the index.html (Code can't be seen)
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);