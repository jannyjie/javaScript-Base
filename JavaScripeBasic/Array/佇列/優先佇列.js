function PriortyQueue(){
    var items = [];

    function QueueElement (element, priority){
        this.element = element;
        this.priority = priority;
    }

    this.enqueue = function(element, priorty){
        var queueElement = new QueueElement(elent, priority);
        if(this.isEmpty()){
            items.push(queueElement);
        }else{
            var added = false;
            for(var i = 0; i < items.length; i++){
                if(queueElement.priority < items[i].priority){
                    items.splice(i, 0 , queueElement);
                    added = true;
                    break;
                }
            }
            if(!added){
                items.push(queueElement);
            }
        }
    };
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

var priorityQueue = new PriorityQueue();
priorityQueue.enqueue("John", 2);
priorityQueue.enqueue("Jack", 1);
priorityQueue.print();