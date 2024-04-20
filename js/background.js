const images = ["gayoii.1.jpg"];//,"gayoii.2.jpg","gayoii.3.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//const bgImage = document.createElement("img");
//bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage);

// When you finish CSS work, apply it!

const bgImage = `url(img/${chosenImage})` 
document.body.style.backgroundImage = bgImage
