module.exports = {

  name: "ping",
  description: " Send ping . . . . recive pong.",
  category: "info",
  permissions: [],
  devOnly: false,
  run:  async ({client, message, args}) => {
      message.reply("Pong")
  } 
}