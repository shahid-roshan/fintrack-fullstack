const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

const authRoutes = require('./routes/auth')
const transactionRoutes = require('./routes/financeRoutes')

app.use('/api/auth', authRoutes)
app.use('/api/transactions', transactionRoutes)

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected! ✅'))
  .catch(err => console.log('MongoDB Error:', err))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server chal raha hai port ${PORT} pe 🚀`)
})