'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressHandlebars = require('express-handlebars');

var _expressHandlebars2 = _interopRequireDefault(_expressHandlebars);

var _http = require('http');

var _socket = require('socket.io');

var _front = require('./routes/front.js');

var _products = require('./routes/products.js');

var _prod = require('./prod.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var httpServer = new _http.Server(app);
var io = new _socket.Server(httpServer);

app.engine("hbs", (0, _expressHandlebars2.default)({
  extname: ".hbs",
  defaultLayout: 'index.hbs'
}));

app.set("view engine", "hbs");
app.set("views", "./views");

app.use('/', (0, _front.createFront)());
app.use('/api/products', (0, _products.createProducts)());

app.use(_express2.default.static('public'));

app.use(_express2.default.json());
app.use(_express2.default.urlencoded({ extended: true }));

var messages = [{ author: "juan@gmail.com", text: "Hey! How are you?" }, { author: "pedro@outlook.com", text: "Great! and you?" }, { author: "lena@icloud.com", text: "Excelent!" }];

io.on('connection', function (socket) {
  console.log('client connected!');
  socket.emit('products', { products: _prod.products.getProd() });

  socket.on('btn', function () {
    socket.emit('products', { products: _prod.products.getProd() });
  });

  socket.emit('messages', messages);

  socket.on('new-message', function (data) {
    messages.push(data);
    io.sockets.emit('messages', messages);
  });
});

var PORT = 8080;

var server = httpServer.listen(PORT, function () {
  console.log('Http server listening on port ' + server.address().port);
});

server.on("error", function (error) {
  return console.log('Error: ' + error);
});
