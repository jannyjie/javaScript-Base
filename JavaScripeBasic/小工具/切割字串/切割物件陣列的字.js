const aa = [
    {
      name: 'janny',
      school: '國立臺灣大學視覺設計系'
    },
    {
      name: 'jack',
      school: '國立臺灣大學數學系'
    },
  ];
  // const newList = [].concat(...list); // newList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let ee = [];
  aa.forEach(element => {
    let bb = element.school.indexOf('學');
    let cc = element.school.indexOf('系');
    let dd = element.school.slice(bb+1,cc+1); 
    ee.push(dd)
  });
  
  console.log(ee) //   ["視覺設計系", "數學系"]