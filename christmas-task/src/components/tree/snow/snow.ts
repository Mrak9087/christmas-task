import './snow.css';
import {BaseComponent} from '../../baseComponent/baseComponent';

export class Snow extends BaseComponent{
    public startSnowBtn: HTMLButtonElement;
    private isStart:boolean = false;
    constructor(){
        super('snowflakes snow_hide');
        this.startSnowBtn = document.createElement('button');
        this.startSnowBtn.className = 'snow_btn';
        this.startSnowBtn.addEventListener('click', ()=>{
            this.handleStartStopSnow();
        })
        this.createSnowFlake();
    }

    handleStartStopSnow = ()=>{
        if (!this.isStart){
            this.node.classList.remove('snow_hide');
            this.isStart = true;
        } else {
            this.isStart = false;
            this.node.classList.add('snow_hide');
        }
        
    }

    createSnowFlake() {
        for (let i = 0; i < 25; i++){
            const elem = document.createElement('i');
            this.node.append(elem);
        }
    }
}