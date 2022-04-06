const Discord = require('discord.js');

module.exports = {
  name: 'lock',
  description: 'lock',
  guildOnly: true,
  execute(message, args, client) {
     if (!message.member.hasPermission("MANAGE_CHANNEL")) return message.channel.send("Invalid Permissions")
    message.channel.createOverwrite(message.guild.id, {
      SEND_MESSAGES: false
    })
    const embed = new Discord.MessageEmbed()
      .setTitle('lock')
      .setDescription(`**chat has been locked by ${message.author}**`)
      .setTimestamp();

      message.channel.send(embed);

  }
}