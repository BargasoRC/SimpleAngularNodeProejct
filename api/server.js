const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 4000;
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./config/db");
const routes = require("./router/route");
mongoose.Promise = global.Promise;
console.log("connecting....");
mongoose.connect(config.DB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false }, (err, data) => {
    if (err) {
        console.log("error : " + err);
    } else {
        console.log("database is connected!");
    }
});
app.get("/test",(req,res)=>{
    res.send("we are live !!!")
})
app.use(cors());
app.use(bodyParser.json());
app.use("/api", routes);
app.listen(PORT, (req,res) => {
    console.log(`Server is running on Port:${PORT}`);
});
