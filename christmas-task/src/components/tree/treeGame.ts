import html2canvas from './html2canvas';

import './treeGame.css';
import { BaseComponent } from '../baseComponent/baseComponent';
import { Toy } from '../toy/toy';
import { INodeElement, SaveObj, ImgInfo } from '../generalTypes/general';
import { backgrounds, treeImages } from '../generalTypes/constants';
import { ThumbTree } from './thumbTree/thumbTree';
import { ThumbBg } from './thumbBackground/thumbBg';
import { ToyCell } from './toyCell/toyCell';
import { Snow } from './snow/snow';
import { AudioControl } from './audio/audioControl';
import { Garland } from './garland/garland';
import { History } from './history/history';
import { createHTMLElement } from '../helpers/helpers';

export class TreeGame extends BaseComponent {
    private toys: Toy[] = [];
    private thumbTrees: ThumbTree[] = [];
    private thumbBgs: ThumbBg[] = [];
    private snow: Snow;
    private player: AudioControl;
    private garland: Garland;
    private history: History;
    private containerDiv: HTMLElement;
    private settingDiv: HTMLElement;
    private toyTreeDiv: HTMLElement;
    private viewGameDiv: HTMLElement;
    private mapElement: HTMLMapElement;
    private areaElement: HTMLAreaElement;
    private toyContainer: HTMLElement;
    private imageTree: HTMLImageElement;
    private toyCells: ToyCell[] = [];

    private activeBg = '1';
    private activeTree = '1';
    private saveArrTree: SaveObj[] = [];
    constructor() {
        super('page tree_game');
    }

    init() {
        this.activeTree = localStorage.getItem('mrk90_chr_tree') || '1';
        this.activeBg = localStorage.getItem('mrk90_chr_bg') || '1';
        this.containerDiv = createHTMLElement('div', 'container tree_container');
        this.createSetting();
        this.createViewGame();
        this.createToyTree();

        this.viewGameDiv.prepend(this.snow.node, this.garland.node);

        this.containerDiv.append(this.settingDiv, this.viewGameDiv, this.toyTreeDiv);
        this.node.append(this.containerDiv);
    }

    createSetting() {
        this.snow = new Snow();
        this.player = new AudioControl();
        this.snow.createSnowFlake();
        this.settingDiv = createHTMLElement('div', 'setting');
        treeImages.forEach((item) => {
            const thumb = new ThumbTree(item);
            thumb.node.addEventListener('click', () => {
                this.handleTreeClick(thumb);
            });
            this.thumbTrees.push(thumb);
        });
        const settingTree = this.createSettingItem('Выберите елку', this.thumbTrees);

        backgrounds.forEach((item) => {
            const thumb = new ThumbBg(item);
            thumb.node.addEventListener('click', () => {
                this.handleBackgroundClick(thumb);
            });
            this.thumbBgs.push(thumb);
        });
        const settingBg = this.createSettingItem('Выберите фон', this.thumbBgs);
        const settingControl = createHTMLElement('div', 'st_control');
        settingControl.append(this.player.node, this.snow.startSnowBtn);
        this.garland = new Garland();
        this.garland.init();
        this.settingDiv.append(settingControl, settingTree, settingBg, this.garland.panelGarland);
    }

    createSettingItem(headTxt: string, thumbArray: INodeElement[]): HTMLElement {
        const item = createHTMLElement('div', 'setting_item', `<h2>${headTxt}</h2>`);
        const itemContainer = createHTMLElement('div', 'st_item_container');
        thumbArray.forEach((item) => {
            itemContainer.append(item.node);
        });
        item.append(itemContainer);
        return item;
    }

    createViewGame() {
        this.viewGameDiv = createHTMLElement('div', 'view_game');

        this.viewGameDiv.style.cssText = `background-image: url(./assets/bg/${this.activeBg}.jpg)`;
        this.mapElement = document.createElement('map');
        this.mapElement.className = 'tree_card_map';
        this.mapElement.name = 'tree_map';
        this.areaElement = document.createElement('area');
        this.areaElement.coords =
            '365,699,189,706,113,683,31,608,2,555,2,539,18,437,73,351,106,224,161,134,243,-1,306,75,353,144,399,221,424,359,452,459,496,550,444,664';
        this.areaElement.shape = 'poly';
        this.areaElement.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        this.mapElement.append(this.areaElement);
        this.imageTree = document.createElement('img');
        this.imageTree.className = 'tree_img';
        this.imageTree.alt = 'tree';
        this.imageTree.useMap = '#tree_map';
        this.imageTree.src = `./assets/tree/${this.activeTree}.png`;

        this.viewGameDiv.append(this.mapElement, this.imageTree);
    }

    createToyTree() {
        this.toyTreeDiv = createHTMLElement('div', 'toy_tree');
        const toyContent = createHTMLElement('div', 'toy_content', '<h2>Игрушки</h2>');
        this.toyContainer = createHTMLElement('div', 'toy_container');
        toyContent.append(this.toyContainer);
        this.history = new History();
        this.history.init();
        this.history.getThumbTrees().forEach((item) => {
            item.node.addEventListener('click', () => {
                this.handleLoadClick(item);
            });
        });
        this.history.btnSave.addEventListener('click', () => {
            this.handleSaveClick();
        });
        this.setBgThumbHistory();
        this.toyTreeDiv.append(toyContent, this.history.node);
    }

