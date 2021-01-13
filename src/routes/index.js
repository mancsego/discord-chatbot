const messenger = require('../messenger');
const helper = require('../util/UtilityHelper');

const DEPLOYMENT = {
    START: '%s [%s] deployment started',
    DONE: '%s [%s] deployment successfully finished'
};

const FALLBACK_MESSAGE = 'Unknown deployment event. [project: %s][hash: %s]'

module.exports = (app) => {
    app.get('/deployment-status', (req, res) => {
        const params = _extractParams(req.query)
        const template = DEPLOYMENT[params.event]
        template
            ? messenger.sendMessage(res, helper.formatString(template, params.project, params.hash))
            : messenger.sendMessage(res, helper.formatString(FALLBACK_MESSAGE, params.project, params.hash))
    })

    app.get('/special-status', (req, res) => {
        messenger.sendMessage(res, req.query.message);
    })
}

function _extractParams (query) {
    return {
        project: query.project ? query.project.toUpperCase() : query.project,
        hash: query.hash,
        event: query.event.toUpperCase()
    }
}
