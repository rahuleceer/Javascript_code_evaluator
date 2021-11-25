const express=require('express');
const path=require('path');
const port=8000;

const app=express();

//our db
const db=require('./config/mongoose');
const Contact=require('./models/contact');
 
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'Myfiles'));
//middleware
app.use(express.urlencoded());
//to add static files
app.use(express.static('static_files'));

//contact lists
// var contactList= [{
//     name: 'Rahul Saini',
//     phone: '3845287934'
// },
// {
//     name: 'kamal ',
//     phone: '5364726873'
// },
// {
//     name:'bdfjh',
//     phone: '5428754374'
// }];

app.get('/',function(req,res){
    // res.send('<h1>Cool. It is my first express server</h1>')
    // console.log(__dirname)
    Contact.find({},function(err,contacts){
        if(err){
            console.log('Error in fetching');
            return;
        }
        return res.render('home',{ 
            // title: "I am Iron Man"
            title: "Contact Lists",
            contact_List: contacts
        });
    })
});

app.post('/contact',function(req,res){
    // return res.redirect('/practice');
    // console.log(req.body);
    // contactList.push(req.body);
    // return res.redirect('/');
    Contact.create(req.body,function(err,data){
        if(err){
            console.log('error',err);
            return;
        }
        console.log('*******',data);
        return res.redirect('back');
    });
});

app.get('/practice',function(req,res){
    return res.render('practice',{
        title:'Playing with EJS'
    });
})

//param delete
// app.get('/delete-contact/:phone',function(req,res){
//     console.log(req.params);
//     let phone = req.params.phone;
// })

//query 
app.get('/delete-contact',function(req,res){
    // console.log(req.query);
    // let phone = req.query.phone;

    // let contactIndex=contactList.findIndex(contact => contact.phone == phone )

    // if(contactIndex!=-1)
    // {
    //     contactList.splice(contactIndex,1);
    // }

    // return res.redirect('back');
    //By Database
    let id=req.query.id;
    Contact.findByIdAndDelete(id,function(err){
        if(err){
            console.log('Error in deleting');
            return;
        }
        return res.redirect('back');
    });
});

app.listen(port,function(err){
    if(err)
    {
        console.log('Error',err);
    }

    console.log("server is up and running on port: ",port);
})