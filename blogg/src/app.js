const express = require("express");
const path = require('path');
const ejs = require("ejs");
const mongoose = require("mongoose");
const homeRouter = require("./routes/homeRouter");

const app = express();
async function main() {
    try{
        await mongoose.connect('mongodb://localhost:27017/blogDB');
    }
    catch(error) {
        console.log(error);
    }    
}
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public"))); //

app.use("/", homeRouter);
console.log(__dirname);
app.listen(3000, () => console.log("Starting server on port 3000..."));