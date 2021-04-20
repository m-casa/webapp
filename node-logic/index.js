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

//Weather Api call
app.get("/weather", async (req, res)=>{
    try {
        console.log(req.query)
        
    } catch (error) {
        console.log(error);
    }
    

})

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
