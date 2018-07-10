var express = require('express');
var app = express();
// setup static direcory, client can access resource without router
app.use(express.static(__dirname + "/public"));
app.listen(3000);
console.log("server running on port 3000");
