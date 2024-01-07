const elementButton = document.querySelector('button.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

function updateColors() {
  const { body } = document;

  const colorSpan = document.querySelector('.color');
  
  const randomColor = getRandomHexColor();

  body.style.backgroundColor = randomColor;
  
  colorSpan.textContent = `${randomColor}`;
}

elementButton.addEventListener('click', updateColors);