// an object can be a property of another object

let Lize = {
    name: 'Lize Wang',
    talk(){
        console.log("Wilson is my husband.");
    }
}

let Wilson = {
    name: 'Wilson Ren',
    spouse: Lize,
    walk(){
        console.log("I am walking on the street.");
    }
}

Wilson.spouse.talk(); // Wilson is my husband.