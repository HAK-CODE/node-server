const request = require("request")

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+".json?access_token=pk.eyJ1IjoiaGFrLWRldiIsImEiOiJja2c5ZGZmcGowNGVvMnRueThwdHFqcDg3In0.3X9NX1HKII5CrXjkzM0AfA"

    request({uri: url, json: true}, (error, response, body) => {
        // console.log(body)
        if (!error){
            const feature = body.features
            if (feature.length === 0){
                console.log("feature not there")
                callback("Unable to find location", undefined)
            }
            else{
                callback(undefined, {
                    latitude: feature[0].center[0],
                    longitude: feature[0].center[1],
                    location: feature[0].place_name
                })
            }
        }
        else{
            console.log("OS ERROR")
            callback("OS Error", undefined)
        }
    })
}

module.exports = geocode