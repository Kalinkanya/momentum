const sliderButtonPrev = document.querySelector('.slide-prev');
const sliderButtonNext = document.querySelector('.slide-next');
let currentBgNum = getRandomNum();

export function getTimeOfDay() {
  const hour = new Date().getHours();
  
  if (hour >= 6 && hour < 12) {
    return 'morning';
  } else if (hour >= 12 && hour < 18) {
    return 'afternoon';
  } else if (hour >= 18 && hour < 24) {
    return 'evening';
  } else {
    return 'night';
  }
};

function getRandomNum() {
  return Math.floor(Math.random() * 20) + 1;
};

function getSlideNext() {
  if (currentBgNum < 20) {
    currentBgNum++;
  } else {
    currentBgNum = 1;
  }
  setBg(currentBgNum);
};

function getSlidePrev() {
  if (currentBgNum > 1) {
    currentBgNum--;
  } else {
    currentBgNum = 20;
  }
  setBg(currentBgNum);
};

function setBg(num) {
  const bgNum = num.toString().padStart(2, '0');
  const timeOfDay = getTimeOfDay();
  const imageUrl = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
  
  const img = new Image();

  img.addEventListener('load', () => {
      document.body.style.backgroundImage = `url('${imageUrl}')`;
  });

  img.src = imageUrl;
};

export function initSliderBg() {
  setBg(currentBgNum);
  sliderButtonPrev.addEventListener('click', () => {
    getSlidePrev();
  });
  sliderButtonNext.addEventListener('click', () => {
    getSlideNext();
  });
};

