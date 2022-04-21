{/* <form action="">
    <input type="text" required id="code"
           pattern="\d{8}"
           >
    <div>
      <button type="submit">送出</button>
    </div>
  </form> */}

let code = document.querySelector("#code")
code.addEventListener("blur", function(){
    let s = this.validity;
    let msg = "";
    switch (true) {
        case s.valueMissing:
             msg = "請輸入統一編號";
             break;
        case s.patternMismatch:
             msg = "請輸入正確的統編格式";
        break;
     }
     this.setCustomValidity(msg);
});