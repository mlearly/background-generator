var css = document.querySelector('h5');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var bgcolor = document.getElementById('gradient');

function setGradient() {
  bgcolor.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
  css.textContent = bgcolor.style.background;
}

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
