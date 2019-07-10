// 冒泡排序
// 时间复杂度O(n2) n的平方 
let arr = [2,5,1,10,21,32];

for (let index = 0; index < arr.length; index++) {
    // console.log(arr);
    for (let k = 0; k < arr.length-index; k++) {
        console.log(arr[k],arr[k+1]);
        if(arr[k]>arr[k+1]){
            let v = arr[k];
            arr[k] = arr[k+1];
            arr[k+1] =v;
        }
    }
}

console.log(arr);