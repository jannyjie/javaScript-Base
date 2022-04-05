// 當我們在處理大量資料時，在 JavaScript 中通常會使用陣列的方式來處理資料結構，那以陣列處理的方式有二種：堆疊(Stack) 與 佇列(Queue)。
// 堆疊 (Stack)
// 如果以生活中的例子來說就像疊杯子遊戲，一開始先從最底層開始疊一路往上，再從最上層一路往下收起來結束遊戲，這個過程就是 堆疊 (Stack)。
// 說清楚點會以 後進先出（LIFO, Last In First Out） 的概念，它的意思是 最後進去的資料會最先取得，並且新增與移除資料的位置都在同一端，這個運作方式可以使用陣列中的 push() 與 pop() 來實現。


// push : 添加一個新元素到堆疊頂部
// pop : 移除堆疊頂部的元素，同時返回被移除的元素
// peek: 返回堆疊頂部元素，不對堆疊做任何修改(這個方法不會移除堆疊頂部元素僅僅返回它)
// isEmpty : 如果堆疊裡沒有任何元素就返回true，否則就返回false
// cear : 移除堆疊裡的所有元素
// size : 返回堆疊的元素個數。這個方法和陣列的length屬性很類似
// top : 如果要查尋堆疊中最後一個新增的資料(最頂層)時，我們可以實作此方法，來取得堆疊陣列中最後索引值並回傳。

// push
// 在堆疊裡添加新元素，有一點很重要該方法只添加元素到堆疊頂部，也就是堆疊的末尾
this.push = function(element){
    items.push(element);
}

// pop
// 移除堆疊的元素，堆疊遵從LIFO原則，因此移出的是最後添加的元素
this.pop = function(){
    return items.pop();
}

// peek 
//  如果想知道最後添加的元素是什麼，可以用peek方法。這個方法將返回堆疊的元素
this.peek = function(){
    return items[items.length-1];
}

// 因為類別內部是用陣列元素的，所以存取陣列的最後一個元素可以用 length-1

// isEmpty
// 如果堆疊為空的話將返回 true , 否則就返回 false

this.isEmpty = function(){
    return items.length == 0;
}

// 使用isEmpty 方法，能簡單地判斷內部陣列的長度是否為0

// size 
// 類似陣列的 length 屬性，我們也能時做堆疊的 length 。對於集合，最好用size 代替 length。
// 因為堆疊的內部使用陣列儲存元素，所以能簡單返回堆疊的長度

this.size = function(){
    return items.length;
}

// clear
// 用來移除堆疊裡的內容，把堆疊清空。
this.clear = function(){
    items = [];
}

// 其實也能用pop方法多次呼叫，把陣列的元素全部移除

// print
// 檢查堆疊裡的內容，我們來實作一個輔助方法，叫 print 。它會把堆疊元素都輸出到主控台

this.print = function(){
    console.log(items.toString());
}

