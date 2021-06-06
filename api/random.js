const {range,url} = require('../define')
module.exports = 
/**
 * 
 * @param {import('@vercel/node').VercelRequest} req 
 * @param {import('@vercel/node').VercelResponse} res 
 */
(req, res) => {
    const randomIndex = Math.floor(Math.random() * (range[1] - range[0] + 1) - range[0])
    res.redirect(302,url+randomIndex+'.webp')
}