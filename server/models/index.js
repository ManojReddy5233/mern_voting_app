const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE).then(()=>{
    console.log("conn success ");
});

module.exports.User = require('./user');
module.exports.Poll = require('./poll');
