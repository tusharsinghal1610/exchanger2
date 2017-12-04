var mongoose = require('mongoose');
var app = require('express')();
var cors = require('cors');
mongoose.Promise = global.Promise;
var BodyParser = require('body-parser');
app.use(cors());
app.use(BodyParser.urlencoded({extended : true}));
app.use(BodyParser.json());
var port = 8080;
var Schema = mongoose.Schema;
var UserSchema = mongoose.Schema({
    firstname:String,
    lastname:String,
    username: {type: String, required: true, index: { unique: true }},
    email:{type: String, required: true, index: { unique: true }},
    password:{type: String, required: true},
    username: {type: String, required: true, index: { unique: true }},
    address1: {type: String, required: true},
    address2: {type: String},
    city:{type: String, required: true},
    state:{type: String, required: true},
    pin:{type: String, required: true},
    latitude:{type: String},
    longitude:{type: String},
    isVerified:{type: Boolean, default:false},
});
var User = module.exports=mongoose.model('UserModel' , UserSchema);
 var myObj = {
        success: true ,
        error:""
    };
app.post('/',(req, res) => {
        var data = req.body;
        var uri = 'mongodb://keshav:keshav@ds119355.mlab.com:19355/exchanger';
        mongoose.createConnection(uri, function(err){
            if(err)
            {throw err;}
            else{
                newUser = new User(req.body);
                console.log(newUser);
                newUser.save((err,result)=>{
                    if(err)
                       throw err;
                    console.log(result);
                });
                console.log("success connection")
            }
        
        });
    });
/*var query =  User.findOne({email:req.body.email});
           // console.log(query.query);
           console.log(req.body);
  var username_query = User.findOne({username:req.body.username});
           
  //checking for same email
  
    //when no same email or username is found
   
         res.send(myObj);
        
            });
   
console.log('hi');*/
app.listen(port, () => {
    console.log("Server listening on port " + port);
   });