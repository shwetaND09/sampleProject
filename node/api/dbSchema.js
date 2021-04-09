var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var url="mongodb+srv://shweta09:admin1234@cluster0-jadyf.mongodb.net/iConnectDb?retryWrites=true&w=majority";

// mongoose.set('useNewUrlParser', true );
// mongoose.set('useUnifiedTopology', true );

// mongoose.connect(url);
var userSchema=new Schema({
    user_id:'',
    password:'',
    first_name:'',
    last_name:''
});

var userDetails=mongoose.model('userDetails',userSchema);
module.exports=userDetails;