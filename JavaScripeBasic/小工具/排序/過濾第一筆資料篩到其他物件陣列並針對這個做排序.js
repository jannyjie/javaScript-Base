// people 過濾出我要的資料
// people2 降冪排排序

// 再將 people 插入 people2 最前面

var people = [
    {
      name: 'ewrwCasper',
      like: '鍋燒意麵',
      age: 18
    },
    {
      name: 'Wang',
      like: '炒麵',
      age: 24
    },
    {
      name: 'Bobo',
      like: '蘿蔔泥',
      age: 1
    },
  ];
  
  
  var people2 = [
    {
      name: '2Casper',
      like: 'dsfsdfsdfsdf',
      age: 18
    },
    {
      name: '2Wang',
      like: '2炒麵',
      age: 24
    },
    {
      name: '2Bobo',
      like: '2蘿蔔泥',
      age: 1
    },
    {
      name: '2滷蛋',
      like: '2蘿蔔泥',
      age: 3
    }
  ];
  

  var sortName = 'age'
  
  var compareDESC = function (obj1, obj2) {
      var val1 = obj1[sortName];
      var val2 = obj2[sortName];
      if (val1 > val2) {
          return 0;
      } else if (val1 > val2) {
          return 1;
      } else {
          return -1;
      }
  }
  var aaa = people2 = people2.sort(compareDESC)
  // sort your array
  console.log(aaa);
  
  
  var filterAgeThan5 = people.filter(function(item, index, array){
    return item.like === '鍋燒意麵';       // 取得大於五歲的
  });

  
  let arr = filterAgeThan5.concat(aaa);  //合併陣列
  
  let arrNew= new Set(arr); //通過set集合去重
  
  
  console.log("arrNew",Array.from(arrNew)); //將set集合轉化為陣列
  