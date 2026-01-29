import playList from '../playList.js';
import { audioPlayer } from './audio-core.js';
import { playNextTrack } from './audio-control.js';
import { currentTrackIndex } from './audio-control.js';

const currentTrackTitle = document.querySelector('.current-track__title');
const timelineStart = document.querySelector('.timeline-start');
const timelineEnd = document.querySelector('.timeline-end');
const progressCurrent = document.querySelector('.progress-current');

function updateTrackInfo() {
  const currentTrack = playList[currentTrackIndex];
  currentTrackTitle.textContent = currentTrack.title;
  timelineEnd.textContent = currentTrack.duration;
  timelineStart.textContent = '00:00';
  progressCurrent.style.width = '0%';
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function updateProgress() {
  const currentTime = audioPlayer.currentTime;
  const duration = audioPlayer.duration;
  timelineStart.textContent = formatTime(currentTime);
  const progressPercent = (currentTime / duration) * 100;
  progressCurrent.style.width = `${progressPercent}%`;

}

export function initAudioProgress() {
  audioPlayer.addEventListener('timeupdate', updateProgress);
  audioPlayer.addEventListener('ended', playNextTrack);
  
  audioPlayer.addEventListener('loadstart', () => {
    timelineStart.textContent = '00:00';
    progressCurrent.style.width = '0%';
  });
  
  audioPlayer.addEventListener('loadedmetadata', () => {
    updateTrackInfo();
  });
  
  updateTrackInfo();
}