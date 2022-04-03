var tmp_array0 = [1,2,3,4,5,6]; 
var tmp_array1 = [2,7,8]; 
var tmp_array2 = [2,6,9]; 
var aResult = []; 


for (var i in tmp_array0) { 
  if (tmp_array1.indexOf(tmp_array0[i])!=-1 && tmp_array2.indexOf(tmp_array0[i])!=-1) 
        aResult.push(tmp_array0[i]);
} 
alert(aResult);