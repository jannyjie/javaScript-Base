// do...while 是以條件是否成立作為執行迴圈的依據, 會先執行迴圈完畢碰到 " while " 檢查條件式若結果為 false 表示不成立

do{
    var number = prompt('請輸入 1-10的數字');
     if(number > 6){
      window.alert('太大重新輸入');
   }
    else if ( number < 6 ) {
      window.alert('太小重新輸入');
   }
  } while(number != 6);
  
  window.alert('答對');