
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
  
const player = new Player(iframe);
populateTextarea();
 

const onPlay = ({ seconds }) => {
    localStorage.setItem('videoplayer-current-time', seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));



function populateTextarea() {
    const savedMessage = localStorage.getItem('videoplayer-current-time');
    
    if (savedMessage) {
        console.log(savedMessage);

        player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

       
    }
};