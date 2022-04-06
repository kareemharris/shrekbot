module.exports = {
  name: "say",
  description: "say command",
  guildOnly: true,
  async execute(message, args) {

    const sayMessage = args.join(" ");
    message.delete().catch(O_o => { });
    message.channel.send(`${sayMessage}`);
  }
}