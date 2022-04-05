{/* <form>
  喜歡的甜點: <br>
  <input type="radio" name="dessert" value="馬卡龍" >馬卡龍 <br>
  <input type="radio" name="dessert" value="舒芙雷">舒芙雷 <br>
  <input type="radio" name="dessert" value="蘋果派">蘋果派 <br>
  <input type="radio" name="dessert" value="水果塔">水果塔 <br>
  <input type="submit"  onclick="showResult()">
  <input type="reset">
</form> */}

function showResult(){
    var result = '';
    var dessert = document.getElementsByName('dessert');
    for(var i = 0; i < dessert.length; i++){
      if(dessert[i].checked){
        result = dessert[i].value;
        break;
      }
  
    }
    
        window.alert(result);
  }
  
  