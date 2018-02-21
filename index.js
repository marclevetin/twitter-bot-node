const dotenv = require('dotenv').config();
const Twitter = require('twitter');
const moment = require('moment');

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});
debugger;
const params = {screen_name: '_derbyhat'};

const options = ["hello", "joke", "time"];
const randomNumber = Math.floor(Math.random() * options.length);
const currentChoice = options[randomNumber];

let statusMessage = '';

if (currentChoice === 'hello') {
  statusMessage = 'hi.  I wrote a bot that randomly posted this message.';
} else if (currentChoice === 'joke') {
  statusMessage = "Q: What do you call a cow with no legs? \n A: Ground Beef";
} else if (currentChoice === 'time') {
  const now = moment().format("h:mm:ss a");
  statusMessage = 'Hickory, dickory, dock.  The mouse ran up the clock.  The time is ' + now;
}

post to Twitter
client.post('statuses/update', {status: statusMessage})
  .then(function (tweet) {
    console.log('tweet sent');
  })
  .catch(function (error) {
    throw error;
  })
