// 若要取得穩文字內容, 可以使用 textContent / innerText / innerHTML 

// innerText
// innerText 可以用來取得/ 設定目前元素和子孫元素的文字內容 但和 textContent 不同的是innerText 屬性會解譯 CSS 規則或是 <br> 元素
{/* <p id="source">
  <style>#text {text-transform: uppercase;}</style>
  <span>how this text <br> is interpreted.</span>
  <span style="display: none;">HIDDEN TEXT</span>
</p>
  
<h3>textContent 屬性結果:</h3>
<textarea id="textContentOutput" cols="70" rows="6"></textarea>
<h3>innerText 屬性結果 :</h3>
<textarea id="inntextOutput" cols="70" rows="6"></textarea> */}

var source = document.getElementById('source');
var textContentOutput = document.getElementById('textContentOutput');
var innTextOutput = document.getElementById('inntextOutput');

textContentOutput.value = source.textContent;
innTextOutput.value = source.innerText;
//  console.log(innTextOutput);