const Discord = require('discord.js');

module.exports = {
  name: 'mute',
  description: 'mute',
  guildOnly: true,
  async execute(message, args) {
    if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send("Invalid Permissions")

    const Muted = message.guild.roles.cache.find((role) => role.name === "Muted");


    let member = message.mentions.members.first();
    if (!member) return message.reply("Please mention a valid member of this server");
    member.roles.add(Muted);

    const embed = new Discord.MessageEmbed()
      .setTitle('mute')
      .setDescription(`${member} has been muted my ${message.author}`)
      .setTimestamp();
      message.channel.send(embed);
    }
}