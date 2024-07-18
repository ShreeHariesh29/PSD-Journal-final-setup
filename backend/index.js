const express = require('express');
const mongoose = require('mongoose');
const connectToDatabase = require('./config/config.js')
const cors = require("cors");
const app = express();
const JournalModel = require ('./model/JournalsDetailsModel.js')
const CustomerModel = require ('./model/CustomerDetails')
const UserModel = require ('./model/Users.model.js')
const bodyParser = require('body-parser')
const { getdata } = require('./Controllers/User.controller.js');
const { getuser } = require ('./Controllers/User.control.js')
const {JournalData} = require('./Controllers/FetchJournalDetails.js')
const multer = require('multer')
const path = require('path')
const OderListModel = require ('./model/OderListModel.js')


const PORT = process.env.PORT || 1000;


app.use(express.json())
app.use(express.static('public'))
app.use(cors());
require("dotenv").config();
connectToDatabase();
app.use(bodyParser.json())
app.get('/logindata',getdata )
app.get('/data', getuser)
app.get('/journaldata', JournalData)


//  customer details post api
app.post('/CustomerDetails', async(req, res)=>{
    console.log(req.body);
    try{
        await UserModel.create ({
            name: req.body.name,
            email: req.body.email,
            mobileno: req.body.mobileno,
            queries: req.body.queries,
            list: req.body.list
        })
        res.json({satus:'ok'})
    }
    catch (error){
        console.log('Error',error);
        res.json({ status:'error', error: error.message })
    }
})


//  Upload Jounal img post api. Uploading img using multer method

let storage = multer.diskStorage({
    destination:(req, file, cb) =>{
        cb(null,'./public/imgs')
    },
    filename:(req, file, cb)=>{
        cb(null, file.fieldname+'_'+ Date.now()+ path.extname(file.originalname))
    }
})

let upload = multer({
    storage: storage,
})

// let uploader = upload.single('file');

app.post('/addjournals', upload.single('file'), async(req, res) => {
    try{
        await JournalModel.create({
            image : `http://localhost:1000/imgs/${req.file.filename}`
            
        })
        res.json({staus:'ok'})
    }
    catch(err){
        console.log(err)
    }

})

//  Getting Journal cover page img, get api 

app.get("/journalcollections", (req, res)=>{
    JournalModel.find()
    .then(JournalData => res.json(JournalData ) )
    .catch(err => res.json(err) )
})

// OderlistUpload post Api using multermethot
 let OderFile = multer.diskStorage({
    destination:(req, res, cd)=>{
        cd(null,'./public/OderlistFiles')
    },
    filename:(req, oderlist, cd)=>{
        cd(null, oderlist.fieldname+'_'+ Date.now()+ path.extname(oderlist.originalname))
    }
})
let UploadOderList = multer({
    storage: OderFile
})

app.post('/oderList', upload.single('file'), async(req, res) => {
    try{
        await OderListModel.create({
            OderList : `http://localhost:1000/OderListFiles/${req.file.filename}`
            
        })
        res.json({staus:'ok'})
    }
    catch(err){
        console.log(err)
    }

})

app.post('/placeOder', UploadOderList.single('oderlist'), async(req, res)=>{
    console.log(req.body);
    try{
        await UserModel.create ({
            name: req.body.name,
            email: req.body.email,
            mobileno: req.body.mobileno,
            queries: req.body.queries,
            // oderlist: `http://localhost:1000/OrderlistFiles/${req.o.filename}`
        })
        res.json({satus:'ok'})
    }
    catch(err){
        console.log(err)
    }
})



app.listen(PORT, ()=>{
    console.log(`Server started on the port ${PORT}`);
});