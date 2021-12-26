

export class Snapshot{
    private canvas:HTMLCanvasElement;
    private ctx:CanvasRenderingContext2D;
    private img:HTMLImageElement;
    private element:HTMLElement
    createSnapsot(element:HTMLElement){
        if (this.canvas){
            this.canvas.remove()
        }
        this.element = element;
        this.canvas = document.createElement('canvas');
        // this.canvas.width = 60;
        // this.canvas.height=45;
        
        this.ctx = this.canvas.getContext('2d');
        this.img = new Image(element.clientWidth,element.clientHeight);
        this.img.style.objectFit = 'cover';
        this.img.src = element.style.backgroundImage.split('"')[1];
        console.log('bg',this.img.src);

        this.img.onload = ()=>{
            this.drawImg(element);
        };
        
        
    }

    drawImg = (element:HTMLElement)=>{
        // let dW = this.img.naturalWidth / this.img.width;
        // let dH = this.img.naturalHeight / this.img.height; 
        this.canvas.height = this.img.height;
        this.canvas.width = this.img.width;
        this.ctx.drawImage(this.img,0,0,this.img.width,this.img.height);
        
        
        const childImgs = element.querySelectorAll('img');
        childImgs.forEach((item) => {
            const param = item.getBoundingClientRect();
            this.ctx.drawImage(item,param.top,param.left,param.width,param.height);
        })

        let dt = this.canvas.toDataURL();
        console.log('dr',dt);
    }
}