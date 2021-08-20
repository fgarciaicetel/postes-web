import app from './app'
//import './libs/db'
require('dotenv').config()

app.listen(process.env.PORT);

console.log('Server listen', process.env.PORT)