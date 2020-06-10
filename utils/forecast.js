const request = require('request')

const forecast = (latitud, longitud, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=30347a8a8dc4ae009e31e42666659b31&query=' + latitud + ',' + longitud
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('No se puede conectar al servivcio de tiempo', undefined)
        } else if (body.error) {
            callback('No se puede encontrar la localización', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. Actualmente estamos a ' + body.current.temperature + ' grados. Y se siente como ' + body.current.feelslike + ' grados')
        }
    })
}

module.exports = forecast