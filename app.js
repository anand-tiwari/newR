var express = require('express'),
    app = express(),
    port = process.argv[2] || 3002;

app.use(express.static(__dirname + '/'));

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});
