{/* <form>
  <label for="userName">姓名: </label>
  <input type="text" id="userName" size="20"> <br>
  <label for="userNumber">密碼: </label>
  <input type="password" id="userNumber" size="20"> <br>
  <input type="submit" onclick="showResult()">
</form> */}

function showResult(){
    var userName = document.getElementById('userName');
    var userPWD = document.getElementById('userNumber');
    
    window.alert('你的姓名' + userName.value + '\n' + '你的密碼' + userNumber.value);
  }