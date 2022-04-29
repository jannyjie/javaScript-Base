let arr = [
    {
        fname : "Rohan",
        lname : "Dalal",
        age : 19
    },

    {
        fname : "Zain",
        lname : "Ahmed",
        age : 17
    },

    {
        fname : "Anadi",
        lname : "Malhotra",
        age : 19
    }
];

//需要排序的欄位名
var sortName = 'age'

var compareASC = function (obj1, obj2) {
    var val1 = obj1[sortName];
    var val2 = obj2[sortName];
    if (val1 > val2) {
        return -1;
    } else if (val1 < val2) {
        return 1;
    } else {
        return 0;
    }
};

// sort your array
console.log(arr = arr.sort(compareASC));


// 對簡單陣列排序:

//需要排序的陣列
// var arr = [...........];
//升序排序
var compareASC = function (a, b) {

    if (a> b) {
        return -1;
    } else if (a< b) {
        return 1;
    } else {
        return 0;
    }
};
//降序排序
var compareDESC = function (a, b) {
    if (a< b) {
        return -1;
    } else if (a> b) {
        return 1;
    } else {
        return 0;
    }
}
//arr升序
arr = arr.sort(compareASC);
//arr降序
arr = arr.sort(compareDESC);



// 對物件陣列排序:

//需要排序的陣列
var arr1 = [
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
  ];
  //需要排序的欄位名
  var sortName = 'age'
  //升序排序
  var compareASC = function (obj1, obj2) {
      var val1 = obj1[sortName];
      var val2 = obj2[sortName];
      if (val1 > val2) {
          return -1;
      } else if (val1 < val2) {
          return 1;
      } else {
          return 0;
      }
  };
  //降序排序
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
  //arr升序
  console.log(arr1 = arr1.sort(compareASC));
  
  //arr降序
  console.log(arr1 = arr1.sort(compareDESC));