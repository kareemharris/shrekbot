const Discord = require('discord.js');

module.exports = {
  name: "embed",
  description: "embed command",
  aliases : [ 'em' ],
    guildOnly : true ,
 async execute(message, args){
   if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Invalid Permissions")
    const sayMessage = args.join(" ");
    message.delete().catch(O_o => {});
       const embed = new Discord.MessageEmbed()
      .setDescription(`${sayMessage}`)
      .setColor("white")
      .setTimestamp();

      message.channel.send(embed);
   }
}