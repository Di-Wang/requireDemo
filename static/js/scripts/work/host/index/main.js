define([
    'require',
    // "css!cssPath/yidasi.css",
    "host/index/config",//载入本地组件配置
    "app/PKG_0.0.1",
    "public/titleBar/main",
    'app/loadCss',
    'app/modelCss',
    'app/PKGCss',
    // "css!cssPath/yidasi.css",
], function(require,config,PKG,titleBar,LOADMAIN,MDCSS,PKGCss) {
    'use strict';
    LOADMAIN.css(config);
    //此处参数    ../lib > static/js/scripts/lib
    //      ../app/test > static/js/scripts/./app/test
    //           ./test > static/js/scripts/./app/test
    //            /test > /test
    //         app/test >  static/js/scripts/./app/test
    //         lib/jquery >  static/js/scripts/lib/jquery
    // console.log(url)
    //使用 b.get.ip()时，应为需要异步回调，所以必须先定义回调函数，放进对象中，再将对象作为参数传入此函数内。 
    let fun = {};
    fun.callBack = function (e){
        //产生回调时应处理的函数
        // console.log(e)
    }
    PKG.get.ip(fun);//加载请求js   获取ip相关信息  {cip: "175.160.130.178", cid: "210100", cname: "辽宁省沈阳市"}
    PKG.ajax.post("http://192.168.1.120:8080/hospitalSSM/static/test/json.txt",{},function(data){
        // console.log(data)
    })
    // let EmptyArr = new Array();
    // let cssArr = new Array();
    // for (let i = 0 ,j = config.localFile.css.length;i<j;i++){
    //     cssArr.push(config.localFile.css[i].path);
    // }
    console.log(PKGCss.main(MDCSS(config.localFile.css,[titleBar.pathCss])));
    return{
        pathCss:MDCSS(config.localFile.css,[titleBar.pathCss]),
    }
});


