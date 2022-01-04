import { BaseComponent } from '../baseComponent/baseComponent';
import { filterColor } from '../generalTypes/constants';
import { createHTMLElement } from '../helpers/helpers';
import { FilterObjType } from '../generalTypes/general';

export class FilterColor extends BaseComponent {
    private colorFilterBtns: HTMLButtonElement[] = [];
    constructor() {
        super('filter_item_val');
        this.node.innerHTML = '<span>Размер:</span>';
    }

    init(filters: FilterObjType, filterHandler: Function) {
        filterColor.forEach((item) => {
            const btn = <HTMLButtonElement>createHTMLElement('button', 'btn_color');
            btn.type = 'button';
            btn.dataset.filterValue = item;
            switch (item) {
                case 'белый': {
                    btn.classList.add('clWhite');
                    break;
                }
                case 'желтый': {
                    btn.classList.add('clYellow');
                    break;
                }
                case 'красный': {
                    btn.classList.add('clRed');
                    break;
                }
                case 'синий': {
                    btn.classList.add('clBlue');
                    break;
                }
                case 'зелёный': {
                    btn.classList.add('clGreen');
                    break;
                }
            }
            if (filters.color.find((val) => val === item)) {
                btn.classList.add('active');
            }

            btn.addEventListener('click', () => {
                filterHandler(btn, filters.color);
            });
            this.colorFilterBtns.push(btn);
            this.node.append(btn);
        });
    }

    clear() {
        this.colorFilterBtns.forEach((item) => {
            item.classList.remove('active');
        });
    }
}
