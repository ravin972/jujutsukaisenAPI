const express = require("express");
require("./db/conn");
const JujutsuKaisen = require("../src/models/jujutsu");

const app = express();
const port = process.env.port || 3000;

// Handling post requests
app.post("/jujutsu", async(req, res) => {
    try {
        
    } catch (e) {
        
    }
})

app.get("/", async(req, res) => {
    res.send("Working");
})

app.listen(port, () => {
    console.log(`connection is live at port : ${port}`);
})