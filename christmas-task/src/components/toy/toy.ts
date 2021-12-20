import {BaseComponent} from '../baseComponent/baseComponent';
import {IToy}  from '../generalTypes/general';
import './toy.css'

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
    private indexSelect:number;
    

    private divName: HTMLDivElement;
    private divImg: HTMLDivElement;
    private divCount: HTMLDivElement;
    private divYear: HTMLDivElement;
    private divShape: HTMLDivElement;
    private divColor: HTMLDivElement;
    private divSize: HTMLDivElement;
    private divFavorite: HTMLDivElement;
    private selectDiv: HTMLDivElement;
    constructor(toyInfo:IToy){
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

    init():void{
        this.divName = document.createElement('div');
        this.divName.className = 'font_name';
        this.divName.innerHTML = this.name;
        
        this.divImg = document.createElement('div');
        this.divImg.className = 'toy_picture';
        this.divImg.style.backgroundImage = `url(./assets/toys/${this.numImage}.png)`;
        
        this.divCount = document.createElement('div');
        this.divCount.className = 'font_info';
        this.divCount.innerHTML = `Количество: ${this.count}`;

        this.divYear = document.createElement('div');
        this.divYear.className = 'font_info';
        this.divYear.innerHTML = `Год покупки: ${this.year} год`;

        this.divShape = document.createElement('div');
        this.divShape.className = 'font_info';
        this.divShape.innerHTML = `Форма игрушки: ${this.shape}`

        this.divColor = document.createElement('div');
        this.divColor.className = 'font_info';
        this.divColor.innerHTML = `Цвет игрушки: ${this.color}`

        this.divSize = document.createElement('div');
        this.divSize.className = 'font_info';
        this.divSize.innerHTML = `Размер игрушки: ${this.size}`;

        this.divFavorite = document.createElement('div');
        this.divFavorite.className = 'font_info';
        this.divFavorite.innerHTML =`Любимая: ${(this.favorite) ? 'да': 'нет'}`

        this.selectDiv = document.createElement('div');
        this.selectDiv.className = 'select';

        // this.node.addEventListener('click',()=>{
        //     this.isSelect = !this.isSelect;
        //     if (this.isSelect) {
        //         this.node.classList.add('active');
        //     } else {
        //         this.node.classList.remove('active');
        //     }
        // })
        
        this.node.append(this.divName, this.divImg, this.divCount, this.divYear,
            this.divShape, this.divColor, this.divSize,this.divFavorite,this.selectDiv);
    }

    changeFavorite():void{
        this.favorite = !this.favorite;
    }

    getSize():string{
        return this.size;
    }

    getColor():string{
        return this.color;
    }

    getShape():string{
        return this.shape;
    }

    getFavorite():boolean{
        return this.favorite;
    }

    getCount():number{
        return this.count;
    }

    getYear():number{
        return this.year;
    }

    getName():string{
        return this.name;
    }

    getSelect():boolean{
        return this.isSelect;
    }

    getNumImage():number{
        return this.numImage;
    }

    getIndex():number{
        return this.indexSelect;
    }

    setIndex(index:number){
        this.indexSelect = index;
    }
}

