const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost/Login',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Schema = mongoose.Schema;

const Account = new Schema({
    username : String,
    password : String
},{
    colection: 'mytables'
});

const AccountModel = mongoose.model('mytables', Account);

module.exports = AccountModel