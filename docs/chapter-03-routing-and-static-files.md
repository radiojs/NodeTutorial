[Home](../README.md)  

# Routing and static files

클라이언트(웹 브라우저)의 요청에 따라서 정적 파일을 전송하는 방법을 기술한다.

정적 파일에는 `*.html`, `*.css`, `*.jpg` 파일 등이 있다.

### Routing 이란?

Routing 이란 클라이언트(웹 브라우저)의 다양한 요청에 대하여 서버가 응답하는 방법을 결정하는 것을 의미한다.  

Routing 의 정의는 다음과 같은 형식으로 구성한다:

```
    app.METHOD(PATH, HANDLER);
```

앞 장의 예제에서 `src/index.js` 파일에 다음 부분을 보자:

```
    app.get('/', function(req, res) {
      res.send('Hello World!');
    });
```

위의 정의와 비교해보면 다음과 같이 정리할 수 있다:

```
    METHOD:     'get'
    PATH:       '/'
    HANDLER:    'function(req, res) { ... }'
```

### 정적 파일 라우팅

`Express` 웹 프레임워크에서 정적 파일을 클라이언트로 전송하기 위해서는 `express.static` 함수를 사용한다.

`src/index.js` 파일에서 `app.get('/', ...)` 코드를 제거하고 다음 코드를 추가한다:

```
    app.use('/', express.static('public'));
```

이 코드는 `public` 디렉토리의 정적 파일을 `http://localhost:3000/` 경로 이하의 URI 주소로 인식하도록 한다.

새로 작성된 `public/index.html` 파일을 참조하라.

