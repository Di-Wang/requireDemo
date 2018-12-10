define([
    'require',
    "public/titleBar/config",
    "app/PKG_0.0.1",
    "jquery",
    "app/setPlc_0.0.1",
    // "css!./main.css",
    'app/loadCss',
    'app/modelCss',
], function(require,config,PKG,$,setPlc,LOADCSS,MDCSS) {
    'use strict';
    LOADCSS.css(config);
    //title菜单栏
    let str =`
        `;
    let scrWid=$(window).width();
    //重置左边距
    //设置下拉菜单
    $(".topNavMax .topNav").mouseover(function(e){
        console.log($(e.target).index())
        $(e.target).addClass("titleChecked");
        //设置次级菜单的显示隐藏
        $(`.topNavList>div`).hide();
        $(`.topNavList>div:eq(${$(e.target).index()})`).show();
        // 设置左边距
        $(`.topNavList>div:eq(${$(e.target).index()})`).css("margin-left",$(e.target).index()*(scrWid/3)+"px")
    });
    $(".topNavMax .topNav").mouseout(function(e){
        $(e.target).removeClass("titleChecked");
        $(`.topNavList>div`).hide();
    });
    //传入参数 1.本地css对象，2.使用的模块css对象  返回，一个合并对象
    // 生成路径并返回
    // let cssObj = new Object();
    //     cssObj = config.localFile.css;//本地css
    // let localCssLib = MDCSS.css(cssOBJ);
    // for (let i = 0 ,j = config.localFile.css.length;i<j;i++){
    //     cssArr.push(config.localFile.css[i].path);
    // }
    return{
        pathCss:MDCSS(config.localFile.css),//此处返回的是一个合并对象形如
        /*
            {   modelName11: [ 'arr005', 'arr006' ],
                modelName12: [ 'arr007', 'arr008' ],
                modelName21: [ 'cssPath001', 'cssPath002' ],
                modelName22: [ 'cssPath003', 'cssPath004' ] 
            }
        */
    }

});
