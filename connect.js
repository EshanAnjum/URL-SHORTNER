//To connect to our database

const mongoose = require("mongoose");

async function connectToMongoDB(url){
    return mongoose.connect(url)
}

module.exports = {
    connectToMongoDB,
}