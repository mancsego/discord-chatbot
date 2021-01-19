const Discord = require('discord.js')
const UtilityHelper = require('./util/UtilityHelper')
const INFO_TEMPLATE = '[%s] Message sent to deployment-hat channel: "%s"'

class Messenger {
  constructor () {
    if (!Messenger.Singleton) {
      Messenger.Singleton = this
      this._setupClient(process.env.TOKEN, process.env.CHANNEL_ID)
        .catch(e => UtilityHelper.log(e, global.LOG_LEVEL.error))
    }
    return Messenger.Singleton
  }

  sendMessage (message) {
    const messageLog = UtilityHelper.formatString(INFO_TEMPLATE, Date.now(), message)

    UtilityHelper.log(messageLog)
    this.channel.send(message)

    return messageLog
  }

  async _setupClient (token, channelId) {
    const client = new Discord.Client()
    client.once('ready', () => {
      UtilityHelper.log('Discord login successful!')
      this.channel = client.channels.cache.find(c => c.id === channelId)
    })
    try {
      await client.login(token)
    } catch (e) {
      console.error(e)
    }
  }
}
module.exports = new Messenger()
