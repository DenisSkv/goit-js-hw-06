function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const body = document.querySelector("body");
const spanColor = document.querySelector(".color");
const changeColorBtn = document.querySelector("button.change-color");

changeColorBtn.addEventListener("click", (element) => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  spanColor.textContent = color;
});
