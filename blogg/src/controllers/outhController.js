const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function getRegistrationPage(req, res){
    if(req.errorMessage !== undefined){
        console.log("****1****");
        res.render("register.ejs", {errorMessage: req.errorMessage});
    }else{
        console.log("****2****", req);
        res.render("register.ejs", {errorMessage: null});
    }
    
}

async function register(req, res){
    try{
        const nameInUse = await User.findOne({name: req.body.name});
        const emailInUse = await User.findOne({email: req.body.email});
        if(nameInUse !== null){
            req.errorMessage = "Username already in use." ;
            console.log("******3****");
            return res.status("400").redirect("/register");
        }else if(emailInUse !== null){
            res.errorMessage = "Email already in use." ;
            return res.status("400").redirect("/register")
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        console.log("**********got to create user");
        const user =  new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
        });
        
        console.log("**********got to save");
        await user.save();

        //jwt.sign()
        res.redirect("/");

}catch(err){
    console.log(err);
    res.status("500").json({
        error: "Internal server error."
    });
}

}

async function getLoginPage(req, res){
    if(res.errorMessage !== undefined){
        console.log("*********", res.errorMessage);
        res.render("login.ejs", {errorMessage: res.body.errorMessage});
    }else{
        res.render("login.ejs", {errorMessage: null});
    }
}

async function login(req, res){
    try{
        const user =  await User.findOne({name: req.body.name});
        const passwordCheck = await bcrypt.compare(req.body.password, user.password);
        // Check if such user exists
        if(user === null || passwordCheck === false){
            res.errorMessage = "Username or password is incorrect./nPlease try again." ;
            res.status("400").redirect("/login");
        }
        res.status("200").redirect("/");
        
    
    }catch(err){
        console.log(err);
        res.status("500").json({
            error: "Internal server error."
        });
    }
    
}

module.exports = {
    getRegistrationPage, 
    register, 
    getLoginPage, 
    login
};