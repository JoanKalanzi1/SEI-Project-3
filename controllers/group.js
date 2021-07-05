import Group from '../models/group.js'


// INDEX ROUTE for groups
export const getAllGroups = async (_req, res) => {
  console.log('GET ALL groups', getAllGroups)
  const groups = await Group.find()
  return res.status(200).json(groups)
}

// CREATE ROUTE - add a new activity
export const addGroup = async (req, res) => {
  try {
    const groupToAdd = await Group.create(req.body)
    return res.status(201).json(groupToAdd)
  } catch (err) {
    console.log(err)
    return res.status(422).json(err)
  }
}

// SHOW ROUTE - Individual Group
export const getOneGroup = async (req, res) => {
  try {
    const { id } = req.params
    const singleGroup = await Group.findById(id).populate('owner').populate('comments.owner')
    if (!singleGroup) throw new Error()
    return res.status(200).json(singleGroup)
  } catch (err) {
    console.log('I am wrong', err)
    return res.status(404).json({ 'message': 'not found' })
  }
}


//DELETE ROUTE A GROUP
export const deleteGroup = async (req, res) => {
  try {
    const { id } = req.params
    const groupToDelete = await Group.findById(id)
    if (!groupToDelete) throw new Error()
    // Check returned shows owner is equal to the user making the request
    if (!groupToDelete.owner.equals(req.currentGroupUser._id)) throw new Error('Unauthorised')
    await groupToDelete.remove()
    return res.sendStatus(204)
  } catch (err) {
    console.log('ERROR IN DELETE', err)
    return res.status(404).json({ 'message': 'not found' })
  }
}

// Update ROUTE - Editing a group
export const updateGroup = async (req, res) => {
  const { id } = req.params
  try {
    const groupToUpdate = await Group.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true })
    if (!groupToUpdate) throw new Error()
    return res.status(200).json(groupToUpdate)
  } catch (err) {
    console.log('ERROR IN EDIT ROUTE:', err)
    return res.status(404).json({ 'message': 'group not found' })
  }
}

// create comment for a group 
export const addComment = async (req, res) => {
  try {
    console.log('Comment added')
    const { id } = req.params
    // Find the group by the ID
    const group = await Group.findById(id)
    if (!group) throw new Error('No activity found')
    console.log('going wrong here', req.currentUser)
    // create a comment from the req.body and req.currentUser
    const commentToAdd = { ...req.body, owner: req.currentUser._id }
    console.log('Show comments ->', group.comments)
    group.comments.push(commentToAdd)
    // save teh updated object
    await group.save()
    // return the newly created comment in activity
    return res.status(200).json(group)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: err.message })
  }
}


// delete comment for a group
export const deleteComment = async (req, res) => {
  try {
    const { id, commentId } = req.params
    const group = await Group.findById(id)
    if (!group) throw new Error('Group not found')
    // const groupToDelete = group.comment.id(commentId)
    const commentToDelete = group.comments.id(commentId)
    if (!commentToDelete) throw new Error('Comment not found')
    await commentToDelete.remove()
    await group.save()
    return res.sendStatus(204)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: err })
  }
}

// Edit comment for a group
export const editComment = async (req, res) => {
  try {
    const { id, commentId } = req.params
    const group = await Group.findById(id)
    if (!group) throw new Error('Group not found')
    const commentToUpdate = group.comments.findByOneAndUpdate({ _id: commentId }, { ...req.body }, { new: true })
    console.log('TO UPDATE', commentToUpdate)
    // const newComment = await Group.findByOneAndUpdate({ _id: commentId }, { ...req.body }, { new: true })
    // console.log('NEW COMMENT', newComment)
    if (!commentToUpdate) throw new Error('Comment not found')
    return res.status(200).json(commentToUpdate)
  } catch (err) {
    console.log('ERROR IN EDIT ROUTE:', err)
    return res.status(404).json({ 'message': 'Comment not found' })
  }
}