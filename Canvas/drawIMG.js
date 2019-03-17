let imgA = {
    template:`
        <div>
            <div>{{x}} --- {{y}} {{scale}}</div>
            <input v-model="scale" type="range" min="0.1" max="3.0" step="0.1" />
            <img src="./house.png" alt="" ref="img" @mousemove="move($event)" :style="style">
        </div>
    `,
    data(){
        return {
            x:0,
            y:0,
            parentLeft:0,
            parentTop:0,
            scale:1,
            img:{
                style:{}
            },
        }
    },
    watch:{
        scale(newV){
            // let w = parseInt(this.img.style.width);
            // let h = parseInt(this.img.style.height);
        
        }
    },
    computed: {
        style(){
            return {
                position:"absolute",
                transform:`scale(${this.scale})`,
                width:`${this.img.style.width*this.scale}px`,
                height:`${this.img.style.height*this.scale}px`,
            }
        }
    },
    methods: {
        move(event){
            let x = event.clientX,
                y = event.clientY,
                img = event.currentTarget,
                parentNode = img.parentNode;
            this.x = x;
            this.y = y;
            let  parentPoint = parentNode.getBoundingClientRect();
            let p = img.getBoundingClientRect();
            img.style.left = (x-parentPoint.left - p.width/2) + 'px';
            img.style.top = y -parentPoint.top- p.height/2 + 'px';
        }
    },
    mounted(){
        // this.img = this.$refs.img;
    }
}


new Vue({
    el:"#app",
    components:{
        imgA
    },
    data(){
        return {
            range:0,
            context:null,
            img:null,
            w:0,
            h:0,
            scale:0,
            MIN:1.0,
            MAX:3.0,
            rotate:0,
            canvas:null,
            src:''
        }
    },
    methods: {
        drawImg(e){
            let img = e.currentTarget;
            this.src = img.src;
            // this.context.clearRect(0, 0, this.canvas.width,this.canvas.height);
            this.context.drawImage(img, 0,0);
                        
        },
        rotateC(v=this.rotate){
            this.context.rotate(Math.PI / 180 * v);
            this.drawImg();
        },
        createImg(){
            // html2canvas(this.$refs.test).then(function(canvas) {
            //     document.body.appendChild(canvas);
            // });
            let box = this.$refs.test;
            let imgs = box.getElementsByTagName('img');
            let imgList = Array.from(imgs);
            
            let c = document.createElement('canvas');
            c.width = parseInt(box.style.width);
            c.height =parseInt(box.style.height);

            console.log(box.style.width,box.style.height);
            let context = c.getContext('2d');

            imgList.forEach(item=>{
                console.log(item.offsetLeft)
                context.drawImage(item,item.offsetLeft,item.offsetTop,item.width,item.height);
            });
            let data = c.toDataURL();
            console.warn(data);
            document.body.appendChild(c);
        },
        drag(event){
            let x = event.clientX;
                y = event.clientY;
                el = event.currentTarget;
            console.warn(el,x,y);

            let p = el.getBoundingClientRect();
            let css = getComputedStyle(el);
            let w2 = parseInt(css.width);
            let h2 = parseInt(css.height);
            el.style.left = x-p.left-w2/2+'px';
            el.style.top = y-p.top-50-h2/2+'px';
            // el.offsetLeft
        },
        // getPoint(canvas){
        //     let p = canvas.getBoundingClientRect();

        //     return {
        //         x,y
        //     }

        // }
    },
    mounted() {
    //   this.canvas = this.$refs.canvas,
    //   this.context = this.canvas.getContext('2d');
    },
})