import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const LOCAL_STORAGE_KEY = 'videoplayer-current-time';
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function (e) {
    localStorage.setItem(LOCAL_STORAGE_KEY, e.seconds);
  }, 1000)
);

// function timeGet(e) {
//   localStorage.setItem(LOCAL_STORAGE_KEY, e.seconds);
// }
// player.on('timeupdate', throttle(timeGet, 1000));

const time = localStorage.getItem(LOCAL_STORAGE_KEY);
player
  .setCurrentTime(time)
  // працює і без промісів, але краще залишити щоб не було помилок в консолі
  .then(function () {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
