var http = require('http');
var fs = require('fs');

var server = http.createServer();
server.on('request', doRequest);
server.listen(process.env.PORT || 8000);
console.log('Server running!');

// リクエスト の 処理
function doRequest(req, res) {
    var number = Math.floor(Math.random() * 3);

    fs.readFile(
        './hello.html', 'UTF-8',
        function(err, data){
            var title = ["ページA", "ページB", "ページC"];
            var content = ["コンテンツA", "コンテンツB", "コンテンツC"];

            var data2 = data.replace(/@title@/g, title[number])
                            .replace(/@content@/g, content[number]);

            res.writeHead(200, {
                'Content-Type': 'text/html'}
            );
            res.write(data2);
            res.end();
        }
    );
}