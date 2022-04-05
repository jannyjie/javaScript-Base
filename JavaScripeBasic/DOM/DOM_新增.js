//  <ul>
// <li>aa</li>
// <li>bb</li>
// <li>cc</li>
// <li>dd</li>
// </ul> =

var newElm = document.createElement('li');
var newText = document.createTextNode('text');
newElm.appendChild(newText);

var position = document.getElementsByTagName('ul')[0];
position.appendChild(newElm);