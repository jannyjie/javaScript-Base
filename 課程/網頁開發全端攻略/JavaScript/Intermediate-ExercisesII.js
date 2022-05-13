// 編寫一個名為“factorPrime”的函數，該函數將整數作為輸入，並返回輸入的素數分解。
// function factorPrime(n){
//     let answer = n + "=";
//     let p = 2;
//     while(p <= n){
//         if(n % p == 0){
//             answer += p + "x";
//             n /= p;
//         }else{
//             p++;
//         }
//     }
//     answer = answer.substring(0, answer.length - 3);
//     console.log(answer);
// }

// factorPrime(120)
// 編寫一個名為“intersection”的函數，該函數接受 2 個數組，並返回一個包含 2 個數組交集的元素數組。
function intersection(arr1, arr2){
    let result = [];
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i] == arr2[j]){
                let okay = true;
                for(let k =0; k < result.length; k++){
                    if(arr[i] == result[k]){
                        okay = false;
                    }
                }
                if(okay){
                    result.push(arr[i])
                }
            }
        }
    }
    console.log(result);
}

intersection([1, 3, 4, 6, 10], [5, 11, 4, 3, 100, 144, 0]); // returns [3, 4]

// 編寫一個名為“flatten”的函數來展平數組。