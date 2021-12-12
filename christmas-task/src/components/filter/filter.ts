import './filter.css';
import { Toy } from '../toy/toy';
import {BaseComponent} from '../baseComponent/baseComponent';
import {filterSize, IFilterObj} from '../generalTypes/general';

export class FilterToy extends BaseComponent{
    private readonly arrayToys: Toy[];
    private filterSizeDiv:HTMLDivElement;
    private boxToys: HTMLDivElement;
    private filters:IFilterObj;
    constructor(arrayToys: Toy[]){
        super('filter_container');
        this.arrayToys = arrayToys;
        const flt = {
            size:Array<string>(),
            shape:Array<string>(),
            color:Array<string>(),
            favor:false,
        }
        this.filters = flt;
        
    }

    async init(){
        this.filterSizeDiv = document.createElement('div');
        this.filterSizeDiv.className = 'filter_item_val';
        filterSize.forEach((item) => {
            const btn:HTMLButtonElement = document.createElement('button');
            btn.dataset.filterValue = item;
            btn.innerHTML = item;
            btn.addEventListener('click', () => {
                this.filterSizeHandler(btn.dataset.filterValue);
            })
            this.filterSizeDiv.append(btn);
        })
        
        this.boxToys = document.createElement('div');
        this.boxToys.className = 'box_toys';
        const arrFiltered = await this.doFilter();
        this.showToys(arrFiltered);
        this.node.append(this.filterSizeDiv, this.boxToys);
    }

     async filterSizeHandler(value:string){
        let idx: number = this.filters.size.findIndex((item) => item === value);
        if (idx > -1) {
            this.filters.size.splice(idx,1);
        } else {
            this.filters.size.push(value);
        }
        
        const arrFiltered = await this.doFilter();
        this.showToys(arrFiltered);
        console.log(arrFiltered);
    }

    async doFilter():Promise<Toy[]>{
        return new Promise((resolve)=>{
            const arrToy = this.arrayToys.filter((itemToy) => {
                if (this.filters.size.length){
                    if (!this.filters.size.find((value) => value === itemToy.getSize())){
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