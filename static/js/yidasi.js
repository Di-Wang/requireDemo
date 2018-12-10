//topNav
$(".MaxAn[warn='topNav']").html(`
<div class="topNavMax">
<div class="topNav">
	<div class="GZX_topNav_hover">门诊业务</div>
	<div class="GZX_topNav_hover">个人中心</div>
	<div class="GZX_topNav_hover">住院业务</div>
</div>
<div class="topNavList">
	<div class="assistant">
		<a href="${ctx}departList.jsp ">
			<div class="GZX_topNav_hover">预约挂号</div>
		</a>
		<a href="${ctx}orderList.jsp">
			<div class="GZX_topNav_hover">挂号记录</div>
		</a>
		<a href="${ctx}checkTest.jsp">
			<div class="GZX_topNav_hover">检验检查结果</div>
		</a>
		<a href="${ctx}orderPayMoneyList.jsp">
			<div class="GZX_topNav_hover">门诊缴费</div>
		</a>
	</div>
	<div class="personel">
		<a href="${ctx}cardList.jsp">
			<div class="GZX_topNav_hover">绑定就诊卡</div>
		</a>
		<a href="${ctx}userList.jsp">
			<div class="GZX_topNav_hover">家庭成员</div>
		</a>
		<a href="${ctx}pwdMod.jsp">
			<div class="GZX_topNav_hover">密码修改</div>
		</a>
		<a href="${ctx}logout.html">
			<div class="GZX_topNav_hover">退出</div>
		</a>
	</div>
	<div class="hospital">
		<a href="${ctx}findHospitalized.jsp ">
			<div class="GZX_topNav_hover">住院费用明细</div>
		</a>
	</div>
</div>	
</div>

`);
$("body").append(`
	<span class="backBar" >
		<svg class="icon rightIcon" aria-hidden="true">
			<use xlink:href="#icon-jiantouarrowhead7"></use>
		</svg>
	</span>`
	);
$(".backBar").click(function(){
	window.history.back(-1);
});

var scrWid=$(window).width();
// var bannerK=.365;
// var hotSearchK=.8 / 3 *.99;
$(".MaxAn").css("width",scrWid+"px");
$(".MaxAn").css("font-size","10px");
// $(".hotSearch>div").width(scrWid*hotSearchK);
// $(".banner").height(scrWid*bannerK);
var listHeight = parseInt($(".officeList").height())-parseInt($(".officeList .fontNav").height());
$(".officeList .firstList").css("height",listHeight+"px");
$(".officeList .secondList").css("height",listHeight+"px");

