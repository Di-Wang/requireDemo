
var scrWid=$(window).width();
var bannerK=.365;
$(".MaxAn").css("width",scrWid+"px");
$(".MaxAn").css("font-size","10px");

	//  禁止移动端放大缩小
$("head").prepend('<meta name="viewport" content="width='+scrWid+',inital-scale=1.0,user-scalable=no">');
$(".MaxAn[AnIndex='doctor']").css("display","block");
setCardDivCenter();
//医生卡片


ForInSetCenter(setDivCenterArray);

