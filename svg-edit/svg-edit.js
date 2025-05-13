let buttonDarkMode = document.querySelector("#buttonDM");

buttonDarkMode.addEventListener("click", switchDarkMode);

function switchDarkMode() {
  document.documentElement.classList.toggle("dark");
}