//重置左边距
resetLeftPlace(".topNav>div:eq(0)",".assistant");
resetLeftPlace(".topNav>div:eq(1)",".personel");
resetLeftPlace(".topNav>div:eq(2)",".hospital");
var AnIndexH;	
//设置一个顶部导航开关
//GongZiXi 20181106 rebuild
$(".topNav>div").mouseover(function(e){
	var thisKey=$(this).index();
	$(".topNavMax").attr("hoverNum",thisKey);
	// clear topNav
	// 此处改的样式替换为 使用类名的css滑过样式
	// $(e.target).addClass({"background":"#24ad9c","color":"#bde9e4"});
	// reset topNa
	// $(this).css({"background":"#58BCAA","color":"#bde9e4"});
	$(".topNavList>div").hide();
	$(".topNavList>div").eq(thisKey).show();
});
$(".topNav>div").mouseout(function(){
	$(".topNavList>div").css("display","none");
	// topNavClick(thisKey);//显示菜单栏列表
});
$(".topNavList>div div").mouseover(function(){
	var thisKey = $(".topNavMax").attr("hoverNum");
	$(".topNavList>div").hide();
	$(".topNavList>div").eq(thisKey).show();
});
$(".topNavList>div").mouseout(function(){
	$(".topNavList>div").css("display","none");
});
$(".topNavList>div").click(function(){
	$(".topNavList>div").hide();
});
////设置loding界面（在导航栏下）; 功能： 先判断dom里是否有此元素，有则将display置非，同时绑定或解绑 禁止滑动事件，无则加此元素并置block，绑定 禁止滑动事件.如果第二个参数为true或false，则强制显示或强制隐藏
function setLoading(topHei,displayBlock){
	//判断是否有这个元素
	var zhi = $("#loadingMax").length;
	// console.log(zhi)
	if(zhi == 0){//如果有
		$("body").append(`
			<div id="loadingMax">
				<div class="loading">
					<img class="load" src="${ctx }static/image/loading.gif"/>	
				</div>
			</div>
		`);
		//设置背景等高与设备
		$("#loadingMax").height($(window).height()+"px");
		setDivWidth("#loadingMax img");
		// $("#loadingMax img").css("margin","0 auto");
		//hide loadingInformation
		$("#loadingMax").css({"display":"block"});
		// alert(1);
		var top = parseInt(topHei) +134; 
		$("#loadingMax").css("top",top+"px");
		$("#loadingMax").show();
		//绑定 禁止滑动事件
		// $("body").bind("touchmove",function(event){
		// 	event.preventDefault;
		// });
		// $("body").css("overflow","auto");
	}else if( $("#loadingMax").css("display") == "block" ){
		var top = parseInt(topHei) +134; 
		$("#loadingMax").css("top",top+"px");
		$("#loadingMax").hide();
		//取消 禁止滑动事件
		// $("body").unbind("touchmove");
		// $("body").css("overflow","auto");
	}else if( $("#loadingMax").css("display") == "none" ){
		// var topNavHei = 134;
		var top = parseInt(topHei) +134; 
		$("#loadingMax").css("top",top+"px");
		$("#loadingMax").show();
		//绑定 禁止滑动事件
		// $("body").bind("touchmove",function(event){
		// 	event.preventDefault;
		// });
		// $("body").css("overflow","hidden");
	}
	if(displayBlock == true &&  $("#loadingMax").css("display") == "none" ){
		var top = parseInt(topHei) +134; 
		$("#loadingMax").css("top",top+"px");
		$("#loadingMax").show();
		//绑定 禁止滑动事件
		$("body").bind("touchmove",function(event){
			event.preventDefault;
		});
		// $("body").css("overflow","hidden");
	}else if(displayBlock == false && $("#loadingMax").css("display") == "block" ){
		var top = parseInt(topHei) +134; 
		$("#loadingMax").css("top",top+"px");
		$("#loadingMax").hide();
		//取消 禁止滑动事件
		// $("body").unbind("touchmove");
		// $("body").css("overflow","auto");
	}else if( $("#loadingMax").css("display") == "block"){
		var top = parseInt(topHei) +134; 
		$("#loadingMax").css("top",top+"px");
	}
}

// 共通点：需要判断dom中是否有此元素，有则显示隐藏，无则添加显示  使用：1.等待loading，2.未发现信息 3.弹出框

function setNotFound(topHei,displayBlock,tipsInfo){
	var zhi = $(".noInfo").length;
	var zhi00;
	tipsInfo == undefined ? zhi00 = "暂无信息！": zhi00 = tipsInfo;
	// alert(zhi00)
	// console.log(zhi)
	if(zhi == 0){//如果有
		$("body").append(`
		<div class="MaxAn noInfo">
			<div class="" style="height:80px;width:1px"></div>
			<div class="patientIDCardBG">
				<div class="patientIDCardIMG">
					<div>
						<img src="${ctx }static/image/none.png" alt="">
					</div>
					<div class="title">${zhi00}</div>
				</div>
			</div>
		</div>
	`);
		//设置背景等高与设备
		$(".noInfo").height($(window).height()+"px");
		setDivWidth(".noInfo img");
		// $(".noInfo img").css("margin","0 auto");
		//hide loadingInformation
		$(".noInfo").css({"display":"block"});
		// alert(1);
		var top = parseInt(topHei) +134; 
		$(".noInfo").css("top",top+"px");
		$(".noInfo").show();

	}else if( $(".noInfo").css("display") == "block" ){
		
		$(".noInfo .title").html(zhi00);

		var top = parseInt(topHei) +134; 
		$(".noInfo").css("top",top+"px");
		$(".noInfo").hide();

	}else if( $(".noInfo").css("display") == "none" ){
		$(".noInfo .title").html(zhi00);
		// var topNavHei = 134;
		var top = parseInt(topHei) +134; 
		$(".noInfo").css("top",top+"px");
		$(".noInfo").show();

	}
	if(displayBlock == true &&  $(".noInfo").css("display") == "none" ){
		var top = parseInt(topHei) +134; 
		$(".noInfo").css("top",top+"px");
		$(".noInfo").show();

	}else if(displayBlock == false && $(".noInfo").css("display") == "block" ){
		var top = parseInt(topHei) +134; 
		$(".noInfo").css("top",top+"px");
		$(".noInfo").hide();
	}else if( $(".noInfo").css("display") == "block"){
		var top = parseInt(topHei) +134; 
		$(".noInfo").css("top",top+"px");

	}
}
	//  禁止移动端放大缩小
