//  <ul>
// <li>aa</li>
// <li>bb</li>
// <li>cc</li>
// <li>dd</li>
// </ul> 

var newElm = document.createElement('li');
var newText = document.createTextNode('text1234');

newElm.appendChild(newText);

var replacedElm = document.getElementsByTagName('li')[3];
var parentElm = replacedElm.parentNode;

parentElm.replaceChild(newElm, replacedElm)
