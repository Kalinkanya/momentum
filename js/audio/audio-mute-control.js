import { audioPlayer } from './audio-core.js';

const volumeOnOffBtn = document.querySelector('.volume-on-off__btn');
const volumeOnSvg = document.querySelector('.volume-on__svg');
const volumeOffSvg = document.querySelector('.volume-off__svg');
const controlsVolume = document.querySelector('.controls-volume');

// Создает флаг для определения состояния системы
let isSound = true;

// В зависимости от значения флага запускаем функцию disableSound или enableSound
function toggleOnOffButton() {
  if(isSound) {
    disableSound();
  } else {
    enableSound();
  }
}

// Устанавливаем громкость звука равную значению атрибута value у инпута с классом .controls-volume;
// по умолчанию громкость звука будет 0.5;
// переключаем флаг;
// добавляем/удаляем класс видимости для соответствующей иконки звука.
function enableSound() {
  audioPlayer.volume = controlsVolume.value;
  isSound = true;
  volumeOnSvg.classList.remove('hidden');
  volumeOffSvg.classList.add('hidden');
}

// Устанавливаем громкость звука равную нулю;
// переключаем флаг;
// добавляем/удаляем класс видимости для соответствующей иконки звука.
function disableSound() {
  audioPlayer.volume = 0;
  isSound = false;
  volumeOnSvg.classList.add('hidden');
  volumeOffSvg.classList.remove('hidden');
}

// По клику на контейнер, содержащий иконки звука запускаем функцию toggleOnOffButton
export function initAudioMuteControl() {
  volumeOnOffBtn.addEventListener('click', toggleOnOffButton);
}