$("head").prepend('<meta name="viewport" content="width='+scrWid+',inital-scale=1.0,user-scalable=no">');
$(".MaxAn[AnIndex='doctor']").css("display","block");
setCardDivCenter();
$(".todayMore").click(function(){
	if($(".moreDate").css("display")=="block"){
			$(".moreDate").hide();
			$(".todayMore>div img").attr("src",ctx+"static/image/bottomRow.png");
		}else{
			$(".moreDate").show();
			$(".todayMore>div img").attr("src",ctx+"static/image/topRow.png");
		}
	setLineHeight(".moreDateWeek>div");
	setLineHeightSelf(".moreDateDate>div");
});
//填充 近七天
dateBanner();
var familyMemberInputsCheckAgeInputKG=true;
$(".MaxAn[test='familyMemberInputs'] .familyMemberInputsCheckAge input").click(function(){
	$(".MaxAn[test='familyMemberInputs'] .familyMemberInputs").removeAttr("addBorder");
	if(familyMemberInputsCheckAgeInputKG){
		$(".MaxAn[test='familyMemberInputs'] .familyMemberInputs:eq(4)").attr("addBorder","AddWarningBorder");
		familyMemberInputsCheckAgeInputKG=false;
	}else{
		$(".MaxAn[test='familyMemberInputs'] .familyMemberInputs:eq(4)").attr("addBorder","AddWarningBorder");
		$(".MaxAn[test='familyMemberInputs'] .familyMemberInputs:eq(0)").attr("addBorder","AddWarningBorder");
		$(".MaxAn[test='familyMemberInputs'] .familyMemberInputs:eq(2)").attr("addBorder","AddWarningBorder");
		$(".MaxAn[test='familyMemberInputs'] .familyMemberInputs:eq(3)").attr("addBorder","AddWarningBorder");
		familyMemberInputsCheckAgeInputKG=true;
	}
});
// 180521
$("div[test2='buttonGreenBg']").click(function(){
	$(".LoginBoxMax").show();
	$("div[test='blackGod']").show();
	$("div[test='blackGod']").css("height",$(document).height());
	// alert(1);
	$(".MaxAn[warn='patientIDCard']").hide();
});
$(".Login5Font").click(function(){
	window.location.href= ctx +"familyMember.html";
});
$('.MaxAn[test="selectTime"]').height($(document).height());
$(".MaxAn[warn='familyInputs']").css("height",$(document).height());
$('.MaxAn[test="PayPic"]').css("height",$(document).height());
//yule		支付成功与否的事件
//180605
$(".DocToDate").click(function(){
	  $('.MaxAn[navList="Doc"]').show();
	  $('.MaxAn[navList="Date"]').hide();
	$('.MaxAn[test="DateOrDocNav"]>div>div').css({"border-bottom":"0px solid #fbfbfb","color":"#bababa"});
	$(".DocToDate").css({"border-bottom":"4px solid #fbfbfb","color":"#26ad9c"});
	$('.MaxAn[warn="NotFoundInformation"]').html("");
    	if($(".MaxAn[test='doctorMax']").html()==""){//判断是否有医生填入，无则加载
    		tipsHaveNotDoctor();//调用
    	}
    	setCardDivCenter();
});
$(".DateToDoc").click(function(){
	  $('.MaxAn[navList="Doc"]').hide();
	  $('.MaxAn[navList="Date"]').show();
	$('.MaxAn[test="DateOrDocNav"]>div>div').css({"border-bottom":"0px solid #fbfbfb","color":"#bababa"});
	$(".DateToDoc").css({"border-bottom":"4px solid #fbfbfb","color":"#26ad9c"});
      setLineHeightSelf(".moreDateDate>div");
});
ForInSetCenter(setDivCenterArray);
function setMoreInfoBar(a,b,c){
	// 判断所点元素是同名元素的第几个
	// 1.获取所有 含有 moreInfoBarClick 的元素及index
	// 2.封装进一个对象里.
	var newObj = {};
	var num001 = 0; 
	$(a).parent().children("div").each(function(i,n){
		var ak ="Num" + i ;
		var bool001 = $(this).hasClass("moreInfoBarClick");
		if(bool001){
			newObj[ak] = num001;
			num001 ++ ;
		} 
	});
	// console.log("-------");
	// console.log(newObj);//{Num4: 0, Num5: 1}

	// 设置点击事件
	$(a).click(function(i){
		//判断所点击的在含有 moreInfoBarClick 类名中的排名
		var zhi0 = $(this).index();
		var zhi1 = "Num" + zhi0;
		var indexValue = newObj[zhi1];
		// console.log("-------- -----------");
		// console.log(zhi1);
		// console.log(indexValue);
		// 1.清除所有 moreInfoBar
		$(".moreInfoBar").remove();
		// 2.确定点击的位置 
		var path = parseInt($(this).offset().top) + 148;
		// 3.取出信息填到 moreInfoBar 字符串里
		var strMoreInfo = "";
		$.each(b.info[c],function(i,n){
			strMoreInfo += '<li class="clearBoth pcCenter cursorPoint"><div class="floatLeft">'+n.attr+'</div><div class="floatRight">'+n.attrValue+'</div></li>';
		});
		var str002 = ' <!-- 下拉菜单（20180929GongZiXi）开始 --><span class="moreInfoBar"><!-- 每条li都是一行信息 -->' + strMoreInfo + '</span><!-- 下拉菜单（20180929GongZiXi）结束 -->';
		$(this).after(str002);
		// 4.在所点击的位置后添加 moreInfoBar
	});
}
function clickTOHideShowMIBC(){
// new
// 通过点击事件去显示隐藏
$(".moreInfoBarClick").click(function(){
	var subl = $(this).next().css("display") == "none";
	if(subl){
		//显示
		// console.log("yes");
		$(this).next().slideDown(500);
		$(this).find(" img").attr("src",ctx+"static/image/topRow2.png");
	}else{
		// 隐藏
		// console.log("no");
		$(this).next().slideUp(500);
		$(this).find("img").attr("src",ctx+"static/image/bottomRow2.png");
	}
	// if($(this).hasClass(""))
});}
// setMoreInfoBar(".moreInfoBarClick",b,0);
/* <!-- 下拉菜单（20180929GongZiXi）结束 --> */
function  removeRepeti (a) {// 去重
	var Outpatient1 = a;
	var newArr001 = [];
	var OutpatientNew = [];
	$.each(Outpatient1,function(i,n){
		var indexOfArr =newArr001.indexOf(n.recipe_no);//检测数组newArr001中是否含有此元素
		if(indexOfArr == -1){
			newArr001.push(n.recipe_no);
			OutpatientNew.push(n.recipe_no);
		}
	});
	return OutpatientNew;
}
// console.log(removeRepeti ());
function addInfo124(a){

	// var Outpatient2 = a;
	//加载 小列表
	var newStr001 = `<div class="itemList  cursorPoint ">		
						<div class="left floatLeft paddingLeft80px">
							<p style="font-size:38px;">项目名称(价格)</p>
						</div>
						<div class="floatRight iconImg">
						</div>
						<div class="right floatRight">
							<p style="font-size:38px;" class="textAlignRight">科室名称</p>
						</div>
					</div>
`;
	var totlePrice = 0;
	function seta (n){
		var a1 = `${n.item_name}(￥${n.unit_price})`;
		if(a1.length >25){
			return `height:200px;line-height:60px;`
		}
	}
	function setb (n){
		var a1 = `${n.item_name}(￥${n.unit_price})`;
		//计算应距右边距离
		if(a1.length >25){
			return `margin-top:-95px;margin-right:40px;`
		}
	}
	$.each(a,function(i,n){
			totlePrice += Number(n.own_cost) * 1000000;
			var thisTime = n.oper_date.split(/[t+]/);
			//添加head信息
			newStr001 += `
				<div class="itemList  cursorPoint " >		
					<div class="left floatLeft paddingLeft80px">
						<p  style="${seta(n)}">${n.item_name}(￥${n.unit_price})</p>
					</div>
					<div class="floatRight iconImg">
					</div>
					<div class="right floatRight"  style="${setb(n)}">
						<p class="textAlignRight">${n.exec_dpnm}</p>
					</div>
				</div>
				`;

	});
	// console.log(totlePrice);
	$(".totlePrice0").html(totlePrice/1000000);
	$(".itemList00").html(newStr001);
}
// $(".moreInfoBar")
// 设置  ${ctx}CheckTest.jsp 这一页 加载的 用户名
function setCheckTestUser (userList){
	var str = "";
	$.each(userList,function(i,n){
			str += `<option value="${i}" userId="${n.userId}">${n.userName}</option>`
	}) 
	$("#userId").html(str);
}
// checkTest 页面 根据typeId添加数据
function checkTestAddInfo(json){
	var linkAddBol = false ;
	json.linkAdd == true?linkAddBol = true:linkAddBol = false;
	//加载 小列表
	var newStr001 = "";
	$.each(json.data,function(i,n){
			var times = n.length;//获得单条数据内子对象个数
			// var thisTime = n[0].apply_date;
			//添加head信息
			newStr001 += `<div class="itemList  cursorPoint moreInfoBarClick">		
								<div class="left floatLeft paddingLeft80px">			
									<p>${linkAddBol?n[0].exam_categ_name:n[0].report_name }(${times})次</p>			
								</div>			
								<div class="floatRight iconImg">				
									<img src="${ctx}static/image/bottomRow2.png"/>			
								</div>			
								<div class="right floatRight">			
									<p class="textAlignRight"></p>
								</div>		
							</div>`;
			//单条数据下拉信息填入开始
			newStr001 += `<div class="moreInfoBar" style="display:none">`;
			let rows = n;
			if(linkAddBol){
				rows.sort(function(a,b){
					return  Date.parse(b.report_date) - Date.parse(a.report_date);//时间正序
				});
			}else{
				rows.sort(function(a,b){
					return  Date.parse(b.apply_date) - Date.parse(a.apply_date);//时间正序
				});
			}

			
			//排序
			$.each(rows,function(j,k){
				newStr001 +=`<a href="${ qiming(k,linkAddBol)}" style="color:#aaa"> 
								<li class="pcCenter">
									<div class="floatLeft">第${n.length-j}次</div>
									<div class="floatRight">${linkAddBol?k.report_date:k.apply_date}</div>
									<div class=" clearBoth" style="height:1px"></div>		
								</li>
							</a>`;
			});
			//单条数据下拉信息填入结束
			newStr001 += `</div>`;
	});
	$(".itemList00").html(newStr001);
	// if(linkAddBol){
	// 	$(".itemList00 a").click(function(){
	// 	});
	// }
	clickTOHideShowMIBC();//下拉特效
}
function qiming(k,b){
    if(b == true){
        return `${ctx}imageSmall.jsp?examNumber=${k.exam_number}` ;
    }else{
        return `${ctx}checkSmall.jsp?electrRequisitionNo=${k.electr_requisition_no}&reportName=${encodeURI(encodeURI(k.report_name))}&applyDate=${k.apply_date}`;
    }
} 
function checkTestSmall_Body(json){
	var str = "";
	function ab (json){
		var a = {};
		var str01 = "#";
		var num = "0";
		if(json.normal_flag == "低"){
			num = "-1";
			str01 = `<use xlink:href="#icon-jiantou"></use>`;
		}else if(json.normal_flag == "高"){
			num = "1";
			str01 = `<use xlink:href="#icon-jiantou-copy-copy"></use>`;
		}
		a.num = num;
		a.str = str01;
		return a;
	}
	function checkDan(n){
		return n == undefined? n = "": n = n;
	}
	function abc(n){
		if(n.reference_ranges == undefined || n.reference_ranges == ""){
			return `
				<div style="width:360px;" class="prpr">
					<div style="height:50px;">
					<span class=" ">${n.test_result_value} ${checkDan(n.test_result_value_unit)}</span>
						<svg class="icon rightIcon" aria-hidden="true">
						${ab(n).str}
						</svg>
					</div>
				</div>
			`;
		}else {
			return `
			<div style="margin-top:-25px;width:360px;" class="prpr">
				<div style="height:50px;">
				<span class=" ">${n.test_result_value} ${checkDan(n.test_result_value_unit)}</span>
					<svg class="icon rightIcon" aria-hidden="true">
					${ab(n).str}
					</svg>
				</div>
				<div class="textAlignCenter" style="margin-top:0;font-size:26px;color:#888" >参考范围:${n.reference_ranges}</div>
			</div>
			`;
		}
	}
	$.each(json,function(i,n){
		str += `
		<div class="checkTestSmall_listBody ">
			<div class="displayFlex divCenter" status="${ab(n).num}">
				<div class="textAlignleft name flex1">${n.test_item_name}</div>
				${abc(n)}
			</div>
		</div>
		`;
	});
	$(".checkTestSmall_Body").html(str);
}
function imageSmall_chart(json){
	var str ="" 
	$.each(json,function(i,n){
		str +=`
			<div class="imageSmall_chart">
				<div class="space40px"></div>
				<div class="imageSmall_chart_mainInfo divCenter displayFlex">
					<p class="textAlignLeft flex1" style="color:#555;font-size:30px;">${n.exam_categ_name} ${n.oper_part_name}</p>
					<p class="textAlignRight flex1">${n.report_date}</p>
				</div>
				<div class="imageSmall_chart_title divCenter">
					<p class="textAlignCen title">中国医科大学附属第四医院</p>
					<p class="textAlignCen time">${n.exam_categ_name} 诊断报告</p>
				</div>
				<div class="imageSmall_chart_info divCenter displayFlex" >
					<div class="flex1">
						<p class="textAlignLeft">检查项目：${n.exam_categ_name}</p>
					</div>
					<div class="flex1">
						<p class="textAlignRight">检查日期：${n.report_date}</p>
					</div>
				</div>
				<div class="imageSmall_chart_body divCenter"  style="padding-bottom:60px;">
						<div class="textAlignLeft" style="line-height:60px;width:100%;height:100%;border:none;color:#888"  >
							检查结果：<br/>
							${n.exam_result}
						</div>
						<br/>
						<div class="textAlignLeft" style="color:#999;line-height:60px;width:100%;height:100%;border:none;"  >
							报告描述：<br/>
							${n.exam_descr}
						</div>
				</div>
			</div>
		`;
	});
	$(".imageSmall_chartMax").html(str);
}
function getUrlParam(a){//获取地址栏
	var reg = new RegExp("(^|&)"+ a +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg);  //匹配目标参数
	if (r!=null) return unescape(r[2]); return null; //返回参数值
  }
