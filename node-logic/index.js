const express = require("express");
const app = express();
const axios = require("axios").default;

app.get("/weather", async (req, res)=>{
    try {
        console.log(req.query)
        
    } catch (error) {
        console.log(error);
    }
    

})

app.listen(3000, ()=>{
    console.log("Server started successfully at port 3000")
})