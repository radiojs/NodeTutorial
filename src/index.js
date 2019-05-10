import express from 'express';
import exphbs from 'express-handlebars';
import log4js from 'log4js';

import './config/log4js';

import homeController from './controllers/homeController';
import aboutController from './controllers/aboutController';
import blogListController from './controllers/blogListController';

const logger = log4js.getLogger();

const app = express();

const PORT = 3000;

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

// 404 handling
app.use((req, res, next) => {
  res.render('pathNotFound', { status: 404, url: req.url });
});

// error handling
app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).render('error');
});

app.listen(PORT, () => {
  logger.info(`Express app listening on port ${PORT}`);
});
