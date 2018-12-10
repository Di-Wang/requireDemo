

//注册登陆后台回调提示信息
var callBack=true;

$("head").append(`<link rel="stylesheet" href="${ctx }static/css/package.css">`)
// $("head").after('');

// 实现目的：a、b两个文本框任意一个失去焦点时进行检测，判断用户名和密码是否都填写，若都填写则登录按钮变色，若只要有一个未填写登录按钮就置灰

// 登录页

//若两个输入框通过正则，则变亮
//








// 小结：主要使用两个函数：
//     1.showSymbol(input,symbolSpan,regular,inputs,tk)；
//        参数：
//          input,
//            被检测的文本框节点位置，用来检测是否为空；
//          symbolSpan,
//            对错号图标的span所在的节点位置，用来定位增删属性；
//          regular,
//            当前input所对应的正则，用来匹配是否正确；
//          inputs,
//            额外模块中的当前页面所有输入文本框节点位置的数组，用来调用密码和重复密码元素以判定是否重复；
//          tk
//            额外代码模块开关，用来控制是否调用检测两个文本框相同与否的代码块；
//     2.setHighLight(submit,inputs,regulars,tk)；
//        参数：
//          submit,
//            当前页面submit所在节点，用来定位增删属性；
//          inputs,
//            当前页面所有文本框节点位置的数组，用来依次与正则匹配以判定是否让submit高亮；
//          regulars,
//            当前页面所有文本框的正则的数组，用来与文本框节点位置数组匹配以判定是否让submit高亮；
//          tk
//            额外代码模块开关，用来控制是否调用检测两个文本框相同与否的代码块；







// 数据控制入口
//  共十六个需要输入数据的地方，分别是：  




//**************************************1
//  登录页文本框（userName）位置
//  log_address_user


//**************************************2
//  登录页文本框（password）位置
//  log_address_password





//**************************************3
//  登录页文本框userName对错标志节点位置 
//  log_showSymbol_symbolSpan_2


//**************************************4
//  登录页文本框password对错标志节点位置
//  log_showSymbol_symbolSpan_3





//**************************************5
//  登录页userName 的正则
//  log_showSymbol_regular_user


//**************************************6
//  登录页password正则（repassword正则与password使用同一个）
//  log_showSymbol_regular_pass





//**************************************7
//  登录页提交按钮节点位置
//  log_setHighLight_submit





//**************************************8
//  登录页是否调用检查两次密码相同函数，是则true，否则false
//  log_showSymbol_2_tk
//
//  log_setHighLight_2_tk
//
//  log_showSymbol_3_tk
//
//  log_setHighLight_3_tk








//**************************************9
//  注册页userName文本框节点位置
//  reg_address_user

 
//**************************************10
//  注册页password文本框节点位置
//  reg_address_password 


//**************************************11
//  注册页repassword文本框节点位置
//  reg_address_repassword 




//**************************************12
//  注册页userName对错图标节点位置
//  reg_showSymbol_symbolSpan_2


//**************************************13
//  注册页password对错图标节点位置
//  reg_showSymbol_symbolSpan_3


//**************************************14
//  注册页repassword对错图标节点位置
//  reg_showSymbol_symbolSpan_6




//**************************************15
//  注册页登录按钮节点位置
//  reg_setHighLight_submit




//**************************************16
//  注册页是否调用检查两次密码相同函数，是则true，否则false
//  reg_showSymbol_2_tk

//  reg_setHighLight_2_tk

//  reg_showSymbol_3_tk

//  reg_setHighLight_3_tk

//  reg_showSymbol_6_tk

//  reg_setHighLight_6_tk




//LOGIN

//  登录页第一个文本框（userName）位置
//**************************************1
var log_address_user=".Log_user";

//  登录页第二个文本框（password）位置
//**************************************2
var log_address_password=".Log_password";



//  登录页所有输入框节点位置数组
var log_inputs=[
  log_address_user,
  log_address_password
  ];



//  登录页第文本框userName位置+对错标志节点位置  
var log_showSymbol_input_2=log_address_user;
//**************************************3
var log_showSymbol_symbolSpan_2=".Login2 span a";

//  登录页文本框password位置+对错标志节点位置

var log_showSymbol_input_3=log_address_password;
//**************************************4
var log_showSymbol_symbolSpan_3=".Login3 span a";

//  登录页userName 的正则+password正则（repassword正则与password使用同一个）
//**************************************5
var log_showSymbol_regular_user=(/^[1][3,4,5,7,8][0-9]{9}$/);
//**************************************6
var log_showSymbol_regular_pass=(/^[a-z0-9_-]{6,16}$/i);

