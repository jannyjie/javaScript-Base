
function validatePrompt(ui, PromptStr) {
	alert (PromptStr);
	ui.focus();
	return(false);
}
function checkEnglishName(ui) {
	ui.value = ui.value.replace(/^[\s　]+/g, "");
        ui.value = ui.value.replace(/[\s　]+$/g, "");
        ui.value = ui.value.replace(/[\s　]+/g, " ");
        re1 = /^[A-Za-z\-]+\s+[A-Za-z\-]+$/;
	re2 = /^[A-Za-z\-]+\s+[A-Za-z\-]+\s+[A-Za-z\-]+$/;
	if (ui.value == "") {
          validatePrompt(ui, "請輸入英文名字！");
       }else if ((!re1.test(ui.value)) && (!re2.test(ui.value)))
          validatePrompt(ui, "你的英文名字格式不對！");
        else
          return(true);
}

// 輸入英文全名：<input name="EnglishName" onblur="checkEnglishName(this)">（需輸入名與姓，中間空格隔開）

