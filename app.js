import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
import hbs from 'hbs';



const app = express();
const port = process.env.PORT;

//handlebars
app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));

app.get('/', (req, res) => {
    //res.sendFile( __dirname + '/public/index.html')
    res.render('home',{
        nombre: 'Lexsandro Godoy',
        titulo: 'Curso Node'
    });
})

app.get('/generic', (req, res) => {
    res.render('generic',{
        nombre: 'Lexsandro Godoy',
        titulo: 'Curso Node'
    });
})

app.get('/elements', (req, res) => {
    res.render('elements',{
        nombre: 'Lexsandro Godoy',
        titulo: 'Curso Node'
    });
})

/*app.get('/generic', (req, res) => {
    res.sendFile( __dirname + '/public/generic.html')
})*/

/*app.get('/elements', (req, res) => {
    res.sendFile( __dirname + '/public/elements.html')
})*/

app.listen(port, () => {
    console.log(`Localhost ${port}`)
})