import './thumbTree.css';
import { BaseComponent } from '../../baseComponent/baseComponent';

export class ThumbTree extends BaseComponent {
    private treeImage: string;
    constructor(treeImage: string) {
        super('tree_thumb_container');
        this.treeImage = treeImage;
        this.node.style.cssText = `background-image: url(./assets/tree/${this.treeImage}.png)`;
    }

    getTreeImage(): string {
        return this.treeImage;
    }
}
