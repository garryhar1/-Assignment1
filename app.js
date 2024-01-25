const express = require('express')
const port = 3000
const data = require('./data/books.json')
const app = express();

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))

app.get('/', (req,res) =>{
    res.send('hello world')
})

app.get("/books", (req,res)=>{
    res.render('booklist', {data})
})


app.get('/books/:id', (req,res) =>{
    let bookid = req.params.id;
    let user_byid = data.find(x => x.id == bookid)

    res.send(user_byid)
})

app.listen(port,()=>{
    console.log(`listening at http://localhost:${port}`)
})