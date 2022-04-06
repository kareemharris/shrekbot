const Discord = require('discord.js');

module.exports = {
  name: 'resetnick',
  description: 'reset nickname',
  guildOnly: true,
  async execute(message, args) {
    let member = message.mentions.members.first();
    if (!member) return message.reply("Please mention a valid member of this server");
    if (member.hasPermission(`MANAGE_NICKNAMES`)) return message.channel.send(`you can't reset ${member}'s nickname `);

    await member.setNickname("");
    return message.channel.send(`${member}'s nickname has been reset successfully`);
  }

}