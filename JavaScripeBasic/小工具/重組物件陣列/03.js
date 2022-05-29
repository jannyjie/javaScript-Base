var aa = ',_大學_01';
var bb = aa.split(",");
var cc = aa.split("_");
var dd = cc.splice(1)


dd.map(function (element) {
    element = {
        aa: element[0],
        bb: element[1],
    }
    return element;
});

console.log(dd);