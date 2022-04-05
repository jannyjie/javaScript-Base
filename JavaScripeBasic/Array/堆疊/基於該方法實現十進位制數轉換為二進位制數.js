function Stack() {
    //使用陣列儲存棧元素
    var items = [];

    //新增新元素到棧頂(相當於陣列的末尾)
    this.push = function(element) {
        items.push(element);
    };

    //移除棧頂的元素，同時返回被移除的元素
    this.pop = function() {
        return items.pop();
    };

    //返回棧頂的元素，不對棧做任何修改
    this.peek = function() {
        return items[items.length - 1];
    };

    //如果棧裡沒有任何元素就返回true，否則返回false
    this.isEmpty = function() {
        return items.length == 0;
    };

    //移除棧裡的所有元素
    this.clear = function() {
        items = [];
    };

    //返回棧裡的元素個數，和陣列的length很像
    this.size = function() {
        return items.length;
    };

    //返回棧裡的內容
    this.print = function() {
        //return items.toString();
        return items;
    };
}
 //十進位制轉換為二進位制
 function divideBy2(decNumber) {
    var remStack = new Stack(),
        rem,
        binaryString = '';

    while (decNumber > 0) {
        rem = Math.floor(decNumber % 2);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / 2);
    }

    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }

    return binaryString;
}

var decNumber = 10;
console.log(decNumber + '轉換為二進位制數為：' + divideBy2(decNumber));       //10轉換為二進位制數為：1010