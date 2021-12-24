import './audioControl.css';
import { BaseComponent } from '../../baseComponent/baseComponent';
import music from '../../../assets/audio/music.mp3';

export class AudioControl extends BaseComponent{
    private player:HTMLAudioElement;
    private playBtn: HTMLButtonElement;
    private isPlayed:boolean = false;
    constructor(){
        super('audio')
        this.player = new Audio();
        this.player.src = music;
        this.player.loop = true;
        this.node.addEventListener('click',()=>{
            this.handleClick();
        })
    }

    handleClick = ()=>{
        if (!this.isPlayed){
            this.player.play();
            
            this.isPlayed = true;
        } else{
            this.player.pause();
            this.player.currentTime = 0;
            this.isPlayed = false;
        }
    }
}
