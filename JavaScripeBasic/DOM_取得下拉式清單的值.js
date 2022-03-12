{/* <form>
  <label for="dessert">喜歡的甜點: </label> <br>
  <select name="" multiple id="dessert">
    <option value="aa">aa</option>
    <option value="bb">bb</option>
    <option value="cc">cc</option>
  </select>
   <br>
  <input type="submit"  onclick="showResult()">
  <input type="reset">
</form>*/}
function showResult(){
  var result = [];
  var dessert = document.getElementById('dessert');
  for(var i = 0; i < dessert.length; i++){
    if(dessert[i].selected){
      result.push(dessert[i].value);
    }
  }
  
   window.alert(result)
}


