require("./db");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());

const axios = require("axios").default;

const nodeGeocoder = require('node-geocoder');
const { ReplSet } = require("mongodb");
const options = {
    provider: 'openstreetmap'
  };
const geoCoder = nodeGeocoder(options);

//Weather Api call
app.get("/weather", async (req, res)=>{
    try {
        const par = req.query;
        var final = {}
        //Geo-coder Block
        await geoCoder.reverse(par).then((response)=> {
                    final = {...final, "city" : response[0].city, "countryCode" :  response[0].countryCode}
                })
                //Geo-Coder Error Block
                .catch((err)=> {
                    console.log(err);
                });

        //axios logic
        const url = 'https://api.openweathermap.org/data/2.5/onecall?&exclude=hourly,minutely&units=imperial&appid=b1463c6660a78fabd9582ee9af788ad3'
        await axios.get(url,{
            params : par
            }).then((response)=>{
                    var { data } = response;
                    data.current = {...data.current, "city": final.city, "countryCode" : final.countryCode, "daily": data.daily}
                    res.send(data.current)
            // axios catch block
            }).catch((error)=>{
                console.log(error);
            })
     
    // express catch block
    } catch (error) {
        console.log(error);
    }
    

})

app.listen(3000, () => {
    console.log("Application Started Successfully.")
});
