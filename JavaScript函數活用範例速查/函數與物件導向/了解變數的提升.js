var aa = 'ss';

function ss(){
  console.log(aa); // undefined
  var aa = 'gg';
  console.log(aa); // "gg"
  return aa;
}
ss();
