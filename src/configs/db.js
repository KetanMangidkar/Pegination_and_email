const mongoose = require('mongoose');

const local = '"mongodb://127.0.0.1:27017/pagination"';

module.exports = () => { 
    return mongoose.connect("mongodb+srv://ketan:ketan123@cluster0.pvb7r.mongodb.net/pagination?retryWrites=true&w=majority"
    );
};
