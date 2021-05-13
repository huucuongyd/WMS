const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost/Login',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Schema = mongoose.Schema;

const Account = new Schema({
    data : String
},{
    colection: 'donvitinh'
});

const dataModel = mongoose.model('donvitinh', Account);

module.exports = dataModel