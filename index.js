const fetch = require('node-fetch');
const dotenv = require('dotenv').config();
const Twitter = require('twitter');
const moment = require('moment');

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

const params = {screen_name: '_derbyhat'};

getDadJoke()

function getDadJoke() {
  fetch('https://icanhazdadjoke.com/', { headers: { 'Accept': 'application/json' } })
  .then(response => {
    if (response.ok) {
      return response;
    } else {
      let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
      throw (error);
    }
  })
  .then(response => response.text())
  .then(body => {
    const joke = JSON.parse(body);
    console.log(joke.joke)
    return client.post('statuses/update', {status: joke.joke})
            .then(function (tweet) {
              console.log('tweet sent');
            })
            .catch(function (error) {
              throw error;
            })

  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
}
