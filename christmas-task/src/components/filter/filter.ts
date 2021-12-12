import './filter.css';
import { Toy } from '../toy/toy';
import {BaseComponent} from '../baseComponent/baseComponent';
import {filterSize, filterColor, IFilterObj} from '../generalTypes/general';

export class FilterToy extends BaseComponent{
    private readonly arrayToys: Toy[];
    private filterColorDiv:HTMLDivElement;
    private filterSizeDiv:HTMLDivElement;
    private boxToys: HTMLDivElement;
    private filters:IFilterObj;
    constructor(arrayToys: Toy[]){
        super('filter_container');
        this.arrayToys = arrayToys;
        this.filters = {
            size:Array<string>(),
            shape:Array<string>(),
            color:Array<string>(),
            favor:false,
        }
    }

    async init(){

        this.filterColorDiv = document.createElement('div');
        this.filterColorDiv.className = 'filter_item_val';
        this.filterColorDiv.innerHTML = '<span>Цвет:</span>'
        this.createBtnFilterColor();

        this.filterSizeDiv = document.createElement('div');
        this.filterSizeDiv.className = 'filter_item_val';
        this.filterSizeDiv.innerHTML = '<span>Размер:</span>'
        const fltSizeContainer: HTMLDivElement = document.createElement('div');
        this.createBtnFilterSize();
        
        this.boxToys = document.createElement('div');
        this.boxToys.className = 'box_toys';
        const arrFiltered = await this.doFilter();
        this.showToys(arrFiltered);
        this.node.append(this.filterColorDiv, this.filterSizeDiv, this.boxToys);
    }

    createBtnFilterSize():void{
        filterSize.forEach((item) => {
            const btn:HTMLButtonElement = document.createElement('button');
            btn.dataset.filterValue = item;
            btn.className = 'btn_size';
            if (item === 'средний'){
                btn.classList.add('middle');
            }
            if (item === 'малый'){
                btn.classList.add('small');
            }
            btn.addEventListener('click', () => {
                this.filterSizeHandler(btn);
            })
            this.filterSizeDiv.append(btn);
        })
    }

    createBtnFilterColor():void{
        filterColor.forEach((item) => {
            const btn:HTMLButtonElement = document.createElement('button');
            btn.dataset.filterValue = item;
            btn.className = 'btn_color';
            switch (item){
                case 'белый':{
                    btn.classList.add('clWhite');
                    break
                } 
                case 'желтый':{
                    btn.classList.add('clYellow');
                    break;
                } 
                case 'красный':{
                    btn.classList.add('clRed');
                    break;
                } 
                case 'синий':{
                    btn.classList.add('clBlue');
                    break;
                }
                case 'зелёный':{
                    btn.classList.add('clGreen');
                    break;
                }
            }
            
            btn.addEventListener('click', () => {
                this.filterColorHandler(btn);
            })
            this.filterColorDiv.append(btn);
        })
    }

     async filterSizeHandler(btn:HTMLElement){
        let idx: number = this.filters.size.findIndex((item) => item === btn.dataset.filterValue);
        if (idx > -1) {
            this.filters.size.splice(idx,1);
            btn.classList.remove('active');
        } else {
            this.filters.size.push(btn.dataset.filterValue);
            btn.classList.add('active');
        }
        
        const arrFiltered = await this.doFilter();
        this.showToys(arrFiltered);
    }

    async filterColorHandler(btn:HTMLElement){
        let idx: number = this.filters.color.findIndex((item) => item === btn.dataset.filterValue);
        if (idx > -1) {
            this.filters.color.splice(idx,1);
            btn.classList.remove('active');
        } else {
            this.filters.color.push(btn.dataset.filterValue);
            btn.classList.add('active');
        }
        
        const arrFiltered = await this.doFilter();
        this.showToys(arrFiltered);
    }

    async doFilter():Promise<Toy[]>{
        return new Promise((resolve)=>{
            const arrToy = this.arrayToys.filter((itemToy) => {
                if (this.filters.size.length){
                    if (!this.filters.size.find((value) => value === itemToy.getSize())){
                        return false;
                    }
                }

                if (this.filters.color.length){
                    if (!this.filters.color.find((value) => value === itemToy.getColor())){
                        return false;
                    }
                }

                if (this.filters.shape.length){
                    if (!this.filters.shape.find((value) => value === itemToy.getShape())){
                        return false;
                    }
                }

                if (this.filters.favor){
                    if(!itemToy.getFavorite()){
                        return false;
                    }
                }
    
                return true;
            });
            resolve(arrToy);
        })
        
    }

    showToys(toys:Toy[]):void{
        this.boxToys.innerHTML = '';
        toys.forEach((item) => {
            this.boxToys.append(item.node);
        })
    }
    
}