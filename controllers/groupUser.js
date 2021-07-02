import GroupUser from '../models/groupUser.js'

// Create a controller function that returns profile information
export const getGroupUserProfile = async (req, res) => {
  try {
    // find User by id in req.currentUser
    const user = await GroupUser.findById(req.currentGroupUser._id).populate('createdGroups') // comments
    console.log('USER>>>>>>', user)
    if (!user) throw new Error()
    return res.status(200).json(user)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: 'Not found' })
  }
}