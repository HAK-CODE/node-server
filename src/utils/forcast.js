const request = require("request")

const forcast = (lat, long, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=6b8fad69e27bdb1e5b1c1e94c35a30b8&query="+lat+","+long
    request({uri: url, json: true}, (error, response, body) => {
        if (!error){
            if (body.error){
                callback(body.error, undefined)
            }
            else{
                const weatherData = body.current
                callback(undefined, weatherData)
            }
        }
        else{
            callback("OS Error!", undefined)
        }
    })
}

module.exports = forcast