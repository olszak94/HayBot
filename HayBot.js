/*
HayBot's main control file, with template from twitch-irc's github
Coded by Hay
*/

//stating required libraries
var irc = require('twitch-irc');
var _   = require('underscore');

//Defining the options
var clientOptions = {
	options: {
		//twitch-api options
		debug: false,
		debugIgnore: ['ping', 'chat', 'action'],
		logging: false,
		tc: 3,
		checkUpdates: true
	},
	//For logging into chat
	identity: {
		username: 'HayBot',
		password: 'oauth:nfsu2np4023gfkqzudha9iztke5is65'
	},
	//For Twitch API
	 oauth: {
     	port: 6511,
     	clientID: '4laf415ngl6bf64e6zacbmt65asvdi8',
     	clientSecret: '53zx8t0j38wkdqoq8060invojunqsag',
     	scopes: 'user_read,channel_read,channel_editor'
    },
	channels: ['Hay1tsme"']
};

var client = new irc.client(clientOptions);
	if (!err){

	}
	else {
		console.log(err);
	}
client.connect();

//Displays a message to consol when connected to a channel
client.addListener('join', function (channel, username) {
    console.log("Now connected to" +channel);
});

//Displayed a message to consol when Disconected from a channel, and gives a reason
client.addListener('disconnected', function (reason) {
    console.log("Disconnected because" +reason);
});

//Simple !test command that prints "This is a test message issued by" and the user who issued it to chat
client.addListener('chat', function (channel, user, message) {
    if (message === "!test") {
    	cliant.say(channel, "This is a test message issued by "+user);
    	console.log(user+"Just issued a test command in "+channel);
    }
});
