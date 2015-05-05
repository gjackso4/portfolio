<?

//We use already made Twitter OAuth library
//https://github.com/mynetx/codebird-php
require_once ('codebird.php');

//Twitter OAuth Settings, enter your settings here:
$CONSUMER_KEY = 'mbJ8EHZY5yCTpaoCNqa2Lpi9c';
$CONSUMER_SECRET = 'G6nIk0dZRQFLWpqrzgyvpCzyJtJ5H0nM6scqiUSEbKi1euTSxa';
$ACCESS_TOKEN = '64638220-lesyrBTA4L0lJw6C4b5H58YKVTdSv2kKyCvnd4RII';
$ACCESS_TOKEN_SECRET = 'av3S3Z5DHEbONrCxLakMg3LsfgJe2UpD63g5QeukcCq5b';

//Get authenticated
Codebird::setConsumerKey($CONSUMER_KEY, $CONSUMER_SECRET);
$cb = Codebird::getInstance();
$cb->setToken($ACCESS_TOKEN, $ACCESS_TOKEN_SECRET);


//retrieve posts
$q = $_POST['q'];
$count = $_POST['count'];
$api = $_POST['api'];

//https://dev.twitter.com/docs/api/1.1/get/statuses/user_timeline
//https://dev.twitter.com/docs/api/1.1/get/search/tweets
$params = array(
	'screen_name' => $q,
	'q' => $q,
	'count' => $count,
	'exclude' => 'retweets'
);

//Make the REST call
$data = (array) $cb->$api($params);

//Output result in JSON, getting it ready for jQuery to process
echo json_encode($data);

?>