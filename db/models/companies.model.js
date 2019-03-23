const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const companySchema = new Schema({
    Symbol: String,
    Name: String,
    sector: String,
    Industry: String
});

module.exports = mongoose.model('company', companySchema ,'companies');