//函数防抖
let debounce = function(method,delay){
    var timer=null;
    return function(){
        var context=this, args=arguments;
        clearTimeout(timer);
        timer=setTimeout(function(){
            method.apply(context,args);
        },delay);
    }
}


// 函数节流（throttle）
/**
 * @param  {节流执行的函数} method
 * @param  {时间} duration
 * @param  {节流函数this指向} context
 */
function throller(method,duration,context){
    var  begin=new Date();
    return function(){
        var args=arguments, current=new Date();
        if(current-begin>=duration){
             method.apply(context,args);
             begin=current;
        }
    }
}

let a ={
    msg:"aa",
    test(){
        console.log(this);
    }
}


window.addEventListener("mousemove",throller(a.test,500,a))

window.addEventListener("mousemove",debounce(a.test,1000))