const express = require('../node_modules/express/express');
const path = require('path');
const open = require('open');


const port = 3000;
const app = express();

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
});



// app.listen(port,function(err){
//   if(err){
//     console.log(err);
//   }else{
//     open('http://localhost:' +port);
//   }
// });

app.listen(port);
```js
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
```
