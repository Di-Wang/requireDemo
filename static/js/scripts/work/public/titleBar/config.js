define([
    'require',
], function(require) {
    'use strict';
    let path = require.toUrl("./");
    return {
        root : path,
        title : "YIDASI hospitalSSM titleBar",
        author : "gongzixi110@qq.com",
        gitbook : "0.0.1",
        plugins : [],
        localFile:{
            css : {
                    "titleBar_0.0.1#main" :[ path + "main.css"],
                },
            js : [
                
            ]
        }

    }
});