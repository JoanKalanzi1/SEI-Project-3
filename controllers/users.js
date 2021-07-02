import User from '../models/user.js'

// Create a controller function that returns profile information
export const getUserProfile = async (req, res) => {
  try {
    // find User by id in req.currentUser
    const user = await User.findById(req.currentUser._id).populate('') // comments
    console.log('USER>>>>>>', user)
    if (!user) throw new Error()
    return res.status(200).json(user)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: 'Not found' })
  }
}