//  登录页对错号图标匹配输入框的节点位置数组

var log_showSymbol_inputs=log_inputs;




//  submit,inputs,regulars,tk‘’
//
//  登录页提交按钮节点位置
//**************************************7
var log_setHighLight_submit=".LoginBox .formLogin .Login5";

//  登录页设置高亮节点位置数组

var log_setHighLight_inputs=log_inputs;

//  登录页设置高亮的正则数组

var log_setHighLight_regulars=[
  log_showSymbol_regular_user,
  log_showSymbol_regular_pass
  ];



//  tk
//  是否调用检查两次密码相同函数，是则true，否则false
//**************************************8
var log_showSymbol_2_tk=false;

var log_setHighLight_2_tk=false;

var log_showSymbol_3_tk=false;

var log_setHighLight_3_tk=false;





//   REGISTER
//   
//  注册页userName文本框节点位置
//**************************************9
var reg_address_user =".Register2 .reg_user";

//  注册页password文本框节点位置
//**************************************10
var reg_address_password =".Register3 .reg_password";

//  注册页repassword文本框节点位置
//**************************************11
var reg_address_repassword =".Register6 .reg_password";
var reg_address_IdName =".RegisterIdName .reg_IdName";
var reg_address_IdNumber =".RegisterIdNumber .reg_IdNumber";

//  注册页所有文本框节点位置数组
var reg_inputs=[
  reg_address_user,
  reg_address_password,
  reg_address_repassword,
  reg_address_IdName,
  reg_address_IdNumber
  ];




//  注册页userName节点位置
var reg_showSymbol_input_2=reg_address_user;
//  注册页userName对错图标节点位置
//**************************************12
var reg_showSymbol_symbolSpan_2=".Register2 span a";
//  注册页password节点位置
var reg_showSymbol_input_3=reg_address_password;
//  注册页password对错图标节点位置
//**************************************13
var reg_showSymbol_symbolSpan_3=".Register3 span a";
//  注册页repassword节点位置
var reg_showSymbol_input_6=reg_address_repassword;
//  注册页repassword对错图标节点位置
//**************************************14
var reg_showSymbol_symbolSpan_6=".Register6 span a";



var reg_showSymbol_input_IdName=reg_address_IdName;
//  注册页userName对错图标节点位置
//**************************************12
var reg_showSymbol_symbolSpan_IdName=".RegisterIdName span a";

var reg_showSymbol_input_IdNumber=reg_address_IdNumber;
//  注册页userName对错图标节点位置
//**************************************12
var reg_showSymbol_symbolSpan_IdNumber=".RegisterIdNumber span a";


//  注册页User正则
var reg_showSymbol_regular_user=log_showSymbol_regular_user;
//  注册页password正则
var reg_showSymbol_regular_pass=log_showSymbol_regular_pass;
var reg_showSymbol_regular_IdName=(/^[\u4e00-\u9fa5]{2,5}$/);
var reg_showSymbol_regular_IdNumber=(/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/);

  


//  注册页对错号所有输入框节点位置数组
var reg_showSymbol_inputs=reg_inputs;









//  submit,inputs,regulars,tk
//**************************************15
//  注册页登录按钮节点位置
var reg_setHighLight_submit=".RegisterBox .formRegister .Register5";
//  注册页设置高亮所有输入框节点位置数组
var reg_setHighLight_inputs=reg_inputs;
//  注册页设置高亮正则数组
var reg_setHighLight_regulars=[
  log_showSymbol_regular_user,
  log_showSymbol_regular_pass,
  log_showSymbol_regular_pass,
  reg_showSymbol_regular_IdName,
  reg_showSymbol_regular_IdNumber
  ];




//  tk
//  是否调用检查两次密码相同函数，是则true，否则false
//**************************************16
var reg_showSymbol_2_tk=false;

var reg_setHighLight_2_tk=true;

var reg_showSymbol_3_tk=false;

var reg_setHighLight_3_tk=true;

var reg_showSymbol_6_tk=true;

var reg_setHighLight_6_tk=true;

var reg_showSymbol_IdName_tk=false;

var reg_setHighLight_IdName_tk=true;

var reg_showSymbol_IdNumber_tk=false;

var reg_setHighLight_IdNumber_tk=true;











// 登录页

