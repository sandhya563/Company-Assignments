/*1. Write a method void printArray(int[][]arr)
Prints array elements clock wise and anti-clockwise alternatively.

Input : 
 1 2 3
 4 5 6
 7 8 9

Output :
1 2 3 6 9 8 7 4 5   
3 2 1 4 7 8 9 6*/

arr = [[1, 2, 3],[4,5,6],[7, 8, 9]]; 
let ans = [];
var nrow = arr.length;
var ncol = arr[0].length;
var i = 0;
var j = 0;
for (j; j <= ncol - 1; j++) {
    ans.push(arr[i][j]);
}
j = j - 1;
for (i = 1; i < nrow; i++) {
    ans.push(arr[i][j]);

}
i = i - 1;
for (j = ncol - 2; j >= 0; j--) {
    ans.push(arr[i][j]);
}
i = i - 1;
for (j = 0; j < ncol - 1; j++) {
    ans.push(arr[i][j]);
}
var nRow = arr.length;
var  nCol = arr[0].length;
let k = 0;
let l = 0;
for (l = nCol - 1; l >= 0; l--) {
    ans.push(arr[l][k]);
}
l = 0;
for (k = 1; k <= nRow - 1; k++) {
    ans.push(arr[k][l]);
}
k = k - 1;
for (l = 1; l <= nCol - 1; l++) {
    ans.push(arr[k][l]);
}
k = k - 1;
for (l = nCol - 1; l > 0; l--) {
    ans.push(arr[k][l]);
}
console.log(ans.join(" "));
