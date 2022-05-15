// 01
// function getData(name, callback){
//     setTimeout(() => {
//         callback({name: name, age: Math.floor(Math.random() * 20), major: 'cs'});
//     }, 2000);
// }

// console.log("start");

// getData("janny", (obj) => {
//     console.log(obj);
// })

// console.log("end");

// 02
function getData(name, age, callback){
    setTimeout(() => {
        callback({name: name, age: age, major: 'cs'});
    }, 2000);
}

function getMovies(age, callback){
    if(age < 12){
        setTimeout(() => {
            callback("cartoon movies");
        }, 1500);
    }else if(age < 18){
        setTimeout(() => {
            console.log("teen movies");
        }, 1500);
    }else{
        setTimeout(() => {
            callback("adult movies");
        }, 1500);
    }
}

getData("janny", 30, (obj) => {
    console.log(obj);
    getMovies(obj.age, (str) => {
        console.log(str);
    })
});
