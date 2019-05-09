const homeController = (req, res, next) => {
    const data = { version: '8.11.4' };
    res.render('home', data);  
};

export default homeController;
