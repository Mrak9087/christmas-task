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
    private viewGameDiv:HTMLDivElement;
    private mapElement:HTMLMapElement;
    private areaElement:HTMLAreaElement;
    constructor(){
        super('page tree_game');
    }

    init(){
        this.containerDiv = document.createElement('div');
        this.containerDiv.className = 'container tree_container';
        
        this.createSetting();
        this.createViewGame();
        this.mapElement = document.createElement('map');
        this.areaElement = document.createElement('area');
        this.areaElement.coords = '365,699,189,706,113,683,31,608,2,555,2,539,18,437,73,351,106,224,161,134,243,-1,306,75,353,144,399,221,424,359,452,459,496,550,444,664';
        this.areaElement.shape = 'poly';
        this.mapElement.append(this.areaElement);

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
    }
}
