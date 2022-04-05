const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.json())
app.use(express.urlencoded({extended : true}));
const mongoose = require('mongoose');
const Mobile = require('./models/MobileData');
const User = require('./models/UserData');
const cors = require('cors');
app.use(cors());
const multer = require('multer');
const hash = require('object-hash');
const jwt = require('jsonwebtoken');
// const { findById } = require('./models/MobileData');

mongoose.connect('mongodb+srv://userbasic:kahitano23@mobile-review.xx5ke.mongodb.net/mobile-datas?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "../client/public/uploadedImages/");
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    } 
});

let uploadedImage = multer({storage:storage}).single('phoneImage');

app.post('/registerUser', async (req, res) => {

    let password = req.body.password;
    let hashPassword = hash.MD5(password);

    try{
        await User.create({
            name: req.body.name,
            birthdate: req.body.birthdate,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
            username: req.body.username,
            password: hashPassword,
    })
        res.json({status: 'ok'})
    }catch (err){
        res.json({status: 'error', error: 'Duplicate Email'})
    }  
});

app.post('/LogIn', async (req, res) => {

    let password = req.body.password;
    const hashPassword = hash.MD5(password)

    const user = await User.findOne({
        email: req.body.email, 
        password: hashPassword,
    });

    if(user){
        const token = jwt.sign({
            email: user.email,
        }, 'blitzkrieg')
        return res.json({status: 'ok', user: token});
    }else{
        return res.json({status: 'error', user: false});
    }
});

app.get('/Dashboard', async (req, res) => {

    const token = req.headers['x-access-token'];
    try{
        const decoded = jwt.verify(token, 'blitzkrieg')
        const email = decoded.email
        const user = await User.findOne({email: email})

        return res.json({status: 'ok', username: user.username})
    } catch (error){
        console.log(error)
        res.json({status: 'error', error: 'invalid token'});
    }

});

app.post('/Dashboard', async (req, res) => {

    const token = req.headers['x-access-token'];
    try{
        const decoded = jwt.verify(token, 'blitzkrieg')
        const email = decoded.email
        await User.find(
            {email: email}, 
            { $set : {username: req.body.username}}
        )
        
        return res.json({status: 'ok'})
    } catch (error){
        console.log(error)
        res.json({status: 'error', error: 'invalid-token'});
    }

});

app.post('/insert', uploadedImage, async (req,res) => {

    let title = req.body.title
    let phoneImage = req.file.originalname
    let classType = req.body.classType
    let brand = req.body.brand
    let snippet = req.body.snippet
    let display = req.body.display
    let dimensions = req.body.dimensions
    let color = req.body.color
    let cpu = req.body.cpu
    let gpu = req.body.gpu
    let ram = req.body.ram
    let rom = req.body.rom
    let camera = req.body.camera
    let battery = req.body.battery
    let securitySensor = req.body.securitySensor
    let features = req.body.features
    let sim = req.body.sim
    let bluetooth = req.body.bluetooth
    let price = req.body.price
    let body = req.body.body

    const blog = new Mobile({
        title: title,
        phoneImage : phoneImage,
        classType: classType,
        brand: brand,
        snippet: snippet,
        display: display,
        dimensions: dimensions,
        color: color,
        cpu: cpu,
        gpu: gpu,
        ram : ram,
        rom: rom,
        camera: camera,
        battery: battery,
        securitySensor: securitySensor,
        features: features,
        sim: sim,
        bluetooth: bluetooth,
        price: price,
        body: body,
    })

    try{
        await blog.save();
    } catch(err){
        console.log(err);
    }
});

app.get('/Dashboard/RecentBlogs', async (req, res) => {
    Mobile.find({}, (result,err) => {
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    }).sort({createdAt: -1,}).limit(5);
});





// START OF ENTRY LEVEL GATEWAY

app.get('/EntryLevel', async (req, res) => {
    Mobile.find({"classType" : "entry-level",}, (result,err) => {
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    }).sort({createdAt: -1});
});

