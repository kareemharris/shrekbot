const Discord = require('discord.js');
const avatarEmbed = require('discord.js-avatar');

module.exports = {
name :'avatar',
description:'avatar',
execute(message,args){
      const user = message.mentions.users.first() || message.author;
  avatarEmbed(message, language = 'english');
}
}