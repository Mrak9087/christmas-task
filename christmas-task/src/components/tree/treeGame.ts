import {BaseComponent} from '../baseComponent/baseComponent';
import {Toy} from '../toy/toy';
import {treeImages,backgrounds} from '../generalTypes/general';
import { ThumbTree } from './thumbTree/thumbTree';
import { ThumbBg } from './thumbBackground/thumbBg';

export class TreeGame extends BaseComponent{
    private thumbTrees:ThumbTree[] = [];
    private thumbBgs:ThumbBg[] = [];
    constructor(){
        super('page tree_game');
    }

    init(){
        treeImages.forEach((item)=>{
            const thumb = new ThumbTree(item);
            this.thumbTrees.push(thumb);
            this.node.append(thumb.node);
        })
        backgrounds.forEach((item)=>{
            const thumb = new ThumbBg(item);
            this.thumbBgs.push(thumb);
            this.node.append(thumb.node);
        })
    }
}
