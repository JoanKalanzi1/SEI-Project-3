import mongoose from 'mongoose'

// Define a comment Schema
// Text
// Rating
// Owner
const commentSchema = new mongoose.Schema({
  text: { type: String, required: true, maxLength: 250 },
  rating: { type: Number, required: true, min: 1, max: 5 },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

// define teh schema for the group
const groupSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  activity: [ { type:String } ],
  location: {  type: Object, required: true, maxLength: 600 },
  number: { type: String, required: true },
  about: { type: String, required: true },
  time: { type: String },
  level: { type: String },
  contact: { type: String },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  comments: [commentSchema]
  // groupJoin: { type: mongoose.Schema.ObjectId, ref: 'User', required: true}
})

groupSchema.virtual('avgRating')
  .get(function () {
    // Get all the ratings and find the average 
    if (!this.comments.length) return 'Not rated yet' // if comments is false return 
    // create teh variable and define that maps through all and finds average ('reduce')
    const sum = this.comments.reduce((acc, curr) => {
      return acc + curr.rating
    }, 0)
    // return the average of all the ratings
    return (sum / this.comments.length).toFixed(2)
  })


// telling mongoose to return teh virtual field when converting
groupSchema.set('toJSON', {
  virtuals: true
})

//Export the schema
export default mongoose.model('Group', groupSchema)

