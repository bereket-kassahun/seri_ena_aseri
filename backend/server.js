require('dotenv').config({ path: './config.env' });

const express = require("express")
const cors = require("cors")
const path = require('path');
const session = require("express-session")
const cloudinary = require('cloudinary')
const formData = require('express-form-data')
const passport = require("passport")
const router = require("./routes/router")
const connectMongodb = require("./db/connection")
const professionalsRouter = require("./routes/professional")
const clientsRouter = require("./routes/client")
const servicesRouter = require("./routes/service")
const verificationRouter = require("./routes/verification")
const Models = require("./models")
const app = express()


connectMongodb()



app.use(session({
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 }
}));


app.use(passport.initialize());
app.use(passport.session());


passport.use('local', Models.Professional.createStrategy());
passport.use('clientLocal', Models.Client.createStrategy());

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    if (user != null)
        done(null, user);
});
// passport.serializeUser(Models.Professional.serializeUser());
// passport.deserializeUser(Models.Professional.deserializeUser());

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

const PORT = process.env.PORT || 5000;

var corsOptions = {
    origin: 'https://seri-ena-aseri.herokuapp.com',
    // origin: 'http://localhost:3000',
    credentials: true
}
app.use(cors(corsOptions))
app.use(formData.parse())



app.post('/image_upload', (req, res) => {

    const values = Object.values(req.files)
    const promises = values.map(image => cloudinary.uploader.upload(image.path))

    Promise
        .all(promises)
        .then(results => res.json(results))
})
// app.use('/', router)
app.use('/professional', professionalsRouter)
app.use('/client', clientsRouter)
app.use('/services', servicesRouter)
app.use('/verification', verificationRouter)
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(PORT, () => {
    console.log("Listening on PORT " + PORT);
})
