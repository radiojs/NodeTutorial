[Home](../README.md)  

# Hello World! app

Node.js 웹 애플리케이션 프레임워크 `Express` 를 이용하여 웹 앱 서버를 만든다.  
브라우저에서 이 웹 앱 서버에 접속하면 화면에 `Hello World!` 를 표시한다.  

#### 1. Chapter 01 의 내용을 실행한 환경에서 다음 작업을 실행한다.

`Express` 웹 애플리케이션 프레임워크를 설치하기 위하여 먼저 앱을 `npm` package 기반으로 구성한다.  

```  
    $ npm init -y
```

그러면, `package.json` 파일이 만들어진다. 이 파일을 열고 적절하게 내용을 수정한다.

#### 2. `Express` 패키지를 설치한다.

```
    $ npm install --save express
```

그러면, `node_modules` 디렉토리가 만들어지고, 
`package.json` 파일의 `dependencies` 속성에 `express` 패키지 정보가 추가되며, 
`package-lock.json` 파일이 만들어진다.

#### 3. `src/index.js` 파일을 수정한다.  

이 내용은 `express` 패키지에서 `express` 객체를 `import` 하고, 
`localhost` 서버를 구동하되 `3000` 번 포트로의 HTTP 접속을 대기한다.  

이 때, 이 포트로의 모든 HTTP 요청에 `Hello World!` 문자열로 응답하는 코드를 작성한다.  

#### 4. 웹 앱 서버를 실행한다.

ROOT 디렉토리에서 다음 명령을 실행한다:

```
    $ node src/index.js
```

서버가 구동되면서 콘솔에 `Example app listening on port 3000!` 문자열이 나타난다.

웹 브라우저를 열고 주소창에 `http://localhost:3000` 주소를 입력하여 이동한다.

브라우저 화면에 `Hello World!` 라는 문자열이 나타나면 성공이다.

`Ctrl + C` 입력을 하면 서버가 종료된다.

#### 5. `npm` 명령으로 웹 서버를 실행하게 한다.

ROOT 디렉토리의 `package.json` 파일을 열고,
`scripts` 속성에 `"start": "node src/index.js"` 값을 추가한다.  

ROOT 디렉토리에서 다음 명령을 실행한다:
```
    $ npm start
```

서버가 구동되면서 콘솔에 `Example app listening on port 3000!` 문자열이 나타나면 성공이다.  

웹 브라우저에서 `http://localhost:3000` 주소를 입력한다.

이 때, 웹 브라우저 화면에 `Hello World!` 라는 문자열이 나타나면 성공이다.
