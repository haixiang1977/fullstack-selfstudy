var express = require('express');
var app = express();
// var mongojs = require('mongodb');
// var db = mongojs('contactList', ['contactList']);
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/contactList";
// setup static direcory, client can access resource without router
app.use(express.static(__dirname + "/public"));
app.get('/contactList', function(req, res) {
    console.log("i received a GET request");
    // connect db
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        console.log("contactList database connected");
        // open db
        var dbo = db.db("contactList");
        // open collection
        var collection = dbo.collection("contactList");
        collection.find({"name": "liu haixiang"}).toArray(function(err, docs) {
            console.log(docs);
            res.json(docs);
        });
    });
    /*
    person1 = {
        name: 'liu',
        email: 'haixiang.liu@gmail.com',
        contact: '11111111'
    };
    var contactList = [person1];
    res.json(contactList);
    */
})

app.listen(3000);
console.log("server running on port 3000");
