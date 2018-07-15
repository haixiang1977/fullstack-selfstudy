developer@app-dev-dt0:~/project/fullstack_exercise/contactlist$ node debug server.js
< Debugger listening on port 5858
debug> . ok
break in server.js:1
> 1 var express = require('express');
  2 var app = express();
  3 // var mongojs = require('mongodb');
debug> list (30)
> 1 var express = require('express');
  2 var app = express();
  3 // var mongojs = require('mongodb');
  4 // var db = mongojs('contactList', ['contactList']);
  5 var MongoClient = require('mongodb').MongoClient;
  6 var url = "mongodb://localhost:27017/contactList";
  7 // setup static direcory, client can access resource without router
  8 app.use(express.static(__dirname + "/public"));
  9 app.get('/contactList', function(req, res) {
 10     console.log("i received a GET request");
 11     // connect db
 12     MongoClient.connect(url, function(err, db) {
 13         if (err) throw err;
 14         console.log("contactList database connected");
 15         // open db
 16         var dbo = db.db("contactList");
 17         // open collection
 18         var collection = dbo.collection("contactList");
 19         // select a record from collection
 20         var doc = collection.findOne({"name": "liu haixiang"}, {_id:0});
 21         console.log(doc.name);
 22         /*
 23         collection.findOne({"name": "liu haixiang"}, {_id:0}, function(err, docs) {
 24             if (err) throw err;
 25             console.log(docs);
 26             res.json(docs);
 27         });
 28         */
 29     });
 30     /*
 31     person1 = {
debug> setBreakpoint(21)
> 1 var express = require('express');
  2 var app = express();
  3 // var mongojs = require('mongodb');
  4 // var db = mongojs('contactList', ['contactList']);
  5 var MongoClient = require('mongodb').MongoClient;
  6 var url = "mongodb://localhost:27017/contactList";
debug> c
< server running on port 3000
< i received a GET request
< current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.
< contactList database connected
break in server.js:21
 19         // select a record from collection
 20         var doc = collection.findOne({"name": "liu haixiang"}, {_id:0});
>21         console.log(doc.name);
 22         /*
 23         collection.findOne({"name": "liu haixiang"}, {_id:0}, function(err, docs) {
debug> bt
#0 server.js:21:9
#1 utils.js:414:17
#2 utils.js:406:9
#3 mongo_client_ops.js:285:5
#4 mongo_client_ops.js:240:5
#5 mongo_client_ops.js:436:7
debug> repl
Press Ctrl + C to leave debug repl
> doc
{ handle: 12,
  type: 'promise',
  className: 'Object',
  constructorFunction: { ref: 77 },
  protoObject: { ref: 459 },
  prototypeObject: { ref: 2 },
  status: 'pending',
  promiseValue: { ref: 2 },
  properties: [],
  internalProperties:
   [ { name: '[[PromiseStatus]]', ref: 734 },
     { name: '[[PromiseValue]]', ref: 2 } ],
  text: '#<Promise>' }
> collection
{ s:
   { pkFactory: [Function],
     db:
      { domain: null,
        _events: {},
        _eventsCount: 0,
        _maxListeners: undefined,
        s: [Object],
        serverConfig: undefined,
        bufferMaxEntries: undefined,
        databaseName: undefined },
     topology:
      { domain: null,
        _events: [Object],
        _eventsCount: 25,
        _maxListeners: 'Infinity',
        clientInfo: [Object],
        s: [Object] },
     dbName: 'contactList',
     options:
      { promiseLibrary: [Function],
        readConcern: undefined,
        readPreference: [Object] },
     namespace: 'contactList.contactList',
     readPreference: { mode: 'primary', tags: undefined },
     slaveOk: true,
     serializeFunctions: undefined,
     raw: undefined,
     promoteLongs: undefined,
     promoteValues: undefined,
     promoteBuffers: undefined,
     internalHint: null,
     collectionHint: null,
     name: 'contactList',
     promiseLibrary: [Function],
     readConcern: undefined,
     writeConcern: undefined } }
<- ctrl + c
debug>
