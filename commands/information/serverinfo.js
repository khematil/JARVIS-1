const Discord = require("discord.js")

module.exports = {

  name: "serverinfo",
  description: "Displays server information",
  category: "info",
  permissions: [],
  devOnly: false,
  run: async ({ client, message, args }) => {
    
    const { guild } = message
    const { name, memberCount, preferredLocale } = guild
  
    const serverEmbed = new Discord.MessageEmbed()
      .setColor('#ff8c00')
      .setTitle(`Server Information for ${name}`)
      .addFields(
        { name: 'Server Name:', value: `${name}` },
        { name: 'Total Members:', value: `${memberCount}` },
        { name: 'Preferred Channel Region:', value: `${preferredLocale}` }
      )
      .setTimestamp()


    message.reply({embeds: [serverEmbed]})

  }
}