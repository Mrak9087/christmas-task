import './audioControl.css';
import { BaseComponent } from '../../baseComponent/baseComponent';
import music from '../../../assets/audio/music.mp3';

export class AudioControl extends BaseComponent {
    private player: HTMLAudioElement;

    private isPlayed: boolean;
    constructor() {
        super('audio');
        this.isPlayed = false;
        this.player = new Audio();
        this.player.src = music;
        this.player.loop = true;
        this.node.addEventListener('click', () => {
            this.handleClick();
        });
    }

    handleClick = () => {
        if (!this.isPlayed) {
            this.player.play();

            this.isPlayed = true;
            this.node.classList.add('play');
        } else {
            this.player.pause();
            this.player.currentTime = 0;
            this.isPlayed = false;
            this.node.classList.remove('play');
        }
        localStorage.setItem('mrk90_audPlay', this.isPlayed.toString());
    };
}
