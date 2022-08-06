const mongoose = require('mongoose')

function connectMongodb(){
    mongoose.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true, 
        dbName: 'test',
    }, () => {
        console.log("connected using the new way")
    })
}

module.exports = connectMongodb