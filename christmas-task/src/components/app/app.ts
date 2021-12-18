
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
        parent.append(this.node);
    }
}