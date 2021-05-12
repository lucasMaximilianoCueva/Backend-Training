"use strict";
exports.__esModule = true;
var express = require('express');
var handlebars = require('express-handlebars');
var app = express();
var httpServer = require('http').Server(app);
var io = require('socket.io')(httpServer);
var front_js_1 = require("./routes/front.js");
var products_js_1 = require("./routes/products.js");
var prod_js_1 = require("./prod.js");
app.engine("hbs", handlebars({
    extname: ".hbs",
    defaultLayout: 'index.hbs'
}));
app.set("view engine", "hbs");
app.set("views", "./views");
app.use('/', front_js_1.createFront());
app.use('/api/products', products_js_1.createProducts());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
var messages = [
    { author: "juan@gmail.com", text: "Hey! How are you?" },
    { author: "pedro@outlook.com", text: "Great! and you?" },
    { author: "lena@icloud.com", text: "Excelent!" }
];
io.on('connection', function (socket) {
    console.log('client connected!');
    socket.emit('products', { products: prod_js_1.products.getProd() });
    socket.on('btn', function () {
        socket.emit('products', { products: prod_js_1.products.getProd() });
    });
    socket.emit('messages', messages);
    socket.on('new-message', function (data) {
        messages.push(data);
        io.sockets.emit('messages', messages);
    });
});
var PORT = 8080;
var server = httpServer.listen(PORT, function () {
    console.log("Http server listening on port " + PORT);
});
server.on("error", function (error) { return console.log("Error: " + error); });
