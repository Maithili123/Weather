const request=require('request')
const forecast=(latitude,longitude,callback)=>{
    const url='https://api.darksky.net/forecast/50b625864ab18e86a3aa6e1f461fb37f/' + latitude + ',' + longitude + '?units=si'

    request({url : url , json:true},(error , response) => {
        if(error){
            callback('Unable to connect to weather app-service.Please check the network connectivity!!',undefined)
        }else if(response.body.error){
            callback('unable to find the location',undefined)
        }else{
            callback(undefined,response.body.daily.data[0].summary + ' It is currently' + response.body.currently.temperature + 'degress out.There is ' + response.body.currently.precipProbability + '% chance of rain')
  
   }
      
})
}

module.exports = forecast