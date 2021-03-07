const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')

let baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key=';
const json = '&of=json&txt=';

const end = '&model=General&lang=en';



const app = express()

app.use(express.static('dist'))
app.use(cors);
app.use(bodyParser);
console.log(__dirname)


// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'));
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

const apiKey = process.env.API_KEY
console.log(`Your API key is ${process.env.API_KEY}`);

app.post('/addData', async(req, res)=>{
    const getSentiment = await fetch(`${baseURL}${apiKey}${json}${req.body.formText}${end}`,{
        method: 'POST'
});
    try{
        const data = await getSentiment.json();
        console.log(getSentiment, data)
        res.send(data);
    }catch(error){
        console.log("error", error);
    }
});