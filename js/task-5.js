const bg = document.querySelector("body");
const button = document.querySelector(".change-color");

button.addEventListener("click", () => {
  bg.style.backgroundColor = getRandomHexColor()
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
