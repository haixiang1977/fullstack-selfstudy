var express = require('express');
var app = express();
var mongojs = require('mongodb');
var db = mongojs('contactList', ['contactList']);
// setup static direcory, client can access resource without router
app.use(express.static(__dirname + "/public"));
app.get('/contactList', function(req, res) {
    console.log("i received a GET request");
    db.collection("contactList", null, function(err, collection) {
        if (err) {
            throw err;
        } else {
            collection.find({"name":"henry"}, function(err, docs) {
                console.log(docs);
                res.json(docs);
            });
        }
    });
    /*
    person1 = {
        name: 'liu',
        email: 'haixiang.liu@gmail.com',
        number: '11111111'
    };
    var contactList = [person1];
    res.json(contactList);
    */
})

app.listen(3000);
console.log("server running on port 3000");