app.get('/EntryLevel/:id', async (req, res) => {
    const id = req.params.id;
    if( !mongoose.Types.ObjectId.isValid(id) ) return false;
    Mobile.findById(`${id}`, (result,err) => {
        if(err){
            res.send(err);
        }else{ 
            res.send(result);
        }
    })
});

app.get('/EntryLevel_CherryMobile', async (req, res) => {
    Mobile.find({"brand" : "cherry-mobile"}, (result,err) => {
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    })
}); 

app.get('/EntryLevel_CherryMobile/:id', (req, res) => {
    const id = req.params.id;
    if( !mongoose.Types.ObjectId.isValid(id) ) return false;
    Mobile.findById(`${id}`, (result,err) => {
        if(err){
            res.send(err)
        }else{ 
            res.send(result);
        }
    })
});

app.get('/EntryLevel_Vivo', async (req, res) => {
    Mobile.find({"brand" : "vivo", "classType" : "entry-level"}, (result,err) => {
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    })
});

app.get('/EntryLevel_Vivo/:id', async (req,res) => {
    const id = req.params.id;
    if( !mongoose.Types.ObjectId.isValid(id) ) return false;
    Mobile.findById(`${id}` , (err, result) => {
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    });
});

app.get('/EntryLevel_Oppo', async (req, res) => {
    Mobile.find({"brand" : "oppo", "classType": "entry-level"}, (result,err) => {
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    })
});

app.get('/EntryLevel_Oppo/:id', async (req, res) => {
    const id = req.params.id
    if( !mongoose.Types.ObjectId.isValid(id) ) return false;
    Mobile.findById(`${id}`, (err, result) => {
        if(err){
            res.send(err);
        }else{
            res.send(result)
        }
    });
});

app.get('/EntryLevel_Samsung', async (req, res) => {
    Mobile.find({"brand" : "samsung", "classType" : "entry-level"}, (result,err) => {
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    });
});

app.get('/EntryLevel_Samsung/:id', async (req, res) => {
    const id = req.params.id;
    if( !mongoose.Types.ObjectId.isValid(id) ) return false;
    Mobile.findById(`${id}`, (err, result) => {
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    })
});

app.get('/EntryLevel_Infinix', async (req, res) => {
    Mobile.find({"brand" : "infinix", "classType" : "entry-level"}, (result,err) => {
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    })
});

app.get('/EntryLevel_Infinix/:id', async (req, res) => {
    const id = req.params.id
    if( !mongoose.Types.ObjectId.isValid(id) ) return false;
    Mobile.findById(`${id}`, (err, result) => {
        if(err){
            res.send(err);
        }else{
            res.send(result)
        }
    });
});

app.get('/EntryLevel_TecnoMobile', async (req, res) => {
    Mobile.find({"brand" : "tecno-mobile"}, (result,err) => {
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    })
});

app.get('/EntryLevel_TecnoMobile/:id', async (req, res) => {
    const id = req.params.id
    if( !mongoose.Types.ObjectId.isValid(id) ) return false;
    Mobile.findById(`${id}`, (err, result) => {
        if(err){
            res.send(err);
        }else{
            res.send(result)
        }
    });
});

app.get('/EntryLevel_Xiaomi', (req, res) => {
    Mobile.find({"brand" : "xiaomi", "classType" : "entry-level"}, (result,err) => {
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    })
});

app.get('/EntryLevel_Xiaomi/:id', async (req,res) => {
    const id = req.params.id;
    if( !mongoose.Types.ObjectId.isValid(id) ) return false;
    Mobile.findById(`${id}` , (err, result) => {
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    });
});

app.get('/EntryLevel_Realme', (req, res) => {
    Mobile.find({"brand" : "realme", "classType" : "entry-level"}, (result,err) => {
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    })
});

app.get('/EntryLevel_Realme/:id', async (req,res) => {
    const id = req.params.id;
    if( !mongoose.Types.ObjectId.isValid(id) ) return false;
    Mobile.findById(`${id}` , (err, result) => {
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    });
});

// END OF ENTRY LEVEL GATEWAY





// START OF ENTRY MID RANGE

app.get('/MidRange', async (req, res) => {
    Mobile.find({"classType" : "mid-range"}, (result,err) => {
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    }).sort({createdAt: -1});
});

