const ACCESS_TOKEN = process.env.ACCESS_TOKEN || process.env.TOKEN
const TOKEN_TYPE = 'Bearer'

module.exports = function checkToken (req, res, next) {
  const token = req.headers.authorization ? req.headers.authorization.split(' ') : null
  if (token && token[0] === TOKEN_TYPE && token[1] === ACCESS_TOKEN) {
    return next()
  }
  return res.status(403).json({ error: 'Insufficient auth header' })
}
