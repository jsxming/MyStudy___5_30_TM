let el = 76;
let arr = new Set();
for (let i = 0; i < 1000000; i++) {
    arr.add(parseInt(Math.random() * 1000000));
}
arr = [...arr];


//二分查找
function binaryBearch(el, arr) {
    // 二分查找的元素必须被排序！
    arr = arr.sort((a, b) => {
        return a - b;
    });
    let center, //中间指针
        index = 0, //查找次数计数
        left = 0, //左指针
        right = arr.length - 1; //右指针
    while (left <= right) {
        center = parseInt((left + right) / 2);
        ++index;
        if (el > arr[center]) {
            left = center + 1;
        } else if (el < arr[center]) {
            right = center - 1;
        } else {
            console.warn(`在${arr.length}个元素中查找了：${index}次`);
            return console.warn(`下标在${center}`);
        }
    }
    return console.log(`arr中没有{${el}}这个元素！`);
}