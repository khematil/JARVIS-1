const Discord = require("discord.js")
const fetch = require("node-fetch")
module.exports = {

  name: "quote",
  description: "Takes a random from a Zenquotes API",
  category: "forfun",
  permissions: [],
  devOnly: false,
  run: async ({ client, message, args }) => {

    const response = await fetch('https://zenquotes.io/api/random');
    const data = await response.json()

    message.reply(`"${data[0].q}" ~ ${data[0].a}`)

  }
}