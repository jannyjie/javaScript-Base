// var aa = [{
//     id: '1',
//     name: [{
//             name: 'janny'
//         },
//         {
//             name: 'jack'
//         }
//     ],
//     kk: ',_大學_01'
// }]

// var qq = []
// aa.forEach((element, index, array) => {
//     let aa = element.kk
//     var bb = aa.split(",");
//     var cc = aa.split("_");
//     var dd = cc.splice(1)

//     let ary = {};
//     ary.area = dd[0];
//     ary.num = dd[1];
//     element.kk = ary

//     return element
// });

// console.log(aa)

var aa = [{
    id: '1',
    name: [{
            name: 'janny'
        },
        {
            name: 'jack'
        }
    ],
    kk: ',_大學_01'
}]

var qq = []
aa.forEach((element, index, array) => {
    let aa = element.kk
    var bb = aa.split(",");
    var cc = aa.split("_");
    var dd = cc.splice(1)

    let ary = {
        area: dd[0],
        num: dd[1],
    };

    element.kk = ary

    return element
});

console.log(aa)