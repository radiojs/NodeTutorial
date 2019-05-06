"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use('/', _express.default.static('public'));
/*
app.get('/', function(req, res) {
  res.send('Hello World!');
});
*/

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});