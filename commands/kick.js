const Discord = require('discord.js');

module.exports = {
  name: 'kick',
  description: 'kick',
  guildOnly: true,
  async execute(message, args) {
    if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send("Invalid Permissions")
    let member = message.mentions.members.first();
 if (!member) return message.reply("Please mention a valid member of this server");
    
    member.kick();

    const embed = new Discord.MessageEmbed()
      .setTitle('kick')
      .setDescription(`${member} has been kicked by ${message.author}`)
      .setTimestamp();
      message.channel.send(embed);
    }
}