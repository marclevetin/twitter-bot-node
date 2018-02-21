const dotenv = require('dotenv').config()
const Twitter = require('twitter');

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

const params = {screen_name: '_derbyhat'};

// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//     console.log(tweets);
//   }
// });
const options = ["hello", "joke", "time"];

const randomNumber = Math.floor(Math.random()*options.length);
const currentChoice = options[randomNumber];

let statusMessage = '';

if (currentChoice === 'hello') {
  statusMessage = 'hi'
} else if (currentChoice === 'joke') {
  statusMessage = "Q: What do you call a cow with no legs? \n A: Ground Beef"
} else if (currentChoice === 'time') {
  statusMessage = 'Hickory, dickory, dock.  The mouse ran up the clock.'
}



client.post('statuses/update', {status: 'hi'})
  .then(function (tweet) {
    console.log(tweet);
  })
  .catch(function (error) {
    throw error;
  })
