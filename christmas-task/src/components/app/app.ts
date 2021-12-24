import './app.css';
import {BaseComponent} from '../baseComponent/baseComponent';
import { FilterToy } from '../filter/filterToy';
import { TreeGame } from '../tree/treeGame';
import {data} from '../data';
import { Toy } from '../toy/toy';
import { IToy } from '../generalTypes/general';


export class App extends BaseComponent{

    private toys: Toy[] = [];
    private arrSelect:number[];
    private header: HTMLElement;
    private footer: HTMLElement;
    private startPage: HTMLDivElement;
    private counterSelectDiv: HTMLDivElement;
    private startPageBtn: HTMLButtonElement;
    private filterToy: FilterToy;
    private treeGame:TreeGame;
    private logo: HTMLDivElement;
    private divToy: HTMLDivElement;
    private divChristmasTree: HTMLDivElement;
    private message:HTMLDivElement;

    constructor(){
        super('app');
        this.arrSelect = JSON.parse(localStorage.getItem('mrk90_christmasSel')) || [];
        data.forEach((item) => {
            const toyLoc:Toy = new Toy(<IToy>item)
            toyLoc.init()
            if (this.arrSelect.findIndex((item) => item === toyLoc.getNumImage()) > -1){
                toyLoc.isSelect = true;
                toyLoc.node.classList.add('active');
            }
            toyLoc.node.addEventListener('click',()=>{
                this.handlerToyClick(toyLoc);
            })
            this.toys.push(toyLoc)
        })
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
        this.filterToy = new FilterToy(this.toys);
        this.filterToy.init();
        this.treeGame = new TreeGame();
        this.treeGame.init()
        this.filterToy.node.classList.add('none');
        this.treeGame.node.classList.add('none');
        this.footer = document.createElement('footer');
        this.footer.className = 'footer';
        this.footer.innerHTML = `<div class="footer_container">
                    <a class="github" href="https://github.com/Mrak9087" target="blank">Mrak9087</a>
                    <span class="rss_year">2021</span>
                    <a class="rss" href="https://rs.school/js/" target="_blank" rel="noopener noreferrer">
                        
                    </a>
                </div>`;

        this.message = document.createElement('div');
        this.message.className = 'ovr_container';
        this.message.innerHTML = '<div class="start_page_title">Нельзя выбрать больше 20 игрушек</div>'
        this.message.addEventListener('click', ()=>{
            this.message.classList.remove('show');
        })


        this.node.append(this.header, this.startPage, this.filterToy.node,this.treeGame.node,this.footer, 
            this.message);
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
        this.divChristmasTree.addEventListener('click', ()=>{
            this.showTree()
        })

        const nav = document.createElement('nav');
        nav.className = 'nav';
        nav.append(this.logo, this.divToy, this.divChristmasTree);

        this.counterSelectDiv = document.createElement('div');
        this.counterSelectDiv.className = 'selectCount';
        this.counterSelectDiv.innerHTML = `<span>${this.arrSelect.length}</span>`;
        headerContainer.append(nav,this.counterSelectDiv);
        this.header.append(headerContainer)
    }

    startGame = () => {
        this.startPage.classList.add('none');
        this.treeGame.node.classList.add('none');
        this.filterToy.node.classList.remove('none');
        this.filterToy.setFocus();
    }

    showTree = () => {
        this.startPage.classList.add('none');
        this.filterToy.node.classList.add('none');
        if (this.arrSelect.length){
            this.treeGame.setToys(this.toys.filter((item)=>item.isSelect));
        } else {
            this.treeGame.setToys(this.toys.slice(0,20));
        }
        this.treeGame.node.classList.remove('none');
        
        
    }

    handlerToyClick(toy:Toy){
        if (this.arrSelect.length<20){        
            if (toy.isSelect) {
                toy.node.classList.remove('active');
                toy.isSelect = false;
                this.arrSelect.splice(toy.getIndex(),1)
                toy.setIndex(-1);
            } else {
                toy.node.classList.add('active');
                this.arrSelect.push(toy.getNumImage());
                toy.isSelect = true;
                toy.setIndex(this.arrSelect.length-1);
            }            
        } else {
            if (toy.isSelect) {
                toy.node.classList.remove('active');
                toy.isSelect = false;
                this.arrSelect.splice(toy.getIndex(),1)
                toy.setIndex(-1);
            } else {
                this.message.classList.add('show');
            }
        }
        localStorage.setItem('mrk90_christmasSel',JSON.stringify(this.arrSelect));
        this.counterSelectDiv.innerHTML = `<span>${this.arrSelect.length}</span>`;
    }
}