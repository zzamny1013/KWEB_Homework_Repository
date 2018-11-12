const express= require('express');
//const bodyParser = require('body-parser');
const app = express();
//const port = 3000;

//app.use(bodyParser.urlencoded({ extended: true}));
//app.use(bodyParser.json());
server.listen('3000', '0.0.0.0', () => {
  console.log('server online');
});

app.get('/', (req, res) =>{
    printReq(req);
    main(res);
});

app.get('/board', (req, res) =>{
    printReq(req);
    board(res);
});

app.post('/board', (req, res) =>{
    printReq(req);
    board_write(res);
});

app.use(function (err, req, res, next) {
    res.statusCode = 404;
    res.send(err.message);
    res.end();
});

app.use( (req,res) => { printReq(req); res.status(404).send("404 Not found"); });

function main(res) {
  res.send('This is main page.');
  //res.end();
};

function board(res) {
  res.send('This is board page.');
  //res.end();
};

function board_write(res) {
  res.send('This is board write page.');
  //res.end();
};


function printReq(req){
    console.log(`${req.method} ${req.url}
${Object.keys(req.headers).map(k => `${k}: ${req.headers[k]}`).join('\n')}
`);

  req.on('data', d => console.log(d.toString()));
};