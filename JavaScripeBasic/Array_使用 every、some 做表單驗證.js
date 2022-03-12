some();
// Array.some 是用來檢查陣列裡面是否有一些符合條件。只要有一個以上符合條件就會回傳 true，全部都不是的話會回傳 false。

var ages = [3, 10, 18, 20];

function checkAdult(age) {
    return age <= 18;
}

console.log(ages.some(checkAdult));

every();
// Array.every 和 some 類似，不過要陣列裡面的所有東西都符合條件才會回傳 true，只要有一個不是就會回傳 false

var ages = [3, 10, 18, 20];

function checkAdult(age) {
    return age <= 90;
}

console.log(ages.every(checkAdult));


// 使用 every、some 做表單驗證

// 這兩個函式平常好像不會用到，但其實 every 可以用來做後端的表單驗證。比方說註冊時前端會傳來幾個欄位：user、password、gender、name、email，然後我們使用 koa 和 koa-body這兩個套件架後端，假設這些資料存在 ctx.request.body 裡面好了。
// 換句話說，ctx.request.body 含有這五個欄位。
// 這時就可以用 every 來檢查他們是不是都含有值：

if (Object.values(ctx.request.body).every(x => x !== undefined)) {
    // 欄位都不是空值
} else {
    // 有些欄位是空值
}

// 如果你擔心前端會少送幾個東西過來，騙過驗證的話，也可以這樣檢查：
const requirements = ['user', 'password', 'gender', 'name', 'email'];
if (requirements.every(x => ctx.request.body[x] !== undefined)) {
    // 必要的欄位都不是空值
} else {
    // 有些必要的欄位是空值
}

// 這樣就可以確保這五個欄位都不是空的了。

// 同樣 some 也可以用來這樣檢查。假設 facebook、twitter、github 的社群帳號他一定要有留至少一個，不能都不填的話，就可以這樣做：

const socialAccounts = ['facebook', 'twitter', 'github'];
function scoreFb () {
    if (socialAccounts.some(x => ctx.request.body[x] !== undefined)) {
        // 至少有填寫一個社群帳號
    } else {
        // 完全沒有填寫社群帳號
    }
}

scoreFb();