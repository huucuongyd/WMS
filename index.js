var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var AccountModel = require('./models/account.js');
var donvitinh = require('./models/donvitinh.js');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const mongoose = require('mongoose');
const { cpuUsage } = require('process');
mongoose.connect('mongodb://localhost/Login', {useNewUrlParser: true, useUnifiedTopology: true});

app.use(express.static('public'))
app.set("view engine","ejs");
app.set("views","./views");

var server = require('http').Server(app);
server.listen(3000);

app.get('/trangchu',function(req,res){
    res.render('trangchu');
})
app.post('/dangnhap',function(req,res,next){
    var name = req.body.username,
    pass = req.body.password;
    AccountModel.findOne({
        username : name,
        password : pass
    })
    .then(data=>{
        if(data){
            console.log('Dang nhap thanh cong');
            res.redirect('/trangchu')
        }else{
            console.log('Dang nhap THAT BAI')
            res.redirect('/dangnhap')
        }
    })
    .catch(err=>{
        console.log('Loi server')
    })
})
app.get('/dangnhap',function(req,res){
    res.render('dangnhap');
   
})

app.get('/quenmatkhau',function(req,res){
    res.render('quenmatkhau');
})
app.get('/loaisanpham', function(req,res){
    res.render('loaisanpham');
})
app.get('/nhacc', function(req,res){
    res.render('nhacc');
})
app.get('/sanpham', function(req,res){
    res.render('sanpham');
})
app.get('/doimatkhau', function(req,res){
    res.render('doimatkhau');
})
app.get('/nhaphang', function(req,res){
    res.render('nhaphang');
})
app.get('/xuathang', function(req,res){
    res.render('xuathang');
})
app.get('/sanphamdanhap', function(req,res){
    res.render('sanphamdanhap');
})
app.get('/sanphamdaxuat', function(req,res){
    res.render('sanphamdaxuat');
})
app.get('/tknhapxuat', function(req,res){
    res.render('tknhapxuat');
})
app.get('/tktonkho', function(req,res){
    res.render('tktonkho');
})
app.get('/donvitinh', function(req,res){
    res.render('donvitinh');
})
app.get('/dulieukho', function(req,res){
    res.render('dulieukho');
})
app.get('/quenmatkhau',function(req,res){

    res.render('quenmatkhau')
})
app.get('/tmloaisp',function(req,res){

    res.render('tmloaisp')
})

app.post('/tmdonvitinh',function(req,res,next){
    var data = req.body.donvitinh;
    if(data != ''){
        donvitinh.create({data : data})
        res.redirect('/donvitinh')
    }else{
        res.redirect('/tmdonvitinh')
    }
    
})
app.get('/tmdonvitinh',function(req,res){
    res.render('tmdonvitinh')
})

app.get('/tmsanpham',function(req,res){

    res.render('tmsanpham')
})
app.get('/tmnhacc',function(req,res){

    res.render('tmnhacc')
})
app.get('/tmxuathang',function(req,res){

    res.render('tmxuathang')
})
app.get('/tmnhaphang',function(req,res){

    res.render('tmnhaphang')
})

