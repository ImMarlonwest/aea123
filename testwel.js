const Discord = require("discord.js");

module.exports = {
  config: {
    nombre: "testwel",
    alias: []
  },
  run: async (client, message, args, lang, queue) => {
    client.emit("guildMemberAdd", message.member || (await message.guild.fetchMember(message.author)))
  }
}