function Stack(){
    var items = [];

    this.push = function(element){
        items.push(element);
    };

    this.pop = function(){
        return items.pop();
    };

    this.peek = function(){
        return items[items.length-1];
    };

    this.isEmpty = function(){
        return items.length == 0;
    };

    this.size = function(){
        return items.length;
    };

    this.clear = function(){
        items = [];
    };

    this.print = function(){
        console.log(items.toString());
    };
}

// 使用 Stack 類別
// 首先驗證一下堆疊是否為空(輸出是true, 因為還沒往堆疊裡添加元素)
var stack = new Stack();
console.log(stack.isEmpty())

stack.push(5);
stack.push(10);

// 如果呼叫 peek 方法將會輸出 10 ，因為它是往堆疊添加的最後一個元素
console.log(stack.peek());