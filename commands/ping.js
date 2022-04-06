const Discord = require('discord.js');

 module.exports = {
	     name: 'ping',
	     description: 'pinging the bot',
	    execute(message, args) {
	     const embed = new Discord.MessageEmbed()
             .setTitle('pong')
	      .setDescription(`🏓 | Latency is: **${Date.now() - message.createdTimestamp}ms.**`)
        .setTimestamp();
		message.channel.send(embed);
	},

 }; 