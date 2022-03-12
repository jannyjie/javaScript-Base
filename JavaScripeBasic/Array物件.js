var drinks = new Array('apple', 'book', 'car', 'dog');

document.write('<table border="1">');

for(var i = 1; i < drinks.length; i++){
  document.write('<tr><td>這是' + (i + 1) + '</td>');
  document.write('<td>這是' + drinks[i] + '</td></tr>');
}

document.write('</table>');

// 02

var score = [['什麼冬冬', '02', '03'], ['aa', 85, 90], ['bb', 65, 70]];

document.write('<table border="1">');

for(var i = 0; i < score.length; i++){
  document.write('<tr>');
  for(var j = 0; j < score[i].length; j++)
    document.write('<td>' + score[i][j] + '</td>');
  
  document.write('</tr>');
}

document.write('</table>');