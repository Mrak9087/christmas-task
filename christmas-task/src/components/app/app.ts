import './app.css';
import { BaseComponent } from '../baseComponent/baseComponent';
import { FilterToy } from '../filter/filterToy';
import { TreeGame } from '../tree/treeGame';
import { data } from '../data';
import { Toy } from '../toy/toy';
import { IToy } from '../generalTypes/general';
import { createHTMLElement } from '../helpers/helpers';

export class App extends BaseComponent {
    private toys: Toy[] = [];
    private arrSelect: number[];
    private header: HTMLElement;
    private footer: HTMLElement;
    private startPage: HTMLElement;
    private counterSelectDiv: HTMLElement;
    private startPageBtn: HTMLElement;
    private filterToy: FilterToy;
    private treeGame: TreeGame;
    private logo: HTMLElement;
    private divToy: HTMLElement;
    private divChristmasTree: HTMLElement;
    private message: HTMLElement;

    constructor() {
        super('app');
        this.arrSelect = JSON.parse(localStorage.getItem('mrk90_christmasSel')) || [];
        data.forEach((item) => {
            const toyLoc: Toy = new Toy(<IToy>item);
            toyLoc.init();
            if (this.arrSelect.findIndex((item) => item === toyLoc.getNumImage()) > -1) {
                toyLoc.isSelect = true;
                toyLoc.node.classList.add('active');
            }
            toyLoc.node.addEventListener('click', () => {
                this.handlerToyClick(toyLoc);
            });
            this.toys.push(toyLoc);
        });
    }

    init(parent: HTMLElement) {
        const isPlayer = localStorage.getItem('mrk90_audPlay') === 'true' ? true : false;
        this.header = createHTMLElement('header', 'header');

        this.startPage = createHTMLElement('div', 'page start_page');
        this.startPage.innerHTML = '<h1 class="start_page_title">Новогодняя игра<span>«Наряди ёлку»</span></h1>';
        this.startPageBtn = createHTMLElement('button', 'start_btn', 'Начать');
        this.startPageBtn.addEventListener('click', () => {
            this.startGame();
        });
        this.startPage.append(this.startPageBtn);
        this.filterToy = new FilterToy(this.toys);
        this.filterToy.init();
        this.treeGame = new TreeGame();
        this.treeGame.init();
        this.filterToy.node.classList.add('none');
        this.treeGame.node.classList.add('none');
        this.footer = createHTMLElement('footer', 'footer');
        this.footer.innerHTML = `<div class="footer_container">
                    <a class="github" href="https://github.com/Mrak9087" target="blank">Mrak9087</a>
                    <span class="rss_year">2021</span>
                    <a class="rss" href="https://rs.school/js/" target="_blank" rel="noopener noreferrer">
                        
                    </a>
                </div>`;

        this.message = createHTMLElement('div', 'ovr_container', '<div class="start_page_title">Нельзя выбрать больше 20 игрушек</div>');
        this.message.addEventListener('click', () => {
            this.message.classList.remove('show');
        });

        this.node.append(
            this.header,
            this.startPage,
            this.filterToy.node,
            this.treeGame.node,
            this.footer,
            this.message
        );
        this.createHeaderContent();

        if (isPlayer) {
            this.node.addEventListener(
                'click',
                () => {
                    this.treeGame.playSound();
                },
                { once: true }
            );
        }
        parent.append(this.node);
    }

    createHeaderContent() {
        const headerContainer = createHTMLElement('div', 'header_container');

        this.logo = createHTMLElement('div', 'logo');
        this.logo.addEventListener('click', () => {
            this.showStartPage();
        });

        this.divToy = createHTMLElement('div', 'item_menu', 'игрушки');
        this.divToy.addEventListener('click', () => {
            this.startGame();
        });
        this.divChristmasTree = createHTMLElement('div', 'item_menu', 'елка');
        this.divChristmasTree.addEventListener('click', () => {
            this.showTree();
        });

        const nav = createHTMLElement('nav', 'nav');
        nav.append(this.logo, this.divToy, this.divChristmasTree);

        const content = createHTMLElement('div', 'cnt_header');
        const btnClearStorage = <HTMLButtonElement>createHTMLElement('button', 'btn clear_btn');
        btnClearStorage.type = 'button';
        btnClearStorage.innerHTML = 'Clear localStorage';
        btnClearStorage.addEventListener('click', () => {
            localStorage.clear();
        });

        this.counterSelectDiv = createHTMLElement('div', 'selectCount', `<span>${this.arrSelect.length}</span>`);
        content.append(btnClearStorage, this.counterSelectDiv);
        headerContainer.append(nav, content);
        this.header.append(headerContainer);
    }

    showStartPage() {
        this.divToy.classList.remove('active');
        this.divChristmasTree.classList.remove('active');
        this.filterToy.node.classList.add('none');
        this.treeGame.node.classList.add('none');
        this.startPage.classList.remove('none');
    }

    startGame = () => {
        this.divToy.classList.add('active');
        this.divChristmasTree.classList.remove('active');
        this.startPage.classList.add('none');
        this.treeGame.node.classList.add('none');
        this.filterToy.setFocus();
        this.filterToy.node.classList.remove('none');
    };

    showTree = () => {
        this.divChristmasTree.classList.add('active');
        this.divToy.classList.remove('active');
        this.startPage.classList.add('none');
        this.filterToy.node.classList.add('none');
        this.treeGame.clearTree();
        if (this.arrSelect.length) {
            this.treeGame.setToys(this.toys.filter((item) => item.isSelect));
        } else {
            this.treeGame.setToys(this.toys.slice(0, 20));
        }
        this.treeGame.node.classList.remove('none');
    };

    handlerToyClick(toy: Toy) {
        if (this.arrSelect.length < 20) {
            if (toy.isSelect) {
                toy.node.classList.remove('active');
                toy.isSelect = false;
                this.arrSelect.splice(toy.getIndex(), 1);
                toy.setIndex(-1);
            } else {
                toy.node.classList.add('active');
                this.arrSelect.push(toy.getNumImage());
                toy.isSelect = true;
                toy.setIndex(this.arrSelect.length - 1);
            }
        } else {
            if (toy.isSelect) {
                toy.node.classList.remove('active');
                toy.isSelect = false;
                this.arrSelect.splice(toy.getIndex(), 1);
                toy.setIndex(-1);
            } else {
                this.message.classList.add('show');
            }
        }
        localStorage.setItem('mrk90_christmasSel', JSON.stringify(this.arrSelect));
        this.counterSelectDiv.innerHTML = `<span>${this.arrSelect.length}</span>`;
    }
}
