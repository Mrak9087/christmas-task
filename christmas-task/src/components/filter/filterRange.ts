import './filterRange.css';
import {BaseComponent} from '../baseComponent/baseComponent'

export class FilterRange extends BaseComponent{
    minRange:number;
    maxRange:number;
    minValue:number;
    maxValue:number;
    step:number;
    funcFilter:(e?:Event) => void;
    private inputLeftHid:HTMLInputElement;
    private inputRightHid:HTMLInputElement;
    private slider:HTMLDivElement;
    private track:HTMLDivElement;
    private range:HTMLDivElement;
    private thumbLeft:HTMLDivElement;
    private thumbRight:HTMLDivElement;


    constructor(minRange:number, maxRange:number, step:number){
        super('filter_range');
        this.minRange = minRange;
        this.maxRange = maxRange;
        this.minValue = minRange;
        this.maxValue = maxRange;
        this.step = step;
        this.funcFilter = ()=>{ };
    }

    init():void{
        this.inputLeftHid = document.createElement('input');
        this.inputLeftHid.type = 'range';
        this.inputLeftHid.min = this.minRange.toString();
        this.inputLeftHid.max = this.maxRange.toString();
        this.inputLeftHid.step = this.step.toString();
        this.inputLeftHid.value = this.minRange.toString();
        this.inputLeftHid.addEventListener('input',this.setLeftValue);
        
        this.inputRightHid = document.createElement('input');
        this.inputRightHid.type = 'range';
        this.inputRightHid.min = this.minRange.toString();
        this.inputRightHid.max = this.maxRange.toString();
        this.inputRightHid.step = this.step.toString();
        this.inputRightHid.value = this.maxRange.toString();
        this.inputRightHid.addEventListener('input',this.setRightValue);

        this.slider = document.createElement('div');
        this.slider.className = 'slider';

        this.track = document.createElement('div');
        this.track.className = 'track';

        this.range = document.createElement('div');
        this.range.className = 'range';

        this.thumbLeft = document.createElement('div');
        this.thumbLeft.className = 'thumb left';

        this.thumbRight = document.createElement('div');
        this.thumbRight.className = 'thumb right';

        this.inputLeftHid.addEventListener("mouseover", () => {
            this.thumbLeft.classList.add("hover");
        });
        this.inputLeftHid.addEventListener("mouseout", () => {
            this.thumbLeft.classList.remove("hover");
        });
        this.inputLeftHid.addEventListener("mousedown", () => {
            this.thumbLeft.classList.add("active");
        });
        this.inputLeftHid.addEventListener("mouseup", () => {
            this.thumbLeft.classList.remove("active");
        });

        this.inputRightHid.addEventListener("mouseover", () => {
            this.thumbRight.classList.add("hover");
        });
        this.inputRightHid.addEventListener("mouseout", () => {
            this.thumbRight.classList.remove("hover");
        });
        this.inputRightHid.addEventListener("mousedown", () => {
            this.thumbRight.classList.add("active");
        });
        this.inputRightHid.addEventListener("mouseup", () => {
            this.thumbRight.classList.remove("active");
        });

        this.slider.append(this.track,this.range,this.thumbLeft,this.thumbRight)
        this.node.append(this.inputLeftHid,this.inputRightHid,this.slider);
        this.setLeftValue();
        this.setRightValue();
    }

    setLeftValue = () => {
        
        let min:number = this.minRange;
        let max:number = this.maxRange;
    
        this.minValue = Math.min(parseInt(this.inputLeftHid.value), 
                                    parseInt(this.inputRightHid.value));

        this.inputLeftHid.value = this.minValue.toString()
        
    
        let percent = ((parseInt(this.inputLeftHid.value) - min) / (max - min)) * 100;
    
        this.thumbLeft.style.left = percent + "%";
        this.range.style.left = percent + "%";
        this.funcFilter()
        // console.log(this.inputLeftHid.value);

    }

    setRightValue = () => {
        
        let min:number = this.minRange;
        let max:number = this.maxRange;
    
        this.maxValue = Math.max(parseInt(this.inputRightHid.value), 
                                    parseInt(this.inputLeftHid.value) - 1);
        
        this.inputRightHid.value = this.maxValue.toString();
    
        let percent = ((parseInt(this.inputRightHid.value) - min) / (max - min)) * 100;
    
        this.thumbRight.style.right = (100 - percent) + "%";
        this.range.style.right = (100 - percent) + "%";
        this.funcFilter()
        // console.log(this.inputRightHid.value)
    }
}