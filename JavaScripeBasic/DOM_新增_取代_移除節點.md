# createElement()
建立一個新節點, 其語法如下 , 參數 tagName 用來設定元素的類型, 例如 'div' 表示 <div> 元素, 傳回值是一個 Element 物件

element = document.createElement(tagName);


# createTextNode()
若新節點包含文字節點

element = document.creatTextNode(data);

# appendChild()
新使用 createElement() 建立新節點並呼叫 appendChild方法, createTextNode 建立的文字節點加入新節點的最後一個子節點

element.appendChild(child);


