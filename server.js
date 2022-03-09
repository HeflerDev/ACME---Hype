const db = require('./db.json')
const express = require('express')
const app = express()
const path = require('path')
const portServer = 3000

const DIST_DIR = path.join(__dirname, 'dist');
const HTML_FILE = path.join(DIST_DIR, "index.html")

app.use(express.json());
app.use(express.static("dist"));

app.get("/", (req, res) => {
   res.sendFile(HTML_FILE, function(err){
      if(err){
         res.status(500).send(err);
      }
   });
});

app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next()
});


function index(req, res) {
  res.send(JSON.stringify(db))
}

app.get('/products', index)
app.listen(portServer, () => console.log(`ACME server running on port ${portServer}!`))