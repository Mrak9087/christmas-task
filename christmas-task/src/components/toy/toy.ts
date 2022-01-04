import { BaseComponent } from '../baseComponent/baseComponent';
import { IToy } from '../generalTypes/general';
import './toy.css';
import { createHTMLElement } from '../helpers/helpers';

export class Toy extends BaseComponent {
    public isSelect: boolean;

    private numImage: number;
    private name: string;
    private count: number;
    private year: number;
    private shape: string;
    private color: string;
    private size: string;
    private favorite: boolean;
    private indexSelect: number;

    private divName: HTMLElement;
    private divImg: HTMLElement;
    private divCount: HTMLElement;
    private divYear: HTMLElement;
    private divShape: HTMLElement;
    private divColor: HTMLElement;
    private divSize: HTMLElement;
    private divFavorite: HTMLElement;
    private selectDiv: HTMLElement;
    constructor(toyInfo: IToy) {
        super('toy');
        this.numImage = +toyInfo.num;
        this.name = toyInfo.name;
        this.count = +toyInfo.count;
        this.year = +toyInfo.year;
        this.shape = toyInfo.shape;
        this.color = toyInfo.color;
        this.size = toyInfo.size;
        this.favorite = toyInfo.favorite;
        this.isSelect = false;
    }

    init(): void {
        this.divName = createHTMLElement('div', 'font_name', this.name);
        this.divImg = createHTMLElement('div', 'toy_picture');
        this.divImg.style.backgroundImage = `url(./assets/toys/${this.numImage}.png)`;
        this.divCount = createHTMLElement('div', 'font_info', `Количество: ${this.count}`);
        this.divYear = createHTMLElement('div', 'font_info', `Год покупки: ${this.year} год`);
        this.divShape = createHTMLElement('div', 'font_info', `Форма игрушки: ${this.shape}`);

        this.divColor = createHTMLElement('div', 'font_info', `Цвет игрушки: ${this.color}`);

        this.divSize = createHTMLElement('div', 'font_info', `Размер игрушки: ${this.size}`);

        this.divFavorite = createHTMLElement('div', 'font_info', `Любимая: ${this.favorite ? 'да' : 'нет'}`);

        this.selectDiv = createHTMLElement('div', 'select');

        this.node.append(
            this.divName,
            this.divImg,
            this.divCount,
            this.divYear,
            this.divShape,
            this.divColor,
            this.divSize,
            this.divFavorite,
            this.selectDiv
        );
    }

    changeFavorite(): void {
        this.favorite = !this.favorite;
    }

    getSize(): string {
        return this.size;
    }

    getColor(): string {
        return this.color;
    }

    getShape(): string {
        return this.shape;
    }

    getFavorite(): boolean {
        return this.favorite;
    }

    getCount(): number {
        return this.count;
    }

    getYear(): number {
        return this.year;
    }

    getName(): string {
        return this.name;
    }

    getSelect(): boolean {
        return this.isSelect;
    }

    getNumImage(): number {
        return this.numImage;
    }

    getIndex(): number {
        return this.indexSelect;
    }

    setIndex(index: number) {
        this.indexSelect = index;
    }
}
