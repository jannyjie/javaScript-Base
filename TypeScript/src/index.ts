// ------------- 基本類型 -----------
const a: string = 'Jenny';
console.log(a);

const b = 'Jenny';
let c: string; // 如果宣告空的建議還是寫個型別比較如果不為空可不寫型別
c = 'Jack';

let num: number = 1000;
let boo: boolean = true;
let n: null = null;
let un: undefined = undefined;

// any 可以放各種不同的類型都不會出錯
const any: any = 'Jenny';
let numAny: any = 1000;
let booAny: any = true;
let nAny: any = null;
let unAny: any = undefined;


// ------------- 陣列 -----------
let arr: string[] = ['aa', 'bb'];
let arr1: string[][] = [['aa', 'bb']];

// ------------- 元祖 -----------
let tuple: [number, string, boolean] = [1, 'a', true]
let tuple2: [string, string][] = [['aa', 'a'],['11', '22']]

// ------------- Enum 枚舉(變數做分類) -----------

// 直播中 API -> 獲取直播教學
// 成功  失敗  直播中
// 0     -1    1

enum LiveStatus {
    SUCCESS = 0,
    FAIL = -1,
    STREAMING = 1
}

const Status =  LiveStatus.SUCCESS; 

// ------------- Union (可同時給予裡種類型) -----------

let aaa : number | string;
aaa = 1000;
aaa = 'str';

// ------------- type (自訂義類型 無法擴充) -----------

type A =  number | string;

let a1: A;
a1 = 999;
a1 = 'str';
// a1 = true; // 如果是boolean 就會報錯

// ------------- interface (自訂義類型 可擴充) -----------

interface User {
    name: string;
    age: number;
}

// ------------- object () -----------

type Card = {
    name: string
    desc: string
}

const obj:Card = {
    name: '1',
    desc: 'AA'
}


interface Card2  {
    name: string
    desc: string
}
interface Card2  {
    age: number  // 沒有 ? 就是必選
    type?: number // 如果加上 ? 不一定要使用 會回傳  undefined
}

const obj2:Card2 = {
    name: '1',
    desc: 'AA',
    age: 10
}

// ------------- function -----------

// 參數類型
// function hello () {}
function hello (a: string, b: string) {
    return a + b;
}

function hello2 (a: string, b: string): number {
    return Number(a) + Number(b);
}

function hello3(a: number, b: boolean, c: string){
    return 100;
}

// undefined  a?: string 必須放置最後並且不一定要使用 會回傳

function test2 (a: number){
    console.log(a);
    
}

function hello4(name: string, age?: number){
    if (age === undefined) return -1;
    test2(age);
    return name + a;
}

// 箭頭函式

const func = () => {}
const func2 = () => {
    return 1;
}

// ------------- 斷言 as  unknown -----------
// 像是 API typescript 無法知道型別界建議使用這個
type Data = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await res.json() as Data
}

const data1: Data = {
    'userId': 1,
    'id': 1,
    'title': 'string',
    'completed': false
}

type Beta = {
    name: string
}

// 假設 data1 是動態可用這個方式 把其他規則 接起來
const beta = data1 as unknown as Beta

// ------------- 斷言 as  unknown -----------