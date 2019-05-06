[Home](../README.md)  

# Dynamic web with template

앞서 우리는 클라이언트의 요청에 따라 서버에 저장된 파일을 전송하는 과정을 배웠다.  
이제 전송하는 파일의 내용을 동적으로 변경하여 전송하는 과정을 배워본다.

## Template 엔진

이제부터 전송하는 파일의 내용을 담은 파일을 `template` 파일이라 부른다.
우리는 이 파일을 읽어서 이 파일의 일부 내용을 우리가 원하는 정보로 수정한 다음, 클라이언트로 전송한다.

이런 템플릿 기능을 제공하는 몇 가지 라이브러리가 있다:

* ejs
* pug
* handlbars

여기서는 `handlebars`를 기준으로 설명한다.
`ejs`나 `pug`도 사용법의 차이는 있지만, 기본적인 원리는 같다.

## Handlebars

#### 1. 설치

우선 `handlebars` 라이브러리를 설치한다:

```
    $ npm install express-handlebars --save
```

`src/index.js` 파일에 템플릿 설정 관련 작업을 처리한다:

#### 2. 템플릿 경로, 파일 지정

```
    app.engine('hbs', exphbs({
      extname: 'hbs',
      defaultLayout: 'default',
      layoutsDir: `${__dirname}/views/layouts/`,
      partialsDir: `${__dirname}/views/partials/`,
    }));
    app.set('view engine', 'hbs');
    app.set('views', `${__dirname}/views/pages/`);
```

위 내용은 `handlebars` 를 템플릿으로 지정하고, 해당 템플릿 파일의 확장자를 `.hbs` 로 하며,
레이아웃 파일의 경로와 템플릿 파일의 경로를 지정한다.

* `src/views/layouts`  : 레이아웃 파일의 경로
* `src/views/partials` : 레이아웃 요소 파일의 경로 지정
* `src/views/pages`    : 템플릿 파일의 경로 지정

```
    const router = express.Router();
    router.get('/', (req, res) => {
      const data = { version: '8.11.4' };
      res.render('home', data);
    });
    app.use(router);
```

위 내용은 라우팅 경로와 파일을 지정한다.
여기서 함수 내부의 `data` 객체는 템플릿으로 전달되는 정보 객체이다.
이런 방법으로 템플릿에 동적으로 정보를 지정할 수 있다.

