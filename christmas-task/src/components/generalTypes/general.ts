export interface INodeElement{
    node:HTMLElement;
}

export interface IToy{
    num: string,
    name: string,
    count: string,
    year: string,
    shape: string,
    color: string,
    size: string,
    favorite: boolean,
}

export const filterSize = ['большой', 'средний', 'малый'];
export const filterColor = ['белый', 'желтый', 'красный', 'синий', 'зелёный'];
export const filterShape = ['шар', 'колокольчик', 'шишка', 'снежинка', 'фигурка'];
export const treeImages = ['1','2','3','4','5','6'];
export const backgrounds = ['1','2','3','4','5','6','7','8','9','10'];

export type FilterObjType = {
    size:string[],
    shape:string[],
    color:string[],
    favor:boolean,
    count:{
        min:number,
        max:number,
    },
    years:{
        min:number,
        max:number,
    }
}

export type ImgInfo = {
    numImg: string,
    top:string,
    left:string,
    id:string,
}

export type SaveObj = {
    bgNum: string;
    treeNum: string;
    imgArr: ImgInfo[];
}