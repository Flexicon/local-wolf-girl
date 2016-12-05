var Discord = require('discord.io');
var bot = new Discord.Client({
    token: "MjQ4Mzk3NTYzNjcyMTMzNjMz.CybtQg.oGDHzmOst7Wodu3Ue2R7V-AKVtU",
    autorun: true,
    messageCacheLimit: 5
});

bot.on('ready', function() {
    console.log(bot.username + " - (" + bot.id + ")");
});

bot.on('message', function(user, userID, channelID, message, event) {
    if (message === "ping") {
        bot.sendMessage({
            to: channelID,
            message: "pong"
        });
    }
    if (message === "+leave") {
        bot.sendMessage({
            to: channelID,
            message: "Oh okay..."
        });
        bot.disconnect();
    }
});