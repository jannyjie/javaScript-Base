
function hotPotato(newList, num){
    var queue = new Queue;
    for(var i = 0; i < nameList.length; i++){
        queue.enqueue(newList[i]);
    }

    var eliminated = '';
    while (queue.size() > 1){
        for(var i =0; i< num; i++){
            queue.enqueue(queue.dequeue());
        }
        eliminated = queue.dequeue();
        console.log(eliminated + '在燙手山芋遊戲中被淘汰');
    }

    return queue.dequeue();
}

var names = ["John", "Jack", "Camila", "Ingrid", "Carl"];
var winner = hotPotato(names, 7);
console.log('勝利者' +  winner);