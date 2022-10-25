var express = require('express');
var serverStatic = require('serve-static');
var app = express()
.use(serveStatic(_direname + '/public'))
.listen(3000);