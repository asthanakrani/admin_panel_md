const model = require('../models/sing up _models')
const defaultController = async(req , res)=>{
    console.log("req.cookies",req.cookies);
    const data = await model.findById({_id:req.cookies.userId})
    
    if(req.cookies.userId){
        res.render('index',{data})
    }else{
        res.redirect('/login')
    }
}
const profileController = async(req,res)=>{
    const data = await model.findById({_id:req.cookies.userId})
    if(req.cookies.userId){
        console.log("profile page",data);
    
        res.render('pages/samples/myProfile',{data})
    }else{
        res.redirect('/login')
    }
}
module.exports={defaultController , profileController}