require('dotenv').config({ path: './config.env' });

const express = require("express")
const cors = require("cors")
const session  = require("express-session")
const passport = require("passport")
const router = require("./routes/router")
const connectMongodb = require("./db/connection")
const professionalsRouter = require("./routes/professional")
const servicesRouter = require("./routes/service")
const verificationRouter = require("./routes/verification")
const Models = require("./models")
const app = express()


connectMongodb()

app.use(express.urlencoded({ extended: false }))
app.use(express.json());

app.use(session({
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: false
}));

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
app.use(cors(corsOptions))
app.use(passport.initialize());
app.use(passport.session());

passport.use(Models.Professional.createStrategy());
passport.serializeUser(Models.Professional.serializeUser());
passport.deserializeUser(Models.Professional.deserializeUser());

app.use('/', router)
app.use('/professional', professionalsRouter)
app.use('/services', servicesRouter)
app.use('/verification', verificationRouter)


app.listen(3000, () => {
    console.log("Listening on PORT 3000");
})
