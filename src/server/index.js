var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')
const dotenv = require('dotenv');
dotenv.config();

let baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key=';
const json = '&of=json&txt=';

const end = '&model=general&lang=en';
const fetch = require("node-fetch");

const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(express.static('dist'))

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

const apiKey = process.env.API_KEY
console.log(`Your API key is ${process.env.API_KEY}`);
console.log(JSON.stringify(mockAPIResponse))

app.post('/addData', async(req, res)=>{
    console.log('==============')
    console.log('BODY', req.body);
    const text = req.body.formText || '';
    const getSentiment = await fetch(`${baseURL}${apiKey}${json}${text}${end}`,{
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

