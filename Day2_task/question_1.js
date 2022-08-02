// Write a program to remove duplicate values from an array and returns an array of unique values. int[] removeDuplicates(int[]values)

const array = [1,2,3,45,24,3,8,9,7,8,9,5,3,2,];
let emptyArray = [];
let i ;
for(i = 0; i < array.length; i++){
    if(!emptyArray.includes(array[i])){
        emptyArray.push(array[i])
    }
}
console.log(emptyArray, "unique");