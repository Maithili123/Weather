const request=require('request')

const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address + '.json?access_token=pk.eyJ1IjoibWlzYWxtYWl0aGlsaSIsImEiOiJjanpucXZkMjUwNzJsM2NtbXoyZ3Q4Y2g5In0.Iy_nCAdREAgBpqiHhDneoA'
    request({url : url , json:true},(error , response) => {
        if(error){
            callback('unable to connect to location service!' , undefined)
        }else if(response.body.features.length === 0){
            callback('Unable to find location.Try another serarch',undefined)
        }else{
            callback(undefined,{
                latitude:response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports=geocode