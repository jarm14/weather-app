const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = process.argv[2]

if (location) {
    geocode(location, (error, {latitud, longitud, location}) => {
        if (error) {
            return console.log(error)
        }
        forecast(latitud, longitud, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)
        })
    })
} else {
    console.log('Ingresar una dirección')
}