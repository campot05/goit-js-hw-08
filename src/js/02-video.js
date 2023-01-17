import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const playTime = throttle(evn => {
  localStorage.setItem('videoplayer-current-time', evn.seconds);
  console.log(localStorage.getItem('videoplayer-current-time'));
}, 1000);

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
player.on('timeupdate', playTime);
