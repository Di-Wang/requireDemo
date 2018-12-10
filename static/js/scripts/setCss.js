var fs = require('fs');


    let cssPath =`@import ../../../../../static/js/scripts/work/host/index/main.css ;
    @import ../../../../../static/js/scripts/./work/public/titleBar/main.css ;
                `;


fs.writeFile( "./config/app/test.css", cssPath, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});