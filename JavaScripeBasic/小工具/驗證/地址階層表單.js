

key=new Array(27);
key1=new Array(27);

key[0]=new Array(11);//台北市
key1[0]=new Array(11);
var j=new Array("中正區","大同區","中山區","松山區","大安區","萬華區","信義區","士林區","北投區","內湖區","南港區","文山區");
var t=new Array("100","103","104","105","106","108","110","111","112","114","115","116");
for(i=0;i<12;i++){	key1[0][i]=new Array(0);}
for(i=0;i<12;i++){	key[0][i]=j[i];	key1[0][i][0]=t[i];}

key[1]=new Array(6);//基隆市
key1[1]=new Array(6);
var j=new Array("仁愛區","信義區","中正區","中山區","安樂區","暖暖區","七堵區");
var t=new Array(200,201,202,203,204,205,206);
for(i=0;i<7;i++){	key1[1][i]=new Array(0);}
for(i=0;i<7;i++){	key[1][i]=j[i];	key1[1][i][0]=t[i];}

key[2]=new Array(28);//台北縣
key1[2]=new Array(28);
var j=new Array("萬里","金山","板橋市","汐止","深坑","石碇","瑞芳","平溪","雙溪","貢寮","新店市","坪林","烏來","永和市","中和市","土城市","三峽","樹林市","鶯歌","三重","新莊","泰山","林口","蘆洲","五股","八里","淡水","三芝","石門");
var t=new Array(207,208,220,221,222,223,224,226,227,228,231,232,233,234,235,236,237,238,239,241,242,243,244,247,248,249,251,252,253);
for(i=0;i<29;i++){	key1[2][i]=new Array(0);}
for(i=0;i<29;i++){	key[2][i]=j[i];	key1[2][i][0]=t[i];}

key[3]=new Array(11);//宜蘭縣
key1[3]=new Array(11);
var j=new Array("宜蘭市","頭城","礁溪","壯圍","員山","羅東","三星","大同","五結","冬山","蘇澳","南澳");
var t=new Array(260,261,262,263,264,265,266,267,268,269,270,272);
for(i=0;i<12;i++){	key1[3][i]=new Array(0);}
for(i=0;i<12;i++){	key[3][i]=j[i];	key1[3][i][0]=t[i];}

key[4]=new Array(0);//新竹市
key1[4]=new Array(0);
key[4][0]="新竹市"
key1[4][0]=new Array(0);
key1[4][0][0]=300;

key[5]=new Array(12);//新竹縣
key1[5]=new Array(12);
var j=new Array("竹北市","湖口","新豐","新埔","關西","芎林","寶山","竹東","五峰","橫山","尖石","北埔","峨眉");
var t=new Array(302,303,304,305,306,307,308,310,311,312,313,314,315);
for(i=0;i<13;i++){	key1[5][i]=new Array(0);}
for(i=0;i<13;i++){	key[5][i]=j[i];	key1[5][i][0]=t[i];}

key[6]=new Array(12);//桃園縣
key1[6]=new Array(12);
var j=new Array("中壢市","平鎮市","龍潭","楊梅","新屋","觀音","桃園市","龜山","八德市","大溪","復興","大園","蘆竹");
var t=new Array(320,324,325,326,327,328,330,333,334,335,336,337,338);
for(i=0;i<13;i++){	key1[6][i]=new Array(0);}
for(i=0;i<13;i++){	key[6][i]=j[i];	key1[6][i][0]=t[i];}

key[7]=new Array(17);//苗栗縣
key1[7]=new Array(17);
var j=new Array("竹南","頭份","三灣","南庄","獅潭","後龍","通霄","苑裡","苗栗","造橋","頭屋","公館","大湖","泰安","銅鑼","三義","西湖","卓蘭");
var t=new Array(350,351,352,353,354,356,357,358,360,361,362,363,364,365,366,367,368,369);
for(i=0;i<18;i++){	key1[7][i]=new Array(0);}
for(i=0;i<18;i++){	key[7][i]=j[i];	key1[7][i][0]=t[i];}

