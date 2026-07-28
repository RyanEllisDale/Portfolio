const root = document.documentElement;
var DarkModeButton = document.querySelector('.DarkModeButton');

// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode'); 

const enableDarkMode = () => {
  // 1. Add the class to the body
  root.classList.add("dark");

  DarkModeButton.textContent = "Dark Mode";

  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  root.classList.remove("dark")
  DarkModeButton.textContent = "Light Mode";
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
}

if (darkMode === 'enabled') {
  enableDarkMode();
}

DarkModeButton.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');

  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
})


