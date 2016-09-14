var page = require('webpage').create();

page.viewportSize = {
    width: 1024,
    height: 768
};

var date = new Date();
var strDate = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate() + '_' + date.getHours() + '-' + date.getMinutes() + '-' + date.getSeconds();

page.open('http://www.brasilbandalarga.com.br/speedtest', function(status) {
    var element = page.evaluate(function() {
        var element = document.querySelector('#skst_start');
        element.click();
        return element;
    });

    window.setTimeout(function () {
        page.render('results/result_' + strDate + '.png');
        console.log('rendered click');
        phantom.exit();
    }, 90000);
});
