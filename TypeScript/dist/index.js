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
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Live2_name;
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
let arr1 = [
    ['aa', 'bb']
];
// ------------- 元祖 -----------
let tuple = [1, 'a', true];
let tuple2 = [
    ['aa', 'a'],
    ['11', '22']
];
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
// ------------- Class -----------
// private 私有
// public 公開
// protected 受保護
// 注意以上的狀態 雖然 console.log(live); 
//會讀出所有的 資訊但如果狀態是受保護 無法單獨 引用 例如 Live.id
class Live {
    constructor(roomName1, id1, name1) {
        console.log('建立直播中');
        this.roomName = roomName1;
        this.id = id1;
        this.name = name1;
    }
    start() {
        // 訪問資料
        this.id;
    }
}
// 繼承 Live function / protected 在這可以受訪問
class CarLive extends Live {
    constructor(roomName1, id1, name1) {
        super(roomName1, id1, name1);
    }
    start() {
        // 訪問資料
        super.name;
    }
}
const live = new Live('1號', '0001', 'jenny');
console.log(live);
const carLive = new CarLive('2號', '0003', 'jack');
console.log(carLive);
class Live2 {
    constructor(name) {
        //  私有變數
        _Live2_name.set(this, void 0);
        __classPrivateFieldSet(this, _Live2_name, name, "f");
    }
}
_Live2_name = new WeakMap();
// private 私有
// public 公開
// protected 受保護
class Car {
    constructor(name1, age1) {
        this.name = name1;
        this.age = age1;
    }
    start() { }
}
const car = new Car('jenny', 10);
console.log(car);
// ------------- 泛型 -----------
// 可更改以制定型態
function print(data) {
    console.log('data', data);
}
print(999);
print('Jenny');
class Print {
    constructor(d) {
        this.data = d;
    }
}
const p = new Print(999);
const p1 = new Print('123');
console.log('p', p);
console.log('p1', p1);
// key
// value
const cats = {
    miffy: {
        age: 10,
        breed: '123'
    },
    boris: {
        age: 20,
        breed: '12dfsf'
    },
    mordred: {
        age: 40,
        breed: '1sdfdsfsd23'
    },
};
console.log(cats);
const todo1 = {
    title: "Clean room",
    completed: false,
};
todo1;
const todo = {
    title: "Clean room",
    completed: false,
    createdAt: 1615544252770,
};
todo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBaUM7QUFDakMsTUFBTSxDQUFDLEdBQVcsT0FBTyxDQUFDO0FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFZixNQUFNLENBQUMsR0FBRyxPQUFPLENBQUM7QUFDbEIsSUFBSSxDQUFTLENBQUMsQ0FBQyw2QkFBNkI7QUFDNUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztBQUVYLElBQUksR0FBRyxHQUFXLElBQUksQ0FBQztBQUN2QixJQUFJLEdBQUcsR0FBWSxJQUFJLENBQUM7QUFDeEIsSUFBSSxDQUFDLEdBQVMsSUFBSSxDQUFDO0FBQ25CLElBQUksRUFBRSxHQUFjLFNBQVMsQ0FBQztBQUU5QixzQkFBc0I7QUFDdEIsTUFBTSxHQUFHLEdBQVEsT0FBTyxDQUFDO0FBQ3pCLElBQUksTUFBTSxHQUFRLElBQUksQ0FBQztBQUN2QixJQUFJLE1BQU0sR0FBUSxJQUFJLENBQUM7QUFDdkIsSUFBSSxJQUFJLEdBQVEsSUFBSSxDQUFDO0FBQ3JCLElBQUksS0FBSyxHQUFRLFNBQVMsQ0FBQztBQUczQiwrQkFBK0I7QUFDL0IsSUFBSSxHQUFHLEdBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDakMsSUFBSSxJQUFJLEdBQWU7SUFDbkIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO0NBQ2YsQ0FBQztBQUVGLCtCQUErQjtBQUMvQixJQUFJLEtBQUssR0FBOEIsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFBO0FBQ3JELElBQUksTUFBTSxHQUF1QjtJQUM3QixDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7SUFDWCxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7Q0FDZixDQUFBO0FBRUQsMkNBQTJDO0FBRTNDLG9CQUFvQjtB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