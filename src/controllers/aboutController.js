import { getVersion } from '../models/system';

const aboutController = (req, res, next) => {
    const data = { version: getVersion() };
    res.render('about', data);  
};

export default aboutController;
