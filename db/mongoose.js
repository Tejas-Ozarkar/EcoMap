const mongoose = require('mongoose');
const db = 'mongodb://localhost:27017/demo';

mongoose.Promise = global.Promise;
mongoose.connect(db, {
    useNewUrlParser: true
}, function (err) {
    if (err) {
        console.log("Error! " + err);
    }else{
        console.log('Mongoose Connected');
    }
});
