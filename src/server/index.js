const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const aylien = require('aylien_textapi');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const baseURL = "https://api.aylien.com/api/v1/sentiment/?"

const textAPI = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

//################################ Middleware ######################################

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//####################### Cors for cross origin allowance ###########################
app.use(cors());


//######################### Initialize the main project folder ######################
app.use(express.static('dist'))

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/vies/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.post("/api/", function (req, res){
  Console.log("Calling API");

  const userText = req.body.text;

  async function apiFetch(a){
    await textAPI.sentiment({
      text: a,
    },
  function (error, response){
    if(error === null){
      res.json(response);
      console.log(response);
    }
    else{
      console.log(error, "An error has occured")
      }
     }
    );
  }
  apiFetch(userText)
});


