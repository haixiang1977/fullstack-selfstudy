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

4. 
