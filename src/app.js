const express =require('express');
const app=express();
const hbs =require('hbs');
const path=require('path');
const port = 8000;


app.set('view engine', 'hbs');
// public static path
// const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials");
app.set('views',template_path);
hbs.registerPartials(partials_path);


app.get('/',(req,res)=>{
    res.render('index');
})
app.get('/about',(req,res)=>{
    res.render('about');
})
app.get('/weather',(req,res)=>{
    res.render('weather');
})
app.get('*',(req,res)=>{
    res.render('404error');
})

app.listen(port,()=>{
    console.log(`page is run suuccesss ${port}`);
})