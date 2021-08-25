const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const functions = require('./utils/function');

let urlencodedParser = bodyParser.urlencoded({ extended: false })

app = express();
app.set('port', 4001);
app.set('view engine', 'ejs');

app.use('/scripts', express.static(__dirname + '/scripts'));
app.use('/images', express.static(__dirname + '/images'));

const redirectLogin = (req, res, next) => {

    if(!req.session.user){
        res.redirect('/login?message=' + 'You are not Logged in.');
        return;
    }
    next();
}

app.use(session({
    name: 'session',
    secret: 'this_is_a_secret_key.',
    resave: false,
    saveUninitialized: true,
    cookie: { 
        secure: false,
        sameSite: true,
        maxAge: 1000*60*60*10
    }
}));

app.get(['/', '/login'], (req, res) => {
    
    if('message' in req.query) {
        res.render('login', {message: req.query.message});
        return;
    }

    res.render('login', {message: ''});

});

app.post(['/', '/login'], urlencodedParser, (req, res) => {

    let rollno = Number(req.body.rollno);
    let password = req.body.password;

    if(!functions.checkPassword(password)) {
        res.redirect('login?message=' + "enter a valid password.");
        return;
    };

    if(!functions.checkRollno(rollno)) {
        res.redirect('login?message=' + "Enter valid rollno.");
        return;
    };

    req.session.user = rollno;

    res.redirect('home');

});


app.get('/home', redirectLogin, (req, res) => {

    res.render('welcome', {
        rollno: req.session.user
    });

});

app.get('/logout', redirectLogin, (req, res) => {

    delete req.session.user;

    res.redirect('login?message=' + "Logged out successfully")
    return;
})

app.listen(app.get('port'), () => {
    console.log("App is running at port", app.get('port'));
});