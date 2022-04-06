const Discord = require('discord.js');


module.exports = {
  name : 'link',
  description : 'link',
  guildOnly: true,
  execute(message){
    const embed = new Discord.MessageEmbed()
             .setTitle('bot link')
	      .setDescription(`bot link : https://discord.com/api/oauth2/authorize?client_id=787596863733760010&permissions=8&scope=bot`)
        .setFooter('made by كركم#4564')
        message.author.send(embed);

    message.channel.send(`${message.author} **check your dms**`)
  }
}