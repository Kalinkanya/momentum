import playList from '../playList.js';
import { audioPlayer } from './audio-core.js'

const playBtn = document.querySelector('.play');
const playSvg = document.querySelector('.play__svg');
const pauseSvg = document.querySelector('.pause__svg');
const playPrevBtn = document.querySelector('.play-prev');
const playNextBtn = document.querySelector('.play-next');

let isPlay = false;
export let currentTrackIndex = 0;

function updateActiveTrack() {
  const playListItems = document.querySelectorAll('.play-list__item');
  playListItems.forEach((item, index) => {
    if (index === currentTrackIndex) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

export function setCurrentTrackIndex(index) {
  currentTrackIndex = index;
}

export function playTrack() {
  audioPlayer.play();
  isPlay = true;
  updatePlayButton();
}

function pauseTrack() {
  audioPlayer.pause();
  isPlay = false;
  updatePlayButton();
}

function updatePlayButton() {
  if (!isPlay) {
    playSvg.classList.remove('hidden');
    pauseSvg.classList.add('hidden');
  } else {
    playSvg.classList.add('hidden');
    pauseSvg.classList.remove('hidden');
  }
}

function togglePlayPause() {
  if (!isPlay) {
    playTrack();
  } else {
    pauseTrack();
  }
}

export function playNextTrack() {
  pauseTrack();
  playSvg.classList.remove('hidden');
  pauseSvg.classList.add('hidden');

  if(currentTrackIndex < playList.length - 1) {
    currentTrackIndex++;
  } else {
    currentTrackIndex = 0;
  }

  audioPlayer.src = playList[currentTrackIndex].src;
  playTrack();
  updateActiveTrack();
}

function playPrevTrack() {
  pauseTrack();
  playSvg.classList.remove('hidden');
  pauseSvg.classList.add('hidden');
  
  if(currentTrackIndex > 0) {
    currentTrackIndex--;
  } else {
    currentTrackIndex = playList.length - 1;
  }

  audioPlayer.src = playList[currentTrackIndex].src;
  playTrack();
  updateActiveTrack();
}

export function initAudioControl() {
  playSvg.classList.remove('hidden');
  pauseSvg.classList.add('hidden');
  audioPlayer.src = playList[0].src;
  playBtn.addEventListener('click', togglePlayPause);
  playNextBtn.addEventListener('click', playNextTrack);
  playPrevBtn.addEventListener('click', playPrevTrack);
}