$(log_address_user).blur(
    function(){
    // addSubmit(".Log_user",".Log_password",".Login5","id","submit");

    showSymbol(
      log_showSymbol_input_2,
      log_showSymbol_symbolSpan_2,
      log_showSymbol_regular_user,
      log_showSymbol_inputs,
      log_showSymbol_2_tk
      );

    
    setHighLight(
      log_setHighLight_submit,
      log_setHighLight_inputs,
      log_setHighLight_regulars,
      log_setHighLight_2_tk
      );
    }
  );
$(log_address_password).blur(
    function(){
    // addSubmit(".Log_user",".Log_password",".Login5","id","submit");

    showSymbol(
      log_showSymbol_input_3,
      log_showSymbol_symbolSpan_3,
      log_showSymbol_regular_pass,
      log_showSymbol_inputs,
      log_showSymbol_3_tk
      );

    
    setHighLight(
      log_setHighLight_submit,
      log_setHighLight_inputs,
      log_setHighLight_regulars,
      log_setHighLight_3_tk
      );

   
    }
  );

// onFocus click to remove
$(log_address_user).focus(
  function(){
    $(this).next("span").children("a").removeAttr("class");
  }
  );

$(log_address_password).focus(
  function(){
    $(this).next("span").children("a").removeAttr("class");
  }
  );
// onFocus click to remove inputs class
$(reg_address_user).focus(
  function(){
    $(this).next("span").children("a").removeAttr("class");
  }
  );

$(reg_address_password).focus(
  function(){
    $(this).next("span").children("a").removeAttr("class");
  }
  );

$(reg_address_repassword).focus(
  function(){
    $(this).next("span").children("a").removeAttr("class");
  }
  );


setInterval(function(){
  //new
   showSymbol(
      reg_showSymbol_input_IdName,
      reg_showSymbol_symbolSpan_IdName,
      reg_showSymbol_regular_IdName,
      reg_showSymbol_inputs,
      reg_showSymbol_IdName_tk
      );
    setHighLight(
      reg_setHighLight_submit,
      reg_setHighLight_inputs,
      reg_setHighLight_regulars,
      reg_setHighLight_IdName_tk
      );
     showSymbol(
      reg_showSymbol_input_IdNumber,
      reg_showSymbol_symbolSpan_IdNumber,
      reg_showSymbol_regular_IdNumber,
      reg_showSymbol_inputs,
      reg_showSymbol_IdNumber_tk
      );
    setHighLight(
      reg_setHighLight_submit,
      reg_setHighLight_inputs,
      reg_setHighLight_regulars,
      reg_setHighLight_IdNumber_tk
      );
    //old
  showSymbol(
      reg_showSymbol_input_2,
      reg_showSymbol_symbolSpan_2,
      reg_showSymbol_regular_user,
      reg_showSymbol_inputs,
      reg_showSymbol_2_tk
      );
    setHighLight(
      reg_setHighLight_submit,
      reg_setHighLight_inputs,
      reg_setHighLight_regulars,
      reg_setHighLight_2_tk
      );
    showSymbol(
      reg_showSymbol_input_3,
      reg_showSymbol_symbolSpan_3,
      reg_showSymbol_regular_pass,
      reg_showSymbol_inputs,
      reg_showSymbol_3_tk
      );
    setHighLight(
      reg_setHighLight_submit,
      reg_setHighLight_inputs,
      reg_setHighLight_regulars,
      reg_setHighLight_3_tk
      );

    showSymbol(
      reg_showSymbol_input_6,
      reg_showSymbol_symbolSpan_6,
      reg_showSymbol_regular_pass,
      reg_showSymbol_inputs,
      reg_showSymbol_6_tk
      );
    setHighLight(
      reg_setHighLight_submit,
      reg_setHighLight_inputs,
      reg_setHighLight_regulars,
      reg_setHighLight_6_tk
      );


    showSymbol(
      log_showSymbol_input_2,
      log_showSymbol_symbolSpan_2,
      log_showSymbol_regular_user,
      log_showSymbol_inputs,
      log_showSymbol_2_tk
      );

    
    setHighLight(
      log_setHighLight_submit,
      log_setHighLight_inputs,
      log_setHighLight_regulars,
      log_setHighLight_2_tk
      );


      showSymbol(
      log_showSymbol_input_3,
      log_showSymbol_symbolSpan_3,
      log_showSymbol_regular_pass,
      log_showSymbol_inputs,
      log_showSymbol_3_tk
      );

    
    setHighLight(
      log_setHighLight_submit,
      log_setHighLight_inputs,
      log_setHighLight_regulars,
      log_setHighLight_3_tk


      );

    //register_acc_
    
},100);




  







// console.log("%c神兽保佑，代码无bug","color: red; font-size: x-large"); 