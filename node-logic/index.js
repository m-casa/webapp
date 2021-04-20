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

//Weather Api call
app.get("/weather", async (req, res) => {
    try {
        console.log(req.query)

    } catch (error) {
        console.log(error);
    }
});

app.listen(3000, () => {
    console.log("Application Started Successfully.")
});
