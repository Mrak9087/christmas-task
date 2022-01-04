import { BaseComponent } from '../baseComponent/baseComponent';
import { filterSize } from '../generalTypes/constants';
import { createHTMLElement } from '../helpers/helpers';
import { FilterObjType } from '../generalTypes/general';

export class FilterSize extends BaseComponent{
    private sizeFilterBtns: HTMLButtonElement[] = [];
    constructor(){
        super('filter_item_val');
        this.node.innerHTML = '<span>Размер:</span>';
    }

    init(filters: FilterObjType, filterHandler:Function){
        filterSize.forEach((item) => {
            const btn = <HTMLButtonElement>createHTMLElement('button', 'btn_size');
            btn.type = 'button';
            btn.dataset.filterValue = item;
            if (item === 'средний') {
                btn.classList.add('middle');
            }
            if (item === 'малый') {
                btn.classList.add('small');
            }
            if (filters.size.find((val) => val === item)) {
                btn.classList.add('active');
            }
            btn.addEventListener('click', () => {
                filterHandler(btn, filters.size);
            });
            this.sizeFilterBtns.push(btn);
            this.node.append(btn);
        });
    }

    clear(){
        this.sizeFilterBtns.forEach((item) => {
            item.classList.remove('active');
        });
    }
}