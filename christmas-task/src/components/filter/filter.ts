import './filter.css';
import { Toy } from '../toy/toy';
import {BaseComponent} from '../baseComponent/baseComponent';
import {FilterRange} from './filterRange';
import {filterSize, filterColor, filterShape,IFilterObj} from '../generalTypes/general';

export class FilterToy extends BaseComponent{
    private readonly arrayToys: Toy[];
    private filterColorDiv:HTMLDivElement;
    private filterSizeDiv:HTMLDivElement;
    private filterShapeDiv:HTMLDivElement;
    private filterFavoriteDiv:HTMLDivElement;
    private boxToys: HTMLDivElement;
    private filters:IFilterObj;
    private filterCount:FilterRange;
    constructor(arrayToys: Toy[]){
        super('filter_container');
        this.arrayToys = arrayToys;
        this.filters = {
            size:Array<string>(),
            shape:Array<string>(),
            color:Array<string>(),
            favor:false,
            count:{
                min:1,
                max:12,
            }
        }
    }

    async init(){

        this.filterShapeDiv = document.createElement('div');
        this.filterShapeDiv.className = 'filter_item_val';
        this.filterShapeDiv.innerHTML = '<span>Форма:</span>'
        this.createBtnFilterShape();

        this.filterColorDiv = document.createElement('div');
        this.filterColorDiv.className = 'filter_item_val';
        this.filterColorDiv.innerHTML = '<span>Цвет:</span>'
        this.createBtnFilterColor();

        this.filterSizeDiv = document.createElement('div');
        this.filterSizeDiv.className = 'filter_item_val';
        this.filterSizeDiv.innerHTML = '<span>Размер:</span>'
        const fltSizeContainer: HTMLDivElement = document.createElement('div');
        this.createBtnFilterSize();

        this.filterFavoriteDiv = document.createElement('div');
        this.filterFavoriteDiv.className = 'filter_item_val';
        this.filterFavoriteDiv.innerHTML = '<span>Только любимые:</span>'
        this.createBtnFilterFavorite();
        
        this.boxToys = document.createElement('div');
        this.boxToys.className = 'box_toys';
        const arrFiltered = await this.doFilter();
        this.showToys(arrFiltered);
        this.filterCount = new FilterRange(1,12,1);
        this.filterCount.init();

        this.filterCount.funcFilter = this.filterCountHandler;

        // this.filterCount.funcFilter = async () => {
        //     this.filters.count.min = this.filterCount.minValue;
        //     this.filters.count.max = this.filterCount.maxValue;
        //     const arrFiltered = await this.doFilter();
        //     this.showToys(arrFiltered);
        // };

        this.node.append(this.filterShapeDiv, this.filterColorDiv, this.filterSizeDiv, this.filterFavoriteDiv,
            this.filterCount.node, this.boxToys);
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

    createBtnFilterShape():void{
        filterShape.forEach((item) => {
            const btn:HTMLButtonElement = document.createElement('button');
            btn.dataset.filterValue = item;
            btn.className = 'btn_shape';
            switch (item){
                case 'шар':{
                    btn.classList.add('clBall');
                    break
                } 
                case 'колокольчик':{
                    btn.classList.add('clBell');
                    break;
                } 
                case 'шишка':{
                    btn.classList.add('clCone');
                    break;
                } 
                case 'снежинка':{
                    btn.classList.add('clSnow');
                    break;
                }
                case 'фигурка':{
                    btn.classList.add('clToy');
                    break;
                }
            }
            
            btn.addEventListener('click', () => {
                this.filterShapeHandler(btn);
            })
            this.filterShapeDiv.append(btn);
        })
    }

    createBtnFilterFavorite():void{
        const btn:HTMLButtonElement = document.createElement('button');
        btn.className = 'btn_favor';
        btn.addEventListener('click', () => {
            this.filterFavoriteHandler(btn);
        })
        this.filterFavoriteDiv.append(btn);
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

    async filterShapeHandler(btn:HTMLElement){
        let idx: number = this.filters.shape.findIndex((item) => item === btn.dataset.filterValue);
        if (idx > -1) {
            this.filters.shape.splice(idx,1);
            btn.classList.remove('active');
        } else {
            this.filters.shape.push(btn.dataset.filterValue);
            btn.classList.add('active');
        }
        
        const arrFiltered = await this.doFilter();
        this.showToys(arrFiltered);
    }

    filterCountHandler = async () => {
        this.filters.count.min = this.filterCount.minValue;
        this.filters.count.max = this.filterCount.maxValue;
        const arrFiltered = await this.doFilter();
        this.showToys(arrFiltered);
    };

    async filterFavoriteHandler(btn:HTMLElement){
        if (this.filters.favor) {
            this.filters.favor = false;
            btn.classList.remove('active');
        } else {
            this.filters.favor = true;
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

                if ((itemToy.getCount() < this.filters.count.min) || (itemToy.getCount() > this.filters.count.max)){
                    console.log(itemToy.getCount());
                    return false;
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