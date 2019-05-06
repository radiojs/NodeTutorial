import express from 'express';
import exphbs from 'express-handlebars';

const app = express();

// static files
app.use('/', express.static('public'));

// setup template engine handlebars
app.engine('hbs', exphbs({
  extname: 'hbs',
  defaultLayout: 'default',
  layoutsDir: `${__dirname}/views/layouts/`,
  partialsDir: `${__dirname}/views/partials/`,
}));
app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views/pages/`);

// setup routing
const router = express.Router();
router.get('/', (req, res) => {
  const data = { version: '8.11.4' };
  res.render('home', data);
});
app.use(router);

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
