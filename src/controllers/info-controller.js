const {StatusCodes} = require('http-status-codes');

const info = (req, res) => {
    return res.status(StatusCodes.OK).json({
        success: true,
        message: " API Gateway Service Api is live",
        error: {},
        data: {},
    })
}

module.exports = { info }