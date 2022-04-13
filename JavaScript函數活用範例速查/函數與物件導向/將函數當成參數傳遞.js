function benchmark(proc){
    var start = new Date();
    proc();
    var end = new Date();
    return end.getTime() - start.getTime();
  }
  
  console.log(
    benchmark(function(){
      var x =15;
      for(var i = 0; i < 100000000; i++){
        x*=1;
      }
    })
  )