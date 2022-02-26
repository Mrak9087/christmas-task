import './garland.css';

import { BaseComponent } from '../../baseComponent/baseComponent';
import { createHTMLElement } from '../../helpers/helpers';

export class Garland extends BaseComponent {
    private bulbs: Array<HTMLLIElement> = [];
    private onOffGarland!: HTMLElement;
    panelGarland!: HTMLElement;
    constructor() {
        super('garland garland_hide');
    }

    init() {
        this.createPanelGarland();
        this.createGarlandItem(120, 65, 12, 5);
        this.createGarlandItem(170, 60, 10, 7);
        this.createGarlandItem(230, 60, 8, 8);
        this.createGarlandItem(300, 60, 6, 11);
        this.createGarlandItem(380, 55, 4, 18);
        this.createGarlandItem(465, 55, 3.5, 21);
        this.createGarlandItem(555, 58, 3, 24);
        this.createGarlandItem(650, 58, 2, 29);
    }

    createButton(className: string, color: string): HTMLElement {
        const button = createHTMLElement('button', className);
        button.dataset.color = color;
        button.addEventListener('click', () => {
            this.handleBtnColorClick(button);
        });
        return button;
    }

    createGarlandItem(size: number, grad: number, shift: number, count: number) {
        const ul = createHTMLElement('ul', 'lightrope');
        ul.style.width = `${size}px`;
        ul.style.height = `${size}px`;
        for (let i = 0; i < count; i++) {
            const li = <HTMLLIElement>createHTMLElement('li', 'multicolor');
            const rot = shift * i;
            li.style.transform = ` rotate(${grad + rot}deg) translate(${size / 2}px) rotate(-${grad + rot}deg)`;
            ul.append(li);
            this.bulbs.push(li);
        }
        this.node.append(ul);
    }

    createPanelGarland() {
        this.panelGarland = createHTMLElement('div', 'garland-container');
        this.onOffGarland = createHTMLElement('div', 'onoffswitch');
        const check = <HTMLInputElement>createHTMLElement('input', 'onoffswitch-checkbox');
        check.type = 'checkbox';
        check.name = 'onoffswitch';
        check.id = 'myonoffswitch';
        check.checked = localStorage.getItem('mrk90_garland') === 'true' ? true : false;
        if (check.checked) {
            this.node.classList.remove('garland_hide');
        }
        check.addEventListener('change', () => {
            this.handleCheck(check.checked);
        });
        const lbl = createHTMLElement('label', 'onoffswitch-label');
        lbl.setAttribute('for', 'myonoffswitch');
        lbl.innerHTML = `<div class="onoffswitch-inner"></div>
        <div class="onoffswitch-switch"></div>`;
        this.onOffGarland.append(check, lbl);

        const btnMult = this.createButton('color-btn multicolor-btn', 'multicolor');

        const btnRed = this.createButton('color-btn red-btn', 'red');

        const btnBlue = this.createButton('color-btn red-btn', 'blue');

        const btnYellow = this.createButton('color-btn red-btn', 'yellow');

        const btnGreen = this.createButton('color-btn red-btn', 'green');

        this.panelGarland.append(btnMult, btnRed, btnBlue, btnYellow, btnGreen, this.onOffGarland);
    }

    handleBtnColorClick = (btn: HTMLElement) => {
        this.bulbs.forEach((item) => {
            item.className = btn.dataset.color || '';
        });
    };

    handleCheck = (isShow: boolean) => {
        if (isShow) {
            this.node.classList.remove('garland_hide');
        } else {
            this.node.classList.add('garland_hide');
        }
        localStorage.setItem('mrk90_garland', isShow.toString());
    };
}
