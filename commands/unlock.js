const Discord = require('discord.js');                                                  
module.exports = {
  name : 'unlock',
  description : 'unlock',
  guildOnly : true ,
  execute(message, args){
     if (!message.member.hasPermission("MANAGE_CHANNEL")) return message.channel.send("Invalid Permissions")
     message.channel.createOverwrite(message.guild.id, {
            SEND_MESSAGES: true
  })
      const embed = new Discord.MessageEmbed()
      .setTitle('unlock')
      .setDescription(`**chat has been unlocked by ${message.author}**`)
      .setTimestamp();

      message.channel.send(embed);
    }
}