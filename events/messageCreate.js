const Discord = require("discord.js")

module.exports = {

  name: "messageCreate",
  
  run: async function runAll(bot, message) {
    
    const { client, prefix, owners } = bot

    if (!message.guild) {
      return
    }
    if (message.author.bot) {
      return
    }
    if (!message.content.startsWith(prefix)) {
      return
    }

    const args = message.content.slice(prefix.length).trim().split(/ +/g)

    const commandStr = args.shift().toLowerCase()

    let command = client.commands.get(commandStr)
    if (!command) {
      return
    }

    let member = message.member

    if (command.devOnly && owners.includes(member.id)) {
      return message.reply("This command is allowed to the owner of the bot. Sorry.")
    }

    if (command.permissions && member.permissions.missing(command.permissions).length !== 0) {
      return message.reply("You do not have permission to use this command")
    }

    try {

      await command.run({ ...bot, message, args })
    }
    catch (err) {
      let errorMsg = err.toString()

      if (errorMsg.startswith("?")) {
        errorMsg = errMsg.slice(1)
        await message.reply(errorMsg)
      }
      else {
        console.error(err)
      }
    }

  }

}

