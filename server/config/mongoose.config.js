const mongoose = require('mongoose');
const db = process.env.DB
const username = process.env.ATLAS_USERNAME
const pw = process.env.ATLAS_PASSWORD


mongoose.connect(
    `mongodb+srv://${username}:${pw}@my-first-db.uehwuuh.mongodb.net/${db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
})
    .then(() => console.log('Established a connection to the databse.'))
    .catch(err => console.log('Something went wrong when connecting to the database', err))
