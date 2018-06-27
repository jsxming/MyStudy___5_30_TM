//惰性模式：减少每次代码执行时的重复性的分支判断，通过重新定义原对象来屏蔽原对象的分支判断
//场景：每次调用这种类似判断的函数都会判断，实际上只判断第一次就可以知道浏览器的能力，
//所以，在第一次判断之后应该重新定义该函数，而不是继续做之前判断过的代码
function addListener(dom,type,fn){
    if(dom.addEventListener){
        dom.addEventListener(type,fn,false)
    }else if(dom.attachEvent){
        dom.attachEvent('on'+type,fn)
    }else{
        dom['on'+type] = fn;
    }
}

//xhr 应用场景示例1
//加载时损失性能，但第一次调用时不损失
let createXHR = (function(){
    if(typeof XMLHttpRequest !== 'undefined'){
        return new XMLHttpRequest()
    }else if(typeof ActiveXObject !== 'undefined'){
        return function(){
            //do somthing...
        }
    }else{
        return function(){
            throw new Error('不支持xhr')
        }
    }
})()

//xhr 应用场景示例2
//加载时不损失性能，但第一次调用损失
function createXHR2(){
    if(typeof XMLHttpRequest !== 'undefined'){
        //重写该函数
        createXHR2 = function(){
            return new XMLHttpRequest();
        }
    }else if(typeof ActiveXObject !== 'undefined'){
        //重写该函数
        createXHR2 = function(){
            return new ActiveXObject();
        }
    }else{
        createXHR2 = function(){
            throw new Error('不支持xhr')
        }
    }
}