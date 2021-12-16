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