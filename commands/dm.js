const Discord = require('discord.js');

module.exports = {
  name: 'dm',
  description: 'dm users',
  guildOnly: true,
  execute(message, args) {
    const dmm = args.join(" ");

    let uuser = message.mentions.users.first();

    if (!uuser) return message.reply("Please mention a valid member of this server");
    const embed = new Discord.MessageEmbed()
      .setDescription(`${dmm}`)
    uuser.send(embed)
      .catch(error => {
        message.reply(`it seems like I can\'t DM ${uuser}`);
      });

  }
}
