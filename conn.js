const dotenv = require('dotenv')

dotenv.config()

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)
.then(()=>{console.log('Database is connected')})
.catch(()=>{console.log('Database is not connected')})
