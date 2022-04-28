"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// ------------- 基本類型 -----------
const a = 'Jenny';
console.log(a);
const b = 'Jenny';
let c; // 如果宣告空的建議還是寫個型別比較如果不為空可不寫型別
c = 'Jack';
let num = 1000;
let boo = true;
let n = null;
let un = undefined;
// any 可以放各種不同的類型都不會出錯
const any = 'Jenny';
let numAny = 1000;
let booAny = true;
let nAny = null;
let unAny = undefined;
// ------------- 陣列 -----------
let arr = ['aa', 'bb'];
let arr1 = [['aa', 'bb']];
// ------------- 元祖 -----------
let tuple = [1, 'a', true];
let tuple2 = [['aa', 'a'], ['11', '22']];
// ------------- Enum 枚舉(變數做分類) -----------
// 直播中 API -> 獲取直播教學
// 成功  失敗  直播中
// 0     -1    1
var LiveStatus;
(function (LiveStatus) {
    LiveStatus[LiveStatus["SUCCESS"] = 0] = "SUCCESS";
    LiveStatus[LiveStatus["FAIL"] = -1] = "FAIL";
    LiveStatus[LiveStatus["STREAMING"] = 1] = "STREAMING";
})(LiveStatus || (LiveStatus = {}));
const Status = LiveStatus.SUCCESS;
// ------------- Union (可同時給予裡種類型) -----------
let aaa;
aaa = 1000;
aaa = 'str';
let a1;
a1 = 999;
a1 = 'str';
const obj = {
    name: '1',
    desc: 'AA'
};
const obj2 = {
    name: '1',
    desc: 'AA',
    age: 10
};
// ------------- function -----------
// 參數類型
// function hello () {}
function hello(a, b) {
    return a + b;
}
function hello2(a, b) {
    return Number(a) + Number(b);
}
function hello3(a, b, c) {
    return 100;
}
// undefined  a?: string 必須放置最後並且不一定要使用 會回傳
function test2(a) {
    console.log(a);
}
function hello4(name, age) {
    if (age === undefined)
        return -1;
    test2(age);
    return name + a;
}
// 箭頭函式
const func = () => { };
const func2 = () => {
    return 1;
};
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = yield res.json();
    });
}
const data1 = {
    'userId': 1,
    'id': 1,
    'title': 'string',
    'completed': false
};
// 假設 data1 是動態可用這個方式 把其他規則 接起來
const beta = data1;
// ------------- 斷言 as  unknown -----------
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLGlDQUFpQztBQUNqQyxNQUFNLENBQUMsR0FBVyxPQUFPLENBQUM7QUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUVmLE1BQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQztBQUNsQixJQUFJLENBQVMsQ0FBQyxDQUFDLDZCQUE2QjtBQUM1QyxDQUFDLEdBQUcsTUFBTSxDQUFDO0FBRVgsSUFBSSxHQUFHLEdBQVcsSUFBSSxDQUFDO0FBQ3ZCLElBQUksR0FBRyxHQUFZLElBQUksQ0FBQztBQUN4QixJQUFJLENBQUMsR0FBUyxJQUFJLENBQUM7QUFDbkIsSUFBSSxFQUFFLEdBQWMsU0FBUyxDQUFDO0FBRTlCLHNCQUFzQjtBQUN0QixNQUFNLEdBQUcsR0FBUSxPQUFPLENBQUM7QUFDekIsSUFBSSxNQUFNLEdBQVEsSUFBSSxDQUFDO0FBQ3ZCLElBQUksTUFBTSxHQUFRLElBQUksQ0FBQztBQUN2QixJQUFJLElBQUksR0FBUSxJQUFJLENBQUM7QUFDckIsSUFBSSxLQUFLLEdBQVEsU0FBUyxDQUFDO0FBRzNCLCtCQUErQjtBQUMvQixJQUFJLEdBQUcsR0FBYSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNqQyxJQUFJLElBQUksR0FBZSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7QUFFdEMsK0JBQStCO0FBQy9CLElBQUksS0FBSyxHQUE4QixDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUE7QUFDckQsSUFBSSxNQUFNLEdBQXVCLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQTtBQUUzRCwyQ0FBMkM7QUFFM0Msb0JBQW9CO0FBQ3BCLGNBQWM7QUFDZCxnQkFBZ0I7QUFFaEIsSUFBSyxVQUlKO0FBSkQsV0FBSyxVQUFVO0lBQ1gsaURBQVcsQ0FBQTtJQUNYLDRDQUFTLENBQUE7SUFDVCxxREFBYSxDQUFBO0FBQ2pCLENBQUMsRUFKSSxVQUFVLEtBQVYsVUFBVSxRQUlkO0FBRUQsTUFBTSxNQUFNLEdBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQztBQUVuQyw4Q0FBOEM7QUFFOUMsSUFBSSxHQUFxQixDQUFDO0FBQzFCLEdBQUcsR0FBRyxJQUFJLENBQUM7QUFDWCxHQUFHLEdBQUcsS0FBSyxDQUFDO0FBTVosSUFBSSxFQUFLLENBQUM7QUFDVixFQUFFLEdBQUcsR0FBRyxDQUFDO0FBQ1QsRUFBRSxHQUFHLEtBQUssQ0FBQztBQWlCWCxNQUFNLEdBQUcsR0FBUTtJQUNiLElBQUksRUFBRSxHQUFHO0lBQ1QsSUFBSSxFQUFFLElBQUk7Q0FDYixDQUFBO0FBWUQsTUFBTSxJQUFJLEdBQVM7SUFDZixJQUFJLEVBQUUsR0FBRztJQUNULElBQUksRUFBRSxJQUFJO0lBQ1YsR0FBRyxFQUFFLEVBQUU7Q0FDVixDQUFBO0FBRUQscUNBQXFDO0FBRXJDLE9BQU87QUFDUCx1QkFBdUI7QUFDdkIsU0FBUyxLQUFLLENBQUUsQ0FBUyxFQUFFLENBQVM7SUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2pCLENBQUM7QUFFRCxTQUFTLE1BQU0sQ0FBRSxDQUFTLEVBQUUsQ0FBUztJQUNqQyxPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDakMsQ0FBQztBQUVELFNBQVMsTUFBTSxDQUFDLENBQVMsRUFBRSxDQUFVLEVBQUUsQ0FBUztJQUM1QyxPQUFPLEdBQUcsQ0FBQztBQUNmLENBQUM7QUFFRCwyQ0FBMkM7QUFFM0MsU0FBUyxLQUFLLENBQUUsQ0FBUztJQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRW5CLENBQUM7QUFFRCxTQUFTLE1BQU0sQ0FBQyxJQUFZLEVBQUUsR0FBWTtJQUN0QyxJQUFJLEdBQUcsS0FBSyxTQUFTO1FBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNqQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDWCxPQUFPLElBQUksR0FBRyxDQUFDLENBQUM7QUFDcEIsQ0FBQztBQUVELE9BQU87QUFFUCxNQUFNLElBQUksR0FBRyxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUE7QUFDckIsTUFBTSxLQUFLLEdBQUcsR0FBRyxFQUFFO0lBQ2YsT0FBTyxDQUFDLENBQUM7QUFDYixDQUFDLENBQUE7QUFXRCxTQUFlLE9BQU87O1FBQ2xCLE1BQU0sR0FBRyxHQUFHLE1BQU0sS0FBSyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7UUFDeEUsTUFBTSxJQUFJLEdBQUcsTUFBTSxHQUFHLENBQUMsSUFBSSxFQUFVLENBQUE7SUFDekMsQ0FBQztDQUFBO0FBRUQsTUFBTSxLQUFLLEdBQVM7SUFDaEIsUUFBUSxFQUFFLENBQUM7SUFDWCxJQUFJLEVBQUUsQ0FBQztJQUNQLE9BQU8sRUFBRSxRQUFRO0lBQ2pCLFdBQVcsRUFBRSxLQUFLO0NBQ3JCLENBQUE7QUFNRCwrQkFBK0I7QUFDL0IsTUFBTSxJQUFJLEdBQUcsS0FBd0IsQ0FBQTtBQUVyQywyQ0FBMkMifQ==