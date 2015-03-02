var irc = require('twitch-irc');
<<<<<<< HEAD
 
// Calling a new client.. 
var client = new irc.client({
    options: {
        debug: true,
        debugIgnore: ['ping', 'chat', 'action'],
        logging: false,
        tc: 3
    },
    identity: {
        username: 'HayBot',
        password: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
    },
    channels: ['hay1tsme']
});
 
// Connect the client to server.. 
=======
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
		password: 'xxxxxxxx'
	},
	//For Twitch API
	 oauth: {
     	port: 6511,
     	clientID: 'xxxxxxxx',
     	clientSecret: 'xxxxxxxxxxxxxxxxxxxxxxx',
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
>>>>>>> origin/master
client.connect();
 
//if the bot DC's, give a reason for it
client.addListener('disconnected', function (reason) {
    console.log("Disconnected because" + " " + reason);
});
//basic !hello command
client.addListener('chat', function (channel, user, message) {
    // If the message starts with !hello.. 
    if (message.indexOf('!hello') === 0) {
        // Say something 
        // https://github.com/Schmoopiie/twitch-irc/wiki/Command:-Say 
        client.say(channel, "Sup dude? Hows it going?");
    }
});

//Love you foxy <3
client.addListener('chat', function (channel, user, message) {
    // If the message starts with !hello.. 
    if (message.indexOf('!cute') === 0) {
        // Say something 
        // https://github.com/Schmoopiie/twitch-irc/wiki/Command:-Say 
        client.say(channel, "NO I'M NOT! SwiftRage");
    }
});

//Displays League of LEgends rank
client.addListener('chat', function (channel, user, message) {
<<<<<<< HEAD
    // If the message starts with !hello.. 
    if (message.indexOf('!rank') === 0) {
        // Say something 
        // https://github.com/Schmoopiie/twitch-irc/wiki/Command:-Say 
        client.say(channel, "Silver 5 S3, Bronze 2 S4, unranked S5. Now over to Mikuia for Osu! ranking.");
    }
});

client.addListener('chat', function (channel, user, message) {
    // If the message starts with !hello.. 
    if (message.indexOf('!lolking') === 0) {
        // Say something 
        // https://github.com/Schmoopiie/twitch-irc/wiki/Command:-Say 
        client.say(channel, "Sir Hay1tsme Pro's lolking http://www.lolking.net/summoner/na/39879744");
    }
});
=======
    if (message === "!test") {
    	cliant.say(channel, "This is a test message issued by "+user);
    	console.log(user+"Just issued a test command in "+channel);
    }
});
	

	if (!err){

	}
	else {
		console.log(err);
	}
>>>>>>> origin/master
