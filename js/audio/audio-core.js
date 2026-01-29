
import { initPlayList } from './audio-playlist.js';
import { initAudioMuteControl } from './audio-mute-control.js';
import { initVolumeControl } from './audio-volume-control.js';
import { initAudioControl } from './audio-control.js';
import { initAudioProgress } from './audio-progress.js';

export const audioPlayer = new Audio();
export let currentTrackIndex = 0;

export function initAudioPlayer() {
  initPlayList();
  initAudioMuteControl();
  initVolumeControl();
  initAudioControl();
  initAudioProgress();
}
