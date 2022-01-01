import './thumbBg.css';
import { BaseComponent } from '../../baseComponent/baseComponent';

export class ThumbBg extends BaseComponent {
    private bgImage: string;
    constructor(bgImage: string) {
        super('bg_container');
        this.bgImage = bgImage;
        this.node.style.cssText = `background-image: url(./assets/bg/${this.bgImage}.jpg)`;
    }

    getBgImage(): string {
        return this.bgImage;
    }
}
