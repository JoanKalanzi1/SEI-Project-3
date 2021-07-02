import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

// username
// email
// password
// passwordConfirmation

const groupUserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, maxLength: 30 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

groupUserSchema.virtual('createdGroups', {
  ref: 'Group', // References the Show model
  localField: '_id', // _id on current user model
  foreignField: 'owner' // field to check against id
})

// remove the password from the populated owner when it converts to json
groupUserSchema.set('toJSON', {
  virtuals: true,
  transform(_doc, json){
    delete json.password // remove password
    return json // return object without password field
  }
})

// Virtual field
groupUserSchema
  .virtual('passwordConfirmation') // Create our virtual field name
  .set(function (passwordConfirmation) { // we use the function declaration so we can use the this keyword
    // Set value of our virtual field
    // We use an underscore to update the value of our field to prevent an infinite loop
    this._passwordConfirmation = passwordConfirmation // save value as user input
  })

// check password 
groupUserSchema
  .pre('validate', function (next) {
    if (this.isModified('password') && this.password !== this._passwordConfirmation) {
      //invalidate the request
      this.invalidate('passwordConfirmation', 'Passwords do not match')
    }
    next()
  })

//custom pre-save
groupUserSchema
  .pre('save', function (next) {
    if (this.isModified('password')) {
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync())
    }
    next()
  })

// Create a method that checks user inputted password against hashed stored password in db
groupUserSchema.methods.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}

// Export the model
export default mongoose.model('GroupUser', groupUserSchema)
