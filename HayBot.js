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
        password: 'oauth:xxxxxxxxxxxXXXXXXXXXXxxxx'
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
        // Greet the user
        client.say(channel, "Sup dude, Hows it going? OpiOP /");
    }
});
//Help command
cliant.addListener('chat', function (channel, user, message) {
    //if the message starts with !help...
    if (message.indexOf('!help') === 0) {
        //link the user to the Haybot page on Hay1tsme.com
        cliant.say(channel, "Help for HayBot can be found at https://hay1tsme.com/HayBot");
    }
}

//Love you foxy <3
client.addListener('chat', function (channel, user, message) {
    // If the message starts with !cute.. 
    if (message.indexOf('!cute') === 0) {
        // Tells the user the following message
        client.say(channel, "NO I'M NOT! SwiftRage");
    }
});

//Displays League of Legends rank
client.addListener('chat', function (channel, user, message) {
    //If the message says ONLY !rank
    if (message.indexOf('!rank') === 0) {
        //Tell the user options for the command
        cliant.say(channel, "Displays Hay's rank in various games. Useage: '!rank [game]' where [game] is csgo, lol, or osu")
    }
    // If the message starts with !rank lol... 
    if (message.indexOf('!rank lol') === 0) {
        // Say something 
        // https://github.com/Schmoopiie/twitch-irc/wiki/Command:-Say 
        client.say(channel, "Silver 5 S3, Bronze 2 S4, unranked so far in S5");
    }
});

//Displays osu! rank (rquires Osu! API)
client.addListener('chat', function (channel, user, message) {
    // If the message starts with !rank lol... 
    if (message.indexOf('!rank osu') === 0) {
        //Displays Osu! global rank, PP, and accuracy
        client.say(channel, "Osu! stats for Hay1tsme <null>");
    }
});

//Displays CS:GO rank (requires Valve API???)
client.addListener('chat', function (channel, user, message) {
    // If the message starts with !rank csgo... 
    if (message.indexOf('!rank csgo') === 0) {
        //Displays Osu! global rank, PP, and accuracy
        client.say(channel, "CS:GO stats for Hay1tsme <null>");
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

cliant.addListener('chat', function (channel, user, message) {
    //if the message contains ONLY !whois
    if (message.indexOf('!whois') === 0) {
        //Tell the user the options for the command
        cliant.say(channel, "Displays chat info for a Twitch user currently in chat (not currently opperational). Useage: '!whois [user]' where 'user' is any twitch username currently watching the stream")
    }
}