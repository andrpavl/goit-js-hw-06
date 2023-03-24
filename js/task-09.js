function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnChangeColor = document.querySelector('.change-color')
const backgroundColorName = document.querySelector('.color')
const widget = document.querySelector('.widget')

btnChangeColor.addEventListener('click', () => {
    widget.style.background = getRandomHexColor();
    backgroundColorName.textContent = getRandomHexColor();
})

