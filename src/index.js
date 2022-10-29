// begin import thư viện 
const express = require('express') // Đi vào thư mục node_modules để tải thư viện express
//import express from 'express' //Cách viết thứ 2s

const morgan = require('morgan')

const path = require('path')

const exphbs  = require('express-handlebars');
const { dirname } = require('path');
var hbs = exphbs.create({ 
  extname: ".hbs"
 });
// end import thư viện


// --------------------------------------------------------------------
const app = express()   
const port = 3000
// --------------------------------------------------------------------

app.use(express.static(path.join(__dirname,"public")))

app.use(express.urlencoded()) // Sử dụng middleware để xử lý dự liệu từ client lên server (body trong post)
app.use(express.json) // sử dụng cách khác để post lên server (không nhất thiết là phải dùng form để gữi)

// HTTP logger
app.use(morgan('combined'))

// template engine
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resource/views'));
//onsole.log(path.join(__dirname,'resource/views'))

// route: định nghĩa tuyến đường để console.log
app.get('/', (req, res) => {
  res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news')
})

app.get('/search', (req, res) => {
  res.render('search')
})

// 127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// var express = require('express');
// var exphbs  = require('express-handlebars');
 
// var app = express();
// var hbs = exphbs.create({ /* config */ });
 
// // Register `hbs.engine` with the Express app.
// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');
 
// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })
  
//   // 127.0.0.1 - localhost
//   app.listen(3000, () => {
//     console.log(`Example app listening on port ${3000}`)
//   })
// // ...still have a reference to `hbs`, on which methods like `loadPartials()`
// // can be called.