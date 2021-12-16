import './filter.css';
import { Toy } from '../toy/toy';
import {BaseComponent} from '../baseComponent/baseComponent';
import {FilterRange} from './filterRange';
import {filterSize, filterColor, filterShape, FilterObjType} from '../generalTypes/general';

export class FilterToy extends BaseComponent{
    private readonly arrayToys: Toy[];
    private shapeFilterBtns:HTMLButtonElement[] = [];
    private colorFilterBtns:HTMLButtonElement[] = [];
    private sizeFilterBtns:HTMLButtonElement[]= [];
    private favoriteFilterBtn:HTMLButtonElement;
    private filterColorDiv:HTMLDivElement;
    private filterSizeDiv:HTMLDivElement;
    private filterShapeDiv:HTMLDivElement;
    private filterFavoriteDiv:HTMLDivElement;
    private boxToys: HTMLDivElement;
    private filters:FilterObjType;
    private filterCountItem:HTMLDivElement;
    private filterYearsItem:HTMLDivElement;
    private selectSort: HTMLSelectElement;
    private search: HTMLInputElement;
    private filterCount:FilterRange;
    private filterYear:FilterRange;
    
    private sortValue:string;
    private arrFiltered:Toy[];

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
            },
            years:{
                min:1940,
                max:2020,
            }
        }
    }

    async init(){
        this.arrFiltered = this.arrayToys.slice(0);
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
        this.arrFiltered = await this.doFilter(this.arrayToys);
        this.showToys(this.arrFiltered);

        this.filterCountItem = document.createElement('div');
        this.filterCountItem.className = 'filter_item_val range_item';
        this.filterCountItem.innerHTML = '<span>Количество экземпляров:</span>'

        this.filterYearsItem = document.createElement('div');
        this.filterYearsItem.className = 'filter_item_val range_item';
        this.filterYearsItem.innerHTML = '<span>Год приобретения:</span>'
        

        this.filterCount = new FilterRange(this.filters.count.min,this.filters.count.max,1);
        this.filterCount.init();

        this.filterCount.funcFilter = this.filterCountHandler;

        this.filterCountItem.append(this.filterCount.node);

        this.filterYear = new FilterRange(this.filters.years.min,this.filters.years.max,10);
        this.filterYear.init();

        this.filterYear.funcFilter = this.filterYearHandler;
        this.filterYearsItem.append(this.filterYear.node);

        this.selectSort = document.createElement('select');
        this.selectSort.className = 'sort_select';
        this.selectSort.innerHTML = `<option selected="" value="sort-name-max">По названию от «А» до «Я»</option>
        <option value="sort-name-min">По названию от «Я» до «А»</option>
        <option value="sort-count-max">По количеству по возрастанию</option>
        <option value="sort-count-min">По количеству по убыванию</option>`;
        this.sortValue = this.selectSort.value;

        this.selectSort.addEventListener('change',()=>{
            this.sortValue = this.selectSort.value;
            this.sortToy(this.arrFiltered);
            this.showToys(this.arrFiltered);
        })

        this.search = document.createElement('input');
        this.search.className = 'search';
        this.search.autocomplete = 'off';
        this.search.addEventListener('input', async ()=>{
            this.arrFiltered = await this.doSearch(this.search.value);
            this.arrFiltered = await this.doFilter(this.arrFiltered);
            this.showToys(this.arrFiltered);
        })
        
        this.node.append(this.filterShapeDiv, this.filterColorDiv, this.filterSizeDiv, this.filterFavoriteDiv,
            this.filterCountItem, this.filterYearsItem, this.selectSort, this.search, this.boxToys);
    }

    createBtnFilterSize():void{
        filterSize.forEach((item) => {
            const btn = document.createElement('button');
            btn.dataset.filterValue = item;
            btn.className = 'btn_size';
            if (item === 'средний'){
                btn.classList.add('middle');
            }
            if (item === 'малый'){
                btn.classList.add('small');
            }
            btn.addEventListener('click', () => {
                // this.filterSizeHandler(btn);
                this.filterHandler(btn, this.filters.size);
            })
            this.sizeFilterBtns.push(btn);
            this.filterSizeDiv.append(btn);
        })
    }

    createBtnFilterColor():void{
        filterColor.forEach((item) => {
            const btn = document.createElement('button');
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
                // this.filterColorHandler(btn);
                this.filterHandler(btn, this.filters.color)
            })
            this.colorFilterBtns.push(btn);
            this.filterColorDiv.append(btn);
        })
    }

    createBtnFilterShape():void{
        filterShape.forEach((item) => {
            const btn = document.createElement('button');
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
                // this.filterShapeHandler(btn);
                this.filterHandler(btn, this.filters.shape)
            })
            this.shapeFilterBtns.push(btn);
            this.filterShapeDiv.append(btn);
        })
    }

    createBtnFilterFavorite():void{
        this.favoriteFilterBtn = document.createElement('button');
        this.favoriteFilterBtn.className = 'btn_favor';
        this.favoriteFilterBtn.addEventListener('click', () => {
            this.filterFavoriteHandler(this.favoriteFilterBtn);
        })
        this.filterFavoriteDiv.append(this.favoriteFilterBtn);
    }

    async filterHandler(btn:HTMLElement, filters:string[]){
        let idx: number = filters.findIndex((item) => item === btn.dataset.filterValue);
        if (idx > -1) {
            filters.splice(idx,1);
            btn.classList.remove('active');
        } else {
            filters.push(btn.dataset.filterValue);
            btn.classList.add('active');
        }
        
        this.arrFiltered = await this.doFilter(this.arrayToys);
        this.showToys(this.arrFiltered);
    }

    filterCountHandler = async () => {
        this.filters.count.min = this.filterCount.minValue;
        this.filters.count.max = this.filterCount.maxValue;
        this.arrFiltered = await this.doFilter(this.arrayToys);
        this.showToys(this.arrFiltered);
    };

    filterYearHandler = async () => {
        this.filters.years.min = this.filterYear.minValue;
        this.filters.years.max = this.filterYear.maxValue;
        this.arrFiltered = await this.doFilter(this.arrayToys);
        this.showToys(this.arrFiltered);
    };

    async filterFavoriteHandler(btn:HTMLElement){
        if (this.filters.favor) {
            this.filters.favor = false;
            btn.classList.remove('active');
        } else {
            this.filters.favor = true;
            btn.classList.add('active');
        }
        
        this.arrFiltered = await this.doFilter(this.arrayToys);
        this.showToys(this.arrFiltered);
    }

    async doFilter(arrayToys:Toy[]):Promise<Toy[]>{
        return new Promise((resolve)=>{
            const arrToy = arrayToys.filter((itemToy) => {
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
                    
                    return false;
                }

                if ((itemToy.getYear() < this.filters.years.min) || 
                    (itemToy.getYear() > this.filters.years.max)){
                    
                    return false;
                }
    
                return true;
            });
            resolve(arrToy);
        })
    }

    async doSearch(nameToy:string):Promise<Toy[]>{
        return new Promise((resolve)=>{
            const arrToy = this.arrayToys.filter((itemToy) => {
                if (itemToy.getName().toLowerCase().indexOf(nameToy.toLowerCase()) > -1) {
                    return true
                }
                return false
            });
            resolve(arrToy);
        })
    }

    showToys(toys:Toy[]):void{
        this.sortToy(toys);
        this.boxToys.innerHTML = '';
        toys.forEach((item) => {
            this.boxToys.append(item.node);
        })
    }

    sortToy(toys:Toy[]):void{
        if (this.sortValue === 'sort-name-max'){
            toys.sort((toyA:Toy, toyB:Toy)=>{
                let lowerA:string = toyA.getName().toLowerCase();
                let lowerB:string = toyB.getName().toLowerCase();
                if (lowerA < lowerB) return -1;
                if (lowerA > lowerB) return 1;
                return 0;
            })
        }
        if (this.sortValue === 'sort-name-min'){
            toys.sort((toyA:Toy, toyB:Toy)=>{
                let lowerA:string = toyA.getName().toLowerCase();
                let lowerB:string = toyB.getName().toLowerCase();
                if (lowerA > lowerB) return -1;
                if (lowerA < lowerB) return 1;
                return 0;
            })
        }
        if (this.sortValue === 'sort-count-max'){
            toys.sort((toyA:Toy, toyB:Toy)=>{
                return toyA.getCount() - toyB.getCount();
            })
        }
        if (this.sortValue === 'sort-count-min'){
            toys.sort((toyA:Toy, toyB:Toy)=>{
                return toyB.getCount() - toyA.getCount();
            })
        }
    }
    
}