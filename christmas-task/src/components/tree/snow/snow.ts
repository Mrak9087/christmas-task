import './snow.css';
import { BaseComponent } from '../../baseComponent/baseComponent';
import { createHTMLElement } from '../../helpers/helpers';

export class Snow extends BaseComponent {
    public startSnowBtn: HTMLElement;
    private isStart: boolean;
    constructor() {
        super('snowflakes snow_hide');
        this.isStart = false;
        this.startSnowBtn = createHTMLElement('button','snow_btn');
        this.startSnowBtn.addEventListener('click', () => {
            this.handleStartStopSnow();
        });
        this.createSnowFlake();
        this.isStart = localStorage.getItem('mrk90_snow') === 'true' ? true : false;
        if (this.isStart) {
            this.node.classList.remove('snow_hide');
        }
    }

    handleStartStopSnow = () => {
        if (!this.isStart) {
            this.node.classList.remove('snow_hide');
            this.isStart = true;
        } else {
            this.isStart = false;
            this.node.classList.add('snow_hide');
        }
        localStorage.setItem('mrk90_snow', this.isStart.toString());
    };

    createSnowFlake() {
        for (let i = 0; i < 25; i++) {
            const elem = document.createElement('i');
            this.node.append(elem);
        }
    }
}
