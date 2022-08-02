// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. 
// The function should find all triplets in the array that sum up to the target sum and return a two-dimensional array of all these triplets. 
// The numbers in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with respect to the numbers they hold. 
// If no three numbers sum up to the target sum, the function should return an empty array

function threeNumberSum(array, targetSum){
    let emptyArray = [];
    // let arr = [];
    for (var i = 0 ;i < array.length; i++){
        var firstNum = array[i]
        for (var j = i+1; j < array.length; j++){
            console.log(j,"j");
            secondNum = array[j]
            for (var k = j+1; k < array.length; k++){
                thirdNum = array[k]
                if (firstNum + secondNum + thirdNum == targetSum)
                    emptyArray.push([firstNum, secondNum, thirdNum])
                // if(!arr.includes(emptyArray[i])){
                //     arr.push(emptyArray[i])
                // } 
            }
        }
    }
    return emptyArray
}
const array = [1,2,3,4,5,6,7,8,9];
const targetSum = 10;
console.log(threeNumberSum(array, targetSum))




  
