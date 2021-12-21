import {INodeElement} from '../generalTypes/general'
export class BaseComponent implements INodeElement{
    readonly node:HTMLElement;
    constructor(className:string, tagName: keyof HTMLElementTagNameMap = 'div'){
        this.node = document.createElement(tagName);
        this.node.className = className;
    }
}