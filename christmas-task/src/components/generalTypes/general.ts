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

export const filterSize:string[] = ['большой', 'средний', 'малый'];
export const filterColor:string[] = ['белый', 'желтый', 'красный', 'синий', 'зелёный'];
export const filterShape:string[] = ['шар', 'колокольчик', 'шишка', 'снежинка', 'фигурка'];

export interface IFilterObj{
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