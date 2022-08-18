const mongoose = require('mongoose')

const { MongoClient, ServerApiVersion } = require('mongodb');
function connectMongodb() {
    mongoose.connection.on("open", function(ref) {
        console.log("Connected to mongo server.");
        // return start_up();
      });
      
      mongoose.connection.on("error", function(err) {
        console.log("Could not connect to mongo server!");
        return console.log(err);
      });

      
    mongoose.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
        useUnifiedTopology: true,
        serverApi: ServerApiVersion.v1,
        dbName: 'test',
    }, )
    // () => {
    //     console.log("connected using the new way")
    // })

    // var db = mongoose.connection;
    // db.on('error', console.error.bind(console, 'connection error:'));
}




// const uri = "mongodb+srv://bereket:1q2w3e4r@cluster0.mqkad2d.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
module.exports = connectMongodb