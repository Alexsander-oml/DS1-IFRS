const express = require('express');
const handlebars = require('express-handlebars');

const path = require('path');
app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

var hbs=handlebars.create({defaultLayout:'main'});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');




app.use((req,res,next) => {
    console.log("Time", Date.now());
    next();
});


app.get('/produtos', (req, res, next) => {
    res.send('<h1>Meus produtos<h1>');
    next();
});

app.get('/', (req, res, next) => {
    res.render('form', {layout:false});
    //next();
});


app.post('/', (req, res, next) => {    
    console.log("POST! ");
    console.log("Nome:",req.body.nome);
    console.log("Descrição: ", req.body.descricao);
    res.render('show', {layout:false, my_name:req.body.nome, my_descricao:req.body.descricao, my_years:req.body.idade, my_peso:req.body.peso, my_class:req.body.turma});
    
});



app.listen(3000, (req, res, next) => {
    console.log('Server is running on port 3000');
});