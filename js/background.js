const images = ["main_visual2.jpg"];//,"gayoii.2.jpg","gayoii.3.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = `url(img/${chosenImage})` 
document.body.style.backgroundImage = bgImage
