// var n = window.prompt("請輸入金字塔的高度（行數）");
var aaa = '10';
for(var i=0;i<=aaa;i++){
	for(var j=0;j<i;j++){
	document.write("*");
    }
    document.write("<br>");
}
// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********

var aaa = '5';
// var n = window.prompt("請輸入金字塔的高度（行數）");
	for(var i=1;i<=aaa;i++){
        //打印空格  n-i 總層數-第幾層
	for(var j=1;j<=(aaa-i);j++){
	    document.write("&nbsp");
	}
	//打印*  2*(i-1)+1  2*(第幾層-1)+1
	for(var k=1;k<=(2*i-1);k++){
		document.write("*");
	}
	//換行
	document.write("<br>");
}

//     *
//    ***
//   *****
//  *******
// *********