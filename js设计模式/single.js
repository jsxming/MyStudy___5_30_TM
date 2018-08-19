// 单例模式
//基本概念：
//只允许实例化一次的对象类，有时也用一个对象来规划一个命名空间
//1.惰性单例
let obj = (function(){
    var _instace = null;
    function Single(){
        return {
            publicMethod:function(){},
            publicPortotyep:"hello"
        }
    }
    return function(){
        if(!_instace){
            _instace = new Single();
        }

        return _instace;
    }
})()
console.log(obj().publicPortotyep) //hello

//2.使用单例模式创建私有变量
let conf  = (function(){
    //私有变量
    let test = {
        MAX:10,
        MIN:1
    }
    return {
        //取值方法
        get(name){
            return test[name] ? console.log(test[name]) : console.log("没有此属性");        

        }
    }
})()
conf.get("MAX")