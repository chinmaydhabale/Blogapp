const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const connectdb = require('./config/db')


//env config
dotenv.config();

//router import
const userRoutes = require('./routes/userRoutes')
const blogRoutes = require('./routes/blogroutes')

//mongodb connection
connectdb();

//rest objects
const app = express();

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))


//routes
app.use('/api/v1/user', userRoutes)
app.use('/api/v1/blog', blogRoutes)

//port

const port = process.env.PORT || 8080


//listen
app.listen(port, () => {
    console.log(`server start on port ${port}`)
})