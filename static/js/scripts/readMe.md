<!-- 最后一次更新 20181207 gongzixi110@qq.com -->
    参考资料： 叶小钗 https://www.cnblogs.com/yexiaochai/p/3633855.html


    使用此框架需要准备什么？
        1. node 环境。
        2. node 需要安装 fs 文件模块。


    利用requireJs的模块化开发流程：
        1.配置基础文件
        2.针对性模块开发
        3.分别打包生成最终文件



    关于css打包：  已经在页面写了一个语句，console.log(a.pathCss);   此语句用来输出入口组件的所有css依赖的路径。此时如果想要打包，则：
        前提：有node环境，且在全局安装了fs文件模块
        1.控制台复制输出的代码，形式如：
            @import ../../../../../static/js/scripts/work/host/index/main.css ;
            @import ../../../../../static/js/scripts/./work/public/titleBar/main.css ;

        2.将代码粘贴到 scripts/  目录下的setCss.js的cssPath变量内。

        3.在 scripts/ 目录下，按住shift,右键，打开DOS窗口，输入一下命令：
            node setCss.js

        4.在  scripts/config/app/ 目录会生成一个 test.css 文件，
            此时已自动生成当前页面的所有依赖项css的路径

        5.在同 scripts/ 的目录下 执行以下命令
                node ./config/r.js -o cssIn=./config/app/test.css out=./config/app/all.css optimizeCss=standard
            
            此时在 scripts/config/app/ 目录下会生成一个 all.css 文件 ，文件名和路径可以在上面5的命令里修改。
            此文件即所有依赖项的打包后的结果。



    关于js打包：
        1. 在 ./config/build.js 文件里修改配置，主要是页面组件的入口文件，以及输出位置
        2.在 scripts/ 目录下的命令行运行如下命令 
                 node ./config/r.js -o ./config/build.js
        3.打包完在页面直接require就可以了
            注意！！！
                一定要在打包完的js里最后面require一下此js的入口！
                一定要在打包完的js里最后面require一下此js的入口！
                一定要在打包完的js里最后面require一下此js的入口！
        页面使用的时候，是在页面require一下你打包后的js文件位置，但是r.js打包后内容全部是define，故最后一行需要require一下定义一个总的入口。
        另外，每个组件尽量使用scripts/main.js里配置的相对路径。