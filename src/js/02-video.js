import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIME = 'videoplayer-current-time';
const playTime = throttle(evn => {
  localStorage.setItem(CURRENT_TIME, evn.seconds);
  console.log(localStorage.getItem(CURRENT_TIME));
}, 1000);

player.setCurrentTime(localStorage.getItem(CURRENT_TIME));
player.on('timeupdate', playTime);
