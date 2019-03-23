var companies = require('./../../../db/models/companies.model');

exports.getAllCompanies = (req, res)=>{
    companies.find({}).limit(10).exec((err, company)=>{
        res.send(company);
    });
}