    createToyCells = () => {
        this.toys.forEach((item) => {
            const toyCell = new ToyCell(item);
            toyCell.init();
            toyCell.imageArr.forEach((item) => {
                item.addEventListener('dragstart', (e) => {
                    this.handleDragStart(e, item);
                });
                item.addEventListener('dragend', (e) => {
                    this.handleDragEnd(e, item, toyCell, this.areaElement);
                });
            });
            this.toyCells.push(toyCell);

            this.toyContainer.append(toyCell.node);
        });
    };

    setToys(toys: Toy[]) {
        this.toyContainer.innerHTML = '';
        this.toys = toys.slice(0);
        this.createToyCells();
    }

    handleDragStart = (e: DragEvent, element: HTMLImageElement) => {
        e.dataTransfer.setData('id', element.id);
    };

    handleDragEnd = (e: DragEvent, element: HTMLImageElement, toyCell: ToyCell, parent: HTMLElement) => {
        if (e.dataTransfer.dropEffect === 'none') {
            if (element.parentNode == toyCell?.node) {
                return;
            } else {
                element.parentNode.removeChild(element);
                element.removeAttribute('style');
                toyCell?.node.append(element);
            }
        } else {
            const param = parent.getBoundingClientRect();
            const tp = e.clientY - param.top - element.offsetWidth / 2;
            const lft = e.clientX - param.left - element.offsetHeight / 2;
            element.style.top = `${tp}px`;
            element.style.left = `${lft}px`;
            element.parentNode.removeChild(element);
            parent.append(element);
        }

        toyCell?.updateCount();
    };

    handleBackgroundClick(thumbBg: ThumbBg) {
        this.activeBg = thumbBg.getBgImage();
        localStorage.setItem('mrk90_chr_bg', this.activeBg);
        this.viewGameDiv.style.cssText = `background-image: url(./assets/bg/${this.activeBg}.jpg)`;
    }

    handleTreeClick(thumbTree: ThumbTree) {
        this.activeTree = thumbTree.getTreeImage();
        localStorage.setItem('mrk90_chr_tree', this.activeTree);
        this.imageTree.src = `./assets/tree/${this.activeTree}.png`;
    }

    async handleSaveClick() {
        const obj = this.saveArrTree.find((item) => item.treeNum === this.activeTree) || null;
        const imgArr: ImgInfo[] = [];
        this.areaElement.querySelectorAll('img').forEach((item) => {
            const imgElem: ImgInfo = {
                numImg: item.dataset.imgNum,
                top: item.style.top,
                left: item.style.left,
                id: item.id,
            };
            imgArr.push(imgElem);
        });

        const cnv = await html2canvas(this.viewGameDiv);
        const dataU = cnv.toDataURL('image/jpeg', 0.9);
        const svObj: SaveObj = {
            bgNum: this.activeBg,
            treeNum: this.activeTree,
            dataUrl: dataU,
            imgArr: imgArr,
        };
        if (obj) {
            obj.bgNum = svObj.bgNum;
            obj.treeNum = svObj.treeNum;
            obj.imgArr = svObj.imgArr;
        } else {
            this.saveArrTree.push(svObj);
        }

        localStorage.setItem('mrk90_savetree', JSON.stringify(this.saveArrTree));
        this.setBgThumbHistory();
    }

    handleLoadClick(tree: ThumbTree) {
        const imgArr: SaveObj[] = JSON.parse(localStorage.getItem('mrk90_savetree'));
        if (imgArr) {
            const obj = imgArr.find((item) => item.treeNum === tree.getTreeImage());
            if (obj) {
                this.activeBg = obj.bgNum;
                this.viewGameDiv.style.cssText = `background-image: url(./assets/bg/${this.activeBg}.jpg)`;
                this.activeTree = obj.treeNum;
                this.imageTree.src = `./assets/tree/${this.activeTree}.png`;
                this.areaElement.innerHTML = '';
                obj.imgArr.forEach((item) => {
                    const img = new Image();
                    img.className = 'img_toy';
                    img.src = `./assets/toys/${item.numImg}.png`;
                    img.alt = 'toy';
                    img.draggable = true;
                    img.style.top = item.top;
                    img.style.left = item.left;
                    img.id = item.id;
                    img.dataset.imgNum = item.numImg;
                    img.addEventListener('dragstart', (e) => {
                        this.handleDragStart(e, img);
                    });
                    img.addEventListener('dragend', (e) => {
                        this.handleDragEnd(e, img, null, this.areaElement);
                    });
                    this.areaElement.append(img);
                });
            }
        }
    }

    setBgThumbHistory() {
        const imgArr: SaveObj[] = JSON.parse(localStorage.getItem('mrk90_savetree'));
        if (imgArr) {
            this.history.getThumbTrees().forEach((itemTh) => {
                const obj = imgArr.find((item) => item.treeNum === itemTh.getTreeImage());
                if (obj) {
                    itemTh.node.style.cssText = `background-size: cover; background-image: url(${obj.dataUrl})`;
                }
            });
        }
    }

    clearTree() {
        this.toyCells?.forEach((item) => {
            item.imageArr.forEach((imgItem) => {
                imgItem.remove();
            });
        });
    }

    playSound() {
        this.player.handleClick();
    }
}
