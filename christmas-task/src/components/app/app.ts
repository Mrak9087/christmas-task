import './app.css';
import {BaseComponent} from '../baseComponent/baseComponent';
import { FilterToy } from '../filter/filterToy';
import {data} from '../data';
import { Toy } from '../toy/toy';
import { IToy } from '../generalTypes/general';

export class App extends BaseComponent{

    private toy: Toy[] = [];

    private header: HTMLElement;
    private footer: HTMLElement;
    private filterToy: FilterToy;
    private logo: HTMLDivElement;
    private divToy: HTMLDivElement;
    private divChristmasTree: HTMLDivElement;

    constructor(){
        super('app');
        data.forEach((item) => {
            const toyLoc:Toy = new Toy(<IToy>item)
            toyLoc.init()
            this.toy.push(toyLoc)
        })
    }

    init(parent:HTMLElement){
        this.header = document.createElement('header');
        this.header.className = 'header';

        this.filterToy = new FilterToy(this.toy);
        this.filterToy.init()
        this.footer = document.createElement('footer');
        this.footer.className = 'footer';

        this.node.append(this.header, this.filterToy.node,this.footer);
        this.createHeaderContent();
        parent.append(this.node);
    }

    createHeaderContent(){
        const headerContainer = document.createElement('div');
        headerContainer.className = 'header_container'

        this.logo = document.createElement('div');
        this.logo.className = 'logo'

        this.divToy = document.createElement('div');
        this.divToy.className = 'item_menu';
        this.divToy.innerHTML = 'игрушки';
        this.divChristmasTree = document.createElement('div')
        this.divChristmasTree.className = 'item_menu';
        this.divChristmasTree.innerHTML = 'елка';

        const nav = document.createElement('nav');
        nav.className = 'nav';
        nav.append(this.logo, this.divToy, this.divChristmasTree);

        headerContainer.append(nav);
        this.header.append(headerContainer)
    }
}