function findHostitailzed (json){
		var a ="";
		$.each(json,function(i,n){
			a += `  
			<div class="hospitalSub_chart">      
				<div class="hospitalSub_chart_title divCenter">
					<p class="textAlignCen time">项目名称：${n.itemname}</p>
				</div>
				<div class="hospitalSub_chart_info divCenter displayFlex" >
					<div class="flex1">
					<p class="textAlignLeft">收费类别：${n.feetype}</p>
					<p class="textAlignLeft">价格单位：${n.stockunit}</p>
					<p class="textAlignLeft">总价：￥${n.totalfee}</p>
				</div>
				<div class="flex1">
					<p class="textAlignLeft">单价：￥${n.itemprice}</p>
					<p class="textAlignLeft">数量：${n.itemnum}</p>
					<p class="textAlignLeft">计费日期：${n.paydate}</p>
						
					</div>
				</div>
			</div>
			`
		});
		$(".hospitalSub_chartMax").html(a);
		//使title永远在最上面
}
function welcomeInfo (json){
	$.each(json,function(i,n){
		if(n.parentId == 0){
			var a0 = n.papersNumber;
			var a1 = n.phoneNumber;
			var a00 = a0.substring(0,4);
			var a01 = a0.substring(14,18);
			var aFin = a00+"****"+a01;
			var a10 = a1.substring(0,3);
			var a11 = a1.substring(7,11);
			var aFin1 = a10 + "****" + a11;
			var a = `
				<div class="textAlignCen" >个人信息</div>
				<div class="item">姓名：   ${n.userName}</div>
				<div class="item">身份证号： ${aFin}</div>
				<div class="item">手机： ${aFin1}</div>	
			`;
			$("body>.other").html(a);
		}
	});
}
