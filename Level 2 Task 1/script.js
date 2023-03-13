const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "";
      setTimeout(() => (display.innerText = ""), 2000);
    } else if (item.id == "click") {
      display.innerText = ""
    }
     else {
      display.innerText += item.id;
    }
  };
});

const themeToggleBtn = document.querySelector(".theme-button");
const calculator = document.querySelector(".calc");
const box = document.querySelector(".box");
const toggleIcon = document.querySelector(".theme-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("theme-dark");
  box.classList.toggle("background");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};

var button = document.getElementById("click");
var audio = document.getElementById("myAudio");

button.addEventListener("click", function() {
  audio.play();
});
