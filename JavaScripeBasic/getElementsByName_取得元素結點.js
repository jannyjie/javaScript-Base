// 會根據參數指定的 name 屬性值去取得符合的元素
// 通常用來取得 input / select 等表單元素, 例如選像按鈕(radio) / 核取方塊(checkbox) 或是下拉式清單都是有數個選項, 而且每個選項的 name 屬性值均相同, 此時取得的就是一群元素, 而不是單一元素

// NodeList // 集合常用成員

// > length // 這個屬於表示 NodeList 集合的元素個數
// > item  //  這個方法用來取得第 i + 1 個元素, i 的值為0 ~ lenght - 1

// <form>
//   <input type="checkbox" name="drinks" value="拿鐵"> 拿鐵 <br>
//   <input type="checkbox" name="drinks" value="紅茶"> 紅茶 <br>
//   <input type="checkbox" name="drinks" value="水果茶"> 水果茶
// </form>

var drinks = document.getElementsByName('drinks');

for(var i = 0; i < drinks.length; i++){
    console.log(drinks.item(i).value);
};

// "拿鐵"
// "紅茶"
// "水果茶"
