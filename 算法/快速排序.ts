/*
 * @Author: 小明丶
 * @Date: 2019-07-10 08:07:10
 * @LastEditors: 小明丶
 * @LastEditTime: 2019-07-10 08:35:28
 * @Description: 快速排序算法
 */

 /**
 * @description: 交换元素位置
 * @param {i,j} 数组元素
 * @return: 
 */
function swap(i: number, j: number) {

}


/**
 * @description: 从A数组中选取主元
 * @param {A,left,right} 
 * @return: 
 */
function median(arr: number[], left: number, right: number): number {
    let center = (left + right) / 2;
    if (arr[left] > arr[center]) {
        swap(arr[left], arr[center])
    } else if (arr[left] > arr[right]) {
        swap(arr[left], arr[right])
    } else if (arr[center] > arr[right]) {
        swap(arr[center], arr[right])
    }
    swap(arr[center], arr[right - 1])
    return arr[right - 1]
}



// 插入排序 
function insertion_sort() {

}

/**
 * @description: 
 * @param {arr} 
 * @param {cutoff} 数据量少时使用插入排序更快
 * @return:
 */
function quick_sort(A: number[], left: number, right: number, cutoff?: number): void {
    if (cutoff <= right - left) {
        let Pivot = median(A, left, right);
        let i: number = left;
        let j: number = right - 1;
        for (; ;) {
            while (A[++i] < Pivot) { }
            while (A[--j] > Pivot) { }
            if (i < j) {
                swap(A[i], A[j])
            } else {
                break
            }
        }
        swap(A[i], A[right - 1]);
        quick_sort(A, left, i - 1);
        quick_sort(A, i + 1, right);
    } else {
        // 小规模数据使用插入排序
        insertion_sort()
    }
}