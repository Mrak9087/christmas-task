import { BaseComponent } from '../baseComponent/baseComponent';
import { createHTMLElement } from '../helpers/helpers';

export class Header extends BaseComponent{


    public logo!: HTMLDivElement;
    public divToy!: HTMLDivElement;
    public divChristmasTree!: HTMLDivElement;
    public counterSelectDiv!: HTMLDivElement;
    


    constructor(){
        super('header');
    }

    // 
    init(countSelect:number){
        const headerContainer = createHTMLElement('div', 'header_container')
        this.logo = <HTMLDivElement>createHTMLElement('div', 'logo');


        this.divToy = <HTMLDivElement>createHTMLElement('div', 'item_menu', 'игрушки');
        this.divChristmasTree = <HTMLDivElement>createHTMLElement('div', 'item_menu', 'елка');

        const nav = createHTMLElement('nav', 'nav');
        nav.append(this.logo, this.divToy, this.divChristmasTree);

        const content = createHTMLElement('div', 'cnt_header');
        const btnClearStorage = <HTMLButtonElement>createHTMLElement('button', 'btn clear_btn');
        btnClearStorage.type = 'button';
        btnClearStorage.innerHTML = 'Clear localStorage';
        btnClearStorage.addEventListener('click', () => {
            localStorage.clear();
        });

        this.counterSelectDiv = <HTMLDivElement>createHTMLElement('div', 'selectCount', `<span>${countSelect}</span>`);
        content.append(btnClearStorage, this.counterSelectDiv);
        headerContainer.append(nav, content);
        this.node.append(headerContainer);
    }

        

}