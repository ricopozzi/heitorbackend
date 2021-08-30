const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes')

app.use(express.json())

app.use(cors())
app.use(cors({origin: 'https://heitorbackend.vercel.app',}))
app.use(cors({origin: 'https://heitor-ricopozzi.vercel.app/',}))
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'https://heitor-ricopozzi.vercel.app/');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use(routes)



app.listen(3333)