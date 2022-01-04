import './toyCell.css';

import { BaseComponent } from '../../baseComponent/baseComponent';
import { Toy } from '../../toy/toy';
import { createHTMLElement } from '../../helpers/helpers';

export class ToyCell extends BaseComponent {
    private toy: Toy;
    private toyCountP: HTMLElement;

    numImg: number;
    countToy: number;
    imageArr: HTMLImageElement[] = [];
    constructor(toy: Toy) {
        super('toy_cell');
        this.countToy = 0;
        this.toy = toy;
        this.numImg = this.toy.getNumImage();
        this.countToy = this.toy.getCount();
    }

    init() {
        this.toyCountP = createHTMLElement('p', 'toy_count', this.countToy.toString());
        for (let i = 0; i < this.countToy; i++) {
            const img = new Image();
            img.className = 'img_toy';
            img.src = `./assets/toys/${this.numImg}.png`;
            img.alt = 'toy';
            img.draggable = true;
            img.id = `${this.numImg}-${i}`;
            img.dataset.imgNum = this.numImg.toString();
            this.imageArr.push(img);
            this.node.append(img);
        }
        this.node.append(this.toyCountP);
    }

    updateCount() {
        this.toyCountP.innerHTML = `${this.node.childNodes.length - 1}`;
    }
}
