const express=require('express');
const app=express();
const port=4545

app.use('/',express.static(__dirname+'/public'))

function m1(req,res,next){
    let q=req.query.code
    let buff = Buffer.from(q, 'base64');
    req.query.code = buff.toString('ascii');
    next();
}

function m2(req,res,next){
    let result=eval(req.query.code)
    res.send("====Evaluation is====<br>"+ result)
}

app.get('/Eval',m1,m2)

app.listen(port,()=>{
    console.log('server is stareted on http://localhost:'+port)
})