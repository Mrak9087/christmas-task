import './thumbTree.css';
import {BaseComponent} from '../../baseComponent/baseComponent';

export class ThumbTree extends BaseComponent{
    private bgImage:string;
    constructor(bgImage:string){
        super('tree_container');
        this.bgImage = bgImage;
        this.node.style.cssText = `background-image: url(./assets/tree/${this.bgImage}.png)`;
    }

    getBgImage():string{
        return this.bgImage;
    }
}