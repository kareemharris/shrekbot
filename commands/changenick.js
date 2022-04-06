const Discord = require('discord.js');

module.exports = {
  name: 'nick',
  description: 'nickname',
  guildOnly: true,
  async execute(message, args) {
    let member = message.mentions.members.first();
    if (!member) return message.reply("Please mention a valid member of this server");
    if (member.hasPermission(`MANAGE_NICKNAMES`)) return message.channel.send(`you can't change ${member}'s nickname`);

    const nickname = args.slice(1).join(` `);
    if (!nickname.length) return missingArgument(message.channel, `nickname`);
    if (nickname.length > 32) return longNickname(message.channel);

    await member.setNickname(nickname);
    return message.channel.send(`${member}'s nickname has been changed to **${nickname}** , if u want to reset is use **?resetnick**`);
  }

}