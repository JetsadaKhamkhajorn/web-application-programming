const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const mongoDb = require('./db');

const app = express();


const profilesRoutes = require('./routes/profiles');

const ports = process.env.PORT || 3000;


mongoose.Promise = global.Promise;

mongoose.connect(mongoDb.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database sucessfully connected ')
}, error => {
    console.log('Database error: ' + error)
})

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome My Web.');
});

app.listen(ports, () => {
    console.log('http://localhost:' + ports)
})


app.use('/images', express.static(path.join('images')));


app.use('/api/profiles', profilesRoutes);