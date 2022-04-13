var namespace = function(ns){
    // 以「‧」分割命名空間
    var elems = ns.split('.');
    var parent = window;
    //依序新增後續的命名空間已形成階層構造
    for(var i = 0; i < elems.length; i++){
      parent[elems[i]] = parent[elems[i]] || {};
      parent = parent[elems[i]];
    }
    return parent;
  }
  
  // 新增Myapp.Recipe.Samples 命名空間
  var ns = namespace('Myapp.Recipe.Samples');
  // 定義命名空間之下的類別
  ns.MyClass = function() {};
  
  var c = new ns.MyClass();
  
  console.log(c instanceof Myapp.Recipe.Samples.MyClass);