
// 获取相对于窗口的坐标转换位canvas的坐标
function getCanvasPoint(canvas,x,y){
    let p = canvas.getBoundingClientRect();
    return {
        x:(x-p.left)*(canvas.width/p.width),
        y:(y-p.top)*(canvas.height/p.height),
    }
}




new Vue({
    el:"#app",
    data(){
        return {
            canvas:null,
            context:null,
            w:0,
            h:0,
            imgMap:new Map(),
            imgList:[],
            testsrc:''
        }
    },
    methods: {
        getSrc(){
            this.testsrc = this.canvas.toDataURL();
            
        },
        drawImg(event){
            let el = event.currentTarget,
                p = el.getBoundingClientRect(),
                x =0,
                y=0;
            this.context.drawImage(el, x, y,p.width,p.height);
            // this.imgMap.set(el.dataset.type,{
            //     el,
            //     x,
            //     y,
            //     width:p.width,
            //     height:p.height,
            //     type:el.dataset.type
            // });
            this.imgList.push({
                el,
                x,
                y,
                width:p.width,
                height:p.height,
                type:el.dataset.type
            })
        },
        startMove(event){
            let p = getCanvasPoint(this.canvas,event.clientX,event.clientY);

            // this.imgMap.forEach((v,key)=>{
                // this.context.rect(v.x, v.y, v.width,v.height);
                // if(this.context.isPointInPath(p.x, p.y)){
                //     console.log("下方有图片");
                //     this.context.clearRect(v.x, v.y, v.width, v.height);
                //     let item = this.imgMap.get(v.type);
                //     item.x = p.x;
                //     item.y = p.y;
                //     this.context.drawImage(item.el,p.x,p.y,item.width,item.height);
                // }
            // })

            for (let index = 0; index < this.imgList.length; index++) {
                const v = this.imgList[index];
                this.context.rect(v.x, v.y, v.width,v.height);
                if(this.context.isPointInPath(p.x, p.y)){
                    
                    break;
                }
            }

            
        }
    },
    mounted() {
        this.canvas = this.$refs.canvas;
        this.context = this.canvas.getContext('2d');
        this.w = this.canvas.width;
        this.h = this.canvas.height;

    },
})