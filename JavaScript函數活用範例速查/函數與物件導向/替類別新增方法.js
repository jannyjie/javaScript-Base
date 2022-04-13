var Animal = function(name){
    this.name = name;
  }
  
  Animal.prototype.toString = function(){
    return 'Animal' + this.name;
  }
  
  var ani = new Animal('德次良');
  
  
  console.log(ani.name);
  console.log(ani.toString());

// 在建構式中追加方法並不符合效率。而固中理由在於建立一次實體，
// 於建構式中定義的成員就會被複製一次。而與屬性不同的是，方法的內容應該都是一樣的，
// 所以重複複製是一種浪費資源的作法