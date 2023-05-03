export default class Resize{
    constructor(element){
        this.element = element;
        this.startX = "";
        this.startY = ""; 
        this.startWidth = ""; 
        this.startHeight = "";
        this.startTop = "";
        this.startBottom = "";
        this.startLeft = "";
        this.startRight = "";
        this.createResizeBox(element);

        this.topLeftHandler = (e)=>this.dragTopLeft(e);
        this.topLeftRemoveHandler = ()=>this.stopTopLeftDrag();

        this.topHandler = (e)=>this.dragTop(e);
        this.topRemoveHandler = ()=>this.stopTopDrag();

        this.topRightHandler = (e)=>this.dragTopRight(e);
        this.topRightRemoveHandler = ()=>this.stopTopRightDrag();

        this.rightHandler = (e)=>this.dragRight(e);
        this.rightRemoveHandler = ()=>this.stopRightDrag();

        this.bottomRightHandler = (e)=>this.dragBottomRight(e);
        this.bottomRightRemoveHandler = ()=>this.stopBottomRightDrag();

        this.bottomHandler = (e)=>this.dragBottom(e);
        this.bottomRemoveHandler = ()=>this.stopBottomDrag();

        this.bottomLeftHandler = (e)=>this.dragBottomLeft(e);
        this.bottomLeftRemoveHandler = ()=>this.stopBottomLeftDrag();

        this.leftHandler = (e)=>this.dragLeft(e);
        this.leftRemoveHandler = ()=>this.stopLeftDrag();
        
    }
   
    createResizeBox(element) {
        const resizerData = [
            {
                'cursor':'nw-resize',
                'top':'-4px',
                'left':'-4px'
            },
            {
                'cursor':'n-resize',
                'top':'-4px',
                'left':'50%'
            },
            {
                'cursor':'ne-resize',
                'top':'-4px',
                'right':'-4px'
            },
            {
                'cursor':'e-resize',
                'top':'50%',
                'right':'-4px'
            },
            {
                'cursor':'se-resize',
                'bottom':'-4px',
                'right':'-4px'
            },
            {
                'cursor':'s-resize',
                'bottom':'-4px',
                'left':'50%'
            },
            {
                'cursor':'sw-resize',
                'bottom':'-4px',
                'left':'-4px'
            },
            {
                'cursor':'w-resize',
                'top':'50%',
                'left':'-4px'
            }
        ]
        for(let i in resizerData) {
            let resizer = document.createElement('div');
            for(let key in resizerData[i]){
                resizer.style[key] = resizerData[i][key];
                resizer.style[key] = resizerData[i][key];
                resizer.style[key] = resizerData[i][key];
                resizer.className = 'resizer';
            }
            
            resizer.addEventListener('mousedown', (e)=>{this.initDrag(e,element)}, false);
            element.appendChild(resizer);
        }
    }


    initDrag(e,element) {
        e.stopPropagation()
        this.startX = e.clientX;
        this.startY = e.clientY;
        this.startWidth = parseInt(document.defaultView.getComputedStyle(element).width);
        this.startHeight = parseInt(document.defaultView.getComputedStyle(element).height);
        this.startTop = parseInt(document.defaultView.getComputedStyle(element).top);
        this.startBottom = parseInt(document.defaultView.getComputedStyle(element).bottom);
        this.startLeft = parseInt(document.defaultView.getComputedStyle(element).left);
        this.startRight = parseInt(document.defaultView.getComputedStyle(element).right);
        switch(e.target.style.cursor){
            case 'nw-resize':
                document.documentElement.addEventListener('mousemove', this.topLeftHandler);
                document.documentElement.addEventListener('mouseup',this.topLeftRemoveHandler);
                console.log('top left cursor');
                break;

            case 'n-resize':
                document.documentElement.addEventListener('mousemove', this.topHandler);
                document.documentElement.addEventListener('mouseup',this.topRemoveHandler);
                console.log('top cursor');
                break;

            case 'ne-resize':
                document.documentElement.addEventListener('mousemove', this.topRightHandler);
                document.documentElement.addEventListener('mouseup',this.topRightRemoveHandler);
                break;

            case 'e-resize':
                document.documentElement.addEventListener('mousemove', this.rightHandler);
                document.documentElement.addEventListener('mouseup',this.rightRemoveHandler);
                break;

            case 'se-resize':
                document.documentElement.addEventListener('mousemove', this.bottomRightHandler);
                document.documentElement.addEventListener('mouseup',this.bottomRightRemoveHandler);
                break;
    
            case 's-resize':
                document.documentElement.addEventListener('mousemove', this.bottomHandler);
                document.documentElement.addEventListener('mouseup',this.bottomRemoveHandler);
                console.log('heh');
                break;
    
            case 'sw-resize':
                document.documentElement.addEventListener('mousemove', this.bottomLeftHandler);
                document.documentElement.addEventListener('mouseup',this.bottomLeftRemoveHandler);
                break;
                    
            case 'w-resize':
                document.documentElement.addEventListener('mousemove', this.leftHandler);
                document.documentElement.addEventListener('mouseup',this.leftRemoveHandler);
                break;
        }
       
     }
 

    dragTopLeft(e) {
        this.element.style.width = (this.startWidth + (this.startX - e.clientX)) + 'px';
        this.element.style.height = (this.startHeight + (this.startY - e.clientY)) + 'px';
        this.element.style.top = (this.startTop - (this.startY  - e.clientY)) + 'px'
        this.element.style.left = (this.startLeft - (this.startX  - e.clientX)) + 'px'
    }
    dragTop(e) {
        this.element.style.top = (this.startTop - this.startY  + e.clientY) + 'px'
        this.element.style.height = (this.startHeight + this.startY - e.clientY) + 'px';
        console.log(this.startTop - this.startY  - e.clientY);
    }
    dragTopRight(e) {
        this.element.style.width = (this.startWidth + (e.clientX - this.startX)) + 'px';
        this.element.style.height = (this.startHeight + (this.startY - e.clientY)) + 'px';
        this.element.style.top = (this.startTop - (this.startY  - e.clientY)) + 'px'
        this.element.style.right = (this.startRight - (this.startX  + e.clientX)) + 'px'
    }
    dragRight(e) {
        this.element.style.width = (this.startWidth + e.clientX - this.startX) + 'px';
        this.element.style.height = (this.startHeight + e.clientY - this.startY) + 'px';
    }
    dragBottomRight(e) {
        this.element.style.width = (this.startWidth + e.clientX - this.startX) + 'px';
        this.element.style.height = (this.startHeight + e.clientY - this.startY) + 'px';
    }
    dragBottom(e) {
        this.element.style.height = (this.startHeight + e.clientY - this.startY) + 'px';
        }
    dragBottomLeft(e) {
        this.element.style.width = (this.startWidth + (this.startX - e.clientX)) + 'px';
        this.element.style.height = (this.startHeight + (e.clientY - this.startY)) + 'px';
        this.element.style.top = this.startTop + 'px';
        this.element.style.left = (this.startLeft - (this.startX  - e.clientX)) + 'px'
        
    }
    dragLeft(e) {
        this.element.style.right = this.startRight + 'px';
        this.element.style.width = (this.startWidth + this.startX - e.clientX ) + 'px';
        this.element.style.left = (this.startLeft - (this.startX - e.clientX)) + 'px'
    }

    
    stopTopLeftDrag(e) {
        document.documentElement.removeEventListener('mousemove', this.topLeftHandler);
        document.documentElement.removeEventListener('mouseup', this.topLeftRemoveHandler);
    }
    stopTopDrag(e) {
        document.documentElement.removeEventListener('mousemove', this.topHandler);
        document.documentElement.removeEventListener('mouseup', this.topRemoveHandler);
    }
    stopTopRightDrag(e) {
        document.documentElement.removeEventListener('mousemove', this.topRightHandler);
        document.documentElement.removeEventListener('mouseup', this.topRightRemoveHandler);
    }
    stopRightDrag(e) {
        document.documentElement.removeEventListener('mousemove', this.rightHandler);
        document.documentElement.removeEventListener('mouseup', this.rightRemoveHandler);
    }
    stopBottomRightDrag(e) {
        document.documentElement.removeEventListener('mousemove', this.bottomRightHandler);
        document.documentElement.removeEventListener('mouseup', this.bottomRightRemoveHandler);
    }
     stopBottomDrag(e) {
        document.documentElement.removeEventListener('mousemove', this.bottomHandler);
        document.documentElement.removeEventListener('mouseup', this.bottomRemoveHandler);
    }
    stopBottomLeftDrag(e) {
        document.documentElement.removeEventListener('mousemove', this.bottomLeftHandler);
        document.documentElement.removeEventListener('mouseup', this.bottomLeftRemoveHandler);
    }
    stopLeftDrag(e) {
        console.log('kkk');
        document.documentElement.removeEventListener('mousemove', this.leftHandler);
        document.documentElement.removeEventListener('mouseup', this.leftRemoveHandler);
    }
    
}