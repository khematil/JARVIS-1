const Discord = require("discord.js")
const fetch = require("node-fetch")
module.exports = {

  name: "memes",
  description: "Takes memes from a public API",
  category: "forfun",
  permissions: [],
  devOnly: false,
  run: async ({ client, message, args }) => {
    


    const response = await fetch('https://meme-api.herokuapp.com/gimme');
    const data = await response.json()

    const memeEmbed = new Discord.MessageEmbed()
    memeEmbed.setTitle(data.title)
    memeEmbed.setImage(data.url)
    memeEmbed.setFooter({ text: `Link: ${data.postLink} /// From: ${data.subreddit} `})

    message.reply({embeds: [memeEmbed]})

  }
}