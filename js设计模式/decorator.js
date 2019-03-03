//装饰者模式
//在不改变原有对象的基础上，通过对其进行包装拓展（添加方法或属性），使原有对象可以满足更复杂的用户需求

let decorator = function(id,fn){
    let element = document.getElementById(id);
    if(typeof element.onclick == "function"){
        //缓存事件原有回调函数
        let oldClikckFn = element.onclick;
        //为事件源定义新的事件
        element.onclick = function(){
            oldClikckFn();
            //执行新增功能
            fn();
        }
    }else{
        element.onclick = fn;
    }
    //还可以做其他事情
}
