import express from 'express'
import morgan from 'morgan'
import { createDepartamentos, createProvincias, createDistritos} from './libs/initialSetup'

const path = require('path')

import apiRoutes from './routes/api.route'
import webRoutes from './routes/web.route'

const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/api', apiRoutes)
app.use('/web', webRoutes)

createDepartamentos()
createProvincias()
createDistritos()

export default app;