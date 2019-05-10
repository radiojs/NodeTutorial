import { blogList } from '../models/blog';
import { getVersion } from '../models/system';

const blogListController = (req, res, next) => {
    const data = {
        blogs: blogList(),
        version: getVersion(),
    };
    res.render('blogList', data1);  
};

export default blogListController;
