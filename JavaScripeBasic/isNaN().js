// isNaN() 函式會判斷某個數值是不是 NaN。注意：在 isNaN 函式裡面，有個有趣的強制性規則。你可能會想改用在 ECMAScript 2015 導入的 Number.isNaN()。
function milliseconds(x) {
    if (isNaN(x)) {
      return 'Not a Number!';
    }
    return x * 1000;
  }
  
  console.log(milliseconds('100F'));
  // expected output: "Not a Number!"
  
  console.log(milliseconds('0.0314E+2'));
  // expected output: 3140