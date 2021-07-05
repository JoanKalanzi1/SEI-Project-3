import mongoose from 'mongoose'

//* Define the schema
// Activity schema
const activitySchema = new mongoose.Schema({
  nameOfActivity: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  physical: { type: String, required: true },
  competitive: { type: String, required: true },
  creative: { type: String, required: true },
  environment: { type: String, required: true }, // indoor or outdoor,
  summary: { type: String, required: true, maxLength: 600 }
})

//Export the schema
export default mongoose.model('Activity', activitySchema)



// nameOfActivity: { type: String, required: true, unique: true},
// image: { type: String, required: true},
// physical = { type: String, required: true},
// competitive = { type: String, required: true},
// creative = { type: String, required: true}, 
// environment{ type: String, required: true}, // indoor or outdoor,
// summary: { type: String, required: true, maxLength: 600 } 