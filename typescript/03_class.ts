/*
 * @Author: 小明丶
 * @Date: 2019-07-11 10:26:32
 * @LastEditors: 小明丶
 * @LastEditTime: 2019-07-11 11:01:21
 * @Description: 类
 */

 class Animal{
    static name2:string; // 静态属性,使用 Animal.name2来访问而不是 this.name2
    public a:string;
    private b:string;//私有成员变量不可访问
    protected c:string = 'ccc'; //protected修饰符与 private修饰符的行为很相似，但有一点不同， protected成员在派生类中仍然可以访问
    constructor(a:string,b:string){
        this.a = a;
        this.b = b;
    }
 }

 let an = new Animal('a','b');

//  console.log(an.b); error


class Test{
    public a:number;
    //protected修饰构造函数，类似于java的抽象类不能直接被实例化，能被继承 
    protected constructor(a:number){
        this.a = a;
    }
}

// let t= new Test() //error

class Test2 extends Test{
    private b:number;
    readonly c:number;//只读属性必须在声明时或构造函数里被初始化。
    constructor(a:number,b:number){
        super(a)
        this.b = b;
        this.c = 123;
    }
    getB(){
        console.log(this.b);
        this.say()
    }
    private say(){
        console.log('hello');
    }
}


let t2 = new Test2(1,2)
t2.getB()
console.log(t2.a);
console.log(t2.c);


class Test3{
    // 参数属性
    constructor(readonly a:number){

    }
    //  上面的写法等价于
    // readonly a:number;
    // constructor(a:number){
        // this.a = a;
    // }
  
}


let t3 = new Test3(123)

console.log(t3.a);


// 抽象类
// 抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。 不同于接口，抽象类可以包含成员的实现细节。
abstract class Department {
    // 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。 
    // 抽象方法的语法与接口方法相似。 两者都是定义方法签名但不包含方法体。 然而，抽象方法必须包含 abstract关键字并且可以包含访问修饰符。
    abstract makeSound(): void;
    move(): void {
        console.log('roaming the earch...');
    }
}