

function validatePrompt(ui, PromptStr) {
	alert (PromptStr);
	ui.focus();
	return(false);
}
function checkChineseName(ui) {
	ui.value = ui.value.replace(/[\s　]+/g, "");   
        var re = /\w/;
        if (ui.value == "") {
          validatePrompt(ui, "請輸入中文名字！");
        }else if (re.test(ui.value))
          validatePrompt(ui, "你的中文名字格式不對！");
         else
          return(true);
}

{/* <p align="center">中文名字：<input name="ChineseName" onblur="checkChineseName(this)">（2 ~ 4 個中文字）<br> 

</p> */}