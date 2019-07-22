const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/870b6b70a8ab4e9682df1aa6cfb72496/' + latitude + ',' + longitude + '?units=si&temperatureMax&temperatureMin'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain.' + ' Maximum temperature is ' + body.daily.data[0].temperatureMax + '.' + ' Minimum temperature is ' + body.daily.data[0].temperatureMin + '.')
        }
    })
}

module.exports = forecast