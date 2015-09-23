var irc = require('tmi.js');

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
    console.log("Disconnected because " + reason);
});

client.addListener('chat', function (channel, user, message) {
    var command = message.toLowerCase();
//Basic !hello command
    // If the message starts with !hello.. 
    if (command.indexOf('!hello') === 0) {
        // Greet the user
        client.say(channel, "Sup dude, Hows it going? OpieOP /");
    }
//Help command
    //if the message starts with !help...
    else if (command.indexOf('!help') === 0) {
        //link the user to the Haybot page on Hay1tsme.com
        cliant.say(channel, "Help for HayBot can be found at https://hay1tsme.com/HayBot");
    }
//Love you foxy <3
    // If the message starts with !cute.. 
    else if (command.indexOf('!cute') === 0) {
        // Tells the user the following message
        client.say(channel, "NO I'M NOT! SwiftRage");
    }
//Displays League of Legends rank
    //If the message says ONLY !rank
    else if (command.indexOf('!rank') === 0) {
        //Tell the user options for the command
        cliant.say(channel, "Displays Hay's rank in various games. Useage: '!rank [game]' where [game] is csgo, lol, or osu")
    }
    // If the message starts with !rank lol... 
    else if (command.indexOf('!rank lol') === 0) {
        // Say something 
        // https://github.com/Schmoopiie/twitch-irc/wiki/Command:-Say 
        client.say(channel, "Silver 5 S3, Bronze 2 S4, Unranked S5");
    }
//Displays osu! rank (rquires Osu! API)
    // If the message starts with !rank osu... 
    else if (command.indexOf('!rank osu') === 0) {
        //Displays Osu! global rank, PP, and accuracy
        client.say(channel, "Osu! stats for Hay1tsme: <null>");
    }
//Displays CS:GO rank (requires Valve API???)
    // If the message starts with !rank csgo... 
    else if (command.indexOf('!rank csgo') === 0) {
        //Displays Osu! global rank, PP, and accuracy
        client.say(channel, "CS:GO stats for Hay1tsme: <null>");
    }
    // If the message starts with !lolking.. 
    else if (command.indexOf('!lolking') === 0) {
        // Say something 
        // https://github.com/Schmoopiie/twitch-irc/wiki/Command:-Say 
        client.say(channel, "Sir Hay1tsme Pro's lolking http://www.lolking.net/summoner/na/39879744");
    }

});