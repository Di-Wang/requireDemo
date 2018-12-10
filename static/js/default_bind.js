//LOGIN
	//  登录页第一个文本框（userName）位置
	//**************************************1
	var log_address_user = ".Log_user";
	//  登录页第二个文本框（password）位置
	//**************************************2
	var log_address_password = ".Log_password";
	//  登录页所有输入框节点位置数组
	var log_inputs = [log_address_user, log_address_password];
	//  登录页第文本框userName位置+对错标志节点位置  
	var log_showSymbol_input_2 = log_address_user;
	//**************************************3
	var log_showSymbol_symbolSpan_2 = ".Login2 span a";
	//  登录页文本框password位置+对错标志节点位置
	var log_showSymbol_input_3 = log_address_password;
	//**************************************4
	var log_showSymbol_symbolSpan_3 = ".Login3 span a";
	//  登录页userName 的正则+password正则（repassword正则与password使用同一个）
	//**************************************5
	var log_showSymbol_regular_user = (/0?(13|14|15|18|17)[0-9]{9}/);
	//**************************************6
	var log_showSymbol_regular_pass = (/^[a-z0-9_-]{6,16}$/i);
	//  登录页对错号图标匹配输入框的节点位置数组
	var log_showSymbol_inputs = log_inputs;
	//  submit,inputs,regulars,tk‘’
	//
	//  登录页提交按钮节点位置
	//**************************************7
	var log_setHighLight_submit = ".LoginBox .formLogin .Login5";
	//  登录页设置高亮节点位置数组
	var log_setHighLight_inputs = log_inputs;
	//  登录页设置高亮的正则数组
	var log_setHighLight_regulars = [log_showSymbol_regular_user, log_showSymbol_regular_pass];
	//  tk
	//  是否调用检查两次密码相同函数，是则true，否则false
	//**************************************8
	var log_showSymbol_2_tk = false;
	var log_setHighLight_2_tk = false;
	var log_showSymbol_3_tk = false;
	var log_setHighLight_3_tk = false;
	//   REGISTER
	//  注册页userName文本框节点位置
	//**************************************9
	var reg_address_user = ".Register2 .reg_user";
	//  注册页password文本框节点位置
	//**************************************10
	var reg_address_password = ".Register3 .reg_password";
	//  注册页repassword文本框节点位置
	//**************************************11
	var reg_address_repassword = ".Register6 .reg_password";
	var reg_address_IdName = ".RegisterIdName .reg_IdName";
	var reg_address_IdNumber = ".RegisterIdNumber .reg_IdNumber";
	//  注册页所有文本框节点位置数组
	var reg_inputs = [reg_address_user, reg_address_password, reg_address_repassword, reg_address_IdName, reg_address_IdNumber];
	//  注册页userName节点位置
	var reg_showSymbol_input_2 = reg_address_user;
	//  注册页userName对错图标节点位置
	//**************************************12
	var reg_showSymbol_symbolSpan_2 = ".Register2 span a";
	//  注册页password节点位置
	var reg_showSymbol_input_3 = reg_address_password;
	//  注册页password对错图标节点位置
	//**************************************13
	var reg_showSymbol_symbolSpan_3 = ".Register3 span a";
	//  注册页repassword节点位置
	var reg_showSymbol_input_6 = reg_address_repassword;
	//  注册页repassword对错图标节点位置
	//**************************************14
	var reg_showSymbol_symbolSpan_6 = ".Register6 span a";
	var reg_showSymbol_input_IdName = reg_address_IdName;
	//  注册页userName对错图标节点位置
	//**************************************12
	var reg_showSymbol_symbolSpan_IdName = ".RegisterIdName span a";
	var reg_showSymbol_input_IdNumber = reg_address_IdNumber;
	//  注册页userName对错图标节点位置
	//**************************************12
	var reg_showSymbol_symbolSpan_IdNumber = ".RegisterIdNumber span a";
	//  注册页User正则
	var reg_showSymbol_regular_user = log_showSymbol_regular_user;
	//  注册页password正则
	var reg_showSymbol_regular_pass = log_showSymbol_regular_pass;
	var reg_showSymbol_regular_IdName = (/^[\u4e00-\u9fa5]{2,5}$/);
	var reg_showSymbol_regular_IdNumber = (/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/);
	//  注册页对错号所有输入框节点位置数组
	var reg_showSymbol_inputs = reg_inputs;
	//  submit,inputs,regulars,tk
	//**************************************15
	//  注册页登录按钮节点位置
	var reg_setHighLight_submit = ".RegisterBox .formRegister .Register5";
	//  注册页设置高亮所有输入框节点位置数组
	var reg_setHighLight_inputs = reg_inputs;
	//  注册页设置高亮正则数组
	var reg_setHighLight_regulars = [log_showSymbol_regular_user, log_showSymbol_regular_pass, log_showSymbol_regular_pass, reg_showSymbol_regular_IdName, reg_showSymbol_regular_IdNumber];
	//  tk
	//  是否调用检查两次密码相同函数，是则true，否则false
	//**************************************16
	var reg_showSymbol_2_tk = false;
	var reg_setHighLight_2_tk = true;
	var reg_showSymbol_3_tk = false;
	var reg_setHighLight_3_tk = true;
	var reg_showSymbol_6_tk = true;
	var reg_setHighLight_6_tk = true;
	var reg_showSymbol_IdName_tk = false;
	var reg_setHighLight_IdName_tk = true;
	var reg_showSymbol_IdNumber_tk = false;
	var reg_setHighLight_IdNumber_tk = true;
	$(reg_address_user).on('input propertychange',
	function() {
	    showSymbol(reg_showSymbol_input_2, reg_showSymbol_symbolSpan_2, reg_showSymbol_regular_user, reg_showSymbol_inputs, reg_showSymbol_2_tk);
	    setHighLight(reg_setHighLight_submit, reg_setHighLight_inputs, reg_setHighLight_regulars, reg_setHighLight_2_tk);
	});
	$(reg_address_password).on('input propertychange',
	function() {
	    // addSubmit(".Log_user",".Log_password",".Login5","id","submit");
	    showSymbol(reg_showSymbol_input_3, reg_showSymbol_symbolSpan_3, reg_showSymbol_regular_pass, reg_showSymbol_inputs, reg_showSymbol_3_tk);
	    setHighLight(reg_setHighLight_submit, reg_setHighLight_inputs, reg_setHighLight_regulars, reg_setHighLight_3_tk);
	});
	$(reg_address_repassword).on('input propertychange',
	function() {
	    // addSubmit(".Log_user",".Log_password",".Login5","id","submit");
	    showSymbol(reg_showSymbol_input_6, reg_showSymbol_symbolSpan_6, reg_showSymbol_regular_pass, reg_showSymbol_inputs, reg_showSymbol_6_tk);
	    setHighLight(reg_setHighLight_submit, reg_setHighLight_inputs, reg_setHighLight_regulars, reg_setHighLight_6_tk);
	});
	//new
	$(reg_address_IdName).on('input propertychange',
	function() {
	    showSymbol(reg_showSymbol_input_IdName, reg_showSymbol_symbolSpan_IdName, reg_showSymbol_regular_IdName, reg_showSymbol_inputs, reg_showSymbol_IdName_tk);
	    setHighLight(reg_setHighLight_submit, reg_setHighLight_inputs, reg_setHighLight_regulars, reg_setHighLight_IdName_tk);
	});
	$(reg_address_IdNumber).on('input propertychange',
	function() {
	    showSymbol(reg_showSymbol_input_IdNumber, reg_showSymbol_symbolSpan_IdNumber, reg_showSymbol_regular_IdNumber, reg_showSymbol_inputs, reg_showSymbol_IdNumber_tk);
	    setHighLight(reg_setHighLight_submit, reg_setHighLight_inputs, reg_setHighLight_regulars, reg_setHighLight_IdNumber_tk);
	});
	// onFocus click to remove inputs class
	$(reg_address_user).focus(function() {
	    $(this).next("span").children("a").removeAttr("class");
	});
	$(reg_address_password).focus(function() {
	    $(this).next("span").children("a").removeAttr("class");
	});
	$(reg_address_repassword).focus(function() {
	    $(this).next("span").children("a").removeAttr("class");
	});
	// console.log("%c神兽保佑，代码无bug","color: red; font-size: x-large"); 
	  // main function start
	  function setHighLight(submit,inputs,regulars,tk){
	    
	    var CST=true;
	    if(tk){
	      if(
	          checkSameInput(inputs[1],inputs[2])
	        ){
	        CST=true;
	      }else{
	        CST=false;
	      }}
	    if(
	        
	        checkInputsRegular(inputs,regulars)
	        &&
	        CST
	      ){
	        // console.log("setHighLightOk");
	        $(submit).attr("id","submit");
	    }else{
	        // console.log("setHighLightBaKa");
	        $(submit).removeAttr("id");
	    }
	  }
	function  showSymbol(input,symbolSpan,regular,inputs,tk){
	    var KST=true;
	    if(tk){
	      if(
	          checkSameInput(inputs[1],inputs[2])
	        ){
	        // console.log("OJBK");
	        KST=true;
	      }else{
	        KST=false;
	      }}
	      if(
	          checkInputText1(input)==false 
	        ){
	        $(symbolSpan).removeAttr("class");
	      }else{
	        if(
	            regular.test($(input).val())
	            &&
	            KST
	          ){
	          $(symbolSpan).attr("class","symbol_GreenRight");
	        }else{
	          $(symbolSpan).attr("class","symbol_RedWrong");
	        }
	      }
	    }
	// main function over
	// 
	function checkSameInput (inputA,inputB){

	  if(
	    $(inputA).val()==$(inputB).val()&&
	    checkInputText2(inputA,inputB)
	  ){
	    return(true);
	  }else{
	    return(false);
	  }
	}
	  function checkInputsRegular (inputs,regulars){
	    var CIR=new Array();
	    $(inputs).each(function(i){
	      if(
	          $(inputs[i]).val() == ""
	        ){
	        CIR.push(false);
	      }else{
	        if(
	            regulars[i].test($(inputs[i]).val())
	          ){
	        CIR.push(true);
	        }else{
	        CIR.push(false);
	        }
	      }
	    });
	    return CCC(CIR);
	  }
	function checkInputText1 (input){
	  if(
	       $(input).val()!=""
	       ){
	      return(true);
	    }else{
	      return(false);
	    }
	}
	  function checkInputText2 (inputA,inputB){
	    if(
	       $(inputA).val()!="" &&
	       $(inputB).val()!=""
	       ){
	      return(true);
	    }else{
	      return(false);
	    }


	  }
	    function CCC(CIR){
	    var isAllTrue = CIR.every(function(cur){return cur});
	    return isAllTrue;
	    }