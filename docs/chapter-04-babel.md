# Babel

## 배경

JavaScript는 애초 웹 브라우저에서 DOM 요소들를 제어하는 데에 사용되어 왔다. 

모든 웹 브라우저는 JavaScript 코드를 처리하는 JavaScript 엔진을 탑재하고 있다. 
각 웹 브라우저마다 이 스크립트 언어가 다르게 발전함에 따라 이를 표준화하기 위한 시도가 ECMAScript 표준화로 귀결되었다.

대부분의 웹 브라우저는 ES5 규격을 지원하고 있다.  
2015년 ES6(ECMAScript 2015) 규격은 JavaScript 언어를 새로 만드는 수준의 변경사항이 많은 규격으로 발표되었다.
ES6 이후 버전에 대한 각 브라우저의 지원 수준에서 차이가 벌어져왔다.

그래서 ES6 규격으로 JavaScript 코드를 작성하면 일부 웹 브라우저에서는 정상적으로 작동하지 않는 문제가 일어났다.
이 문제를 해결하는 방법으로 JavaScript compiler `Babel` 이 등장하였다.  

ES6 또는 그 이후 버전의 ECMAScript 규격에 따라 작성된 JavaScript 코드는 Babel을 이용하여 ES5에 호환되는 언어로 변환할 수 있다.
그러면 거의 모든 웹브라우저에서 해당 코드를 정상적으로 실행시킬 수 있다.

### node.green

Node green 사이트([https://node.green](https://node.green))는 Node.js 의 ECMAScript 규격 지원 수준 정보를 담고 있다.

Node.js 최근 버전은 거의 모든 ES6 이상의 기능을 이미 지원하고 있다.

그러므로 Node.js의 경우는 Babel을 사용하지 않고도 ES6 이상의 기능을 이용할 수 있다.

그럼에도 불구하고 현 시점에서는 Node.js에서 Babel을 사용하도록 한다.
좀 더 시간이 지나면, Babel을 제거할 수도 있겠지만, 지금은 아닌 것 같다.

## 설치

Babel 패키지들을 설치한다:

```
    $ npm install --save-dev @babel/core @babel/cli @babel/preset-env
    $ npm install --save @babel/polyfill
```

다음, ROOT 디렉토리에 `babel.config.js` 파일을 다음과 같이 작성한다:

```
    const presets = [
      ["@babel/env", {
        targets: {
          edge: "17",
          firefox: "60",
          chrome: "67",
          safari: "11.1",
        },
      }],
    ];

    module.exports = { presets };
```

Node.js 에서 Babel을 사용하려면 다음을 추가 설치한다:

```
    $ npm install --save-dev nodemon @babel/node
```

`nodemon` 패키지는 소스가 변경된 것을 감지하여 서버를 자동으로 재시동하는 기능을 수행한다.
`@babel/node` 패키지는 `node` 런타임을 대신하여 ES6 코드로 작성된 소스를 실행하는 기능을 한다.

그리고 `package.json` 파일의 `scripts` 섹션에 다음을 추가한다.  

```
    "build": "babel src --out-dir dist",
    "start": "nodemon --exec babel-node src/index.js"
```
그리고 ROOT 디렉토리에서 다음 명령을 각각 실행해본다:

```
    $ npm run build
    $ npm start
```

첫 줄의 명령은 `dist` 디렉토리에 ES5로 transpile된 `index.js` 파일을 저장한다.
둘째 줄의 명령은 ES6로 작성된 소스 코드를 바로 실행한다.
