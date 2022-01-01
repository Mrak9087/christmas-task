import './garland.css';

import { BaseComponent } from '../../baseComponent/baseComponent';

export class Garland extends BaseComponent {
    private bulbs: Array<HTMLLIElement> = [];
    private onOffGarland: HTMLDivElement;
    panelGarland: HTMLDivElement;
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

    createGarlandItem(size: number, grad: number, shift: number, count: number) {
        const ul = document.createElement('ul');
        ul.className = 'lightrope';
        ul.style.width = `${size}px`;
        ul.style.height = `${size}px`;
        for (let i = 0; i < count; i++) {
            const li = document.createElement('li');
            li.className = 'multicolor';
            const rot = shift * i;
            li.style.transform = ` rotate(${grad + rot}deg) translate(${size / 2}px) rotate(-${grad + rot}deg)`;
            ul.append(li);
            this.bulbs.push(li);
        }
        this.node.append(ul);
    }

    createPanelGarland() {
        this.panelGarland = document.createElement('div');
        this.panelGarland.className = 'garland-container';
        this.onOffGarland = document.createElement('div');
        this.onOffGarland.className = 'onoffswitch';
        const check = document.createElement('input');
        check.type = 'checkbox';
        check.name = 'onoffswitch';
        check.className = 'onoffswitch-checkbox';
        check.id = 'myonoffswitch';
        check.checked = localStorage.getItem('mrk90_garland') === 'true' ? true : false;
        if (check.checked) {
            this.node.classList.remove('garland_hide');
        }
        check.addEventListener('change', () => {
            this.handleCheck(check.checked);
        });
        const lbl = document.createElement('label');
        lbl.className = 'onoffswitch-label';
        lbl.setAttribute('for', 'myonoffswitch');
        lbl.innerHTML = `<div class="onoffswitch-inner"></div>
        <div class="onoffswitch-switch"></div>`;
        this.onOffGarland.append(check, lbl);

        const btnMult = document.createElement('button');
        btnMult.className = 'color-btn multicolor-btn';
        btnMult.dataset.color = 'multicolor';
        btnMult.addEventListener('click', () => {
            this.handleBtnColorClick(btnMult);
        });
        const btnRed = document.createElement('button');
        btnRed.className = 'color-btn red-btn';
        btnRed.dataset.color = 'red';
        btnRed.addEventListener('click', () => {
            this.handleBtnColorClick(btnRed);
        });
        const btnBlue = document.createElement('button');
        btnBlue.className = 'color-btn blue-btn';
        btnBlue.dataset.color = 'blue';
        btnBlue.addEventListener('click', () => {
            this.handleBtnColorClick(btnBlue);
        });
        const btnYellow = document.createElement('button');
        btnYellow.className = 'color-btn yellow-btn';
        btnYellow.dataset.color = 'yellow';
        btnYellow.addEventListener('click', () => {
            this.handleBtnColorClick(btnYellow);
        });
        const btnGreen = document.createElement('button');
        btnGreen.className = 'color-btn green-btn';
        btnGreen.dataset.color = 'green';
        btnGreen.addEventListener('click', () => {
            this.handleBtnColorClick(btnGreen);
        });

        this.panelGarland.append(btnMult, btnRed, btnBlue, btnYellow, btnGreen, this.onOffGarland);
    }

    handleBtnColorClick = (btn: HTMLButtonElement) => {
        this.bulbs.forEach((item) => {
            item.className = btn.dataset.color;
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
