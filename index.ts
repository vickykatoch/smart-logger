import * as express from 'express'
import * as bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3001
app.use(bodyParser.json());


app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4300');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', 'false');
    // Pass to next layer of middleware
    next();
});

app.post('/logwriter', (req: any, res: any)=> {
    console.log(req.body);
});
app.listen(port,(err)=> {
    console.log('Listening on port : ', port);
})