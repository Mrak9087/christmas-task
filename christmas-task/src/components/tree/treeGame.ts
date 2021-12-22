import './treeGame.css';
import {BaseComponent} from '../baseComponent/baseComponent';
import {Toy} from '../toy/toy';
import {INodeElement,treeImages,backgrounds} from '../generalTypes/general';
import { ThumbTree } from './thumbTree/thumbTree';
import { ThumbBg } from './thumbBackground/thumbBg';

export class TreeGame extends BaseComponent{
    private thumbTrees:ThumbTree[] = [];
    private thumbBgs:ThumbBg[] = [];
    private containerDiv:HTMLDivElement;
    private settingDiv:HTMLDivElement;
    private toyTreeDiv:HTMLDivElement;
    private viewGameDiv:HTMLDivElement;
    private mapElement:HTMLMapElement;
    private areaElement:HTMLAreaElement;
    private imageTree:HTMLImageElement;
    constructor(){
        super('page tree_game');
    }

    init(){
        this.containerDiv = document.createElement('div');
        this.containerDiv.className = 'container tree_container';
        
        this.createSetting();
        this.createViewGame();
        

        this.containerDiv.append(this.settingDiv,this.viewGameDiv)
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
    }
}
