let match2 = /^((http|https):\/\/)?(([A-Za-z0-9]+-[A-Za-z0-9]+|[A-Za-z0-9]+)\.)+([A-Za-z]+)[/\?\:]?.*$/;

let url1 = 'https://www.taobao.com/?spm=2013.1.0.0.a7423a1di051yg' // true
let url3 = '我我我午我' // false

let vol2 = match2.test(url3);

console.log(vol2);


////////////////////////////////////$Recycle.Bin

function testUrl(url) {
    let match2 = /^((http|https):\/\/)+([\w\-])+\.(tmall|taobao).com/;
    let testVol = match2.test(url);
    return testVol;
}

let url = 'https://www.taobao.com/?spm=2013.1.0.0.a7423a1di051yg' ;// true
console.log(testUrl(url));


//////////////////////////$Recycle.Bin

function httpString(s){
    var reg = /((http:\/\/|https:\/\/)((\w|=|\?||.|\/|&|-)+))/g;

    s = s.match(reg);
    return s;
}