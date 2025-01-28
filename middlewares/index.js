const { errorHandler } = require("./ErrorMiddleware")//crear archivo y logica
const { AuthMiddleware } = require("./AuthMiddleware")//crear archivo y logica

module.exports = {
    AuthMiddleware,
    errorHandler
}