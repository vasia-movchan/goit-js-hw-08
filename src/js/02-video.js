import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

if (localStorage.getItem('videoplayer-current-time')) {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
} else {
  localStorage.setItem('videoplayer-current-time', 0);
}

player.on(
  'timeupdate',
  throttle(function ({ seconds }) {
    console.log(seconds);
    localStorage.setItem('videoplayer-current-time', seconds);
  }, 1000)
);

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
