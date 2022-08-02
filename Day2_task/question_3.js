//  Pattern 1
let right = 7;
let string = "";
let left = 0;
for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    if (j === right) {
      string += "/";
    } else if (j === left) {
      string += "\\";
    } else {
      string += "*";
    }
  }
  string += "\n";
  left++;
  right--;
}
console.log(string);


// Pattern 2  Reverse  pramid triangles
let n = 3;
let str = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    str += " ";
  }
  for (let k = 0; k < (n - i) * 2 - 1; k++) {
    str += "*";
  }
  str += "\n";
}
for (let i = 2; i <= n; i++) {
  for (let j = n; j > i; j--) {
    str += " ";
  }
  for (let k = 0; k < i * 2 - 1; k++) {
    str += "*";
  }
  str += "\n";
}
console.log(str);
