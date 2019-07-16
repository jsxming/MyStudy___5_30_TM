/*
 * @Author: 小明丶
 * @Date: 2019-07-10 10:37:53
 * @LastEditors: 小明丶
 * @LastEditTime: 2019-07-10 11:36:09
 * @Description: ts 类型
 */
// 默认情况下null和undefined是所有类型的子类型
let u: undefined = undefined;
let n: null = null;

let isBoolean:boolean = false;
let isString:string = 'str';
let isNumber:number = 1;
let isNumberArr:number[] = [1,2,3];

// 元组 tuple
let x:[string,number]
x= ['1',1]
// x= [1,'1'] error



//枚举
// 默认值0开始递增
enum Color {Red, Green, Blue}



// any 任意类型它允许你在编译时可选择地包含或移除类型检查
let anyType:any = 1;



//void类型像是与any类型相反，它表示没有任何类型
function voidFN():void{

}


// never类型表示的是那些永不存在的值的类型
// Never使用的三种情况

// 返回never的函数必须存在无法达到的终点
function errorFN(msg:string):never{
    throw new Error(msg)
}
function dieWhile():never{
    while(true){
        
    }
}

// 推断的返回值类型为never
function fail() {
    return errorFN("Something failed");
}


//object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
let obj:object = {}


//类型断言

let anyStr:any= '.....';
let num:number = (<string>anyStr).length;//断言anyStr是字符串类型 尖括号写法
let num2:number = (anyStr as string).length;


// ReadonlyArray类型：确保数组创建后再也不能被修改：
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error!