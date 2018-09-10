let obj1 = {
    name:"TM",
    value:"vvvv",
    hello:"hello"
}




let pxy = new Proxy(obj1,{
    // 覆写设置一个属性值
    set(target,key,value,receiver){
        // obj1没有该key
        console.log(target === obj1);
        if(!target.hasOwnProperty(key)){
            //该key只能是数字
            if(isNaN(key)){
                throw new Error("KEY必须是数字")
            }
        }
        return Reflect.set(target,key,value,receiver)
    },
    // 覆写读取一个属性值
    get(target,key,receiver){
        if(!(key in receiver)){
            console.warn("该属性不存在");
            return;
        }
        return Reflect.get(target,key,receiver)
    },
    //覆写 in 操作符 隐藏已有属性
    has(target,key){
        if(key === 'value'){
            console.warn("没有该属性!");
            return;
        }else{
            return Reflect.has(target,key);
        }
    },
    // 覆写 delete 操作符
    deleteProperty(target,key){
        if(key === 'hello'){
            console.log('不能删除hello属性！')
            return ;
        }else{
            return Reflect.deleteProperty(target,key);
        }
    }

})

// export default pxy