app.get('/MidRange/:id', async (req, res) => {
    const id = req.params.id;
    if( !mongoose.Types.ObjectId.isValid(id) ) return false;
    Mobile.findById(`${id}`, (result,err) => {
        if(err){
            res.send(err);
        }else{ 
            res.send(result);
        }
    })
});

app.get('/MidRange_Vivo', async (req, res) => {
    Mobile.find({"brand" : "vivo", "classType" : "mid-range"}, (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
});

app.get('/MidRange_Vivo/:id', async (req,res) => {
    const id = req.params.id;
    if( !mongoose.Types.ObjectId.isValid(id) ) return false;
    Mobile.findById(`${id}` , (err, result) => {
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    });
});

app.get('/MidRange_Oppo', async (req, res) => {
    Mobile.find({"brand" : "oppo", "classType" : "mid-range"}, (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
});

app.get('/MidRange_Oppo/:id', async (req,res) => {
    const id = req.params.id;
    if( !mongoose.Types.ObjectId.isValid(id) ) return false;
    Mobile.findById(`${id}` , (err, result) => {
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    });
});

app.get('/MidRange_Samsung', async (req, res) => {
    Mobile.find({"brand" : "samsung", "classType" : "mid-range"}, (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
});

app.get('/MidRange_Samsung/:id', async (req,res) => {
    const id = req.params.id;
    if( !mongoose.Types.ObjectId.isValid(id) ) return false;
    Mobile.findById(`${id}` , (err, result) => {
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    });
});

app.get('/MidRange_Infinix', async (req, res) => {
    Mobile.find({"brand" : "infinix", "classType" : "mid-range"}, (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
});

app.get('/MidRange_Infinix/:id', async (req,res) => {
    const id = req.params.id;
    if( !mongoose.Types.ObjectId.isValid(id) ) return false;
    Mobile.findById(`${id}` , (err, result) => {
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    });
});

app.get('/MidRange_TecnoMobile', async (req, res) => {
    Mobile.find({"brand" : "tecno", "classType" : "mid-range"}, (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
});

app.get('/MidRange_TecnoMobile/:id', async (req,res) => {
    const id = req.params.id;
    if( !mongoose.Types.ObjectId.isValid(id) ) return false;
    Mobile.findById(`${id}` , (err, result) => {
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    });
});

app.get('/MidRange_Xiaomi', async (req, res) => {
    Mobile.find({"brand" : "xiaomi", "classType" : "mid-range"}, (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
});

app.get('/MidRange_Xiaomi/:id', async (req,res) => {
    const id = req.params.id;
    if( !mongoose.Types.ObjectId.isValid(id) ) return false;
    Mobile.findById(`${id}` , (err, result) => {
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    });
});

app.get('/MidRange_Motorola', async (req, res) => {
    Mobile.find({"brand" : "motorola", "classType" : "mid-range"}, (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
});

app.get('/MidRange_Motorola/:id', async (req,res) => {
    const id = req.params.id;
    if( !mongoose.Types.ObjectId.isValid(id) ) return false;
    Mobile.findById(`${id}` , (err, result) => {
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    });
});

app.get('/MidRange_Realme', async (req, res) => {
    Mobile.find({"brand" : "realme", "classType" : "mid-range"}, (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
});

app.get('/MidRange_Realme/:id', async (req,res) => {
    const id = req.params.id;
    if( !mongoose.Types.ObjectId.isValid(id) ) return false;
    Mobile.findById(`${id}` , (err, result) => {
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    });
});

// END OF MID RANGE




// START OF FLAG SHIP


app.get('/FlagShip', async (req, res) => {
    Mobile.find({"classType" : "flag-ship"}, (result,err) => {
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    }).sort({createdAt: -1});
});

app.get('/FlagShip/:id', async (req, res) => {
    const id = req.params.id;
    if( !mongoose.Types.ObjectId.isValid(id) ) return false;
    Mobile.findById(`${id}`, (result,err) => {
        if(err){
            res.send(err);
        }else{ 
            res.send(result);
        }
    })
});

// END OF FLAG SHIP


app.listen(3001, () => {
    console.log('server is running on port 3001');
});