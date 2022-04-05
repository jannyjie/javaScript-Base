//  <ul>
// <li>aa</li>
// <li>bb</li>
// <li>cc</li>
// <li>dd</li>
// </ul> 

var replacedElm = document.getElementsByTagName('li')[3];
var parentElm = replacedElm.parentNode;

parentElm.removeChild(replacedElm);

