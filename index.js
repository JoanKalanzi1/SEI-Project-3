import express from 'express'
import mongoose from 'mongoose'
import { dbURI, port } from './config/environment.js'
import router from './config/router.js'


const app = express()


// Group schema
const groupSchema = new mongoose.Schema({
  nameOfGroup: { type: String, required: true },
  image: { type: String, required: true },
  summary: { type: String, required: true, maxLength: 150 },
  price: { type: String, required: true },
  time: { type: Number, required: true },
  level: { type: String, required: true },
  numberOfPeople: { type: Number }
})

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, maxLength: 30 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})


const startServer = async () => {
  try {
    await mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    console.log('🤩 Database has connected successfully')
    //logger
    app.use((req, _res, next) => {
      console.log(`🚨 Incoming request: ${req.method} - ${req.url}`)
      next()
    })

    // convert incoming JSON into JS
    app.use(express.json())

    //* Enable use of the router
    app.use('/api', router)

    //event listener
    app.listen(port, () => console.log(`🚀 Express is up and running on port ${port}`))
  } catch (err) {
    console.log(' 💔 Something has gone wrong', err)
  }
}

startServer()












