
module.exports = {

  name: "coinflip",
  description: "Need to decide something? Do a coinflip 50/50.",
  category: "forfun",
  permissions: [],
  devOnly: false,
  run: async ({ client, message, args }) => {
    
      randomNum = (Math.random() >= 0.5)? 1 : 0

      if(randomNum === 1){
        message.reply("Heads!")
      }
      else if(randomNum === 0){
        message.reply("Tails!")
      }
  }
}