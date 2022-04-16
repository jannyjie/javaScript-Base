var str = 'KJsdkjkflpaLIUsjk';

console.log(str.toLowerCase()); // "kjsdkjkflpaliusjk"
console.log(str.toUpperCase()); // "    

// 第一個字母開頭大寫
function capFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}

console.log(capFirst('i am janny'));

// 一句話切成字串
let learnCoding = 'learn to code for free with freeCodeCamp';
let splitLearnCoding = learnCoding.split(" ");

let capSplitLearnCoding = splitLearnCoding.map(word => {
    return word[0].toUpperCase() + word.slice(1);
})

console.log(capSplitLearnCoding);
// ["Learn", "To", "Code", "For", "Free", "With", "FreeCodeCamp"]



// 每個字母第一個大寫
function capFirstLetterInSentence(sentence) {
    let words = sentence.split(" ").map(word => {
        return word[0].toUpperCase() + word.slice(1);
    })
    return words.join(" ");
}

console.log(capFirstLetterInSentence("i am learning how to code"));