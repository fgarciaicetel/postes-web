import express from 'express'
import morgan from 'morgan'


//import productRoutes from './routes/products.routes'

const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.json('hello world')
})


export default app;