// * Bootstrap libraries
import './_bootstrap';

// * Any other global site-wide JavaScript should be placed below.


function setBackground() {
  const images = [
    "bg-1.png",
    "bg-2.png",
    "bg-3.png",
    "bg-4.png",
    "bg-5.png",
    "bg-6.png",
    "bg-7.png",
    "bg-8.png",
    "bg-9.png"
  ];

  const randomIndex = Math.floor(Math.random() * images.length);
  const selectedImage = "../../build/assets/images/" + images[randomIndex];

  const headerElement = document.getElementById("banner");

  headerElement.backgroundImage = `url('${selectedImage}')`;
}


document.addEventListener('DOMContentLoaded', () => {
  setBackground();
});