key[8]=new Array(7);//台中市
key1[8]=new Array(7);
var j=new Array("中區","東區","南區","西區","北區","北屯區","西屯區","南屯區");
var t=new Array(400,401,402,403,404,406,407,408);
for(i=0;i<8;i++){	key1[8][i]=new Array(0);}
for(i=0;i<8;i++){	key[8][i]=j[i];	key1[8][i][0]=t[i];}

key[9]=new Array(20);//台中縣
key1[9]=new Array(20);
var j=new Array("太平市","大里市","霧峰","烏日","豐原市","后里","石岡","東勢","和平","新社","潭子","大雅","神岡","大肚","沙鹿","龍井","梧棲","清水","大甲","外埔","大安");
var t=new Array(411,412,413,414,420,421,422,423,424,426,427,428,429,432,433,434,435,436,437,438,439);
for(i=0;i<21;i++){	key1[9][i]=new Array(0);}
for(i=0;i<21;i++){	key[9][i]=j[i];	key1[9][i][0]=t[i];}

key[10]=new Array(25);//彰化縣
key1[10]=new Array(25);
var j=new Array("彰化市","芬園","花壇","秀水","鹿港","福興","線西","和美","伸港","員林","社頭","永靖","埔心","溪湖","大村","埔鹽","田中","北斗","田尾","埤頭","溪州","竹塘","二林","大城","芳苑","二水");
var t=new Array(500,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,520,521,522,523,524,525,526,527,528,530);
for(i=0;i<26;i++){	key1[10][i]=new Array(0);}
for(i=0;i<26;i++){	key[10][i]=j[i]; key1[10][i][0]=t[i];}

key[11]=new Array(12);//南投縣
key1[11]=new Array(12);
var j=new Array("南投市","中寮","草屯","國姓","埔里","仁愛","名間","集集","水里","魚池","信義","竹山","鹿谷");
var t=new Array(540,541,542,544,545,546,551,552,553,555,556,557,558);
for(i=0;i<13;i++){	key1[11][i]=new Array(0);}
for(i=0;i<13;i++){	key[11][i]=j[i]; key1[11][i][0]=t[i];}

key[12]=new Array(0);//嘉義市
key1[12]=new Array(0);
key[12][0]="嘉義市"
key1[12][0]=new Array(0);
key1[12][0][0]=600

key[13]=new Array(17);//嘉義縣
key1[13]=new Array(17);
var j=new Array("番路","梅山","竹崎","阿里山","中埔","大埔","水上","鹿草","太保市","子市","東石","六腳","新港","民雄","大林","溪口","義竹","布袋");
var t=new Array(602,603,604,605,606,607,608,611,612,613,614,615,616,621,622,623,624,625);
for(i=0;i<18;i++){	key1[13][i]=new Array(0);}
for(i=0;i<18;i++){	key[13][i]=j[i]; key1[13][i][0]=t[i];}

key[14]=new Array(19);//雲林縣
key1[14]=new Array(19);
var j=new Array("斗南","大埤","虎尾","土庫","褒忠","東勢","臺西","崙背","麥寮","斗六市","林內","古坑","莿桐","西螺","二崙","北港","水林","口湖","四湖","元長");
var t=new Array(630,631,632,633,634,635,636,637,638,640,643,646,647,648,649,651,652,653,654,655);
for(i=0;i<20;i++){	key1[14][i]=new Array(0);}
for(i=0;i<20;i++){	key[14][i]=j[i]; key1[14][i][0]=t[i];}

key[15]=new Array(6);//台南市
key1[15]=new Array(6);
var j=new Array("中區","東區","南區","西區","北區","安平區","安南區");
var t=new Array(700,701,702,703,704,708,709);
for(i=0;i<7;i++){	key1[15][i]=new Array(0);}
for(i=0;i<7;i++){	key[15][i]=j[i]; key1[15][i][0]=t[i];}

key[16]=new Array(30);//台南縣
key1[16]=new Array(30);
var j=new Array("永康市","歸仁","新化","左鎮","玉井","楠西","南化","仁德","關廟","龍崎","官田","麻豆","佳里","西港","七股","將軍","學甲","北門","新營市","後壁","白河","東山","六甲","下營","柳營","鹽水","善化","大內","山上","新市","安定");
var t=new Array(710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,730,731,732,733,734,735,736,737,741,742,743,744,745);
for(i=0;i<31;i++){	key1[16][i]=new Array(0);}
for(i=0;i<31;i++){	key[16][i]=j[i]; key1[16][i][0]=t[i];}

