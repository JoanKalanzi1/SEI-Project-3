import  Mongoose from "mongoose"

const groupSchema = new mongoose.Schema({
  Name: { type: String, required: true, unique: true},
  image: { type: String, required: true},
  Activity: { type: String, required: true}, // indoor or outdoor
  location: { type: String, required: true, maxLength: 100 },
  number: {type: String, required: true},
  about: { type: String, required: true},
  time: { type: Number},
  level: { type: String},
  contact: {type: String}
})

//Export the schema
export default mongoose.model('Group', groupSchema)
