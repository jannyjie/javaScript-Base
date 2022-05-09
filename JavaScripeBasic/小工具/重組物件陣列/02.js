var arr = [2, 5, 6, 3, 8, 9];

var newArr = arr.map(function (val, index) {
    return {
        key: index,
        value: val * val
    };
})

console.log(newArr)

// [[object Object] {
//     key: 0,
//     value: 4
// }, [object Object] {
//     key: 1,
//     value: 25
// }, [object Object] {
//     key: 2,
//     value: 36
// }, [object Object] {
//     key: 3,
//     value: 9
// }, [object Object] {
//     key: 4,
//     value: 64
// }, [object Object] {
//     key: 5,
//     value: 81
// }]


let users = [{
        firstName: "Susan",
        lastName: "Steward"
    },
    {
        firstName: "Daniel",
        lastName: "Longbottom"
    },
    {
        firstName: "Jacob",
        lastName: "Black"
    }
];

let userFullnames = users.map(function (element) {
    return {
        id: `${element.firstName} ${element.lastName}`
    };
})

console.log(userFullnames);

// [
//     [object Object] {
//         id: "Susan Steward"
//     },
//     [object Object] {
//         id: "Daniel Longbottom"
//     },
//     [object Object] {
//         id: "Jacob Black"
//     }
// ]