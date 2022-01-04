import { BaseComponent } from '../baseComponent/baseComponent';
import { filterShape } from '../generalTypes/constants';
import { createHTMLElement } from '../helpers/helpers';
import { FilterObjType } from '../generalTypes/general';

export class FilterShape extends BaseComponent {
    private shapeFilterBtns: HTMLButtonElement[] = [];
    constructor() {
        super('filter_item_val');
        this.node.innerHTML = '<span>Размер:</span>';
    }

    init(filters: FilterObjType, filterHandler: Function) {
        filterShape.forEach((item) => {
            const btn = <HTMLButtonElement>createHTMLElement('button', 'btn_shape');
            btn.type = 'button';
            btn.dataset.filterValue = item;
            switch (item) {
                case 'шар': {
                    btn.classList.add('clBall');
                    break;
                }
                case 'колокольчик': {
                    btn.classList.add('clBell');
                    break;
                }
                case 'шишка': {
                    btn.classList.add('clCone');
                    break;
                }
                case 'снежинка': {
                    btn.classList.add('clSnow');
                    break;
                }
                case 'фигурка': {
                    btn.classList.add('clToy');
                    break;
                }
            }
            if (filters.shape.find((val) => val === item)) {
                btn.classList.add('active');
            }

            btn.addEventListener('click', () => {
                filterHandler(btn, filters.shape);
            });
            this.shapeFilterBtns.push(btn);
            this.node.append(btn);
        });
    }

    clear() {
        this.shapeFilterBtns.forEach((item) => {
            item.classList.remove('active');
        });
    }
}
