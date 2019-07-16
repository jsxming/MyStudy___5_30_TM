/*
 * @Author: 小明丶
 * @Date: 2019-07-10 11:24:14
 * @LastEditors: 小明丶
 * @LastEditTime: 2019-07-11 11:00:58
 * @Description: 接口
 */

 interface Demo{
     a:string;
     b?:number; //可选属性
     readonly c:boolean; //只读属性，再次被赋值会报错
}


let demo_obj:Demo = {
    a:'asdf',
    b:123,
    c:true,
    // q:'asdf' //不能多加接口中不存在的属性
}


//接口也可以描述函数类型。
interface fn{
    (a:string,b:number):void
}


// 接口可以继承
interface Base{
    a:string;
}

interface Base2{
    b:string;
}

interface Testi extends Base,Base2{
    c:string
}

let test_obj:Testi ={
    a:'123',
    b:'123',
    c:'123'
}

// readonly vs const
// 最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。
// 做为变量使用的话用 const，若做为属性则使用readonly