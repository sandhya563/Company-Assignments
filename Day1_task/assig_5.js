// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.
// DO NOT allocate another 2D matrix and do the rotation.Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

let arr = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];
let elements = arr.length;
let store = 0;
let i;
let j;
for (i = 0; i < elements / 2; i++) {
  for (j = i; j < elements - 1 - i; j++) {
    store = arr[i][j];
    arr[i][j] = arr[elements - 1 - j][i];
    arr[elements - 1 - j][i] = arr[elements - 1 - i][elements - 1 - j];
    arr[elements - 1 - i][elements - 1 - j] = arr[j][elements - 1 - i];
    arr[j][elements - 1 - i] = store;
  }
}
console.log(arr, "matrix");

