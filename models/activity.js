import mongoose from 'mongoose'

//* Define the schema
// Activity schema
const activitySchema = new mongoose.Schema({
  nameOfActivity: { type: String, required: true, unique: true},
  image: { type: String, required: true},
  environment: { type: String, required: true}, // indoor or outdoor
  summary: { type: String, required: true, maxLength: 500 }
})

//Export the schema
export default mongoose.model('Activity', activitySchema)
