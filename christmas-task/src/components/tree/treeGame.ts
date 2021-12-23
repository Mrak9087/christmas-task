import './treeGame.css';
import {BaseComponent} from '../baseComponent/baseComponent';
import {Toy} from '../toy/toy';
import {INodeElement,treeImages,backgrounds} from '../generalTypes/general';
import { ThumbTree } from './thumbTree/thumbTree';
import { ThumbBg } from './thumbBackground/thumbBg';
import {ToyCell} from './toyCell/toyCell';

export class TreeGame extends BaseComponent{
    private toys:Toy[] = [];
    private thumbTrees:ThumbTree[] = [];
    private thumbBgs:ThumbBg[] = [];
    private containerDiv:HTMLDivElement;
    private settingDiv:HTMLDivElement;
    private toyTreeDiv:HTMLDivElement;
    private viewGameDiv:HTMLDivElement;
    private mapElement:HTMLMapElement;
    private areaElement:HTMLAreaElement;
    private toyContainer: HTMLDivElement;
    private imageTree:HTMLImageElement;
    private toyCells: ToyCell[] = [];
    constructor(){
        super('page tree_game');
    }

    init(){
        this.containerDiv = document.createElement('div');
        this.containerDiv.className = 'container tree_container';
        
        this.createSetting();
        this.createViewGame();
        this.createToyTree();
        

        this.containerDiv.append(this.settingDiv,this.viewGameDiv,this.toyTreeDiv)
        this.node.append(this.containerDiv);
    }

    createSetting(){
        this.settingDiv = document.createElement('div');
        this.settingDiv.className = 'setting';
        treeImages.forEach((item)=>{
            const thumb = new ThumbTree(item);
            this.thumbTrees.push(thumb);
        })
        const settingTree = this.createSettingItem('Выберите елку',this.thumbTrees)
        
        backgrounds.forEach((item)=>{
            const thumb = new ThumbBg(item);
            this.thumbBgs.push(thumb);
        })
        const settingBg = this.createSettingItem('Выберите фон',this.thumbBgs)
        this.settingDiv.append(settingTree,settingBg);
    }

    createSettingItem(headTxt:string, thumbArray:INodeElement[]):HTMLDivElement{
        const item = document.createElement('div');
        item.className = 'setting_item';
        item.innerHTML = `<h2>${headTxt}</h2>`
        const itemContainer = document.createElement('div');
        itemContainer.className = 'st_item_container';
        thumbArray.forEach((item)=>{
            itemContainer.append(item.node);
        })
        item.append(itemContainer);
        return item
    }

    createViewGame(){
        this.viewGameDiv = document.createElement('div');
        this.viewGameDiv.className = 'view_game';
        this.viewGameDiv.style.cssText = `background-image: url(./assets/bg/${this.thumbBgs[0].getBgImage()}.jpg)`;
        this.mapElement = document.createElement('map');
        this.mapElement.className = 'tree_card_map';
        this.mapElement.name = 'tree_map';
        this.areaElement = document.createElement('area');
        this.areaElement.coords = '365,699,189,706,113,683,31,608,2,555,2,539,18,437,73,351,106,224,161,134,243,-1,306,75,353,144,399,221,424,359,452,459,496,550,444,664';
        this.areaElement.shape = 'poly';
        this.areaElement.addEventListener('dragover', (e)=>{
            e.preventDefault()
        })
        // this.areaElement.addEventListener('drop', (e)=>{
            
        //     let param = this.areaElement.getBoundingClientRect();
        //     let tp = e.clientY - param.top;
        //     let lft = e.clientX - param.left;
        // })
        this.mapElement.append(this.areaElement);
        this.imageTree = document.createElement('img');
        this.imageTree.className = 'tree_img';
        this.imageTree.alt = 'tree';
        this.imageTree.useMap = '#tree_map';
        this.imageTree.src = `./assets/tree/${this.thumbTrees[0].getBgImage()}.png`

        this.viewGameDiv.append(this.mapElement,this.imageTree)
    }

    createToyTree(){
        this.toyTreeDiv = document.createElement('div');
        this.toyTreeDiv.className = 'toy_tree';
        const toyContent = document.createElement('div');
        toyContent.className = 'toy_content';
        toyContent.innerHTML = '<h2>Игрушки</h2>'
        this.toyContainer = document.createElement('div');
        this.toyContainer.className = 'toy_container';
        toyContent.append(this.toyContainer);
        this.toyTreeDiv.append(toyContent);
    }

    createToyCells = ()=>{
        this.toys.forEach((item)=>{
            const toyCell = new ToyCell(item);
            toyCell.init();
            toyCell.imageArr.forEach((item) =>{
                item.addEventListener('dragstart', (e)=>{
                    this.handleDragStart(e,item);     
                })
                item.addEventListener('dragend', (e)=>{
                    this.handleDragEnd(e, item,toyCell,this.areaElement);
                })
            })
            this.toyCells.push(toyCell);
            this.toyContainer.append(toyCell.node);
        })
    }

    setToys(toys:Toy[]){
        this.toys = toys.slice(0);
        this.createToyCells();
    }

    handleDragStart = (e:DragEvent,element:HTMLImageElement) => {
            e.dataTransfer.setData('id',element.id);
    }

    handleDragEnd = (e:DragEvent,element:HTMLImageElement,toyCell:ToyCell, parent:HTMLElement) => {
        if (e.dataTransfer.dropEffect === 'none'){
            if (element.parentNode == toyCell.node) {
                return; 
            } else {
                element.parentNode.removeChild(element);
                element.removeAttribute('style');
                toyCell.node.append(element)
            }
        } else {
            let param = parent.getBoundingClientRect();
            let tp = e.clientY - param.top - (element.offsetWidth / 2);
            let lft = e.clientX - param.left - (element.offsetHeight / 2);
            element.style.top = `${tp}px`; 
            element.style.left = `${lft}px`; 
            element.parentNode.removeChild(element);
            parent.append(element);
        }

        toyCell.updateCount();
        
    }
}
