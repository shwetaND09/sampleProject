var dbSchema=require('./dbSchema');
var mongoose=require('mongoose');
var constant=require('../constant');
var jwt = require('jsonwebtoken');
//var url="mongodb+srv://shweta09:admin1234@cluster0-jadyf.mongodb.net/iConnectDb?retryWrites=true&w=majority";

mongoose.set('useNewUrlParser', true );
mongoose.set('useUnifiedTopology', true );

mongoose.connect(constant.dbString);


module.exports.login=function(req,res){
    
	let request=req.body;
        
        dbSchema.find({$and:[{user_id:request.userName},{password:request.pwd}]},function(err,result){
            if(err){
                
            }else{
                if(result.length>0){
                let userdtl=result[0].user_id;
               
                
                    token = jwt.sign({
                    userdtl
                    }, constant.jwtKey, {
                        algorithm: 'HS256',
                        expiresIn:  constant.jwtKeyExpiryTime
                    });
                    

                }
                res.setHeader('Authorization', token );
               res.send({'result':result[0]._id,'msg':'Login Success'});
            }
            
        })
};

module.exports.register=function(req,res){
    let request=req.body;
	var inputData=[
        {
            user_id:request.userName,
            password:request.pwd,
            first_name:request.fName,
            last_name:request.lName
        }
        ];
        dbSchema.create(inputData,function(err,result){
            if(err){
                console.log(err);
            }else{
                res.send(result);
            }
            
        })
}