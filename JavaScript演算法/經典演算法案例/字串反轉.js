const reversel = str => str.split("").reverse().join("");

const reverse2 = str => {
    let result = "";
    for(let ch of str) result = ch + result;
    return result;
}

console.log(reversel('JavaScript 基礎： 綜合題目練習Lv1。'));
console.log(reverse2('JavaScript：題目練習| by 耳朵'))

function reverse (str) {
    if (str === "") {
        return "";
    } else {
        return reverse(str.substr(1)) + str.charAt(0);
    }
}

let reverseStringIs = reverse("adam")
console.log(reverseStringIs)