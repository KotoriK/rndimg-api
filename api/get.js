const { range, url } = require('../define')

module.exports =
    /**
     * 
     * @param {import('@vercel/node').VercelRequest} req 
     * @param {import('@vercel/node').VercelResponse} res 
     */
    (req, res) => {
        const { index, type = 'img' } = req.query
        if (index >= range[0] && index <= range[1]) {
            res.setHeader('Cache-Control', 'max-age=2592000, public')
            res.redirect(302, url + index + type === 'info' ? '.json' : '.webp')
        } else {
            res.status(404)
            res.send()
        }
    }