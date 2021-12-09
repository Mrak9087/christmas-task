import {BaseComponent} from '../baseComponent/baseComponent';

class Toy extends BaseComponent {
    private numImage: number;
    private name: string;
    private count: number;
    private year: number;
    private shape: string;
    private color: string;
    private size: string;
    private favorite: boolean;
    constructor(numImage:number, name:string, count:number, year: number, shape:string, color:string, size:string, favorite:boolean){
        super('toy');
        this.numImage = numImage;
        this.name = name;
        this.count = count;
        this.year = year;
        this.shape = shape;
        this.color = color;
        this.size = size;
        this.favorite = favorite;
    }

    changeFavorite():void{
        this.favorite = !this.favorite;
    }
}