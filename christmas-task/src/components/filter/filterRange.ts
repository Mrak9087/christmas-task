import './filterRange.css';
import { BaseComponent } from '../baseComponent/baseComponent';
import { createHTMLElement } from '../helpers/helpers';

export class FilterRange extends BaseComponent {
    minRange: number;
    maxRange: number;
    minValue: number;
    maxValue: number;
    step: number;
    funcFilter: (e?: Event) => void;
    private inputLeftHid!: HTMLInputElement;
    private inputRightHid!: HTMLInputElement;
    private slider!: HTMLElement;
    private track!: HTMLElement;
    private range!: HTMLElement;
    private thumbLeft!: HTMLElement;
    private thumbRight!: HTMLElement;
    private outMin!: HTMLElement;
    private outMax!: HTMLElement;

    constructor(minRange: number, maxRange: number, step: number) {
        super('filter_range');
        this.minRange = minRange;
        this.maxRange = maxRange;
        this.minValue = minRange;
        this.maxValue = maxRange;
        this.step = step;
        this.funcFilter = () => {
            // ничего не делает
        };
    }

    init(): void {
        this.inputLeftHid = this.initInput(this.minRange.toString());
        this.inputLeftHid.addEventListener('input', this.setLeftValue);

        this.inputRightHid = this.initInput(this.maxRange.toString());
        this.inputRightHid.addEventListener('input', this.setRightValue);

        this.slider = createHTMLElement('div', 'slider');

        this.track = createHTMLElement('div', 'track');

        this.range = createHTMLElement('div', 'range');

        this.thumbLeft = createHTMLElement('div', 'thumb left');

        this.thumbRight = createHTMLElement('div', 'thumb right');

        this.inputLeftHid.addEventListener('mouseover', () => {
            this.thumbLeft.classList.add('hover');
        });
        this.inputLeftHid.addEventListener('mouseout', () => {
            this.thumbLeft.classList.remove('hover');
        });
        this.inputLeftHid.addEventListener('mousedown', () => {
            this.thumbLeft.classList.add('active');
        });
        this.inputLeftHid.addEventListener('mouseup', () => {
            this.thumbLeft.classList.remove('active');
        });

        this.inputRightHid.addEventListener('mouseover', () => {
            this.thumbRight.classList.add('hover');
        });
        this.inputRightHid.addEventListener('mouseout', () => {
            this.thumbRight.classList.remove('hover');
        });
        this.inputRightHid.addEventListener('mousedown', () => {
            this.thumbRight.classList.add('active');
        });
        this.inputRightHid.addEventListener('mouseup', () => {
            this.thumbRight.classList.remove('active');
        });

        this.outMin = createHTMLElement('output', 'out');
        this.outMax = createHTMLElement('output', 'out');

        this.slider.append(
            this.inputLeftHid,
            this.inputRightHid,
            this.track,
            this.range,
            this.thumbLeft,
            this.thumbRight
        );
        this.node.append(this.outMin, this.slider, this.outMax);
        this.setLeftValue();
        this.setRightValue();
    }

    initInput(value: string): HTMLInputElement {
        const input = <HTMLInputElement>createHTMLElement('input', 'progress');
        input.type = 'range';
        input.min = this.minRange.toString();
        input.max = this.maxRange.toString();
        input.step = this.step.toString();
        input.value = value;
        return input;
    }

    setLeftValue = () => {
        const min: number = this.minRange;
        const max: number = this.maxRange;

        this.minValue = Math.min(parseInt(this.inputLeftHid.value), parseInt(this.inputRightHid.value));
        this.outMin.innerHTML = this.minValue.toString();

        this.inputLeftHid.value = this.minValue.toString();

        const percent = ((parseInt(this.inputLeftHid.value) - min) / (max - min)) * 100;

        this.thumbLeft.style.left = percent + '%';
        this.range.style.left = percent + '%';
        this.funcFilter();
    };

    setRightValue = () => {
        const min: number = this.minRange;
        const max: number = this.maxRange;

        this.maxValue = Math.max(parseInt(this.inputRightHid.value), parseInt(this.inputLeftHid.value));

        this.outMax.innerHTML = this.maxValue.toString();

        this.inputRightHid.value = this.maxValue.toString();

        const percent = ((parseInt(this.inputRightHid.value) - min) / (max - min)) * 100;

        this.thumbRight.style.right = 100 - percent + '%';
        this.range.style.right = 100 - percent + '%';
        this.funcFilter();
    };

    setDefault() {
        this.minValue = this.minRange;
        this.maxValue = this.maxRange;
        this.inputLeftHid.value = this.minValue.toString();
        this.inputRightHid.value = this.maxValue.toString();
        this.setLeftValue();
        this.setRightValue();
    }

    setMinVal(val: number) {
        this.inputLeftHid.value = val.toString();
        this.setLeftValue();
    }

    setMaxVal(val: number) {
        this.inputRightHid.value = val.toString();
        this.setRightValue();
    }
}
