
// var send = document.querySelector('.send');

// send.addEventListener('click',signup,false);

// function signup(){
//     var emailStr = document.querySelector('.account').value;
//     var passwordStr = document.querySelector('.password').value;
//     var account = {};
//     account.email = emailStr;
//     account.password = passwordStr;
    
//     var xhr = new XMLHttpRequest();
//     xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signup',true);
//     xhr.setRequestHeader('Content-type','application/json');
//     var data = JSON.stringify(account);
//     xhr.send(data);
//     xhr.onload = function(){
//         var callbackData = JSON.parse(xhr.responseText);
//         console.log(callbackData);
//         var veriStr =  callbackData.message;
//         if(veriStr =="帳號註冊成功"){
//             alert('帳號註冊成功！！');
//         }else{
//             alert("帳號註冊失敗！");
//         }
//     }
// }



var send = document.querySelector('.send');
send.addEventListener('click', signup(), false);

// 
function signup(){
    let emailStr = document.querySelector('.account').value;
    let passwordStr = document.querySelector('.password').value;
    let account = {};
    account.email = emailStr;
    account.password = passwordStr;

    let xhr = new XMLHttpRequest();
    let URL = 'https://hexschool-tutorial.herokuapp.com/api/signup';

   function eer(){
    xhr.open('post', URL, true);
    xhr.setRequestHeader('Content-type','application/json');
    let data = JSON.stringify(account);
    xhr.send(data);
    xhr.onload = function(){
        var callbackData = JSON.parse(xhr.responseText);
        console.log(callbackData);
        var veriStr =  callbackData.message;
        if(veriStr =="帳號註冊成功"){
            alert('帳號註冊成功！！');
        }else{
            alert("帳號註冊失敗！");
        }
    }
   }
   return eer;
}