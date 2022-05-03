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
let arr1: string[][] = [
    ['aa', 'bb']
];

// ------------- 元祖 -----------
let tuple: [number, string, boolean] = [1, 'a', true]
let tuple2: [string, string][] = [
    ['aa', 'a'],
    ['11', '22']
]

// ------------- Enum 枚舉(變數做分類) -----------

// 直播中 API -> 獲取直播教學
// 成功  失敗  直播中
// 0     -1    1

enum LiveStatus {
    SUCCESS = 0,
        FAIL = -1,
        STREAMING = 1
}

const Status = LiveStatus.SUCCESS;

// ------------- Union (可同時給予裡種類型) -----------

let aaa: number | string;
aaa = 1000;
aaa = 'str';

// ------------- type (自訂義類型 無法擴充) -----------

type A = number | string;

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

const obj: Card = {
    name: '1',
    desc: 'AA'
}


interface Card2 {
    name: string
    desc: string
}
interface Card2 {
    age: number // 沒有 ? 就是必選
    type ? : number // 如果加上 ? 不一定要使用 會回傳  undefined
}

const obj2: Card2 = {
    name: '1',
    desc: 'AA',
    age: 10
}

// ------------- function -----------

// 參數類型
// function hello () {}
function hello(a: string, b: string) {
    return a + b;
}

function hello2(a: string, b: string): number {
    return Number(a) + Number(b);
}

function hello3(a: number, b: boolean, c: string) {
    return 100;
}

// undefined  a?: string 必須放置最後並且不一定要使用 會回傳

function test2(a: number) {
    console.log(a);

}

function hello4(name: string, age ? : number) {
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

// ------------- Class -----------
// private 私有
// public 公開
// protected 受保護

// 注意以上的狀態 雖然 console.log(live); 
//會讀出所有的 資訊但如果狀態是受保護 無法單獨 引用 例如 Live.id

class Live {
    public roomName: string
    private id: string
    protected name: string

    constructor(roomName1: string, id1: string, name1: string) {
        console.log('建立直播中');

        this.roomName = roomName1;
        this.id = id1;
        this.name = name1;
    }
    start() {
        // 訪問資料
        this.id
    }
}

// 繼承 Live function / protected 在這可以受訪問
class CarLive extends Live {
    constructor(roomName1: string, id1: string, name1: string) {
        super(roomName1, id1, name1)
    }

    start() {
        // 訪問資料
        super.name
    }
}

const live = new Live('1號', '0001', 'jenny');

console.log(live);

const carLive = new CarLive('2號', '0003', 'jack');
console.log(carLive);

class Live2 {
    //  私有變數
    #name
    constructor(name: string) {
        this.#name = name;
    }
}
// 私有變數 無法被提取
// console.log(Live2.#name);

// interface + class

interface CarProps {
    name: string,
        age: number
    start: () => void
}
// private 私有
// public 公開
// protected 受保護
class Car implements CarProps {
    name: string
    age: number

    constructor(name1: string, age1: number) {
        this.name = name1;
        this.age = age1
    }
    start() {}
}
const car = new Car('jenny', 10);
console.log(car);


// ------------- 泛型 -----------
// 可更改以制定型態

function print < T > (data: T) {
    console.log('data', data);

}

print < number > (999)
print < string > ('Jenny')

class Print < T > {
    data: T
    constructor(d: T) {
        this.data = d
    }
}

const p = new Print < number > (999);
const p1 = new Print < string > ('123');

console.log('p', p);
console.log('p1', p1);

// ------------- utility  可查閱 typeScript 官方文件範例 -----------

// Record
interface CatInfo {
    age: number;
    breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

// key
// value
const cats: Record < CatName, CatInfo > = {
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
}

console.log(cats);


// Pick
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview1 = Pick < Todo, "title" | "completed" > ;

const todo1: TodoPreview1 = {
    title: "Clean room",
    completed: false,
};

todo1;

// Omit

interface Todo {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
}

type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {
    title: "Clean room",
    completed: false,
    createdAt: 1615544252770,
};

todo;