key[17]=new Array(10);//高雄市
key1[17]=new Array(10);
var j=new Array("新興區","前金區","苓雅區","鹽埕區","鼓山區","旗津區","前鎮區","三民區","楠梓區","小港區","左營區");
var t=new Array(800,801,802,803,804,805,806,807,811,812,813);
for(i=0;i<11;i++){	key1[17][i]=new Array(0);}
for(i=0;i<11;i++){	key[17][i]=j[i]; key1[17][i][0]=t[i];}

key[18]=new Array(26);//高雄縣
key1[18]=new Array(26);
var j=new Array("仁武","大社","岡山","路竹","阿蓮","田寮","燕巢","橋頭","梓官","彌陀","永安","湖內","鳳山市","大寮","林園","鳥松","大樹","旗山","美濃","六龜","內門","杉林","甲仙","桃源","三民","茂林","茄萣");
var t=new Array(814,815,820,821,822,823,824,825,826,827,828,829,830,831,832,833,840,842,843,844,845,846,847,848,849,851,852);
for(i=0;i<27;i++){	key1[18][i]=new Array(0);}
for(i=0;i<27;i++){	key[18][i]=j[i]; key1[18][i][0]=t[i];}

key[19]=new Array(32);//屏東縣
key1[19]=new Array(32);
var j=new Array("屏東市","三地門","霧臺","瑪家","九如","里港","高樹","鹽埔","長治","麟洛","竹田","內埔","萬丹","潮州","泰武","來義","萬巒","崁頂","新埤","南州","林邊","東港","琉球","佳冬","新園","枋寮","枋山","春日","獅子","車城","牡丹","恆春","滿州");
var t=new Array(900,901,902,903,904,905,906,907,908,909,911,912,913,920,921,922,923,924,925,926,927,928,929,931,932,940,941,942,943,944,945,946,947);
for(i=0;i<33;i++){	key1[19][i]=new Array(0);}
for(i=0;i<33;i++){	key[19][i]=j[i]; key1[19][i][0]=t[i];}

key[20]=new Array(15);//台東縣
key1[20]=new Array(15);
var j=new Array("台東市","綠島","蘭嶼","延平","卑南","鹿野","關山","海端","池上","東河","成功","長濱","太麻里","金峰","大武","達仁");
var t=new Array(950,951,952,953,954,955,956,957,958,959,961,962,963,964,965,966);
for(i=0;i<16;i++){	key1[20][i]=new Array(0);}
for(i=0;i<16;i++){	key[20][i]=j[i]; key1[20][i][0]=t[i];}

key[21]=new Array(12);//花蓮縣
key1[21]=new Array(12);
var j=new Array("花蓮市","新城","秀林","吉安","壽豐","鳳林","光復","豐濱","瑞穗","萬榮","玉里","卓溪","富里");
var t=new Array(970,971,972,973,974,975,976,977,978,979,981,982,983);
for(i=0;i<13;i++){	key1[21][i]=new Array(0);}
for(i=0;i<13;i++){	key[21][i]=j[i]; key1[21][i][0]=t[i];}

key[22]=new Array(5);//澎湖縣
key1[22]=new Array(5);
var j=new Array("馬公市","西嶼","望安","七美","白沙","湖西");
var t=new Array(880,881,882,883,884,885);
for(i=0;i<6;i++){	key1[22][i]=new Array(0);}
for(i=0;i<6;i++){	key[22][i]=j[i]; key1[22][i][0]=t[i];}

key[23]=new Array(5);//金門縣
key1[23]=new Array(5);
var j=new Array("金沙","金湖","金寧","金城","烈嶼","烏坵");
var t=new Array(890,891,892,893,894,896);
for(i=0;i<6;i++){	key1[23][i]=new Array(0);}
for(i=0;i<6;i++){	key[23][i]=j[i]; key1[23][i][0]=t[i];}

