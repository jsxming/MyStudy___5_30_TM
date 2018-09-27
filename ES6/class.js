// 一：ES6中的类
/**
 * 基本概念：
 *  /类声明与let const 声明类似存在于临时死区中，不能被提升！
 *  /类声明的代码强制在严格模式下运行！
 *  /类中所有方法都是不可枚举的！
 *  /不能用new 调用类中不包含[Constouct] 的方法！
 *  /使用除关键字new以外的方式调用类会报错！
 *  /类中不可修改类名！
 *  /typeof 类名 返回的是 "function"
 */     
// 2.类声明
class Person{
    constructor(name){
        this.name = name
    }
    // 等价于Person.prototype.say()
    say(){
        console.log(this.name)
    }
}

// 3.类表达式
let Person2 = class{
    constructor(name){
        this.name = name;
    }
}

// 4.类命名表达式
let Person3 = class P3{
    constructor(name){
        this.name = name;
    }
}
console.log(typeof Person3) //function
console.log(typeof P3) //undefined P3标识符只能在类内部使用！在外部此变量是undefined

// 5.将类传入函数中
function CreateClass(clas){
    return new clas();
}
let Person4 = CreateClass(class{
    constructor(name){
        this.name = name;
    }
    say(){
        console.log(this.name)
    }
})

// 6.类的立即调用
let Person5 = new class{
    constructor(name){
        this.name = name;
    }
    sayName(){
        console.log(this.name);
    }
}("TM");
Person5.sayName();

// 7.在类的原型上定义访问器属性
class Human {
    constructor(name){
        this.name = nanme;
    }
    get name(){
        return "Hello" + this.name
    }
    set name(value){
        this.name = value + "---"; 
    }
}

// 8.可计算成员属性名
let str = "hello";
class Human2{
    constructor(name){
        this.name = name;
    }
    [str](){
        console.log(this.name)
    }
}

//9.类中的生成器方法(任何方法都可以定义为生成器方法)
class Human3{
    constructor(){
        this.arr = [1,2,3]
    }
    // 生成器
    *createIterator(){
        yield 1;
        yield 2;
        yield 3;
    }
    // 默认迭代器
    *[Symbol.iterator](){ 
        yield *this.arr.values();
    }

}
let h1 = new Human3();
h1.createIterator();
for(let item of h1){
    console.log(item) //1,2,3
}

//10.静态成员
class Human4{
    constructor(name){
        this.name = name;
    }
    // 不可在实例中访问静态成员
    static say(name){
        return new Human4(name);
    }
}

// 11.类的继承
class Per{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    getName(){
        console.log(this.name)
    }
    // 子类也会继承这个静态方法
    static getAge(){
        console.log("age")
    }
}

// class Me extends Per{ } // 等价于下面的代码
class Me extends Per{
    constructor(...args){
        super(...args)
    }
    // 子类的方法总会覆盖父类的方法
    getName(){
        console.log("TM")
    }
}

// 12.继承内建对象 Array,Set,Map等等
class Myarr extends Array{
    // 此时Myarr对象便有了Array的所有功能！传统的继承无法实现这种功能
}

// 13.在类中使用new.target属性
class Shape{
    constructor(){
        if(new.target === Shape){
            console.error("此类不能被实例化，必须被继承！")
        }else{
            console.log(new.target);
        }
    }
}

class Angle extends Shape{

}
let shape = new Shape();
let angle = new Angle();