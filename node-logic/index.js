require("./db");
const express = require("express");
const cors = require("cors");
const socketio = require("socket.io")
const http = require("http");
const axios = require("axios");
const app = express();
const axios = require('axios').default;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());

// News api calls
const NewsModel = require("./models/news.model");

app.get("/list-news", async (req, res) => {
    try {
        const news = await NewsModel.find({ newsType: "regular" });
        res.json({ list: news });
    } catch (error) {
        res.status(500);
    }
});

app.post("/add-news", async (req, res) => {
    try {
        const { body } = req;
        const news = new NewsModel(body);
        const response = await news.save();
    } catch {
        res.status(500);
    }
});

app.post("/update-news", async (req, res) => {
    try {
        const { body } = req;
        const response = await NewsModel.updateOne({"_id": ObjectId(body._id.toString())}, {$set: body});
    } catch {
        res.status(500);
    }
});

app.post("/delete-news", async (req, res) => {
    try {
        const { body } = req;
        const response = await NewsModel.deleteOne({"_id": ObjectId(body._id.toString())});
        const news = await NewsModel.find({ newsType: "regular" });
        res.json({ list: news });
    } catch {
        res.status(500);
    }
});

//Sports Api Calls
// Get Data
app.get("/get-sports-news", async (req, res) => {
    try {
        const sportsList = await NewsModel.find({ newsType: "sports" }); // Collection is "news". To differentiate, I have a property called "newsType" which ideally will be either "sports" or "news"
        console.log("sportsList", sportsList)
        res.json(sportsList)
    } catch (error) {
        console.error(error)
    }
});

// Save Data
app.post("/save-sports-news", (req, res) => {
    try {
        const { body } = req;
        let newSport = new NewsModel(body);
        newSport
            .save()
            .then(() => {
                console.log("sports story added: " + newSport)
                res.send("")
            })
            .catch((error) => {
                console.error(error)
            })

    } catch (error) {
        console.error(error)
        res.status(500)
    }
});

//Weather Api call
const nodeGeocoder = require('node-geocoder');
const { ReplSet } = require("mongodb");
const { ObjectId } = require("bson");
const options = {
    provider: 'openstreetmap'
};
const geoCoder = nodeGeocoder(options);

app.get("/weather", async (req, res) => {
    try {
        const par = req.query;
        var final = {}
        //Geo-coder Block
        await geoCoder.reverse(par).then((response) => {
            final = { ...final, "city": response[0].city, "countryCode": response[0].countryCode }
        })
            //Geo-Coder Error Block
            .catch((err) => {
                console.log(err);
            });

        //axios logic
        const url = 'https://api.openweathermap.org/data/2.5/onecall?&exclude=hourly,minutely&units=imperial&appid=b1463c6660a78fabd9582ee9af788ad3'
        await axios.get(url, {
            params: par
        }).then((response) => {
            var { data } = response;
            data.current = { ...data.current, "city": final.city, "countryCode": final.countryCode, "daily": data.daily }
            res.send(data.current)
            // axios catch block
        }).catch((error) => {
            console.log(error);
        })

        // express catch block
    } catch (error) {
        console.log(error);
    }
});

//Save Contact Data

const ContactModel = require("./models/contact.model")

app.post("/contact", async (req, res) => {
    try {
        const { body } = req;
        const newContact = new ContactModel(body)
        newContact
            .save()
            .then(()=>{
                console.log("Your query has been submitted")
                res.send("")
            })
            .catch((error)=>{
                console.error(error)
            })
    } catch {
        console.error(error)
        res.status(500);
    }
});

//Chat
const connections = {};
const server = http.createServer(app);
const io = socketio(server, {
    cors : {
        origin : "*"
    }
});

io.on("connection", (client)=>{

    client.on("login", (username)=>{
        connections[username] = client;
    });

    client.on("chat", (data)=>{
        const { message, user } = data;
        connections[user].emit("message", message)
    })

});

app.listen(3000, () => {
    console.log("Application Started Successfully.")
});
