import express from 'express'
import mongoose from 'mongoose'
import { dbURI, port } from './config/environment.js'

const app = express()


// define the schema
const activitySchema = new mongoose.Schema({
  
})

const startServer = async () => {
  try {
    await mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    console.log('🤩Database has connected successfully')
    app.listen(port, () => console.log(`🚀 Express is up and running on port ${port}`))
  } catch(err) {
  console.log(' 💔 Something has gone wrong')
  }
}
startServer()



// logger
app.use((req, _res, next) => {
  console.log(`🚨 Incoming request: ${req.method} - ${req.url}`)
  next()
})

// about
app.get('/about', (_req, res) => res.end('Welcome to the about page'))

//homepage
app.get('/', (_req, res) => res.end('Welcome to the homepage'))


//catch other request
app.use((req, res) => {
  res.end('No page found')
})







