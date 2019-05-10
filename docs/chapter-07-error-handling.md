# Error handling

오류를 처리하는 방법에는 크게 네 가지가 있다.

* `try`, `catch` 사용: 동기 방식으로 오류를 처리한다.
* callback error: 비동기 방식으로 오류를 처리한다.
* Promise rejection: `async, await` 코드 실행과정의 오류를 처리한다.
* Event emitter: 주로 복잡한 시스템에서 처리한다. 

## Express에서의 오류 처리

Express에서는 오류 처리 미들웨어를 사용한다.

오류 메시지를 사용자에게 표시하는 `src/views/error.hbs` 페이지를 만들고 다음 코드를 `src/index.js` 에 추가한다.

```
    app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).render('error');
    });
```

이 함수는 다른 미들웨어 함수가 3개의 매개변수를 가지는 것과 달리 4개의 매개변수를 가진다.  
그리고 이 함수는 다른 `app.use(...)` 함수 사용 후, 맨 마지막에 작성해야 한다.

## Page Not Found

Router에 지정된 경로가 아닌 경로를 요청하는 경우, 존재하지 않는 페이지 요청을 표시하는 페이지를 구성한다.

먼저 `src/views/pageNotFound.hbs` 템플릿을 구성하고, `src/index.js` 파일의 라우터 설정 코드 다음에 
404 처리 코드를 추가한다:

```
    ...
    app.use(router);

    // 404 handling
    app.use((req, res, next) => {
      res.render('pathNotFound', { status: 404, url: req.url });
    });

    ...
```

## Logging

시스템에서 발생하는 다양한 사건을 분류하여 기록으로 보관하는 일은 오류 처리뿐 아니라 지속적인 서비스의 운영에 매우 중요하다.

몇 가지 logging framework들 중에서 `log4js`를 선정한다.

#### 설치

```
    $ npm install log4js --save
```

#### 설정

`src/config/log4js.js` 파일을 생성한다:

```
    import log4js from 'log4js';

    const LOG_DIR = process.env.LOG_DIR || './log';
    const filePath = `${LOG_DIR}/node_tutorial/error.log`;

    log4js.configure({
    appenders: {
        out: { type: 'stdout' },
        app: { type: 'file', filename: filePath }
    },
    categories: {
        default: { appenders: [ 'out', 'app' ], level: 'info' }
    }
    });

```

출력을 console과 file로 하도록 설정하였다. Logging level 은 'info' 이다.

`src/index.js`에 logging 코드를 추가한다.

```
    import './config/log4js';

    ...

    const logger = log4js.getLogger();

    ...

    logger.info('...');
```

앱을 실행하고, console과 지정된 파일 경로에 파일이 생성되고 log 기록이 쓰여지는 것을 확인한다.


