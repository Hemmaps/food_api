const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/foodData')
.then(()=>{console.log('Database is connected')})
.catch(()=>{console.log('Database is not connected')})
