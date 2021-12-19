import './app.css';
import {BaseComponent} from '../baseComponent/baseComponent';
import { FilterToy } from '../filter/filterToy';
import {data} from '../data';
import { Toy } from '../toy/toy';
import { IToy } from '../generalTypes/general';


export class App extends BaseComponent{

    private toy: Toy[] = [];
    private countSelectToy:number;

    private header: HTMLElement;
    private footer: HTMLElement;
    private startPage: HTMLDivElement;
    private counterSelectDiv: HTMLDivElement;
    private startPageBtn: HTMLButtonElement;
    private filterToy: FilterToy;
    private logo: HTMLDivElement;
    private divToy: HTMLDivElement;
    private divChristmasTree: HTMLDivElement;

    constructor(){
        super('app');
        data.forEach((item) => {
            const toyLoc:Toy = new Toy(<IToy>item)
            toyLoc.init()
            toyLoc.node.addEventListener('click',()=>{
                this.handlerToyClick(toyLoc);
            })
            this.toy.push(toyLoc)
        })
        this.countSelectToy = 0;
    }

    init(parent:HTMLElement){
        this.header = document.createElement('header');
        this.header.className = 'header';

        this.startPage = document.createElement('div');
        this.startPage.className = 'page start_page';
        this.startPage.innerHTML = '<h1 class="start_page_title">Новогодняя игра<span>«Наряди ёлку»</span></h1>'
        this.startPageBtn = document.createElement('button');
        this.startPageBtn.className = 'start_btn';
        this.startPageBtn.innerHTML = 'Начать';
        this.startPageBtn.addEventListener('click', ()=>{
            this.startGame();
        })
        this.startPage.append(this.startPageBtn);
        this.filterToy = new FilterToy(this.toy);
        this.filterToy.init();
        this.filterToy.node.classList.add('none');
        this.footer = document.createElement('footer');
        this.footer.className = 'footer';
        this.footer.innerHTML = `<div class="footer_container">
                    <a class="github" href="https://github.com/Mrak9087" target="blank">Mrak9087</a>
                    <span class="rss_year">2021</span>
                    <a class="rss" href="https://rs.school/js/" target="_blank" rel="noopener noreferrer">
                        
                    </a>
                </div>`;

        this.node.append(this.header, this.startPage, this.filterToy.node,this.footer);
        this.createHeaderContent();
        parent.append(this.node);
    }

    createHeaderContent(){
        const headerContainer = document.createElement('div');
        headerContainer.className = 'header_container'

        this.logo = document.createElement('div');
        this.logo.className = 'logo'
        this.logo.addEventListener('click', ()=>{
            this.filterToy.node.classList.add('none');
            this.startPage.classList.remove('none');
        })

        this.divToy = document.createElement('div');
        this.divToy.className = 'item_menu';
        this.divToy.innerHTML = 'игрушки';
        this.divToy.addEventListener('click', ()=>{
            this.startGame()
        })
        this.divChristmasTree = document.createElement('div')
        this.divChristmasTree.className = 'item_menu';
        this.divChristmasTree.innerHTML = 'елка';

        const nav = document.createElement('nav');
        nav.className = 'nav';
        nav.append(this.logo, this.divToy, this.divChristmasTree);

        this.counterSelectDiv = document.createElement('div');
        this.counterSelectDiv.className = 'selectCount';
        this.counterSelectDiv.innerHTML = `<span>${this.countSelectToy}</span>`;
        headerContainer.append(nav);
        this.header.append(headerContainer, this.counterSelectDiv)
    }

    startGame = () => {
        this.startPage.classList.add('none');
        this.filterToy.node.classList.remove('none');
    }

    handlerToyClick(toy:Toy){
        if (this.countSelectToy<20){
            toy.isSelect = !toy.isSelect;
        }
        
        if (toy.isSelect) {
            toy.node.classList.add('active');
            this.countSelectToy++;
        } else {
            toy.node.classList.remove('active');
            this.countSelectToy--;
            this.countSelectToy = (this.countSelectToy < 0) ? 0: this.countSelectToy;
        }
        this.counterSelectDiv.innerHTML = `<span>${this.countSelectToy}</span>`;
    }
}