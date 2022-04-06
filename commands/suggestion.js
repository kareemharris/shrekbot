const Discord = require('discord.js');

module.exports = {
  name: 'sug',
  description: 'sugg',
  guildOnly: true,
  execute(message) {

    let x7 = message.guild.channels.cache.find((channel) => channel.name === "sug");
    const msg = message.content.slice(4).trim();

    const embed = new Discord.MessageEmbed()

      .setTitle('sug')
      .setDescription(`> ${msg}
\n
\n ${message.author}`)
      .setTimestamp()
    x7.send(embed);
  }
}
