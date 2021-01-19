const messenger = require('../messenger')
const helper = require('../util/UtilityHelper')

const DEPLOYMENT = {
  START: '%s [%s] deployment started',
  DONE: '%s [%s] deployment successfully finished'
}

const FALLBACK_MESSAGE = 'Unknown deployment event. [project: %s][hash: %s]'

module.exports = (app) => {
  app.get('/deployment-status', (req, res) => {
    const params = _extractParams(req.query)
    const template = DEPLOYMENT[params.event]
    const messageLog = template
      ? messenger.sendMessage(helper.formatString(template, params.project, params.hash))
      : messenger.sendMessage(helper.formatString(FALLBACK_MESSAGE, params.project, params.hash))
    sendResponse(res, messageLog)
  })

  app.get('/post-special', (req, res) => {
    sendResponse(res, messenger.sendMessage(req.query.msg))
  })
}

function _extractParams (query) {
  return {
    project: query.project ? query.project.toUpperCase() : query.project,
    hash: query.hash,
    event: query.event ? query.event.toUpperCase() : query.event
  }
}

function sendResponse (res, message) {
  res.json({ messageLog: message })
}
