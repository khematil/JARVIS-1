const { getFiles } = require("../util/functions")

module.exports = (bot, reload) => {

  const { client } = bot

  let events = getFiles("./events/", ".js")

  if (events.length === 0) {
    console.log("No events to be loaded at this time.")
  }

  events.forEach((filename, index) => {
    if (reload) {
      delete require.cache[require.resolve(`../event/${filename}`)]
    }
    const event = require(`../events/${filename}`)
    client.events.set(event.name, event)
    if (!reload) {
      console.log(`${index + 1}. ${filename} loaded`)
    }
  })

  if (!reload) {

    initEvents(bot)
  }


}
function triggerEventHandler(bot, event, ...args) {
  const { client } = bot

  try {
    if (client.events.has(event)) {
      client.events.get(event).run(bot, ...args)
    }
    else {
      throw new Error(`The Event: ${event} does not exist`)
    }
  }
  catch (err) {
    console.log(err)
  }
}

function initEvents(bot) {
  const { client } = bot

  client.on("ready", () => {
    triggerEventHandler(bot, "ready")
  })

  client.on("messageCreate", (message) => {
    triggerEventHandler(bot, "messageCreate", message)

  })

}