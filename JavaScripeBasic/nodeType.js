{/* <ul id="foods">
  <li>珠寶盒</li>
  <li>法朋</li>
  <li>Lady</li>
  <li>RWD</li>
</ul>  */}

var foods = document.getElementById('foods');
var foodsChild = foods.childNodes;


for(var i = 0; i < foodsChild.length; i++){
 
  if(foodsChild.item(i).nodeType === 1){
    console.log(foodsChild.item(i).textContent);
  }
};


var foods = document.getElementById('foods');
var foodsChild = foods.firstChild;
while (foodsChild){
  if(foodsChild.nodeType === 1){
    console.log(foodsChild.textContent);
  }
  foodsChild = foodsChild.nextSibling;
}