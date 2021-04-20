require("./db");
const express = require("express");
const cors = require("cors");
const app = express();
const NewsModel = require("./models/news.model");

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());

app.get("/list-news", async (req, res) => {
    try {
        const news = await NewsModel.find();
        res.json({ list: news });
    } catch (error) {
        res.status(500);
    }
});

app.post("/add-news", async (req, res) => {
    try {
        const { body } = req;
        const news = new NewsModel(body)
        const response = await news.save();
    } catch {
        res.status(500);
    }
});

const nodeGeocoder = require('node-geocoder');
const { ReplSet } = require("mongodb");
const options = {
    provider: 'openstreetmap'
  };
const geoCoder = nodeGeocoder(options);

//Weather Api call
app.get("/weather", async (req, res) => {
    try {
        console.log(req.query)
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
});

//Sports Api Calls
const SportsModel = require("./schemas/sports.model")
// Get Data
app.get("/get-sports-news", async (req, res)=>{
    try {
        const sportsList = await SportsModel.find({newsType : "sports"}); // Collection is "news". To differentiate, I have a property called "newsType" which ideally will be either "sports" or "news"
        console.log("sportsList", sportsList)
        res.json(sportsList)
    } catch (error) {
        console.error(error)
    }
})
// Save Data
app.post("/save-sports-news", (req, res)=>{
    try {
        const { body } = req;
        let newSport = new SportsModel(body);
        newSport
            .save()
            .then(()=>{
                console.log("sports story added: " + newSport)
                res.send("")
            })
            .catch((error)=>{
                console.error(error)
            })
        
    } catch (error) {
        console.error(error)
        res.status(500)
    }
})

app.listen(3000, () => {
    console.log("Application Started Successfully.")
});
