import './history.css';
import { BaseComponent } from '../../baseComponent/baseComponent';
import { treeImages } from '../../generalTypes/constants';
import { ThumbTree } from '../thumbTree/thumbTree';

export class History extends BaseComponent {
    private thumbTrees: ThumbTree[] = [];
    btnSave: HTMLButtonElement;
    constructor() {
        super('history_container');
    }

    init() {
        this.btnSave = document.createElement('button');
        this.btnSave.className = 'btn btn_history';
        this.btnSave.innerHTML = 'Сохранить';
        const head = document.createElement('h2');
        head.innerHTML = 'Вы нарядили';

        const history = document.createElement('div');
        history.className = 'history';
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
