

const  request=require('request');
const port=process.env.PORT||3000
/*
const key="4e15b0f219cedf654272f875ab2561c6";
console.log(key);

const url=`https://samples.openweathermap.org/data/2.5/weather?id=2172797&appid=${key}`;
console.log(url);


request({url:url,json:true},(error,request)=>{

    

    const rt=request.body.weather;
    console.log(rt[0].id);;
})
*/

const url="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWJkYWFsIiwiYSI6ImNrZW9jNmZkMTAwdjYyc25vaGl2a25iamUifQ.mlW75oHpr6rWHC7FHB9Nhg&limit=1";


request({url:url,json:true},(error,response)=>{
    if(error){

        console.log("hellolll");
    }else{

        const tt=response;
    console.log(tt);
    }

    
})

const geocode=(address,callback)=>{

    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiYWJkYWFsIiwiYSI6ImNrZW9jNmZkMTAwdjYyc25vaGl2a25iamUifQ.mlW75oHpr6rWHC7FHB9Nhg&limit=1";

        request({url:url,json:true},(error,response)=>{

            if(error){
                callback('Unablew to connect to location service ',undefined);
            }else if(response.body.features.length===0){
                callback('Unable to find location',undefined);
            }else{
                callback(undefined,{

                    lattitude:response.body.features[0].center[0],
                    longitude:response.body.features[0].center[1],
                    location:response.body.features[0].place_name
                })
            }
        })


}
geocode('Philidelphia',(error,data)=>{

    console.log('Eroor',error);
    console.log('Data',data);
})
