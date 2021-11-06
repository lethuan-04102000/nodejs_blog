
const mongoose = require('mongoose');

async function connect() {
    try {
    await mongoose.connect('mongodb://localhost:27017/Blog_cris');

        console.log('connected');

    } catch (error) {
        console.log('connected k');
    }
}



module.exports = { connect };
