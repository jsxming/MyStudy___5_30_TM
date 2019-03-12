// 简单版本桶排序 时间复杂度O(M+N+M+N) = O( 2*(M+N) ) 忽略较小的常数 = O(M+N)
// 缺点：只能排整数，并且非常浪费空间
let arr = [5, 3, 5, 2, 8,123,1,23,412];//要被排序的数组
let list = [];//桶

// 413 一定要比数组中的最大值大1（412）
for (let i = 0; i < 413; i++) {  //执行m次:413
    list.push(0);
}

arr.forEach(index => { //执行n次
    list[index]++;
})

let num = [];

list.forEach((item, index) => { //执行m次:413
    let v = item;
    if (item > 0) {
        for (let k = 0; k < item; k++) {//执行n次:9
            num.push(index);
        }
    }
})

console.warn(list)
console.warn(num)