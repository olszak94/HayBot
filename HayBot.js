var irc = require('twitch-irc');
 
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
        password: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
    },
    channels: ['hay1tsme']
});
 
// Connect the client to server.. 
client.connect();

//sends a message to chat when connected
client.addListener('join', function (channel, username) {
    client.say(channel, "HELLOOOOOOOOOOOO chat! OneHand")
});
 
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