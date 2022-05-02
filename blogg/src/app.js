"use strict"
const express = require("express");
const path = require('path');
const ejs = require("ejs");
const mongoose = require("mongoose");
const homeRouter = require("./routes/homeRouter");
const cookieParser = require('cookie-parser')

require("dotenv").config()
const app = express();
async function main() {
    try{
        await mongoose.connect('mongodb://localhost:27017/blogDB');
        console.log("Database connected!");
    }
    catch(error) {
        console.log(error);
    }    
}    

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

main();
app.use("/", homeRouter);

app.listen(3000, () => console.log("Starting server on port 3000..."));
