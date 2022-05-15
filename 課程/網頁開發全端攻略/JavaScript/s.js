function getData(name) {
    if(name == 'Wilson'){
        return new Promise((resolve, reject) => {
            resolve({name: "Wilson Ren", age: Math.floor(Math.random() * 20)});
        })
    }else{
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error("Not allowed to access data."))
            }, 2000);
        })
    }
};

function getMovies(age){
    if(age < 12) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({test: "cartoon"})
          }, 1500);
        })
    }else if (age < 18){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({text: "teen movies"})
            }, 1500);
        })
    }else{
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error("not allowed. Too old."))
            }, 1500);
        })
    }
}

getData("Jenny")
    .then((obj) => {
        console.log(obj);
        return getMovies(obj.age);
    })
    .then((meg) => {
        console.log(meg.text);
    })
    .catch((e) => {
        console.log(e);
    })