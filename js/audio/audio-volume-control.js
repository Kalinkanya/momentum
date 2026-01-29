import { audioPlayer } from './audio-core.js';

const controlsVolume = document.querySelector('.controls-volume');


// Когда пользователь двигает ползунок инпута,
// значение громкости звука будет равно значению, на котором находится ползунок
export function initVolumeControl() {

  controlsVolume.addEventListener('input', () => {
    audioPlayer.volume = controlsVolume.value;
  });

}
