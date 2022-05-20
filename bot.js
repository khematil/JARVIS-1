const Discord = require('discord.js')
const TOKEN = process.env['TOKEN']


const client = new Discord.Client({

  intents: [
    "GUILDS",
    "GUILD_MEMBERS",
    "GUILD_MESSAGES"
  ]

})

let bot = {

  client,
  prefix: "!",
  owners: ["347094357255389186"]

}

client.commands = new Discord.Collection()
client.events = new Discord.Collection()

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)

client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload)

client.loadEvents(bot, false)
client.loadCommands(bot, false)


module.exports = bot


client.login(TOKEN);