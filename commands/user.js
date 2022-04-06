const Discord = require('discord.js');

module.exports = {
  name: 'user',
  description: 'Display info about yourself.',
    guildOnly : true,
  execute(message) {
    const embed = new Discord.MessageEmbed()


      .setTitle('user info')
    .setDescription(`**Your username**: ${message.author.username}\n**Your ID**: ${message.author.id}\n **your avatar** :`)
    .setImage(`${message.author.avatarURL({ dynamic: true })}`)

    message.channel.send(embed);
  },
};