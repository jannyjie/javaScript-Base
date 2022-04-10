const change = str => {
    const answer = [];
    
    str.split("").forEach(word => {
      let temp = "";
      for(let i = word.length - 1; i >= 0; i--){
        temp += word[i];
      }
      answer.push(temp);
    });
    return answer.join('');
  };
  
  console.log(change('This is an apple'))
/////////////////////////////////$Recycle.Bin

  var str = 'This is an apple';
  var newStr = str.split("").reverse().join("");
  
  alert(newStr);