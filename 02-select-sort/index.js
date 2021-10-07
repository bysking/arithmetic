function selectSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i; // 记录当前最小索引

    // 从剩余的数组里面寻找更小的位置，如果有的话
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        minIndex = j; // 找到了就更新最小位置
      }
    }

    // 然后进行交换
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}
let arr = [2, 4, 1, 2, 6, 5, 7, 6];
let resArr = selectSort(arr);
console.log(resArr);
