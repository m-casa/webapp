require("./db");
require("dotenv").config({ path: ".env" });
const express = require("express");
const cors = require("cors");
const axios = require("axios").default;
const app = express();
const jwt = require("jsonwebtoken");

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());

// News API Calls
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
        const response = await NewsModel.updateOne({ "_id": ObjectId(body._id.toString()) }, { $set: body });
    } catch {
        res.status(500);
    }
});

app.post("/delete-news", async (req, res) => {
    try {
        const { body } = req;
        const response = await NewsModel.deleteOne({ "_id": ObjectId(body._id.toString()) });
        const news = await NewsModel.find({ newsType: "regular" });
        res.json({ list: news });
    } catch {
        res.status(500);
    }
});

// Sports API Calls
// Get Data
app.get("/get-sports-news", async (req, res) => {
    try {
        const sportsList = await NewsModel.find({ newsType: "sports" }); // Collection is "news". To differentiate, I have a property called "newsType" which ideally will be either "sports" or "news"
        console.log("sportsList", sportsList);
        res.json(sportsList);
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
                console.log("Sports story added: " + newSport);
                res.send("");
            })
            .catch((error) => {
                console.error(error);
            })

    } catch (error) {
        console.error(error);
        res.status(500);
    }
});

// Weather API Call
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
        var final = {};
        // Geo-Coder Block
        await geoCoder.reverse(par).then((response) => {
            final = { ...final, "city": response[0].city, "countryCode": response[0].countryCode };
        })
            // Geo-Coder Error Block
            .catch((err) => {
                console.log(err);
            });

        // Axios logic
        const url = 'https://api.openweathermap.org/data/2.5/onecall?&exclude=hourly,minutely&units=imperial&appid=b1463c6660a78fabd9582ee9af788ad3'
        await axios.get(url, {
            params: par
        }).then((response) => {
            var { data } = response;
            data.current = { ...data.current, "city": final.city, "countryCode": final.countryCode, "daily": data.daily };
            res.send(data.current);
            // Axios catch block
        }).catch((error) => {
            console.log(error);
        })

        // Express catch block
    } catch (error) {
        console.log(error);
    }
});

//Save Contact Data
const ContactModel = require("./models/contact.model")

app.post("/contact", async (req, res) => {
    try {
        const { body } = req;
        const newContact = new ContactModel(body);
        newContact
            .save()
            .then(() => {
                console.log("Your query has been submitted");
                res.send("");
            })
            .catch((error) => {
                console.error(error);
            })
    } catch {
        console.error(error);
        res.status(500);
    }
});

// Registration and Login
const UserModel = require("./models/users.model");

app.post("/register", async (req, res) => {
    const { body } = req;
    if (body.username && body.username !== "" && body.password && body.password !== "") {
        try {
            const user = new UserModel(body);
            const response = await user.save();
        }
        catch {
            res.status(500);
        }
    }
});

app.post("/login", async (req, res) => {
    const { body } = req;
    if (body.email && body.email !== "" && body.password && body.password !== "") {
        try {
            const user = await UserModel.findOne({ email: body.email, password: body.password }, "-password");
            const token = jwt.sign({ email: user.email }, process.env.APPLICATION_SECRET_KEY);
            res.json({ accessToken: token });
            return true;
        } catch (error) {
            res.status(401).json({ message: "not authorzied" });
            return false;
        }
    }
    res.status(401).json({ message: "not authorzied" });
});

app.get("/whoami", async (req, res) => {
    const token = req.headers.authorization || null;
    if(!token) {
        res.status(401).json({ message: "not authorzied" })
        res.json({ status: false })
        return false;
    }
    try {
        const decoded = jwt.verify(token, process.env.APPLICATION_SECRET_KEY);
        const user = await UserModel.findOne({ email: decoded.email }, "-password")
        res.json({ status: true });
        return true;
    } catch (error) {
        res.status(401).json({ message: "not authorzied" })
        res.json({ status: false })
        return false;
    }
});

app.listen(3000, () => {
    console.log("Application Started Successfully.");
});
