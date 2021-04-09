var loginModel=require('./api/loginModel');
var constant=require('./constant');
var jwt = require('jsonwebtoken');
module.exports=function(app){
    app.use('*',async function(req,res,next){
        var verify='';
         verify=await validateToken(req,res);
         console.log(verify);
         if(verify.includes('Authenticated')) 
		    {
		   
		      next();
		      
		      }
		    else { 
		      res.json(verify);
			
		    } 

    })
    app.post('/api/login',(req,res)=>{
        loginModel.login(req,res);
       
    });
     app.post('/api/register',(req,res)=>{
        loginModel.register(req,res);
    })

    
}
async function validateToken(req,res){
    var head=req.headers;
      console.log(head);
      try {
        var url=req.originalUrl;
        url=url.toLowerCase();
        if(req.originalUrl=='/api/login' || req.originalUrl=='/api/register')
       // if(req.originalUrl=='/api/login')
    
          return('{"status":"1", "msg":"Authenticated"}');
        else
          var verify=await verifyjwt(head.authorization);

          console.log("-------------------output------")
       console.log(verify);
        return(verify)
       //   res.send(verify);
      } catch(err) {
        console.log(err);
      }

}
async function verifyjwt(token){
    try{
    var js="";
        
    var key = constant.jwtKey;
     jwt.verify(token,constant.jwtKey,function(err, payload) {
         
      if(err){
            js='{"status":"0", "msg":"Key Expired"}';
        }else{
            js='{"status":"1", "msg":"Authenticated"}';
          }
      });
console.log(js);
      return(js);
      
  }catch(e){
    console.log(e);
    //throw e;
  }
}