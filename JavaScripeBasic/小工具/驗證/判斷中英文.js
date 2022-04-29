     
       
function testUrl(url) {
    let match2 = /^[\u4e00-\u9fa5]+$|^[a-zA-Z\s]+$/;
    let testVol = match2.test(url);
    return testVol;
}

let url = '蔣怡潔' ;// true
let url1 = 'janny,' ;// true
console.log(testUrl(url));
          