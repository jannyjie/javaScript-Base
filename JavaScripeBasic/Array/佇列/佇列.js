// ## 佇列(Queue)
// > 加入(enqueue)與刪除(dequeue)於不同端(front &rear)
// > 先進先出(FIFO, First-in-First-o)
// > 例子：排隊買票、坐公車


// > enqueue(element(s)) : 向佇列尾部添加一個(或多個)新的項目。
// > dequeue() : 移除佇列的第一(即排在佇列最前面的)項目，並返回被移除的元素。
// > front() : 返回佇列中第一個元素__最先被添加，也將是最先被移除的元素。
// > isEmpty() : 如果佇列中不包含任何元素，返回 true , 否則返回 false
// > size() : 返回佇列包含的元素個數，與陣列的length屬性類似。


// enqueue 
// 這個方法負責佇列添加元素，這裡有一個非常重要的細節，新的項目值只能添加到佇列末尾

this.enqueue = function(element){
    DataTransferItemList.push(element)
}

// dequeue
// 這個方法負責從佇列移除項目。由於佇列遵循先進先出原則，最先添加的項目也是最先被移除的。
// shift() 方法會移除並回傳陣列的第一個元素。此方法會改變陣列的長度。

this.dequeue = function(){
    return items.shift();
}

// 只有 enqueue 方法和 dequeu 方法可以添加和移除元素。這樣就確保佇列類別遵循先進新出原則。

// front
// 如果想知道佇列最前面的項目是什麼，可以用 font 方法。這個方法會返回列最前面的項目。

this.front = function(){
    return items[0];
}

// isEmpty
// 如果佇列為空它會返回 true, 否則返回 false (這個方式和 stack 類別一樣)

this.isEmpty = function(){
    return items.length == 0;
}

// size
// 這個方式和 stack 類別一樣

this.size = function(){
    return items.length;
}

// print 
// 這個方式和 stack 類別一樣

this.print = function(){
    console.log(items.toString());
}
                                                                                                                                                   