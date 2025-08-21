const bg = document.querySelector("body");
const button = document.querySelector(".change-color");
const colorText = document.querySelector(".color");

button.addEventListener("click", () => {
  let color = getRandomHexColor();
  bg.style.backgroundColor = color;
  colorText.textContent = color;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
