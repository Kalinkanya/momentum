import playList from '../playList.js';
import { audioPlayer } from './audio-core.js';
import { playTrack, setCurrentTrackIndex } from './audio-control.js'

export let trackListItems = null;

function markAsActive(clickedItem) {
  trackListItems.forEach((track) => {
    track.classList.remove('active')
  })
  clickedItem.classList.add('active');
}

function handleTrackClick() {
  trackListItems.forEach(item => {
    item.addEventListener('click', () => {
      markAsActive(item);
      const index = parseInt(item.dataset.index);
      audioPlayer.src = playList[index].src;
      setCurrentTrackIndex(index);
      playTrack();
    });
  });
}

export function initPlayList() {
  const playerList = document.querySelector('.player-list');
  playList.forEach((track, index) => {
    const playListItem = document.createElement('li');
    playListItem.className = 'play-list__item';
    playListItem.dataset.index = index;

    if(index === 0) {
      playListItem.classList.add('active');
    }
    
    const playListItemName = document.createElement('span');
    playListItemName.className = 'play-list__item-name';
    playListItemName.textContent = track.title;

    
    playListItem.appendChild(playListItemName);
    playerList.appendChild(playListItem);
  });

  trackListItems = document.querySelectorAll('.play-list__item');
  handleTrackClick();
}


