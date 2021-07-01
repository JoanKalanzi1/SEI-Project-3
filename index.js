import express from 'express'
import mongoose from 'mongoose'
import { dbURI, port } from './config/environment.js'
import Activity from './models/activity.js'

const app = express()
app.use(express.json())

// Group schema
const groupSchema = new mongoose.Schema({
  nameOfGroup : { type: String, required: true},
  image: { type: String, required: true},
  summary: { type: String, required: true, maxLength: 150 },
  price: { type: String, required: true},
  time: { type : Number, required: true },
  level : { type: String, required: true},
  numberOfPeople: {type: Number}
})

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, maxLength: 30 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})



// INDEX ROUTE
app.get('/activities', async (_req, res) => {
  const activities = await Activity.find()
  console.log(activities)
  return res.status(200).json(activities)
})

// CREATE ROUTE - add a new activity
app.post('/activities', async (req, res) => {
  try {
    const activityToAdd = await Activity.create(req.body)
    return res.status(201).json(activityToAdd)
  } catch (err) {
    console.log(err)
    return res.status(422).json(err)
  }
})

// SHOW ROUTE - Individual Activity
app.get('/activities/:id', async (req, res) => {
  try {
   const { id } = req.params
   const singleActivities =  await Activity.findById(id)
   if (!singleActivities) throw new Error()
   return res.status(200).json(singleActivities)
   
  } catch (err) {
    console.log('I am wrong', err)
    return res.status(404).json({ 'message': 'not found' })
  }
})

// EDIT ROUTE - Editing an individual activity
app.put('/activities/:id', async (req, res) => {
  const { id } = req.params
  try {
    const activityToEdit = await Activity.findOneAndUpdate({ _id: id}, { ...req.body }, { new: true })
    if (!activityToEdit) throw new Error()
    return res.status(200).json(activityToEdit)
  } catch (err) {
    console.log('ERROR IN EDIT ROUTE:', err)
    return res.status(404).json({ 'message': 'activity not found' })
  }

})

//DELETE ROUTE
app.delete('/activities/:id', async (req, res) => {
  const { id } = req.params
  try {
    const activityToDelete = await Activity.findById(id)
    if(!activityToDelete) throw new Error()
    await activityToDelete.remove()
    return res.sendStatus(204)

  } catch (err) {
    console.log('ERROR IN DELETE',err)
    return res.status(404).json({ 'message': 'not found'})
  }
})


const startServer = async () => {
  try {
    await mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    console.log('🤩 Database has connected successfully')
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







