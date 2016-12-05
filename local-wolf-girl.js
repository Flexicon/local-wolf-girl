"use strict";

// Including required packages
var Discord = require('discord.io');
var request = require('request');

// Entry point for the bot, creating an instance and connecting the bot to discord
var bot = new Discord.Client({
	token: "MjQ4Mzk3NTYzNjcyMTMzNjMz.CybtQg.oGDHzmOst7Wodu3Ue2R7V-AKVtU",
	autorun: true,
	messageCacheLimit: 5
});

// System log to notify bot has connected
bot.on('ready', function() {
	console.log(bot.username + " - (" + bot.id + ")");
});

// System log to notify bot has disconnected
bot.on('disconnect', function() {
	console.log(bot.username + " has disconnected");
});

// Responding to commands via messages
bot.on('message', function(user, userID, channelID, message, event) {
	message = message.split(' ');
	let cmd = message[0];

	if(commands[cmd]) {
		commands[cmd].func(user, userID, channelID, message, event);
	}
});

// Object holding all commands and their respective functions
let commands = {
	"Awoo": {
		"func": function(user, userID, channelID, message, event) {
			bot.sendMessage({
				to: channelID,
				message: "https://65.media.tumblr.com/tumblr_nij3ffRkFO1r0yamfo1_1421846043_cover.jpg"
			});
		}
	},
	"Papi!": {
		"func": function(user, userID, channelID, message, event) {
			bot.sendMessage({
				to: channelID,
				message: "Papi Wa Harpy!\nhttp://i.imgur.com/Hyh0uvt.jpg"
			});
		}
	},
	"+getMon": {
		"func": function(user, userID, channelID, message, event) {
			bot.sendMessage({
				to: channelID,
				message: "Getting Monster Girl..."
			});

			let apiUrl = "http://monstergirlencyclopedia.wikia.com/api/v1/";
			request(apiUrl+'Articles/AsSimpleJson?id=2405', function (error, response, body) {
				let json = JSON.parse(body);
				console.log(json.sections[0].title);

				bot.sendMessage({
					to: channelID,
					message: "MonMusu: " + json.sections[0].title 
							+"\nDescription: " + json.sections[0].content[0].text
				});
			});
		}
	},
	"+leave": {
		"func": function(user, userID, channelID, message, event) {
			bot.sendMessage({
				to: channelID,
				message: "Oh okay..."
			});
			bot.disconnect();
		}
	}
};