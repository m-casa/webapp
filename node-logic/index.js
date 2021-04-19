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

app.listen(3000, () => {
    console.log("Application Started Successfully.")
});
