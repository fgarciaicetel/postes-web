import express from 'express'
import morgan from 'morgan'


import apiRoutes from './routes/api.route'

const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.json('hello world')
})

app.use('/api', apiRoutes)

export default app;