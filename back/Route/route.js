module.exports = function(app){
    var fs = require('fs');
    var data = fs.readFileSync('note.json', 'utf8');
    var data1 = fs.readFileSync('test.json', 'utf8');
    app.get('/list', function(req, res){
        res.setHeader('Content-Type', 'text/plain');
        res.send(data);
    });
    app.get('/test', function(req, res){
        res.setHeader('Content-Type', 'text/plain');
        res.send(data1);
    });
}