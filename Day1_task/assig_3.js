var matrix = [ [ 1, 3, 5, 7 ],[ 10, 11, 16, 20 ],[ 23, 30, 34, 50 ] ];
var target = 3;
var arrOfArrays = 3;
var elementsOfArray = 4;
function searchArr(arr, target){
    var low = 0;
    var high = elementsOfArray - 1;
    while (low <= high) {
        var mid = low + parseInt((high - low) / 2);
        if (arr[mid] == target)
            return true;
        if (arr[mid] < target)
            low = mid + 1;
        else
            high = mid - 1;
    }
    return false;
}
function matrixItems(matrix, target){
    var low = 0;
    var high = arrOfArrays - 1;
    while (low <= high) {
        var mid = low + parseInt((high - low) / 2);
        if (target >= matrix[mid][0] && target <= matrix[mid][elementsOfArray - 1])
            return searchArr(matrix[mid], target);
        if (target < matrix[mid][0])
            high = mid - 1;
        else
            low = mid + 1;
    }
    return false;
}
if (matrixItems(matrix, target)){

    console.log("true");
}else{
    console.log("false");
}
 