key[24]=new Array(3);//連江縣
key1[24]=new Array(3);
var j=new Array("南竿","北竿","莒光","東引");
var t=new Array(209,210,211,212);
for(i=0;i<4;i++){	key1[24][i]=new Array(0);}
for(i=0;i<4;i++){	key[24][i]=j[i]; key1[24][i][0]=t[i];}

key[25]=new Array(1);//南海諸島
key1[25]=new Array(1);
var j=new Array("東沙","南沙");
var t=new Array(817,819);
for(i=0;i<3;i++){	key1[25][i]=new Array(0);}
for(i=0;i<3;i++){	key[25][i]=j[i]; key1[25][i][0]=t[i];}

key[26]=new Array(0);//釣魚台列嶼
key1[26]=new Array(0)
key[26][0]="釣魚台列嶼"
key1[26][0]=new Array(0);
key1[26][0][0]=290

key[27]=new Array(0);//台灣地區以外
key1[27]=new Array(0);
key[27][0]="台灣地區以外"
key1[27][0]=new Array(0);
key1[27][0][0]="無"
 

function Buildkey(num){
	//將水果下拉式選單之指標索引指定為0。
	document.member.state_name.selectedIndex=0;
	Buildkey1(0);
	for(ctr=0;ctr<key[num].length;ctr++){
		document.member.state_name.options[ctr]=new Option(key[num][ctr],key[num][ctr]);
	}
	document.member.state_name.length=key[num].length;
}
function Buildkey1(num){ 
	document.member.code_address.selectedIndex=0;	 
	for(ctr=0;ctr<key1[document.member.member_address_state1.selectedIndex][num].length;ctr++){  
		document.member.code_address.options[ctr]=new Option(key1[document.member.member_address_state1.selectedIndex][num][ctr],key1[document.member.member_address_state1.selectedIndex][num][ctr]);
	}
}
//-->

{/* <form method="POST" name="member">
  <div align="center">
    <table border="0" id="table1" cellspacing="0" cellpadding="0" width="487">
      <tbody><tr>
        <td nowrap="" bgcolor="#dddddd">
        <p align="center">
        <select name="member_address_state1" onchange="Buildkey(this.selectedIndex);">
        <option value="台北市" selected="">台北市</option>
        <option value="基隆市">基隆市</option>
        <option value="台北縣">台北縣</option>
        <option value="宜蘭縣">宜蘭縣</option>
        <option value="新竹市">新竹市</option>
        <option value="新竹縣">新竹縣</option>
        <option value="桃園縣">桃園縣</option>
        <option value="苗栗縣">苗栗縣</option>
        <option value="台中市">台中市</option>
        <option value="台中縣">台中縣</option>
        <option value="彰化縣">彰化縣</option>
        <option value="南投縣">南投縣</option>
        <option value="嘉義市">嘉義市</option>
        <option value="嘉義縣">嘉義縣</option>
        <option value="雲林縣">雲林縣</option>
        <option value="台南市">台南市</option>
        <option value="台南縣">台南縣</option>
        <option value="高雄市">高雄市</option>
        <option value="高雄縣">高雄縣</option>
        <option value="屏東縣">屏東縣</option>
        <option value="台東縣">台東縣</option>
        <option value="花蓮縣">花蓮縣</option>
        <option value="澎湖縣">澎湖縣</option>
        <option value="金門縣">金門縣</option>
        <option value="連江縣">連江縣</option>
        <option value="南海諸島">南海諸島</option>
        <option value="釣魚台列嶼">釣魚台</option>
        <option value="台灣地區以外">台灣以外</option>
        </select>
        <select class="dd_select" onchange="Buildkey1(this.selectedIndex);" name="state_name">
        <option selected="">中正區</option>
        <option>大同區</option>
        <option>中山區</option>
        <option>松山區</option>
        <option>大安區</option>
        <option>萬華區</option>
        <option>信義區</option>
        <option>士林區</option>
        <option>北投區</option>
        <option>內湖區</option>
        <option>南港區</option>
        <option>文山區</option>
        </select> <span class="bg12">郵遞區號：</span>
        <select class="dd_select" name="code_address">
        <option selected="">100</option>
        </select>  </p></td>
      </tr>
    </tbody></table>
  </div>
</form> */}

