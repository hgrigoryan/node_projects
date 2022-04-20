const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {String, required}
})

const User = mongoose.model("User", userSchema);

module.exports = User;