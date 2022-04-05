function Queue(){
    var items = [];

    this.enqueu = function(element){
        items.push(element);
    };

    this.dequeue = function(){
        return items.shift();
    };

    this.front = function(){
        return items[0];
    }

    this.isEmpty = function(){
        return items.length == 0;
    }

    this.clear = function(){
        items = [];
    }

    this.size = function(){
        return items.length;
    }

    this.print = function(){
        console.log(items.toString());
    }
}

// 剛建立完先驗證它為空(輸出true 就是為空)

var queue = new Queue();
console.log(queue.isEmpty()); // true

queue.enqueue("John");
queue.enqueue("Jack");

// 在執行一些其它的命令
queue.print();
console.log(queue.size());
console.log(queue.isEmpty());
queue.dequeue();
queue.dequeue();
queue.print();