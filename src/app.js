const express = require("express");
require("./db/conn");
const JujutsuKaisen = require("../src/models/jujutsu");

const app = express();
const port = process.env.port || 3000;

app.use(express.json());

// Handling post requests
app.post("/jujutsu", async(req, res) => {
    try {
        const addingJujutsu = new JujutsuKaisen(req.body);
        console.log(req.body);
        addingJujutsu.save();
    } catch (e) {
        res.send(e);
    }
})

app.get("/", async(req, res) => {
    res.send("Working");
})

app.listen(port, () => {
    console.log(`connection is live at port : ${port}`);
})