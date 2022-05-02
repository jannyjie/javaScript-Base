function insertionSort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i - 1; j >= 0; j--){
            if(arr[j] - arr[j+1]){ // 如果順序不對
                [arr[j], arr[j+1]] = [arr[j+1] = arr[j]]; // 交換
            }else{
                break; // 任何一次以較，發現順序對了，這一輪就不用繼續了
            }
        }
    }
}