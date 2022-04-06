const Discord = require('discord.js');

module.exports = {
  name: 'server',
  description: 'Display info about this server.',
    guildOnly : true ,
  execute(message) {
    const embed = new Discord.MessageEmbed()
      .setTitle('server info')
      .setDescription(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nserver id : ${message.guild.id}\nserver owner : ${message.guild.owner}\nverification Level : ${message.guild.verificationLevel}\nguild created on : ${message.guild.createdAt}\n region : ${message.guild.region}`)
      .setImage(`${message.guild.iconURL({ dynamic: true })}`)
      message.channel.send(embed);

  },
};