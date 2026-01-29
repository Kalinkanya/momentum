import { getTimeOfDay } from './slider.js';

const greetingSpanElement = document.querySelector('.greeting__span');
const greetingInputElement = document.querySelector('.greeting__input');

function showGreeting() {
  greetingSpanElement.textContent = `Good ${getTimeOfDay()}, `;
}

function setLocalStorage() {
  localStorage.setItem("name", greetingInputElement.value);
}
window.addEventListener("beforeunload", setLocalStorage);

function getLocalStorage() {
  const nameFromLS = localStorage.getItem("name");

  if (nameFromLS !== null) {
    greetingInputElement.value = nameFromLS;
  }
}
window.addEventListener("load", getLocalStorage);

export function initGreeting() {
  setInterval(showGreeting, 1000);
}