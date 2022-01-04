import './history.css';
import { BaseComponent } from '../../baseComponent/baseComponent';
import { treeImages } from '../../generalTypes/constants';
import { ThumbTree } from '../thumbTree/thumbTree';
import { createHTMLElement } from '../../helpers/helpers';

export class History extends BaseComponent {
    private thumbTrees: ThumbTree[] = [];
    btnSave: HTMLElement;
    constructor() {
        super('history_container');
    }

    init() {
        this.btnSave = createHTMLElement('button', 'btn btn_history', 'Сохранить');
        const head = createHTMLElement('h2','','Вы нарядили');

        const history = createHTMLElement('div', 'history');
        treeImages.forEach((item) => {
            const thumb = new ThumbTree(item);
            history.append(thumb.node);
            this.thumbTrees.push(thumb);
        });
        this.node.append(head, history, this.btnSave);
    }

    getThumbTrees(): ThumbTree[] {
        return this.thumbTrees;
    }
}
