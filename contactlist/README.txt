full stack self-study

0. check node version
developer@app-dev-dt0:~/project/fullstack_exercise/contactlist$ npm version
{ npm: '3.5.2',
  ares: '1.10.1-DEV',
  http_parser: '2.5.0',
  icu: '55.1',
  modules: '46',
  node: '4.2.6',
  openssl: '1.0.2g-fips',
  uv: '1.8.0',
  v8: '4.5.103.35',
  zlib: '1.2.8' }

1. install express
write package.json to include dependancy
npm install (to install dependancy)

developer@app-dev-dt0:~/project/fullstack_exercise/contactlist$ npm install
contactlist@0.1.0 /home/developer/project/fullstack_exercise/contactlist
├─┬ body-parser@1.15.2
│ ├── bytes@2.4.0
│ ├── content-type@1.0.4
│ ├── depd@1.1.2
│ ├─┬ http-errors@1.5.1
│ │ ├── inherits@2.0.3
│ │ ├── setprototypeof@1.0.2
│ │ └── statuses@1.5.0
│ ├── iconv-lite@0.4.13
│ ├─┬ on-finished@2.3.0
│ │ └── ee-first@1.1.1
│ ├── qs@6.2.0
│ ├─┬ raw-body@2.1.7
│ │ └── unpipe@1.0.0
│ └─┬ type-is@1.6.16
│   ├── media-typer@0.3.0
│   └─┬ mime-types@2.1.18
│     └── mime-db@1.33.0
├─┬ cookie-parser@1.4.3
│ ├── cookie@0.3.1
│ └── cookie-signature@1.0.6
├─┬ debug@2.2.0
│ └── ms@0.7.1
├── ejs@2.5.9
├─┬ express@4.14.1
│ ├─┬ accepts@1.3.5
│ │ └── negotiator@0.6.1
│ ├── array-flatten@1.1.1
│ ├── content-disposition@0.5.2
│ ├── encodeurl@1.0.2
│ ├── escape-html@1.0.3
│ ├── etag@1.7.0
│ ├─┬ finalhandler@0.5.1
│ │ └── statuses@1.3.1
│ ├── fresh@0.3.0
│ ├── merge-descriptors@1.0.1
│ ├── methods@1.1.2
│ ├── parseurl@1.3.2
│ ├── path-to-regexp@0.1.7
│ ├─┬ proxy-addr@1.1.5
│ │ ├── forwarded@0.1.2
│ │ └── ipaddr.js@1.4.0
│ ├── range-parser@1.2.0
│ ├─┬ send@0.14.2
│ │ ├── destroy@1.0.4
│ │ ├── mime@1.3.4
│ │ ├── ms@0.7.2
│ │ └── statuses@1.3.1
│ ├── serve-static@1.11.2
│ ├── utils-merge@1.0.0
│ └── vary@1.1.2
├─┬ morgan@1.7.0
│ ├── basic-auth@1.0.4
│ └── on-headers@1.0.1
└─┬ serve-favicon@2.3.2
  └── ms@0.7.2

2. run node server.js
developer@app-dev-dt0:~/project/fullstack_exercise/contactlist$ node server.js
server running on port 3000

3. edit public/index.html

4. edit server.js, public/controller.js to add angularjs

5. install mongodb
https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-16-04
developer@app-dev-dt0:~/project/fullstack_exercise/contactlist$ sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
[sudo] password for developer:
Executing: /tmp/tmp.Ou39d9cc6P/gpg.1.sh --keyserver
hkp://keyserver.ubuntu.com:80
--recv
EA312927
gpg: requesting key EA312927 from hkp server keyserver.ubuntu.com
gpg: key EA312927: public key "MongoDB 3.2 Release Signing Key <packaging@mongodb.com>" imported
gpg: Total number processed: 1
gpg:               imported: 1  (RSA: 1)

developer@app-dev-dt0:~$ sudo systemctl start mongod
developer@app-dev-dt0:~$ sudo systemctl status mongod
● mongod.service - High-performance, schema-free document-oriented database
   Loaded: loaded (/lib/systemd/system/mongod.service; disabled; vendor preset:
   Active: active (running) since Wed 2018-07-11 12:53:34 UTC; 7s ago
     Docs: https://docs.mongodb.org/manual
 Main PID: 6037 (mongod)
   CGroup: /system.slice/mongod.service
           └─6037 /usr/bin/mongod --quiet --config /etc/mongod.conf

Jul 11 12:53:34 app-dev-dt0 systemd[1]: Started High-performance, schema-free do
developer@app-dev-dt0:~$

developer@app-dev-dt0:~$ sudo systemctl enable mongod
Created symlink from /etc/systemd/system/multi-user.target.wants/mongod.service to /lib/systemd/system/mongod.service.

6. modify server.js to add mongodb support
developer@app-dev-dt0:~/project/fullstack_exercise/contactlist$ npm install mongodb
loadDep:saslprep → addNam ▐ ╢██████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░╟
WARN engine saslprep@1.0.0: wanted: {"node":">=6"} (current: {"node":"4.2.6","npcontactlist@0.1.0 /home/developer/project/fullstack_exercise/contactlist
└── mongodb@3.1.1  extraneous

7. create mongodb database
developer@app-dev-dt0:~/project/fullstack_exercise/contactlist$ mongo
MongoDB shell version: 3.2.20
connecting to: test
Welcome to the MongoDB shell.
For interactive help, type "help".
For more comprehensive documentation, see
        http://docs.mongodb.org/
Questions? Try the support group
        http://groups.google.com/group/mongodb-user
Server has startup warnings:
2018-07-11T12:53:34.907+0000 I CONTROL  [initandlisten]
2018-07-11T12:53:34.907+0000 I CONTROL  [initandlisten] ** WARNING: /sys/kernel/                                                                                                                                                             mm/transparent_hugepage/enabled is 'always'.
2018-07-11T12:53:34.907+0000 I CONTROL  [initandlisten] **        We suggest set                                                                                                                                                             ting it to 'never'
2018-07-11T12:53:34.907+0000 I CONTROL  [initandlisten]
2018-07-11T12:53:34.907+0000 I CONTROL  [initandlisten] ** WARNING: /sys/kernel/                                                                                                                                                             mm/transparent_hugepage/defrag is 'always'.
2018-07-11T12:53:34.907+0000 I CONTROL  [initandlisten] **        We suggest set                                                                                                                                                             ting it to 'never'
2018-07-11T12:53:34.907+0000 I CONTROL  [initandlisten]
> db
test
> show dbs
local  0.000GB

> use contactList
switched to db contactList

> db.contactList.insert(user)
WriteResult({ "nInserted" : 1 })
> db.contactList.find()
{ "_id" : ObjectId("5b46044d336484e82dbbd70d"), "name" : "susan", "age" : 18 }
> user = {name:"henry", "age":19}
{ "name" : "henry", "age" : 19 }
> db.contactList.insert(user)
WriteResult({ "nInserted" : 1 })
> db.contactList.find()
{ "_id" : ObjectId("5b46044d336484e82dbbd70d"), "name" : "susan", "age" : 18 }
{ "_id" : ObjectId("5b460492336484e82dbbd70e"), "name" : "henry", "age" : 19 }
> db.contactList.find({age:19})
{ "_id" : ObjectId("5b460492336484e82dbbd70e"), "name" : "henry", "age" : 19 }
>

