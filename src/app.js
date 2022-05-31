const express = require('express')
const path = require('path');
const hbs = require('hbs');
// console.log(__dirname);
const app = express()
const pathDirec =  path.join(__dirname,'../public');
const viewPath =path.join(__dirname,'../tempalte/views')
const PartialPath = path.join(__dirname,'../tempalte/partials')


app.set('view engine','hbs');
app.set('views',viewPath);
hbs.registerPartials(PartialPath)

app.use(express.static(pathDirec));
app.get('/index',  (req, res) =>{
    res.render('index',{
        Title : "Red Book",
        Author : "Hellen Keller"
    })
    
})
app.get('/about', (req, res)=> {
    res.render('about',{
        Title : "About me",
        Author : "Rachel Keller"
    }) 
})
app.get('/help', (req, res) =>{
    res.render('help',{
        Title : "Hello",
        Author : "Helpful Text"
       
    }) 
})
// app.get('*',(req,res)=>{
// // res.send("My 404 Page")
// res.render('404',
// {
// Title : "404",
// Author : "Swet",
// ErrorMsg : "Page not found "
// })
// })
app.get('/help/ * ',(req,res)=>{
    // res.send("My 404 Page")
    res.render('404',
    {
    Title : "404",
    Author : "Swet satasiya",
    ErrorMsg : "Article not found "
    })
    })
app.get('/products',(req,res)=>
{
    if (!req.query.search) {
    return res.send({
        error : "You must have to Provide search!!"
    })
    }

    res.send(
        {
            products:[]
        }
    )
})

// app.get('/', function (req, res) {
//     res.send('Hello express')
// })
// app.get('/help', function (req, res) {
//     res.send([{
//         nam : "Shwet",
//         age : 20
//     },
//     {
//         nam : "Hitarth",
//         age : 29
//     }])
// })
// app.get('/about', function (req, res) {
//     res.send('<h1> Hello This is About..</h1>')
// })
app.get('/weather', function (req, res) {
    if (!res.query.address) {
        error : "You should Provide Addresss!...";
    }

    res.send({
        location : "Surat , Gujarat ,India ",
        atmoshphere : "Its too hot",
        address: res.query.address
    })
})
app.listen(3000, () => {
    console.log("Port No . 30000 here .............");
})