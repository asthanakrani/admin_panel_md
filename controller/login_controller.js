const loginModel = require('../models/sing up _models');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const logIn = (req,res)=> {
    res.render('pages/samples/login');
}
const logInController = async (req,res)=>{
    
    const data = await loginModel.findOne({email:req.body.email})
    console.log("req.body",req.body);
    console.log("data>>>",data);
    
    if(data){
        console.log("if");
        
        bcrypt.compare(req.body.password, data.password, (err, result) => {
            console.log("login model::", loginModel);
            
            if(!err){
                console.log("login succesfull");
                res.cookie('userId',data._id.toString());
                res.redirect('/')
            }else{
                console.log("login not done",err);
                
                res.redirect('/login')
            }
        });
        console.log(req.body);

    }else{
        console.log("else");
        
        res.redirect('/')
    }
    
}
module.exports = {logIn,logInController};