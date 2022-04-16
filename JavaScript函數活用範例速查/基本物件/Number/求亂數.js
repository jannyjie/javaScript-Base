// https://ithelp.ithome.com.tw/articles/10197904

console.log(Math.floor(Math.random()*100)+1);

// 但是他亂數產生小數並不是我們要的，那該如何讓他隨機產生整數呢？首先我們先觀察這個函數的規律，
//因為他會隨機產生0~1之間的小數，所以他會產生出的最大的數不會大於等於1也就是0.9999...9而最小的數不會等於0也就是0.0000...01，
// 假設我們要讓他產生的範圍為威力彩可下注號碼(01~38)，可以搭配另一個JS的內建函式Math.floor()來做到，
//這個函式會將所有的小數無條件捨去到比自身小的最大整數，也就是說當我們把Math.random()的結果放到Math.floor()中的時候，
// 永遠會得到0，因為就算是Math.random()產生出的最大結果0.99...999也會被捨為0，如下例子：

Math.floor(Math.random());  //回傳0
Math.floor(0.99999999999);  //回傳0

// 那接下來就要同時使用Math.random()和Math.floor()兩種方式來實做我們的function了，
// 就我們剛才觀察出來的Math.random()他的最大值永遠不會大於等於1，也就是說，
// 如果我將Math.random()產生出來的數去乘上2就會得到0~2之間的小數，乘上3就會得到0~3之間的小數，
// 以此類推，所以利用這一點再搭配上Math.floor()，當我們把Math.random()*2放進Math.floor()中就會得到0或1的結果，
// 因為Math.random()*2產生出來的值會是0.0000...02到1.9999...98之間的隨機小數，最小的被捨去會得到0，最大的被捨去又會得到1，以下我們看實做：

Math.floor(Math.random()*2); //回傳0或1
Math.floor(Math.random()*3); //回傳0或1或2
Math.floor(Math.random()*5); //回傳0或1或2或3或4
Math.floor(Math.random()*50); //回傳0或1或2或3...或49

// 根據上述的例子，我們可以先實做以下的function

function getRandom(x){
    return Math.floor(Math.random()*x);
};
getRandom(3); //會回傳0~2之間的隨機數字
getRandom(5); //會回傳0~4之間的隨機數字

// 其實上面的function已經和我們的目的非常接近了，只是function內還有兩個問題需要排除，第一個是我們要的範圍是不包括0的，第二個是他的範圍會是到「x-1」而不是到「x」，不過這並不是什麼大問題，因為我們只需要在得到的結果後方加上1就可以一次解決這兩個問題，如下：

function getRandom(x){
    return Math.floor(Math.random()*x)+1;
};
getRandom(3); //會回傳1(0+1)~3(2+1)之間的隨機數字
getRandom(5); //會回傳1(0+1)~5(4+1)之間的隨機數字

// 如此就達到我們的目標了!!去亂數產生1~x之間的整數，所以我們在稍微修飾一下就可以拿來產生一組威力彩的號碼了：

//宣告我們剛剛寫好的取亂數的function
function getRandom(x){
    return Math.floor(Math.random()*x)+1;
};
//再來寫產生威力彩號碼的function
function getPowerNum(){
    //首先我們先宣告一個字串，用來裝要回傳的結果
    var status = '第一區號碼為：';
    //宣告一個變數用來裝隨機產生的數字
    var n = 0;
    //一注威力彩號碼有6個所以我們讓迴圈跑六次
    for(i=0;i<=5;i++){
        //用indexOf判斷該數字之前有沒有出現過
        n = getRandom(38);
        if(status.indexOf(n)>0){
        //如果有出現過就重跑一次迴圈
        i-=1;
        continue;
        }
        else{
        //沒出現過的話就寫進字串裡
        status += n + ' ';
        };
    };
    //因為威力彩有分兩區，第二區為01~08隨機一數字，所以我們在回傳時加上。
    return status + '第二區號碼為：' + getRandom(8);
};

getPowerNum();
console.log(getPowerNum())
//回傳結果："A組號碼為：19 11 2 30 20 8 B組數字為：2"