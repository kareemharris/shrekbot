module.exports = {
  name: "createmrole",
  description: "creates a muted role for mute command to work",
  guildOnly: true,
  execute(message, args) {
    if (!message.member.permissions.has("MANAGE_SERVER")) return message.channel.send(`You donot have the required permission to perform this command, ${message.author.username}`);
    const Muted = message.guild.roles.cache.find((role) => role.name === "Muted");
    message.guild.roles.create({
      data: {
        name: "Muted",
        color: "#000000",
        permissions: [],
      },
    });
    message.channel.send("Role sucessfully Created");
  },
};
