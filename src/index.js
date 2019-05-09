import express from 'express';
import exphbs from 'express-handlebars';

import homeController from './controllers/homeController';
import aboutController from './controllers/aboutController';
import blogListController from './controllers/blogListController';

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
router.get('/', homeController);
router.get('/about', aboutController);
router.get('/blogs', blogListController);

app.use(router);

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
