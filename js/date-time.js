const timeElement = document.querySelector('.time');
const dateElement = document.querySelector('.date');
const date = new Date();

const WEEKDAYS = [
  'воскресенье',
  'понедельник',
  'вторник',
  'среда',
  'четверг',
  'пятница',
  'суббота'
]

const MONTHS = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря'
]

function updateClock() {
  const date = new Date();
  timeElement.textContent = date.toLocaleTimeString('ru-RU',);
  timeElement.setAttribute('datetime', date.toISOString());
}

function updateDay() {
  dateElement.textContent = `${WEEKDAYS[date.getDay()]}, ${date.getDate()} ${MONTHS[date.getMonth()]}`;
}


export function initClock() {
  setInterval(updateClock, 1000);
  setInterval(updateDay, 1000);
}