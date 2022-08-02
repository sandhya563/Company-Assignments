// Write a program to find the smallest number divisible by all the numbers between 1 to 9.
// var i;
// var j;
// for(i = 1;; i++){
//     var flag = 0
//     for(j=1; j<=9; j++){
//         if(i % j !=0){
//             flag = 1;
//             continue
//         }
//         if(flag == 1){
//         }
//     }
//     console.log(i, j , flag);
// }

var i;
var j;

for (i = 1; ; i++) {
    console.log(i, "ii");
  for (j = 1; j <= 9; j++) {
    if (i % j != 0) {
        console.log(i , j , "number");
      break;
    }
    if (i % j == 0 && j == 20) {
      console.log(i, "smallest");
      break;
    }
  }
}




