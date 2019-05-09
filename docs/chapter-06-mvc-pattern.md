# MVC Pattern

소프트웨어 개발에서 디자인 패턴은 지속적인 소스관리를 용이하게 해준다.

웹 프로그래밍에서 MVC 패턴은 하나의 전형이다.  

## Controller

사용자의 요청에 따라서 적절한 프로세스를 호출하는 과정이다.

`src/controller` 디렉토리에 관련 소스를 모아 저장한다.
여기 디렉토리의 파일들은 `src/index.js` 파일의 라우팅 처리 코드 부분에서 호출한다.

```
    import homeController from './controllers/homeController';
    import aboutController from './controllers/aboutController';
    import blogListController from './controllers/blogListController';

    ...

    // setup routing
    const router = express.Router();
    router.get('/', homeController);
    router.get('/about', aboutController);
    router.get('/blogs', blogListController);
```

`src/controller/blogListController.js` 파일의 내용은 다음과 같다:

```
    import { blogList } from '../models/blog';
    import { getVersion } from '../models/system';

    const blogListController = (req, res, next) => {
        const data = {
            blogs: blogList(),
            version: getVersion(),
        };
        res.render('blogList', data);  
    };

    export default blogListController;
```

여기서 보면, Model 영역의 소스를 호출하고 있다.

## Model

사용자의 요청에 따라서 데이터를 구하는 과정을 기술한다.

`src/models` 디렉토리에 관련 소스를 저장한다.

`src/models/blog.js` 소스는 다음과 같다:

```
    const blogList = () => {
        return [{
            _id: 1,
            title: 'Seoul',
        }, {
            _id: 2,
            title: 'New York',
        }, {
            _id: 3,
            title: 'Paris',
        }, {
            _id: 4,
            title: 'Rome',
        }];
    };

    export { blogList };
```

이 내용은 blog 목록 데이터를 리턴한다. 
추후 이 함수는 DB에서 데이터를 읽어서 리턴하는 형식으로 변경될 것이다.

### View

현재 `src/views` 디렉토리에 있는 소스는 그대로 유지된다.
이 영역은 화면의 UI를 담당하는 기능을 한다.

