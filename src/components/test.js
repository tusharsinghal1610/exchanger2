var mongoose = require('mongoose');
var app = require('express')();
var cors = require('cors');
var BodyParser = require('body-parser');
// Create seed data
app.use(cors());
app.use(BodyParser.urlencoded({extended : true}));
app.use(BodyParser.json());
var port = 8080;
app.post('/',(req, res) => {
var data = req.body;
var uri = 'mongodb://keshav:keshav@ds119355.mlab.com:19355/exchanger';
mongoose.createConnection(uri, function(err){
    if(err)
    {throw err;}
});
var Schema = mongoose.Schema;
var UserSchema = new Schema({
   
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
    latitude:{type: String, required: false},
    longitude:{type: String, required: false},
    isVerified:{type: String, required: false},
    //success: Boolean,
    //error: String
})

var User = mongoose.model('User' , UserSchema)


 var myObj = {
        
        success: true ,
        error:""

    };
//checking for same email id
//console.log(User.find({email:req.body.email}))

 
 var newUser=new User({
    firstname : req.body.firstname,
    lastname : req.body.lastname,
    username : req.body.username,
    email : req.body.email,
    password : req.body.password,
    address1 : req.body.address1,
    address2 : req.body.address2,
    city : req.body.city,
    state : req.body.state,
    pin : req.body.pin
 });
    

    newUser.save(function(err, book){
        if(err) throw err;
        else
        console.log(book);
        console.log("Book created")
    });



console.log(req.body);
res.send(myObj);


});




console.log('hi');
app.listen(port, () => {
    console.log("Server listening on port " + port);
   });