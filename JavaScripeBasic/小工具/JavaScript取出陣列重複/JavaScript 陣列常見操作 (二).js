// https://iter01.com/659499.html

// 找出陣列中的重複元素或非重複元素
function search(arr){
    let res = []
    let flag = 0
    for(let i = 0;i < arr.length;i++){
        for(let j = i+1;j<arr.length;j++){
            if(arr[i] === arr[j]){
                flag++
                if(flag == 1) res.push(arr[i])
                arr.splice(j,1)
            }    
        }
        flag = 0
    }
    return res
}

// map + filter，記錄每個元素出現的次數。有了重複次數，就可以篩選出重複元素、重複次數最多元素或者非重複元素：
function search(arr){
    const map = new Map()
    for(item of arr){
        if(!map.has(item)){
            map.set(item,1)
        } else {
            map.set(item,map.get(item)+1)
        }
    }
    // 找出重複元素，即出現次數大於1
    return [...map.entries()].filter(item => item[1] > 1).map(item => item[0])
    // 找出非重複元素，即出現次數等於1
    return [...map.entries()].filter(item => item[1] == 1).map(item => item[0])
    // 找出重複次數最多的元素
    return [...map.entries()]
        .filter(item => item[1] == Math.max(...map.values()))
        .map(item => item[0])
}

// 陣列扁平化 / 陣列降維
function flatten(arr){
    const res = []
    for(let i = 0;i < arr.length; i++){
        if(Array.isArray(arr[i])){
            for(let j = 0;j < arr[i].length;j++){
                res.push(arr[i][j])
            }            
        } else {
            res.push(arr[i])
        }      
    }
    return res
}

// 二維陣列：迴圈 + concat
function reduceDiemension(arr){
    const res = []
    for(let i = 0;i < arr.length;i++){
        res = res.concat(arr[i])
    }
    return res
}

// 二維陣列：reduce + concat
function flatten(arr){
    return arr.reduce((acc,cur) => acc.concat(cur),[])
}

// 二維陣列：展開 / apply + concat

function flatten(arr){
    // return [].concat([],arr)
    return [].concat(...arr)
}

//多維陣列，以下面的陣列為例：

const arr = [
    1,
    [
        2,[3],
        [4,5,6],
        [7,8,9],
        10,11
    ],
    12,
    13,
    [15,16,17]
]