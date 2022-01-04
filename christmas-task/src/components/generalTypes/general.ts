export interface INodeElement {
    node: HTMLElement;
}

export interface IToy {
    num: string;
    name: string;
    count: string;
    year: string;
    shape: string;
    color: string;
    size: string;
    favorite: boolean;
}

export type FilterObjType = {
    size: string[];
    shape: string[];
    color: string[];
    favor: boolean;
    count: {
        min: number;
        max: number;
    };
    years: {
        min: number;
        max: number;
    };
};

export type ImgInfo = {
    numImg: string;
    top: string;
    left: string;
    id: string;
};

export type SaveObj = {
    bgNum: string;
    treeNum: string;
    dataUrl: string;
    imgArr: ImgInfo[];
};
