const createError=  require('http-errors')
const express = require('express')
const path= require('path')
const cookieParser= require('cookie-parser')

/**create new morgan middleware using the given format and options. 
function will be called with three arguments tokens, req, and res**/
const logger = require('morgan') 
const indexRouter = require('./routes')
const app = express()
app.use(logger('dev'));
app.use(express.json())
//URL encoding replaces unsafe ASCII characters with a "%" followed by two hexadecimal digits.
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname,'public')))
app.use('/',indexRouter)
module.exports = app;